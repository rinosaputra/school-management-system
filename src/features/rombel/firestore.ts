import { createConverter, firebaseFirestore } from "@/lib/firebase/firestore"
import { collection, doc } from "firebase/firestore"
import { RombelId, RombelPathFirestore } from "./const"
import { YearId } from "../year/const"
import { RombelDefault, RombelSchema } from "./schema"

export const RombelCollection = (props: YearId) => collection(firebaseFirestore, ...RombelPathFirestore(props))
  .withConverter(
    createConverter({
      schema: RombelSchema,
      defaultValues: RombelDefault()
    })
  )

export const RombelDocument = ({ rombelId, ...props }: RombelId) => doc(RombelCollection(props), rombelId)