import 'dotenv/config'
import admin from 'firebase-admin'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import serviceAccount from './_service_account.json' assert { type: 'json' }

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const findFile = (...paths: string[]) => join(__dirname, ...paths)

if (process.env.VITE_FIREBASE_EMULATOR === 'true') {
  process.env['FIRESTORE_EMULATOR_HOST'] = 'localhost:8080';
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const adminFirestore = admin.firestore()