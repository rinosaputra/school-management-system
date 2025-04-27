export const StudentPath = "students"

export const StudentStatus = {
  active: "active",
  mutate: "mutate",
  pass: "pass"
} as const

export type StudentStatus = keyof typeof StudentStatus