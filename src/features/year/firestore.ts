import { collection, doc } from "firebase/firestore";
import { YearDefault, YearSchema } from "./schema";
import { createConverter, firebaseFirestore } from "@/lib/firebase/firestore";
import { YearId, YearPathFirestore } from "./const";

export const YearCollection = () => collection(firebaseFirestore, ...YearPathFirestore({}))
  .withConverter(
    createConverter({
      schema: YearSchema,
      defaultValues: YearDefault()
    })
  )

export const YearDocument = ({ yearId }: YearId) => doc(YearCollection(), yearId)