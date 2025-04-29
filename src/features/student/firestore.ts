import { createConverter, firebaseFirestore } from "@/lib/firebase/firestore";
import { collection, doc } from "firebase/firestore";
import { StudentDefault, StudentSchema } from "./schema";
import { StudentPathFirestore } from "./const";

export const StudentCollection = () => collection(firebaseFirestore, ...StudentPathFirestore({}))
  .withConverter(
    createConverter({
      schema: StudentSchema,
      defaultValues: StudentDefault()
    })
  )

export const StudentDocument = (uid: string) => doc(StudentCollection(), uid)