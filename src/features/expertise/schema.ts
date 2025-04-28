// import { z } from "zod"

export type ExpertiseAreaSchema = {
  name: string
}

export type ExpertiseProgramSchema = ExpertiseAreaSchema

export type ExpertiseCompetencySchema = ExpertiseAreaSchema & {
  index: number
  year: 3 | 4
}