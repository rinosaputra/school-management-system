import { adminAuth } from '..'
import { v4 } from 'uuid'

// Execute this script with the command: `node --import=tsx admin/auth/index.ts`
const uid = v4()

adminAuth
  .createUser({
    uid,
    displayName: "Admin",
    email: process.env.APP_EMAIL_ADMIN,
    emailVerified: true,
    password: "Admin1234",
  })
  .then(async (userRecord) => {
    console.log("Successfully created new user:", userRecord.uid);
    adminAuth.setCustomUserClaims(userRecord.uid, {
      role: "super",
    })
      .then(() => {
        console.log("Custom claims set for user:", userRecord.uid);
      })
      .catch((error) => {
        console.log("Error setting custom claims:", error);
      });
  })
  .catch((error) => {
    console.log("Error creating new user:", error);
  });
