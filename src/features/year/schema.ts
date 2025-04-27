import { z } from "zod";

type YearSchema = {
  headId: string | null;
};

export const YearSchema = z.object({
  headId: z.string().nullable(),
})

export const YearDefault = (): YearSchema => ({
  headId: null,
})

type YearSchemaOutput = YearSchema & {
  yid: number
};

const YearSchemaOutput: z.ZodType<YearSchemaOutput> = YearSchema.extend({
  yid: z.number({ coerce: true })
})

type YearSchemaInput = YearSchemaOutput & {
  updated?: boolean
}

const YearSchemaInput: z.ZodType<YearSchemaInput> = YearSchema.extend({
  yid: z.number(),
  updated: z.boolean().optional()
})

export const parseYearInput = (from: YearSchemaInput): YearSchema => YearSchema.parse(from)