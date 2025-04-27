import admin from 'firebase-admin'
import serviceAccount from './_service_account.json' assert { type: 'json' }

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const adminFirestore = admin.firestore()