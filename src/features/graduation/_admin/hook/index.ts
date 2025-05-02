import { getDocs } from "firebase/firestore"
import { v4 } from "uuid"
import { GraduationCollection } from "../../firestore"
import { GraduationOutputParse, GraduationOutputSchema } from "../../schema"
import { useQuery } from "@tanstack/react-query"
import { useStudentData } from "@/features/student/hook"
import { z } from "zod"

export const getGraduationData = async () => {
  const snapshot = await getDocs(GraduationCollection({
    yearId: import.meta.env.VITE_FEATURE_YEAR_ACTIVE
  }))
  return {
    results: snapshot.docs.map(doc => GraduationOutputParse(doc.data(), doc.id)),
    token: v4()
  }
}

export const useGraduationData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["graduation"],
    queryFn: () => getGraduationData()
  })

  return { data, isLoading }
}

export const useGraduationWithRombelData = () => {
  const graduations = useGraduationData()
  const students = useStudentData()
  const uid = graduations.data?.token ?? "" + students.data?.token ?? ""
  if (graduations.isLoading || students.isLoading) return { isLoading: true }
  return {
    isLoading: false,
    data: {
      results: z.array(GraduationOutputSchema)
        .parse(graduations.data?.results.map(graduation => {
          return {
            ...graduation,
            students: students.data?.results.filter(student => student.uid === graduation.studentId) ?? []
          }
        }) ?? []) ?? [],
      token: uid,
    }
  }
}