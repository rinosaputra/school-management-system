import React from 'react'
import { Document } from "@react-pdf/renderer";
import { PDFPageWithHeader, PDFText, PDFView } from '@/components/pdf/component';
import { GraduationWithStudentOutputSchema } from '@/features/graduation/schema';
import { Environment } from '@/lib/environment';
import { formatDate } from '@/components/date';
import { cn } from '@/lib/utils';
import { CurriculumK13Subject } from '@/features/curriculum/rows/k13/subject';

const titleHeader: string[] = [
  'SURAT KETERANGAN LULUS',
  Environment.fullName,
  `TAHUN PELAJARAN ${Environment.yearActive}/${Environment.yearActive + 1}`,
]

const marginX = 20
const marginLeftBiodata = 15
const sizeLeft = 70
const sizeDot = 2
const paperWidth = 210
const sizeRight = paperWidth - (marginX * 2) - sizeLeft - sizeDot
const fontSize = 10

const sizeTable = {
  no: 10,
  name: paperWidth - (marginX * 2) - 10 - 18,
  score: 18,
}

type TableDataProps = {
  header?: boolean
  no: number
  name: string
  score: number
}

const TableData = ({ header, no, name, score }: TableDataProps) => (
  <PDFView className={`flex flex-row border-l border-b w-[${paperWidth - (marginX * 2)}mm]`}>
    <PDFText className={cn(
      `border-r p-1 py-0.5 w-[${sizeTable.no}mm]`,
      header ? "font-bold text-center" : "text-right",
    )}>{header ? "No" : no}.</PDFText>
    <PDFText className={cn(
      `border-r p-1 py-0.5 w-[${sizeTable.name}mm]`,
      header ? "font-bold text-center" : "",
    )}>{header ? "Mata Pelajaran" : name}</PDFText>
    <PDFText className={cn(
      `border-r p-1 py-0.5 w-[${sizeTable.score}mm] text-center`,
      header ? "font-bold" : "",
    )}>{header ? 'Nilai' : Number(score).toFixed(2)}</PDFText>
  </PDFView>
)

type Props = {
  label: string
  value: string | number
}

const Header = ({ label, value }: Props) => (
  <PDFView className="flex flex-row">
    <PDFText className={`w-[${sizeLeft}mm]`}>{label}</PDFText>
    <PDFText className={`w-[${sizeDot}mm]`}>:</PDFText>
    <PDFText className={`font-bold w-[${sizeRight}mm]`}>{value}</PDFText>
  </PDFView>
)

const Bidata = ({ label, value }: Props) => (
  <PDFView className="flex flex-row">
    <PDFText className={`w-[${sizeLeft - marginLeftBiodata}mm]`}>{label}</PDFText>
    <PDFText className={`w-[${sizeDot}mm]`}>:</PDFText>
    <PDFText className={`font-bold w-[${sizeRight}mm] uppercase`}>{value}</PDFText>
  </PDFView>
)

