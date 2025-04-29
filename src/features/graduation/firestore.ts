import { createConverter, firebaseFirestore } from "@/lib/firebase/firestore";
import { YearId } from "../year/const";
import { collection, doc } from "firebase/firestore";
import { GraduationId, GraduationPathFirestore } from "./const";
import { GraduationDefault, GraduationSchema } from "./schema";

export const GraduationCollection = (props: YearId) => collection(firebaseFirestore, ...GraduationPathFirestore(props))
  .withConverter(
    createConverter({
      schema: GraduationSchema,
      defaultValues: GraduationDefault()
    })
  );

export const GraduationDocument = ({ graduationId, ...props }: GraduationId) => doc(GraduationCollection(props), graduationId);