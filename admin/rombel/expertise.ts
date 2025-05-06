import { adminFirestore, RombelCollection } from '..'

const expertises = {
  tbsm: '1.10.2',
  tkj: '3.1.2',
  otkp: '7.2.1'
}

adminFirestore
  .runTransaction(async (transaction) => {
    const snapshot = await transaction.get(RombelCollection)
    snapshot.forEach((doc) => {
      const data = doc.data()
      const [_, name] = (data.name as string).trim().split(" ").map(e => e.toLowerCase())
      const curriculum = data.curriculum as string
      if (curriculum !== 'k13') return
      const expertiseId = expertises[name]
      if (!expertiseId) return
      transaction.update(doc.ref, {
        expertiseId,
      })
    })
  })