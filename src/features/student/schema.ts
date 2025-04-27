import { z } from "zod"
import { StudentStatus } from "./const"

type StudentSchema = {
  name: string
  status: StudentStatus
}

export const StudentSchema = z.object({
  name: z.string(),
  status: z.nativeEnum(StudentStatus)
})

export const StudentDefault = (): StudentSchema => ({
  name: "",
  status: "active"
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