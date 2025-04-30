import { useFirebaseAuth } from "@/lib/firebase/auth/context";
import { links } from "@/routers/links";
import { School } from "lucide-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SignLayout: React.FC = () => {
  const { state } = useFirebaseAuth();

  if (!state.ready) return null;
  if (state.user) return <Navigate to={links.admin.$path()} />;
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <School className="size-4" />
          </div>
          {import.meta.env.VITE_APP_NAME}
        </a>
        <div className="flex flex-col gap-6">
          <Outlet />
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
            By clicking continue, you agree to our{" "}
            <span className="font-semibold">Terms of Service</span> and{" "}
            <span className="font-semibold">Privacy Policy</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLayout;
