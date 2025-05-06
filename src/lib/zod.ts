import { z } from "zod";

type Timestamp = {
  toDate: () => Date
}

const Timestamp = z.custom<Timestamp>((val) => {
  return val && typeof val['toDate'] === "function" && val.toDate() instanceof Date;
});

export const FirebaseDate = z.union([z.date({ coerce: true }), Timestamp]).transform((val) => {
  if (typeof (val as Timestamp)?.toDate === "function") {
    return (val as Timestamp).toDate()
  };
  if (val instanceof Date) {
    return val;
  }
  if (typeof val === "string") {
    const date = new Date(val);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }
    return date;
  }
  if (typeof val === "number") {
    return new Date(val);
  }
  return new Date();
}) as unknown as z.ZodDate;

export type FirebaseDate = z.infer<typeof FirebaseDate>;
