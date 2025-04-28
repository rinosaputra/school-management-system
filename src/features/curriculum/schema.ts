import { z } from "zod"

export type CurriculumSchema = {
  name: string
}

export const CurriculumSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
})

export const CurriculumDefault = (): CurriculumSchema => ({
  name: "",
})