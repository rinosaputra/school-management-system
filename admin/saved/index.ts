import { findFile, GraduationCollection, RombelCollection, StudentCollection } from ".."
import { LocalGraduationSchema, LocalRombelSchema, LocalSchema, LocalStudentSchema } from '../../src/lib/local/schema';
import { JSONFilePreset } from "lowdb/node";
import { v4 } from "uuid"

const saved = async () => {
  const student = (await StudentCollection.get()).docs.reduce<LocalStudentSchema>((acc, doc) => ({
    ...acc,
    [doc.id]: doc.data()
  }), {})
  const rombel = (await RombelCollection.get()).docs.reduce<LocalRombelSchema>((acc, doc) => ({
    ...acc,
    [doc.id]: doc.data()
  }), {})
  const graduation = (await GraduationCollection.get()).docs.reduce<LocalGraduationSchema>((acc, doc) => ({
    ...acc,
    [doc.id]: doc.data()
  }), {})

  const data: LocalSchema = {
    version: process.env.VITE_APP_VERSION ?? "0",
    created: new Date(),
    token: v4(),
    results: {
      student,
      rombel,
      graduation,
    }
  }
  const db = await JSONFilePreset(findFile("..", "src", 'lib', 'local', "data.json"), LocalSchema.parse(data))
  db.data = data
  console.log("db.version: ", db.data.version)
  await db.write()
}

saved()