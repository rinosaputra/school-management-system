import { getDocs } from "firebase/firestore"
import { v4 } from "uuid"
import { GraduationCollection } from "../../firestore"
import { GraduationOutputParse, GraduationOutputSchema, GraduationWithStudentOutputParse, GraduationWithStudentOutputSchema } from "../../schema"
import { useQuery } from "@tanstack/react-query"
import { useStudentData } from "@/features/student/hook"
import { useLocal } from "@/lib/local/hook"
import { useRombelData } from "@/features/rombel/hook"

export const getGraduationData = async () => {
  const snapshot = await getDocs(GraduationCollection({
    yearId: import.meta.env.VITE_FEATURE_YEAR_ACTIVE
  }))
  return {
    results: snapshot.docs.map(doc => GraduationOutputParse(doc.data(), doc.id)),
    token: v4()
  }
}

export const useGraduationData = ({ disabled, online }: UseQueryHookProps<{}>): UseQueryHookResults<GraduationOutputSchema> => {
  const local = useLocal()
  const isOffline = !online && import.meta.env.VITE_APP_FORCE_ONLINE === "false"
  const { data, isLoading } = useQuery({
    queryKey: ["graduation"],
    queryFn: () => getGraduationData(),
    enabled: !disabled && !isOffline,
  })

  if (isOffline) {
    return {
      data: local.data.get(['results', 'graduation']).map(GraduationOutputParse).value(),
      token: local.token,
      isLoading: local.isLoading,
    }
  }

  return {
    data: data?.results,
    token: data?.token ?? "",
    isLoading: isLoading
  }
}

export const useGraduationWithStudentData = (props: UseQueryHookProps<{}>): UseQueryHookResults<GraduationWithStudentOutputSchema> => {
  const graduations = useGraduationData(props)
  const students = useStudentData(props)
  const rombels = useRombelData(props)
  const uid = graduations.token + students.token + rombels.token
  if (graduations.isLoading || students.isLoading || rombels.isLoading) return { isLoading: true, data: [], token: uid }
  return {
    isLoading: false,
    data: graduations.data?.map<GraduationWithStudentOutputSchema>(graduation => {
      const student = students.data?.find(student => student.uid === graduation.studentId) ?? null
      return GraduationWithStudentOutputParse({
        graduation,
        student,
        rombel: !student ? null : rombels.data?.find(rombel => rombel.uid === student.rombelId) ?? null,
      })
    }
    ) ?? [],
    token: uid,
  }
}