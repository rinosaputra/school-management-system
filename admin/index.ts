import 'dotenv/config'
import admin from 'firebase-admin'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import serviceAccount from './_service_account.json' assert { type: 'json' }
import { StudentPathFirestore } from '../src/features/student/const';
import { RombelPathFirestore } from '../src/features/rombel/const';
import { GraduationPathFirestore } from '../src/features/graduation/const';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { LocalSchema } from '../src/lib/local/schema';
import lodash from 'lodash'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const findFile = (...paths: string[]) => join(__dirname, ...paths)

if (process.env.VITE_FIREBASE_EMULATOR === 'true') {
  process.env['FIRESTORE_EMULATOR_HOST'] = '127.0.0.1:8080';
  process.env['FIREBASE_AUTH_EMULATOR_HOST'] = '127.0.0.1:9099';
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const adminAuth = admin.auth()
export const adminFirestore = admin.firestore()
export const StudentCollection = adminFirestore.collection(StudentPathFirestore({}).join("/"))
export const RombelCollection = adminFirestore.collection(RombelPathFirestore({ yearId: process.env.VITE_FEATURE_YEAR_ACTIVE! }).join("/"))
export const GraduationCollection = adminFirestore.collection(GraduationPathFirestore({ yearId: process.env.VITE_FEATURE_YEAR_ACTIVE! }).join("/"))

class LowWithLodash<T> extends Low<T> {
  chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data')
}

const adapter = new JSONFile<LocalSchema>(findFile("..", "src", 'lib', 'local', "data.json"))

export const LowDB = async () => {
  const db = new LowWithLodash(adapter, {
    created: new Date(),
    version: process.env.VITE_APP_VERSION ?? "0",
    token: process.env.VITE_APP_TOKEN ?? "0",
    results: {
      student: {},
      rombel: {},
      graduation: {},
    }
  })
  await db.read()
  return db
}