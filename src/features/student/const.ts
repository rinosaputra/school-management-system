import { VersionPathFirestore } from "@/lib/version"

const StudentPath = "students" as const

export type StudentId = Record<"studentId", string>

export const StudentPathFirestore = ({ studentId }: Partial<StudentId>) => VersionPathFirestore(StudentPath, studentId)

export const StudentStatus = {
  active: "active",
  mutate: "mutate",
  pass: "pass"
} as const

export type StudentStatus = keyof typeof StudentStatus