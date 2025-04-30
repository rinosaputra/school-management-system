import { z } from "zod";

export type UserSchema = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  emailVerified: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email("Invalid email address"),
  image: z.string().nullable(),
  emailVerified: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
  .transform((data) => ({
    ...data,
    name: data.name || data.email.split("@")[0],
  }));

export const UserDefault = () => ({
  id: "",
  name: "",
  email: "",
  image: null,
  emailVerified: null,
  createdAt: new Date(),
  updatedAt: new Date(),
})