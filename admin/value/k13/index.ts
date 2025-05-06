import { adminFirestore, findFile, GraduationCollection } from '../..';
import xlsx from 'xlsx';
import { GraduationSchema } from '../../../src/features/graduation/schema';
import { CurriculumK13SubjectKey } from '../../../src/features/curriculum/rows/k13/subject';

const arrayCurriculumK13SubjectKey = Object.values(CurriculumK13SubjectKey) as string[];

type Result = Pick<GraduationSchema, "values" | "code"> & {
  uid: string
}


const size = 185; // Update this to the number of rows in your Excel file
const wb = xlsx.readFile(findFile("value", 'k13', `template.xlsx`), { cellDates: true });
const [name] = wb.SheetNames;
const sheet = wb.Sheets[name];
const json = xlsx.utils
  .sheet_to_json(sheet, {
    // header: 5,
    raw: false,
    dateNF: 'yyyy-mm-dd',
    defval: "",
    blankrows: true,
    range: `A1:AA${size + 1}`,
  })
  .filter((e) => {
    const row = e as Record<string, string>;
    return !!Number(row.NISN);
  })
  .map<Result>((e) => {
    const row = e as Record<string, string>;
    return {
      uid: [Number(row.NISN), row["Tanggal Lahir"] ?? ""].join('-'),
      code: row["Nomor Peserta"] ?? "",
      values: arrayCurriculumK13SubjectKey.reduce<Record<string, number>>((acc, key) => !(row[key] && Number(row[key] ?? 0)) ? acc : ({
        ...acc,
        [key]: Number(row[key] ?? 0) || 0,
      }), {})
    }
  })

// console.log(json[0]);
adminFirestore.runTransaction(async (transaction) => {
  const students = await transaction.get(GraduationCollection);
  const studentIds = students.docs.map((e) => e.id);
  const lists = json
    .filter(({ uid }) => studentIds.includes(uid))
    .map(async ({ uid, ...props }) => {
      return transaction.set(GraduationCollection.doc(uid), props, {
        merge: true,
      });
    })
  await Promise.all(lists);
  console.log("Results", {
    success: lists.length,
    error: json.length - lists.length,
  });
})
