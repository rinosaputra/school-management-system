import { z } from "zod"

export type SubjectSchema = {
  name: string
}

export const SubjectSchema: z.ZodType<SubjectSchema> = z.object({
  name: z.string().min(1, { message: "Name is required" }),
})

export const SubjectDefault = (): SubjectSchema => ({
  name: "",
})