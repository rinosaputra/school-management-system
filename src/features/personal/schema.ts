import { z } from "zod";
import { PersonalGender, PersonalReligion } from "./const";
import { FirebaseDate } from "@/lib/zod";

type AddressSchema = {
  street: string;
  rt: number;
  rw: number;
  village: string;
  district: string;
  city: string;
  province: string;
  postalCode: number;
};

const AddressSchema = z.object({
  street: z.string({ coerce: true }),
  rt: z.number({ coerce: true }),
  rw: z.number({ coerce: true }),
  village: z.string({ coerce: true }),
  district: z.string({ coerce: true }),
  city: z.string({ coerce: true }),
  province: z.string({ coerce: true }),
  postalCode: z.number({ coerce: true }),
});

export type PersonalSchema = {
  master: number;
  name: string;
  gender: PersonalGender;
  birth: {
    date: FirebaseDate;
    place: string;
  }
  religion: PersonalReligion;
  address: Partial<AddressSchema>;
  phone: {
    code: string;
    number: number;
  };
};

export const PersonalSchema = z.object({
  master: z.number({ coerce: true }),
  name: z.string().min(1, { message: "Name is required" }),
  gender: z.nativeEnum(PersonalGender),
  birth: z.object({
    date: FirebaseDate,
    place: z.string({ coerce: true }),
  }),
  religion: z.nativeEnum(PersonalReligion),
  address: AddressSchema.partial(),
  phone: z.object({
    code: z.string({ coerce: true }),
    number: z.number({ coerce: true }),
  }),
})

export const PersonalDefault = (): PersonalSchema => ({
  master: 0,
  name: "",
  birth: {
    date: new Date(),
    place: "",
  },
  gender: PersonalGender.male,
  religion: PersonalReligion.islam,
  address: {},
  phone: {
    code: "62",
    number: 0,
  },
})