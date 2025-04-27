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
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { z } from "zod";
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

const FormSchema = z.object({
  nisn: z.string().min(10, {
    message: "NISN harus terdiri dari 10 digit",
  }),
  birth: z.string().min(8, {
    message: "Tanggal lahir tidak valid",
  }),
});

type FormSchema = z.infer<typeof FormSchema>;

const GraduationForm: React.FC = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nisn: "",
      birth: "",
    },
  });

  return (
    <Card className="w-full md:max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Pengumuman Kelulusan</CardTitle>
        <CardDescription>Silahkan isi NISN dan Tanggal Lahir.</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4">
        <Form {...form}>
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
                    maxLength={6}
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
        </Form>
      </CardContent>
      <Separator />
      <CardFooter className="space-y-4">
        <Button
          size={"lg"}
          className="w-full"
          onClick={form.handleSubmit((data) => {
            console.log(data);
          })}
        >
          <Search className="mr-2" size={16} />
          <span>Check Kelulusan</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GraduationForm;