const GraduationAdminDocTranscriptPDF = ({ result }: Record<"result", GraduationWithStudentOutputSchema | null>): React.ReactElement => {
  return (
    <Document>
      <PDFPageWithHeader
        size={"A4"}
        className={`p-[${marginX}mm] pb-[10mm] pt-[40mm] font-sans text-[${fontSize}px]`}
      >
        <PDFView className='flex flex-col items-center justify-center mt-[3mm]'>
          <PDFView className="flex flex-col items-center justify-center">
            {titleHeader.map((item, index) => (
              <PDFText key={index} className={cn(
                'font-bold text-center uppercase',
                !index ? `text-[${fontSize + 8}px]` : `text-[${fontSize + 3}px]`
              )}>{item}</PDFText>
            ))}
            <PDFText className={`text-center underline mt-1`}>Nomor: {result?.student.index ?? 0}/{import.meta.env.VITE_FEATURE_GRADUATION_DOC_DESCRIPTION}</PDFText>
          </PDFView>
          {!result?.rombel?.expertise ? null : (
            <PDFView className="flex flex-col items-center justify-center mt-[3mm]">
              <Header label="PROGRAM KEAHLIAN" value={result.rombel.expertise.program} />
              <Header label="KOMPETENSI KEAHLIAN" value={result.rombel.expertise.competency} />
            </PDFView>
          )}
          <PDFView className={`flex flex-col mt-[3mm] w-[${paperWidth - (marginX * 2)}mm]`}>
            <PDFText>Yang bertanda tangan di bawah ini, Kepala Sekolah {Environment.fullName} menerangkan bahwa:</PDFText>
          </PDFView>
          <PDFView className={`flex flex-col mt-[3mm] w-[${paperWidth - (marginX * 2)}mm] pl-[${marginLeftBiodata}mm]`}>
            <Bidata label="Nomor Peserta Ujian" value={result?.code ?? "Unknown"} />
            <Bidata label="NIS/NISN" value={[
              result?.student.index ?? "",
              result?.student.master ?? "",
            ].join('/')} />
            <Bidata label="Nama Lengkap" value={result?.student.personal.name ?? "Unknown"} />
            <Bidata label="Tempat, Tanggal Lahir" value={[
              result?.student.personal.birth.place ?? "Unknown",
              !result?.student.personal.birth.date ? "Unknown" : formatDate({ date: result?.student.personal.birth.date }),
            ].join(', ')} />
            <Bidata label="Agama" value={result?.student.personal.religion ?? "Unknown"} />
          </PDFView>
          <PDFView className={`flex flex-col mt-[3mm] w-[${paperWidth - (marginX * 2)}mm]`}>
            <PDFText>telah menyelesaikan seluruh kompetensi pembelajaran dan telah mengikuti Ujian Sekolah (US) dan dinyatakan</PDFText>
          </PDFView>
          <PDFView className={`flex flex-col mt-[1mm] w-[${paperWidth - (marginX * 2)}mm] items-center justify-center`}>
            <PDFText className={`text-[${fontSize + 13}px] font-bold underline`}>LULUS</PDFText>
          </PDFView>
          <PDFView className={`flex flex-col mt-[1mm] w-[${paperWidth - (marginX * 2)}mm]`}>
            <PDFText>dengan hasil sebagai berikut:</PDFText>
          </PDFView>
          <PDFView className={`flex flex-col mt-[1mm] w-[${paperWidth - (marginX * 2)}mm]`}>
            <PDFView className={`flex flex-col border-t`}>
              <TableData header no={0} name="" score={0} />
              {Object.entries(result?.values ?? {})
                .map(([key, value]) => {
                  return {
                    value,
                    subject: CurriculumK13Subject[key as keyof typeof CurriculumK13Subject],
                  }
                })
                .filter(({ subject }) => subject)
                .sort((a, b) => a.subject.index - b.subject.index)
                .map((row, index) => (
                  <TableData key={index} no={index + 1} name={row.subject.name} score={row.value} />
                ))}
              <PDFView className={`flex flex-row border-l border-b w-[${paperWidth - (marginX * 2)}mm]`}>
                <PDFText className={cn(
                  `border-r p-1 py-0.5 w-[${sizeTable.name + sizeTable.no}mm] font-bold text-center`,
                )}>Rata-rata</PDFText>
                <PDFText className={cn(
                  `border-r p-1 py-0.5 w-[${sizeTable.score}mm] text-center font-bold`,
                )}>{Number(Object.values(result?.values ?? {}).reduce((acc, value) => acc + value, 0) / Object.values(result?.values ?? {}).length).toFixed(2)}</PDFText>
              </PDFView>
            </PDFView>
          </PDFView>
          <PDFView className={`flex flex-col mt-[1mm] w-[${paperWidth - (marginX * 2)}mm]`}>
            <PDFText>Surat Keterangan Lulus (SKL) ini dapat digunakan untuk keperluan Penerimaan Mahasiswa Baru (PMB) atau
              keperluan lain sesuai dengan kebutuhan, dan hanya berlaku sampai dengan diterbitkannya Ijazah Tahun
              Pelajaran {Environment.yearActive}/{Environment.yearActive + 1}.</PDFText>
          </PDFView>
          <PDFView className={`flex flex-row mt-[1mm] w-[${paperWidth - (marginX * 2)}mm]`}>
            <PDFView className={`flex flex-col w-[32mm] h-[42mm] items-center justify-center border ml-auto`}>
              <PDFText>Foto</PDFText>
              <PDFText>3x4</PDFText>
            </PDFView>
            <PDFView className={`flex flex-col w-[70mm] ml-[20mm]`}>
              <PDFText>{import.meta.env.VITE_FEATURE_DOC_ADDRESS}, {formatDate({ date: new Date() })}</PDFText>
              <PDFText>Kepala Sekolah</PDFText>
              <PDFText className={`mt-[24mm] font-bold underline`}>{import.meta.env.VITE_FEATURE_HEAD_NAME}</PDFText>
              <PDFText>{import.meta.env.VITE_FEATURE_HEAD_CODE}</PDFText>
            </PDFView>
          </PDFView>
        </PDFView>
      </PDFPageWithHeader>
    </Document>
  )
}

export default GraduationAdminDocTranscriptPDF
