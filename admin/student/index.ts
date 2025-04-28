import { adminFirestore, findFile } from '..';
import xlsx from 'xlsx';
import { z } from 'zod';
import { v4 } from 'uuid';
import { StudentSchema } from '../../src/features/student/schema';
import { PersonalReligion } from '../../src/features/personal/const';
import { StudentPath } from '../../src/features/student/const';
import { SchoolLevelRoman, SchoolLevelRomanToNumber } from '../../src/features/school/const';
import { YearPath } from '../../src/features/year/const';
import { RombelPath } from '../../src/features/rombel/const';
import { RombelSchema } from '../../src/features/rombel/schema';

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


const StudentCollection = adminFirestore.collection(StudentPath)
const RombelCollection = adminFirestore.collection([YearPath, process.env.VITE_FEATURE_YEAR_ACTIVE!, RombelPath].join("/"))
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ...students.map(({ id, result: { rombel, ...result } }) => transaction.set(
        StudentCollection.doc(id),
        result,
        {}
      )),
      ...rombels.map(({ id, result }) => transaction.set(
        RombelCollection.doc(id),
        result,
        {}
      ))
    ])
  })
  .then(() => {
    console.log("Transaction successfully committed!", {
      students: students.length,
      rombels: rombels.length,
    });
  })
  .catch((error) => {
    console.error("Transaction failed: ", error);
  })
  .finally(() => {
    console.log("Transaction completed");
    // adminFirestore.terminate()
  })