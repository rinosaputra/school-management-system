import { FirebaseDate } from "@/lib/zod"
import { parse } from "date-fns"
import { z } from "zod"
import { StudentDefault, StudentOutputParse, StudentOutputSchema } from "../student/schema"
import { v4 } from "uuid"
import { RombelOutputSchema } from "../rombel/schema"

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
  uid: string
}

export const GraduationOutputSchema: z.ZodType<GraduationOutputSchema> = GraduationSchema.extend({
  master: z.number({ coerce: true }),
  date: z.date({ coerce: true }),
  uid: z.string()
})

export const GraduationOutputParse = (row: GraduationSchema, ids: string): GraduationOutputSchema => {
  const [master, ...date] = ids.split("-")
  return GraduationOutputSchema.safeParse({
    ...row,
    uid: ids,
    master,
    date: parse(
      date.join("-"),
      "yyyy-MM-dd",
      new Date()
    ),
  })?.data ?? {
    ...GraduationDefault(),
    uid: ids,
    master: 0,
    date: new Date("2000-01-01"),
  };
};

export type GraduationWithStudentOutputSchema = GraduationOutputSchema & {
  student: StudentOutputSchema
  rombel: RombelOutputSchema | null
  size: number
  average: number
}

export const GraduationWithStudentOutputSchema: z.ZodType<GraduationWithStudentOutputSchema> = GraduationSchema.extend({
  master: z.number({ coerce: true }),
  date: z.date({ coerce: true }),
  uid: z.string(),
  student: StudentOutputSchema,
  rombel: RombelOutputSchema.nullable(),
  size: z.number(),
  average: z.number(),

})

type GraduationWithStudentOutputParseProps = {
  graduation: GraduationOutputSchema
  student: StudentOutputSchema | null
  rombel: RombelOutputSchema | null
}

export const GraduationWithStudentOutputParse = ({ graduation, student, rombel }: GraduationWithStudentOutputParseProps): GraduationWithStudentOutputSchema => {
  const size = Object.keys(graduation.values).length
  const average = Object.values(graduation.values).reduce((a, b) => a + b, 0) / size
  return {
    ...graduation,
    student: student ?? StudentOutputParse(StudentDefault(), v4()),
    rombel,
    size,
    average: !average ? 0 : parseFloat(average.toFixed(2)),
  }
}