import { firebaseApp } from "./app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

import type { DocumentData, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore'
import { DeepPartial } from 'react-hook-form'
import { z } from 'zod'

const firebaseFirestore = getFirestore(firebaseApp)
if (!import.meta.env.PROD) connectFirestoreEmulator(firebaseFirestore, '127.0.0.1', 8080);

type CreateConverterResult<T> = T & {
  invalid_data?: {
    error: z.ZodError<T>
    raw: DeepPartial<T>
  }
}

function createConverter<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Schema extends z.ZodType<any, any, any> = z.ZodType<any, any, any>,
  Infer extends DocumentData = CreateConverterResult<z.infer<Schema>>
>({ defaultValues, schema }: {
  schema: Schema,
  defaultValues: Infer

}): {
  toFirestore: (data: Infer) => DocumentData
  fromFirestore: (snapshot: QueryDocumentSnapshot) => Infer
} {
  return {
    toFirestore: (data: Infer): DocumentData => data,
    fromFirestore: (snapshot: QueryDocumentSnapshot): Infer => {
      const raw = snapshot.data()
      const { data, error } = schema.safeParse(raw)
      return !error
        ? data
        : {
          ...defaultValues,
          invalid_data: {
            error,
            raw
          }
        }
    }
  }
}

type createConverter<T> = Promise<QuerySnapshot<T, DocumentData>>

export {
  firebaseFirestore,
  createConverter,
}