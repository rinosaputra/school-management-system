import { z } from "zod"
import { SchoolLevel } from "../school/const"

export type SubjectSchema = {
  name: string
  level?: SchoolLevel[]
}

export const SubjectSchema: z.ZodType<SubjectSchema> = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  level: z.array(z.nativeEnum(SchoolLevel)).optional(),
})

export const SubjectDefault = (): SubjectSchema => ({
  name: "",
})