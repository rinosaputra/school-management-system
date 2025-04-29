import { firebaseApp } from "./app";
import { connectAuthEmulator, getAuth } from "firebase/auth";

const firebaseAuth = getAuth(firebaseApp)
if (import.meta.env.VITE_FIREBASE_EMULATOR === 'true') connectAuthEmulator(firebaseAuth, "http://127.0.0.1:9099");

export { firebaseAuth }