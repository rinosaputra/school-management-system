import { collection, doc } from "firebase/firestore";
import { YearDefault, YearSchema } from "./schema";
import { createConverter, firebaseFirestore } from "@/lib/firebase/firestore";
import { YearId, YearPath } from "./const";

export const YearCollection = () => collection(firebaseFirestore, YearPath)
  .withConverter(
    createConverter({
      schema: YearSchema,
      defaultValues: YearDefault()
    })
  )

export const YearDocument = ({ yearId }: YearId) => doc(YearCollection(), yearId)