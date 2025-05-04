import { useQuery } from "@tanstack/react-query"
import { getDocs } from "firebase/firestore"
import { RombelCollection } from "../firestore"
import { YearId } from "../../year/const"
import { RombelOutputParse, RombelOutputSchema, RombelWithStudentsOutputSchema } from "../schema"
import { v4 } from "uuid"
import { useStudentData } from "../../student/hook"
import { useLocal } from "@/lib/local/hook"

export const getRombelData = async ({ yearId }: Partial<YearId>) => {
  const snapshot = await getDocs(RombelCollection({
    yearId: yearId ?? import.meta.env.VITE_FEATURE_YEAR_ACTIVE
  }))
  const results = snapshot.docs.map(doc => RombelOutputParse(doc.data(), doc.id))
  return {
    results: results,
    token: v4()
  }
}

export const useRombelData = ({ yearId, disabled, online }: UseQueryHookProps<Partial<YearId>>): UseQueryHookResults<RombelOutputSchema> => {
  const local = useLocal()
  const isOffline = !online && import.meta.env.VITE_APP_FORCE_ONLINE === "false"
  const { data, isLoading } = useQuery({
    queryKey: ["rombels", yearId],
    queryFn: () => getRombelData({ yearId }),
    enabled: !disabled && !isOffline,
  })
  if (isOffline) {
    return {
      data: local.data.get(['results', 'rombel']).map(RombelOutputParse).value(),
      token: local.token,
      isLoading: local.isLoading,
    }
  }

  return {
    data: data?.results,
    token: data?.token ?? "",
    isLoading
  }
}

export const useRombelWithStudentsData = ({ yearId, ...props }: UseQueryHookProps<Partial<YearId>>): UseQueryHookResults<RombelWithStudentsOutputSchema> => {
  const students = useStudentData(props)
  const rombels = useRombelData({ yearId, ...props })
  const uid = students.token + rombels.token

  if (rombels.isLoading || students.isLoading) return { isLoading: true, data: [], token: uid }
  return {
    isLoading: false,
    data: rombels.data?.map(rombel => {
      return {
        ...rombel,
        students: students.data?.filter(student => student.rombelId === rombel.uid) ?? []
      }
    }) ?? [],
    token: uid,
  }
}