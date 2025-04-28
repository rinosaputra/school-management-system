export const CurriculumType = {
  k13: "k13",
  k21: "k21",
} as const;

export type CurriculumType = keyof typeof CurriculumType;