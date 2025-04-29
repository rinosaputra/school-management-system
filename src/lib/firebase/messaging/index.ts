import { getMessaging } from "firebase/messaging/sw";
import { firebaseApp } from "../app";

export const firebaseMessaging = getMessaging(firebaseApp);