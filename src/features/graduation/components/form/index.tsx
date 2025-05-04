import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  GraduationFormContext,
  GraduationFormContextState,
  GraduationFormSchema,
} from "./hook";
import GraduationFormSubmit from "./submit";
import GraduationFormResult from "./result";
import GraduationLogo from "../logo";

const Before: React.FC<Record<"state", GraduationFormContextState | null>> = ({
  state,
}) => {
  const form = useForm<GraduationFormSchema>({
    resolver: zodResolver(GraduationFormSchema),
    defaultValues: {
      nisn: import.meta.env.PROD ? "" : "3060279309",
      birth: import.meta.env.PROD ? "" : "2909200", // 7
    },
  });

  if (state?.student)
    return (
      <GraduationFormResult
        graduation={state.graduation}
        student={state.student}
      />
    );
  return (
    <Card className="w-full md:max-w-md mx-auto">
      <CardHeader>
        <GraduationLogo>
          <CardTitle className="text-xl">Pengumuman Kelulusan</CardTitle>
          <CardDescription>Silahkan isi NISN dan Tanggal Lahir.</CardDescription>
        </GraduationLogo>
      </CardHeader>
      <Separator />
      <Form {...form}>
        <CardContent className="space-y-4">
          <FormField
            control={form.control}
            name="nisn"
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { ref, ...field } }) => (
              <FormItem>
                <FormLabel>NISN</FormLabel>
                <FormControl>
                  <InputOTP
                    pattern={REGEXP_ONLY_DIGITS}
                    maxLength={10}
                    {...field}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                      <InputOTPSlot index={6} />
                      <InputOTPSlot index={7} />
                      <InputOTPSlot index={8} />
                      <InputOTPSlot index={9} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Masukkan NISN Anda, terdiri dari 10 digit.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birth"
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { ref, ...field } }) => (
              <FormItem>
                <FormLabel>Tanggal Lahir</FormLabel>
                <FormControl>
                  <InputOTP
                    pattern={REGEXP_ONLY_DIGITS}
                    maxLength={8}
                    {...field}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                      <InputOTPSlot index={6} />
                      <InputOTPSlot index={7} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Masukkan Tanggal Lahir Anda, dalam format DD-MM-YYYY,
                  <br />
                  Contoh: <b>28-02-2001</b>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <Separator />
        <CardFooter className="space-y-4 flex-col items-start">
          <GraduationFormSubmit />
        </CardFooter>
      </Form>
    </Card>
  );
};

const GraduationForm: React.FC = () => {
  const [state, setState] = React.useState<GraduationFormContextState | null>(
    null
  );

  return (
    <GraduationFormContext.Provider value={{ state, setState }}>
      <Before state={state} />
    </GraduationFormContext.Provider>
  );
};

export default GraduationForm;
