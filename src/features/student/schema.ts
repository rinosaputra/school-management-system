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
  rombelId: string | null
  parents: Record<"father" | "mother" | "guardian", StudentParentSchema | null>
}

export const StudentSchema = z.object({
  personal: PersonalSchema,
  status: z.nativeEnum(StudentStatus),
  master: z.number({ coerce: true }),
  index: z.number({ coerce: true }),
  rombelId: z.string().uuid().nullable(),
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
  rombelId: null,
  parents: {
    father: null,
    mother: null,
    guardian: null
  }
})

export type StudentOutputSchema = StudentSchema & {
  uid: string
}

export const StudentOutputSchema = StudentSchema.extend({
  uid: z.string().uuid()
})

export const StudentOutputParse = (from: StudentSchema, uid: string): StudentOutputSchema => StudentOutputSchema.parse({
  ...from,
  uid
})