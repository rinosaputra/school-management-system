import { GraduationSchema } from "@/features/graduation/schema";
import { RombelSchema } from "@/features/rombel/schema";
import { StudentSchema } from "@/features/student/schema";
import { z } from "zod";

export type LocalStudentSchema = Record<string, StudentSchema>
export type LocalRombelSchema = Record<string, RombelSchema>
export type LocalGraduationSchema = Record<string, GraduationSchema>

export type LocalSchema = {
  version: string;
  created: Date;
  token: string;
  results: {
    student: LocalStudentSchema;
    rombel: LocalRombelSchema;
    graduation: LocalGraduationSchema;
  }
}

export const LocalSchema: z.ZodType<LocalSchema> = z.object({
  version: z.string(),
  created: z.date(),
  token: z.string(),
  results: z.object({
    student: z.record(StudentSchema),
    rombel: z.record(RombelSchema),
    graduation: z.record(GraduationSchema),
  })
});