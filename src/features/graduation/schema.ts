import { FirebaseDate } from "@/lib/zod"
import { parse } from "date-fns"
import { z } from "zod"
import { StudentOutputSchema } from "../student/schema"

export type GraduationSchema = {
  code: string
  studentId: string
  notPassed?: boolean
  values: Record<string, number>
  dates: {
    print: FirebaseDate | null
    read: FirebaseDate | null
  }
}

export const GraduationSchema = z.object({
  code: z.string(),
  studentId: z.string().uuid(),
  notPassed: z.boolean().optional(),
  values: z.record(z.number()),
  dates: z.object({
    print: FirebaseDate.nullable(),
    read: FirebaseDate.nullable()
  })
})

export const GraduationDefault = (): GraduationSchema => ({
  code: "",
  studentId: "",
  values: {},
  dates: {
    print: null,
    read: null
  }
})

export type GraduationOutputSchema = GraduationSchema & {
  master: number
  date: Date
}

export const GraduationOutputSchema: z.ZodType<GraduationOutputSchema> = GraduationSchema.extend({
  master: z.number({ coerce: true }),
  date: z.date({ coerce: true })
})

export const GraduationOutputParse = (row: GraduationSchema, ids: string): GraduationOutputSchema => {
  const [master, ...date] = ids.split("-")
  return GraduationOutputSchema.safeParse({
    ...row,
    master,
    date: parse(
      date.join("-"),
      "yyyy-MM-dd",
      new Date()
    ),
  })?.data ?? {
    ...GraduationDefault(),
    master: 0,
    date: new Date("2000-01-01"),
  };
};

export type GraduationWithStudentOutputSchema = GraduationOutputSchema & {
  student: StudentOutputSchema | null
}

export const GraduationWithStudentOutputSchema: z.ZodType<GraduationWithStudentOutputSchema> = GraduationSchema.extend({
  master: z.number({ coerce: true }),
  date: z.date({ coerce: true }),
  student: z.nullable(StudentOutputSchema)
})

export const GraduationWithStudentOutputParse = (graduation: GraduationOutputSchema, student: StudentOutputSchema | null): GraduationWithStudentOutputSchema => ({
  ...graduation,
  student
})