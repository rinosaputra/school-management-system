import { z } from "zod";

type Timestamp = {
  toDate: () => Date
}

const Timestamp = z.custom<Timestamp>((val) => {
  return val && typeof val['toDate'] === "function" && val.toDate() instanceof Date;
});

export const FirebaseDate = Timestamp.or(z.date({ coerce: true })).transform((val) => {
  if (typeof (val as Timestamp)?.toDate === "function") {
    return (val as Timestamp).toDate()
  };
  return val as Date;
}) as unknown as z.ZodDate;

export type FirebaseDate = z.infer<typeof FirebaseDate>;
