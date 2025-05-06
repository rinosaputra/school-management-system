import { adminFirestore, GraduationCollection, LowDB, RombelCollection, StudentCollection } from ".."
import { LocalGraduationSchema, LocalRombelSchema, LocalSchema, LocalStudentSchema } from '../../src/lib/local/schema';
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
  const db = await LowDB()
}

adminFirestore.runTransaction(async (transaction) => {
  const db = await LowDB()
  const data = await Promise.all([
    ...db.chain.get('results.student').map((data, id) => transaction.set(
      StudentCollection.doc(id),
      data
    )).value(),
   ...db.chain.get('results.rombel').map((data, id) => transaction.set(
     RombelCollection.doc(id),
     data
   )).value(),
   ...db.chain.get('results.graduation').map((data, id) => transaction.set(
     GraduationCollection.doc(id),
     data
   )).value(),
  ])
  console.log("saved load: ", data.length)
})