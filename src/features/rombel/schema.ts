import { z } from "zod"
import { CurriculumType } from "../curriculum/const"
import { StudentOutputSchema } from "../student/schema"
import { CurriculumK13ExpertiseRows, CurriculumK13ExpertiseRowsKey } from "../curriculum/rows/k13/expertise"

export type RombelSchema = {
  name: string
  level: number
  expertiseId?: string
  curriculum: CurriculumType
  students: string[]
}

export const RombelSchema = z.object({
  name: z.string(),
  level: z.number().min(1).max(13),
  expertiseId: z.string().optional(),
  curriculum: z.nativeEnum(CurriculumType),
  students: z.array(z.string().uuid())
})

export const RombelDefault = (): RombelSchema => ({
  name: "",
  level: 10,
  expertiseId: "",
  curriculum: CurriculumType.k13,
  students: []
})

export type RombelOutputSchema = RombelSchema & {
  uid: string
  expertise?: {
    area: string
    program: string
    competency: string
  }
}

export const RombelOutputSchema: z.ZodType<RombelOutputSchema> = RombelSchema.extend({
  uid: z.string().uuid(),
  expertise: z.object({
    area: z.string(),
    program: z.string(),
    competency: z.string()
  }).optional()
})

export const RombelOutputParse = (data: RombelSchema, uid: string): RombelOutputSchema => {
  const expertiseIds = data.expertiseId ? CurriculumK13ExpertiseRowsKey[data.expertiseId as keyof CurriculumK13ExpertiseRowsKey] ?? null : null
  const area = expertiseIds ? CurriculumK13ExpertiseRows[expertiseIds[0] ?? 0] : null
  const program = expertiseIds && area ? area.children[expertiseIds[1] ?? 0] : null
  const competency = expertiseIds && program ? program.children[expertiseIds[2] ?? 0] : null
  return {
    ...data,
    uid,
    expertise: expertiseIds ? {
      area: area?.result.name ?? "",
      program: program?.name ?? "",
      competency: competency?.name ?? ""
    } : undefined
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