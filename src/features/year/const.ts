import { VersionPathFirestore } from "@/lib/version"

const YearPath = "years" as const

export type YearId = Record<"yearId", string>

export const YearPathFirestore = ({ yearId }: Partial<YearId>) => VersionPathFirestore(YearPath, yearId)