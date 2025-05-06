import { SchoolLevel } from "@/features/school/const"

export type Environment = {
  level: SchoolLevel
  name: string
  fullName: string
  yearActive: number
  version: string
}

export const Environment: Environment = import.meta ? {
  level: SchoolLevel[import.meta.env.VITE_APP_LEVEL as SchoolLevel] ?? "sd",
  name: import.meta.env.VITE_APP_NAME,
  fullName: [
    (SchoolLevel[import.meta.env.VITE_APP_LEVEL as SchoolLevel] ?? "sd").toUpperCase(),
    import.meta.env.VITE_APP_NAME,
  ].join(" "),
  yearActive: Number(import.meta.env.VITE_FEATURE_YEAR_ACTIVE) || 2000,
  version: import.meta.env.VITE_APP_VERSION
} : {
  level: "sd",
  name: "Sistem Informasi Akademik",
  fullName: "Sistem Informasi Akademik",
  yearActive: 2000,
  version: "1"
}