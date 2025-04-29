import { Button } from "@/components/ui/button";
import MessagingPermission from "@/lib/firebase/messaging/permission";
import { Bell } from "lucide-react";
import React from "react";

const GraduationNotif: React.FC = () => {
  const [req, setReq] = React.useState(false);
  return (
    <>
      {!req ? null : <MessagingPermission />}
      <Button size={"lg"} className="w-full" onClick={() => setReq(true)}>
        <Bell className="mr-2" size={16} />
        <span>Ingatkan Saya</span>
      </Button>
    </>
  );
};

export default GraduationNotif;
