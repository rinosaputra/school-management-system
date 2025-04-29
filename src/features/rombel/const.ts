import { VersionPathFirestore } from "@/lib/version"
import { YearId, YearPathFirestore } from "../year/const"

const RombelPath = "rombels" as const

export type RombelId = YearId & Record<"rombelId", string>

export const RombelPathFirestore = ({ rombelId, ...props }: YearId & Partial<Pick<RombelId, "rombelId">>) => [
  ...YearPathFirestore(props),
  RombelPath,
  rombelId
].filter(Boolean) as VersionPathFirestore<"rombels">