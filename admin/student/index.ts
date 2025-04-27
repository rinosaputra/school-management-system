import xlsx from 'xlsx';
import { z } from 'zod';
import { v4 } from 'uuid';
import { adminFirestore, findFile } from '..';
import { StudentSchema } from '../../src/features/student/schema';
import { PersonalReligion } from '../../src/features/personal/const';
import { StudentPath } from '../../src/features/student/const';

const size = 426; // Update this to the number of rows in your Excel file

const wb = xlsx.readFile(findFile("student", "dapodik.xlsx"), { cellDates: true });
const [name] = wb.SheetNames;
const sheet = wb.Sheets[name];
const json = xlsx.utils
  .sheet_to_json(sheet, {
    // header: 5,
    raw: false,
    dateNF: 'yyyy-mm-dd',
    defval: null,
    blankrows: true,
    range: `A6:BO${size + 5}`,
  })
  .map<StudentSchema>((row) => {
    const data = Object.values(row as Record<string, string>)
    return {
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
      }
    }
  })
const { data } = z.array(StudentSchema).safeParse(json);
const collection = adminFirestore.collection(StudentPath)
adminFirestore
  .runTransaction(async (transaction) => {
    if (!data) return []
    await Promise.all(data.map((student) => transaction.set(
      collection.doc(v4()),
      student,
      {}
    )))
  })
  .then(() => {
    console.log("Transaction successfully committed!", data?.length);
  })
  .catch((error) => {
    console.error("Transaction failed: ", error);
  })
  .finally(() => {
    console.log("Transaction completed");
    // adminFirestore.terminate()
  })