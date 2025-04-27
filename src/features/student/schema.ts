import { z } from "zod"
import { StudentStatus } from "./const"
import { PersonalDefault, PersonalSchema } from "../personal/schema"

export type StudentSchema = {
  personal: PersonalSchema
  status: StudentStatus
  master: number // NISN
  index: number // NIS/NIPD
}

export const StudentSchema = z.object({
  personal: PersonalSchema,
  status: z.nativeEnum(StudentStatus),
  master: z.number({ coerce: true }),
  index: z.number({ coerce: true }),
})

export const StudentDefault = (): StudentSchema => ({
  personal: PersonalDefault(),
  status: "active",
  master: 0,
  index: 0,
})

type StudentOutputSchema = StudentSchema & {
  uid: string
}

const StudentOutputSchema = StudentSchema.extend({
  uid: z.string().uuid()
})

export const StudentOutputParse = (from: StudentSchema, uid: string): StudentOutputSchema => StudentOutputSchema.parse({
  ...from,
  uid
})