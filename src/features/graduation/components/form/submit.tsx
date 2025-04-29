import React from "react";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import {
  GraduationFormSchema,
  useGraduationForm,
  useGraduationFormContext,
} from "./hook";
import { Loader, Search } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { getDoc } from "firebase/firestore";
import { StudentDocument } from "@/features/student/firestore";
import { StudentOutputParse } from "@/features/student/schema";
import { GraduationDocument } from "../../firestore";
import { GraduationOutputParse } from "../../schema";

const enabledReCaptcha =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY && import.meta.env.PROD;

const GraduationFormSubmit: React.FC = () => {
  const { setState } = useGraduationFormContext();
  const refReCaptcha = React.useRef<ReCAPTCHA>(null);
  const {
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useGraduationForm();
  const studentMutation = useMutation({
    mutationKey: ["graduation/student"],
    mutationFn: async (id: string) => {
      const find = await getDoc(StudentDocument(id));
      const result = find.data();
      if (result) return StudentOutputParse(result, id);
      throw new Error("Data Siswa tidak ditemukan");
    },
    onSuccess: (data) => {
      setState((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          student: data,
        };
      });
    },
  });
  const graduationMutation = useMutation({
    mutationKey: ["graduation/result"],
    mutationFn: async (data: GraduationFormSchema) => {
      const id = [
        Number(data.nisn),
        data.birth.substring(4, 8),
        data.birth.substring(2, 4),
        data.birth.substring(0, 2),
      ].join("-");
      const find = await getDoc(
        GraduationDocument({
          yearId: import.meta.env.VITE_FEATURE_YEAR_ACTIVE,
          graduationId: id,
        })
      );
      const result = find.data();
      if (result) return GraduationOutputParse(result, id);
      if (import.meta.env.DEV)
        console.log("GRADUATION FAILED: ", find.ref.path);
      throw new Error("Data Kelulusan tidak ditemukan");
    },
    onSuccess: (data) => {
      setState({ graduation: data, student: null });
      toast.promise(studentMutation.mutateAsync(data.studentId), {
        loading: "Mencari data siswa...",
        success: () => "Data siswa ditemukan",
        error: (err) => err.message,
      });
    },
    onError: (_, values) => {
      reset(values);
      refReCaptcha.current?.reset();
    },
  });
  const isLoading = graduationMutation.isPending || studentMutation.isPending;
  const disabled = !isDirty || isLoading;

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (enabledReCaptcha) {
      const captchaValue = refReCaptcha.current?.getValue();
      if (!captchaValue) {
        toast.error("Silahkan centang reCAPTCHA terlebih dahulu");
        return;
      }
    }
    return handleSubmit((data) => {
      toast.promise(graduationMutation.mutateAsync(data), {
        loading: "Mencari data kelulusan...",
        success: () => "Selamat, Anda dinyatakan lulus!",
        error: (err) => {
          console.log("GRADUATION: ", err);
          return "Data kelulusan tidak ditemukan";
        },
      });
    })();
  };

  if (!enabledReCaptcha)
    return (
      <Button
        size={"lg"}
        className="w-full"
        disabled={disabled}
        onClick={onSubmit}
      >
        {isLoading ? (
          <Loader className="animate-spin" />
        ) : (
          <Search className="mr-2" size={16} />
        )}
        <span>Check Kelulusan</span>
      </Button>
    );
  return (
    <>
      <div>
        <ReCAPTCHA
          ref={refReCaptcha}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        />
      </div>
      <Button
        size={"lg"}
        className="w-full"
        disabled={disabled}
        onClick={onSubmit}
      >
        {isLoading ? (
          <Loader className="animate-spin" />
        ) : (
          <Search className="mr-2" size={16} />
        )}
        <span>Check Kelulusan</span>
      </Button>
    </>
  );
};

export default GraduationFormSubmit;
