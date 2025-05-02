import { useQuery } from "@tanstack/react-query"
import { StudentCollection } from "../firestore"
import { getDocs } from "firebase/firestore"
import { StudentOutputParse, StudentOutputSchema } from "../schema"
import { v4 } from "uuid"
import { z } from "zod"

export const useStudentData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const snapshot = await getDocs(StudentCollection())
      return {
        results: z.array(StudentOutputSchema).parse(snapshot.docs.map(doc => StudentOutputParse(doc.data(), doc.id))),
        token: v4()
      }
    }
  })

  return { data, isLoading }
}