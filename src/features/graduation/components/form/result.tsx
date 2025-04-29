import { StudentOutputSchema } from "@/features/student/schema";
import React from "react";
import { GraduationFormContextState } from "./hook";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { id } from "date-fns/locale";

type GraduationFormResultProps = Omit<GraduationFormContextState, "student"> & {
  student: StudentOutputSchema;
};

const Box: React.FC<React.PropsWithChildren<Record<"title", string>>> = ({
  title,
  children,
}) => {
  return (
    <div className="grid md:grid-cols-3">
      <div className="font-medium truncate">{title}</div>
      <div className="col-span-2 flex">
        <span className="mr-1 hidden md:block">:</span>
        <span>{children}</span>
      </div>
    </div>
  );
};

const GraduationFormResult: React.FC<GraduationFormResultProps> = ({
  student,
}) => {
  return (
    <Card className="w-full md:max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Pengumuman Kelulusan</CardTitle>
        <CardDescription>
          Selamat, <b>{student.personal.name}</b>! Kamu telah berhasil melewati tantangan ini dengan
          baik. Teruslah bersemangat belajar dan raih mimpi-mimpimu yang lebih
          tinggi! 🌟
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-2 text-sm">
        <Box title="NIS/NISN">
          {student.index}/{student.master}
        </Box>
        <Box title="Nama Siswa">{student.personal.name}</Box>
        <Box title="Jenis Kelamin">
          {student.personal.gender === "female" ? "Perempuan" : "Laki-laki"}
        </Box>
        <Box title="Tempat/Tanggal Lahir">
          {student.personal.birth.place},{" "}
          {format(student.personal.birth.date as Date, "dd MMMM yyyy", {
            locale: id,
          })}
        </Box>
        <Box title="Nama Orang Tua">
          {student.parents.mother?.name ??
            student.parents.father?.name ??
            student.parents.guardian?.name ??
            ""}
        </Box>
      </CardContent>
      <Separator />
      <CardContent className="space-y-4">
        <div className="text-center uppercase w-full">
          Status Kelulusan Dinyatakan
        </div>
        <div className="text-center uppercase w-full font-bold text-5xl text-emerald-700">
          LULUS
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="space-y-4">
        <div className="text-center text-sm text-muted-foreground">
          <b>Catatan:</b> Jika terdapat kesalahan data, silahkan hubungi pihak
          sekolah.
        </div>
      </CardFooter>
    </Card>
  );
};

export default GraduationFormResult;
