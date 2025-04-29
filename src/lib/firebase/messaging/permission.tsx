/// <reference lib="dom" />
import React from "react";
import { getToken } from "firebase/messaging";
import { firebaseMessaging } from ".";
import { toast } from "sonner";

const MessagingPermission: React.FC = () => {
  React.useEffect(() => {
    const requestPermission = async () => {
      //requesting permission using Notification API
      if (
        !(
          typeof window !== "undefined" &&
          window.Notification?.requestPermission
        )
      )
        return;
      const permission = await window.Notification.requestPermission();
      if (permission === "granted") {
        const token = await getToken(firebaseMessaging, {
          vapidKey: import.meta.env.VITE_APP_VAPID_KEY,
        });

        //We can send token to server
        console.log("Token generated : ", token);
      } else if (permission === "denied") {
        //notifications are blocked
        toast.error("You denied for the notification");
      }
    };
    requestPermission();
  }, []);

  return null;
};

export default MessagingPermission;
