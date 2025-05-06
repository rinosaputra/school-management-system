import { useQuery } from "@tanstack/react-query"
import { StudentCollection } from "../firestore"
import { getDocs } from "firebase/firestore"
import { StudentOutputParse, StudentOutputSchema } from "../schema"
import { v4 } from "uuid"
import { useLocal } from "@/lib/local/hook"

export const useStudentData = ({ disabled, online }: UseQueryHookProps<{}>): UseQueryHookResults<StudentOutputSchema> => {
  const local = useLocal()
  const isOffline = !online && import.meta.env.VITE_APP_FORCE_ONLINE === "false"
  const { data, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const snapshot = await getDocs(StudentCollection())
      return {
        results: snapshot.docs.map(doc => StudentOutputParse(doc.data(), doc.id)),
        token: v4()
      }
    },
    enabled: !disabled && !isOffline,
  })
  if (isOffline) {
    return {
      data: local.data.get(['results', 'student']).map(StudentOutputParse).value(),
      token: local.token,
      isLoading: local.isLoading,
    }
  }

  return {
    data: data?.results,
    token: data?.token ?? "",
    isLoading: isLoading || local.isLoading,
  }
}