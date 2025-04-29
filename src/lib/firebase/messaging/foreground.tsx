import React from "react";
import { toast } from "sonner";
import { firebaseMessaging } from ".";
import { onMessage } from "firebase/messaging";

const MessagingForeground: React.FC = () => {
  React.useEffect(() => {
    console.log("Notification Foreground");
    const unsubscribe = onMessage(firebaseMessaging, (payload) => {
      console.log("New Notification: ", payload);
      toast(
        payload.notification?.body ??
          payload.notification?.title ??
          "Notifikasi Baru!"
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return null;
};

export default MessagingForeground;
