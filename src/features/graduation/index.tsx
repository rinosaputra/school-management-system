import React from "react";
import Countdown from "./components/countdown";
import { isValid } from "date-fns";
import GraduationForm from "./components/form";
import ThemeButton from "../_theme/components/button";

const date = new Date(import.meta.env.VITE_FEATURE_GRADUATION_DATE);
const active =
  import.meta.env.VITE_FEATURE_GRADUATION === "true" && isValid(date);

const Content = () => {
  if (!active) return <GraduationForm />; // DISABLED
  return <Countdown date={date} />;
};

const Graduation: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <ThemeButton className="fixed top-0 right-0"/>
    <Content />
  </div>
);

export default Graduation;
