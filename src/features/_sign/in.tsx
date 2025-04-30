import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import SignProvider from "./provider";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase/auth";
import { toast } from "sonner";

type SignInSchema = {
  email: string;
  password: string;
};

const SignInSchema: z.ZodType<SignInSchema> = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const SignIn: React.FC = () => {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: ({ email, password }: SignInSchema) => signInWithEmailAndPassword(firebaseAuth, email, password),
  })

  return (
    <SignProvider>
      <div className="grid gap-6">
        <Form {...form}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Kata Sandi</FormLabel>
                  <Link
                    to="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
        <Button
          className="w-full"
          disabled={isPending || !form.formState.isDirty}
          onClick={form.handleSubmit(data => {
            toast.promise(mutateAsync(data), {
              loading: "Signing in...",
              success: () => {
                form.reset();
                return "Signed in successfully!";
              },
              error: (error) => {
                if (error instanceof Error) {
                  return error.message;
                }
                return "Failed to sign in";
              }
            });
          })}>
          Sign In
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="#" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </SignProvider>
  );
};

export default SignIn;
