import { z } from "zod"
import { StudentStatus } from "./const"
import { PersonalDefault, PersonalSchema } from "../personal/schema"

export type StudentParentSchema = {
  name: string
  phone: string | null
}

export const StudentParentSchema = z.object({
  name: z.string(),
  phone: z.string().nullable()
})

export type StudentSchema = {
  personal: PersonalSchema
  status: StudentStatus
  master: number // NISN
  index: number // NIS/NIPD
  parents: Record<"father" | "mother" | "guardian", StudentParentSchema | null>
}

export const StudentSchema = z.object({
  personal: PersonalSchema,
  status: z.nativeEnum(StudentStatus),
  master: z.number({ coerce: true }),
  index: z.number({ coerce: true }),
  parents: z.object({
    father: StudentParentSchema.nullable(),
    mother: StudentParentSchema.nullable(),
    guardian: StudentParentSchema.nullable()
  })
})

export const StudentDefault = (): StudentSchema => ({
  personal: PersonalDefault(),
  status: "active",
  master: 0,
  index: 0,
  parents: {
    father: null,
    mother: null,
    guardian: null
  }
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