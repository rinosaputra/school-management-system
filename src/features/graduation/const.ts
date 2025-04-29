import { VersionPathFirestore } from "@/lib/version";
import { YearId, YearPathFirestore } from "../year/const";

const GraduationPath = "graduations";

export type GraduationId = YearId & Record<"graduationId", string>;

export const GraduationPathFirestore = (props: YearId) => [...YearPathFirestore(props), GraduationPath].filter(Boolean) as VersionPathFirestore<"graduations">;