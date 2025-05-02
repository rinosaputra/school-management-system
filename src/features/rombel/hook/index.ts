import { useQuery } from "@tanstack/react-query"
import { getDocs } from "firebase/firestore"
import { RombelCollection } from "../firestore"
import { YearId } from "../../year/const"
import { RombelOutputParse, RombelOutputSchema, RombelWithStudentsOutputSchema } from "../schema"
import { v4 } from "uuid"
import { useStudentData } from "../../student/hook"
import { z } from "zod"

export const getRombelData = async ({ yearId }: Partial<YearId>) => {
  const snapshot = await getDocs(RombelCollection({
    yearId: yearId ?? import.meta.env.VITE_FEATURE_YEAR_ACTIVE
  }))
  const results = snapshot.docs.map(doc => RombelOutputParse(doc.data(), doc.id))
  return {
    results: z.array(RombelOutputSchema).parse(results),
    token: v4()
  }
}

export const useRombelData = ({ yearId }: Partial<YearId>) => {
  const { data, isLoading } = useQuery({
    queryKey: ["rombels", yearId],
    queryFn: () => getRombelData({ yearId }),
  })

  return { data, isLoading }
}

export const useRombelWithStudentsData = ({ yearId }: Partial<YearId>) => {
  const students = useStudentData()
  const rombels = useRombelData({ yearId })
  const uid = students.data?.token ?? "" + rombels.data?.token ?? ""

  if (rombels.isLoading || students.isLoading) return { isLoading: true }
  return {
    isLoading: false,
    data: {
      results: z.array(RombelWithStudentsOutputSchema).parse(rombels.data?.results.map(rombel => {
        return {
          ...rombel,
          students: students.data?.results.filter(student => student.rombelId === rombel.uid) ?? []
        }
      }) ?? []) ?? [],
      token: uid,
    },
  }
}