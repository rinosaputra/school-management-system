import { z } from "zod"
import { CurriculumType } from "../curriculum/const"
import { StudentOutputSchema } from "../student/schema"

export type RombelSchema = {
  name: string
  level: number
  curriculum: CurriculumType
  students: string[]
}

export const RombelSchema = z.object({
  name: z.string(),
  level: z.number().min(1).max(13),
  curriculum: z.nativeEnum(CurriculumType),
  students: z.array(z.string().uuid())
})

export const RombelDefault = (): RombelSchema => ({
  name: "",
  level: 10,
  curriculum: CurriculumType.k13,
  students: []
})

export type RombelOutputSchema = RombelSchema & {
  uid: string
}

export const RombelOutputSchema: z.ZodType<RombelOutputSchema> = RombelSchema.extend({
  uid: z.string().uuid()
})

export const RombelOutputParse = (data: RombelSchema, uid: string): RombelOutputSchema => {
  return {
    ...data,
    uid
  }
}

export type RombelWithStudentsOutputSchema = Omit<RombelOutputSchema, "students"> & {
  students: StudentOutputSchema[]
}

export const RombelWithStudentsOutputSchema: z.ZodType<RombelWithStudentsOutputSchema> = RombelSchema.omit({
  students: true
}).extend({
  uid: z.string().uuid(),
  students: z.array(StudentOutputSchema)
})