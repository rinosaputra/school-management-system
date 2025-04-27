import { z } from "zod"

export type GraduationSchema = {
  readDate?: Date
  printDate?: Date
}

export const GraduationSchema = z.object({
  readDate: z.date().optional(),
  printDate: z.date().optional()
})

export const GraduationDefault = (): GraduationSchema => ({})