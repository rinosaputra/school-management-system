import React from "react";
import Countdown from "./components/countdown";
import { isValid } from "date-fns";
import GraduationForm from "./components/form";

const date = new Date(import.meta.env.VITE_FEATURE_GRADUATION_DATE);
const active =
  import.meta.env.VITE_FEATURE_GRADUATION === "true" && isValid(date);

const Content = () => {
  return <GraduationForm />;
  if (!active) return null;
  return <Countdown date={date} />;
};

const Graduation: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <Content />
  </div>
);

export default Graduation;
