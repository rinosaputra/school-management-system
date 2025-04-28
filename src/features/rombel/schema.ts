import { z } from "zod"
import { CurriculumType } from "../curriculum/const"

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