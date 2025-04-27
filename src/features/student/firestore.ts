import { createConverter, firebaseFirestore } from "@/lib/firebase/firestore";
import { collection, doc } from "firebase/firestore";
import { StudentDefault, StudentSchema } from "./schema";

export const StudentCollection = () => collection(firebaseFirestore, "students")
  .withConverter(
    createConverter({
      schema: StudentSchema,
      defaultValues: StudentDefault()
    })
  )

export const StudentDocument = (uid: string) => doc(StudentCollection(), uid)