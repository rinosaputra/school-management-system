import { adminFirestore, findFile } from '..';
import xlsx from 'xlsx';
import { z } from 'zod';
import { v4 } from 'uuid';
import { format } from 'date-fns';
import { PersonalReligion } from '../../src/features/personal/const';
import { StudentPathFirestore } from '../../src/features/student/const';
import { SchoolLevelRoman, SchoolLevelRomanToNumber } from '../../src/features/school/const';
import { RombelPathFirestore } from '../../src/features/rombel/const';
import { GraduationPathFirestore } from '../../src/features/graduation/const';
import { StudentSchema } from '../../src/features/student/schema';
import { RombelSchema } from '../../src/features/rombel/schema';
import { GraduationDefault, GraduationSchema } from '../../src/features/graduation/schema';

const GraduationIsActive = process.env.VITE_FEATURE_GRADUATION === "true"
type Result<T> = { id: string, result: T }
const size = 426; // Update this to the number of rows in your Excel file
// Execute this script with the command: `node --import=tsx admin/student/index.ts`

const wb = xlsx.readFile(findFile("student", "dapodik.xlsx"), { cellDates: true });
const [name] = wb.SheetNames;
const sheet = wb.Sheets[name];
const json = xlsx.utils
  .sheet_to_json(sheet, {
    // header: 5,
    raw: false,
    dateNF: 'yyyy-mm-dd',
    defval: "",
    blankrows: true,
    range: `A6:BO${size + 5}`,
  })
  .map((row) => Object.values(row as Record<string, string>).map(e => e?.trim()))
  .filter(e => !!e[1]);


const students = json
  .map<Result<StudentSchema & { rombel: string }>>((data) => ({
    id: v4(),
    result: {
      status: "active",
      index: data[2] ? Number(data[2]) : 0,
      master: data[4] ? Number(data[4]) : 0,
      personal: {
        master: data[7] ? Number(data[7]) : 0,
        name: data[1],
        birth: {
          date: new Date(data[6]),
          place: data[5],
        },
        gender: data[3] === "L" ? "male" : "female",
        phone: {
          code: "62",
          number: data[19] ? Number(data[19]) : 0
        },
        religion: !data[8] ? PersonalReligion.islam : data[8].toLocaleLowerCase() === "islam" ? PersonalReligion.islam : PersonalReligion.christian,
        address: {
          street: data[9]
        }
      },
      parents: {
        father: !data[24] ? null : {
          name: data[24],
          phone: null
        },
        mother: !data[24] ? null : {
          name: data[30],
          phone: null
        },
        guardian: !data[36] ? null : {
          name: data[36],
          phone: null
        },
      },
      rombel: data[42],
      rombelId: null,
    }
  }))

const rombels = json
  .filter((e, i, a) => a.findIndex((e2) => e2[42] === e[42]) === i)
  .map<Result<RombelSchema>>((data) => {
    const level = SchoolLevelRomanToNumber[data[42].split(" ")[0].toLowerCase() as SchoolLevelRoman]
    return {
      id: v4(),
      result: {
        name: data[42],
        level,
        curriculum: level === 10 ? "k21" : "k13",
        students: students.filter((e) => e.result.rombel === data[42]).map((e) => e.id),
      }
    }
  })

const { error: StudentErrs } = z.array(StudentSchema).safeParse(students.map((e) => e.result));
const { error: RombelErrs } = z.array(RombelSchema).safeParse(rombels.map((e) => e.result));


const StudentCollection = adminFirestore.collection(StudentPathFirestore({}).join("/"))
const RombelCollection = adminFirestore.collection(RombelPathFirestore({ yearId: process.env.VITE_FEATURE_YEAR_ACTIVE! }).join("/"))
const GraduationCollection = adminFirestore.collection(GraduationPathFirestore({ yearId: process.env.VITE_FEATURE_YEAR_ACTIVE! }).join("/"))
adminFirestore
  .runTransaction(async (transaction) => {
    if (StudentErrs || RombelErrs) return console.error("Validation Error", {
      students: !StudentErrs ? null : {
        paths: StudentErrs.issues.map((e) => e.path).join(' | '),
        errors: StudentErrs.issues.map((e) => e.message).join(' | '),
      },
      rombels: !RombelErrs ? null : {
        paths: RombelErrs.issues.map((e) => e.path).join(' | '),
        errors: RombelErrs.issues.map((e) => e.message).join(' | '),
      }
    })
    await Promise.all([
      ...students
        .map(({ id, result: { rombel, ...result } }) => transaction.set(
          StudentCollection.doc(id),
          {
            ...result,
            rombelId: rombels.find((e) => e.result.name === rombel)?.id ?? null,
          }
        )),
      ...rombels.map(({ id, result }) => transaction.set(
        RombelCollection.doc(id),
        result
      )),
      ...(process.env.VITE_FEATURE_GRADUATION !== "true" ? [] : rombels
        .filter(e => e.result.level === 12).map((e) => e.result.students.map((id) => {
          const find = students.find(e => e.id === id)
          return {
            studentId: id,
            master: find?.result.master ?? 0,
            birth: find?.result.personal.birth.date ?? new Date("2000-01-01"),
          }
        }))
        .flat()
        .map(({ studentId, master, birth }) => {
          const value: GraduationSchema = {
            ...GraduationDefault(),
            studentId,
          }
          return transaction.set(
            GraduationCollection.doc([master, format(birth, "yyyy-MM-dd")].join('-')),
            value
          )
        })
      )
    ])
  })
  .then(() => {
    console.log("Transaction successfully committed!", {
      students: students.length,
      rombels: rombels.length,
      graduaction: GraduationIsActive
    });
  })
  .catch((error) => {
    console.error("Transaction failed: ", error);
  })
  .finally(() => {
    console.log("Transaction completed");
    // adminFirestore.terminate()
  })