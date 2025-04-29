import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { GraduationOutputSchema } from "../../schema";
import { StudentOutputSchema } from "@/features/student/schema";

export type GraduationFormSchema = {
  nisn: string;
  birth: string;
}

export const GraduationFormSchema: z.ZodType<GraduationFormSchema> = z.object({
  nisn: z.string().min(10, {
    message: "NISN harus terdiri dari 10 digit",
  }),
  birth: z.string().min(8, {
    message: "Tanggal lahir tidak valid",
  }),
});

export const useGraduationForm = () => useFormContext<GraduationFormSchema>();

export type GraduationFormContextState = {
  graduation: GraduationOutputSchema;
  student: StudentOutputSchema | null;
}

export type GraduationFormContext = {
  state: GraduationFormContextState | null;
  setState: React.Dispatch<React.SetStateAction<GraduationFormContextState | null>>;
}

export const GraduationFormContext = React.createContext<GraduationFormContext>({
  setState: () => {},
  state: null,
});

export const useGraduationFormContext = () => {
  const context = React.useContext(GraduationFormContext);
  if (!context) throw new Error("useGraduationFormContext must be used within GraduationFormContext.Provider");
  return context;
};