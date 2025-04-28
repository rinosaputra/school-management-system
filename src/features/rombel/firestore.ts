import { createConverter, firebaseFirestore } from "@/lib/firebase/firestore"
import { collection, doc } from "firebase/firestore"
import { RombelId } from "./const"
import { YearId, YearPath } from "../year/const"
import { RombelDefault, RombelSchema } from "./schema"

export const RombelCollection = ({ yearId }: YearId) => collection(firebaseFirestore, YearPath, yearId, "rombels")
  .withConverter(
    createConverter({
      schema: RombelSchema,
      defaultValues: RombelDefault()
    })
  )
export const RombelDocument = ({ rombelId, ...props }: RombelId) => doc(RombelCollection(props), rombelId)