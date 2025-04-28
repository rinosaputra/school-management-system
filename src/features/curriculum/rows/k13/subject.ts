import { SubjectSchema } from "@/features/subject/schema"

export const CurriculumK13SubjectGroup = {
  a: "a",
  b: "b",
  c1: "c1",
  c2: "c2",
  c3: "c3",
} as const

export type CurriculumK13SubjectGroup = keyof typeof CurriculumK13SubjectGroup

export const CurriculumK13SubjectKey = {
  agama: "agama",
  pkn: "pkn",
  bindo: "bindo",
  mtk: "mtk",
  sejarah: "sejarah",
  bing: "bing",
  sb: "sb",
  pjok: "pjok",
  simdig: "simdig",
  fisika: "fisika",
  kimia: "kimia",
  ipa: "ipa",
  pkwu: "pkwu",
  eb: "eb",
  au: "au",
  tp: "tp",
  kp: "kp",
  ka: "ka",
  otkkp: "otkkp",
  otkpu: "otkpu",
  otkpsp: "otkpsp",
  otkhp: "otkhp",
  gto: "gto",
  tdo: "tdo",
  pdto: "pdto",
  pmsm: "pmsm",
  pssm: "pssm",
  plsm: "plsm",
  pbsm: "pbsm",
  sk: "sk", // Sistem Komputer
  kjd: "kjd", // Komputer dan Jaringan Dasar
  pd: "pd", // Pemrograman Dasar
  ddg: "ddg", // Dasar Desain Grafis
  tjbl: "tjbl", // Teknologi Jaringan Berbasis Luas (WAN)
  aij: "aij", // Administrasi Infrastruktur Jaringan
  asj: "asj", // Administrasi Sistem Jaringan
  tlj: "tlj" // Teknologi Layanan Jaringan
} as const

export type CurriculumK13SubjectKey = keyof typeof CurriculumK13SubjectKey

export type CurriculumK13Subject = Record<CurriculumK13SubjectKey, SubjectSchema & {
  expertises?: (`${number}` | `${number}.${number}` | `${number}.${number}.${number}`)[]
}>

export const CurriculumK13Subject: CurriculumK13Subject = {
  agama: {
    name: "Pendidikan Agama dan Budi Pekerti",
    expertises: ["1.10.2", "3.1.2", "7.2.1"] // TBSM, TKJ, OTKP
  },
  pkn: {
    name: "Pendidikan Pancasila dan Kewarganegaraan",
    expertises: ["1.10.2", "3.1.2", "7.2.1"]
  },
  bindo: {
    name: "Bahasa Indonesia",
    expertises: ["1.10.2", "3.1.2", "7.2.1"]
  },
  mtk: {
    name: "Matematika",
    expertises: ["1.10.2", "3.1.2", "7.2.1"]
  },
  sejarah: {
    name: "Sejarah Indonesia",
    expertises: ["1.10.2", "3.1.2", "7.2.1"]
  },
  bing: {
    name: "Bahasa Inggris dan Bahasa Asing Lainnya",
    expertises: ["1.10.2", "3.1.2", "7.2.1"]
  },
  sb: {
    name: "Seni Budaya",
    expertises: ["1.10.2", "3.1.2", "7.2.1"]
  },
  pjok: {
    name: "Pendidikan Jasmani, Olahraga dan Kesehatan",
    expertises: ["1.10.2", "3.1.2", "7.2.1"]
  },
  simdig: {
    name: "Simulasi dan Komunikasi Digital",
    expertises: ["1.10.2", "3.1.2", "7.2.1"]
  },
  fisika: {
    name: "Fisika",
    expertises: ["1.10.2", "3.1.2"] // TBSM, TKJ
  },
  kimia: {
    name: "Kimia",
    expertises: ["1.10.2", "3.1.2"] // TBSM, TKJ
  },
  ipa: {
    name: "Ilmu Pengetahuan Alam",
    expertises: ["7.2"] // OTKP only
  },
  pkwu: {
    name: "Produk Kreatif dan Kewirausahaan",
    expertises: ["1.10.2", "3.1.2", "7.2.1"]
  },
  eb: {
    name: "Ekonomi Bisnis",
    expertises: ["7.2"] // OTKP only
  },
  au: {
    name: "Administrasi Umum",
    expertises: ["7.2"] // OTKP only
  },
  tp: {
    name: "Teknologi Perkantoran",
    expertises: ["7.2"] // OTKP only
  },
  kp: {
    name: "Korespondensi",
    expertises: ["7.2"] // OTKP only
  },
  ka: {
    name: "Kearsipan",
    expertises: ["7.2"] // OTKP only
  },
  otkkp: {
    name: "Otomatisasi Tata Kelola Kepegawaian",
    expertises: ["7.2.1"] // OTKP only
  },
  otkpu: {
    name: "Otomatisasi Tata Kelola Keuangan",
    expertises: ["7.2.1"] // OTKP only
  },
  otkpsp: {
    name: "Otomatisasi Tata Kelola Sarana dan Prasarana",
    expertises: ["7.2.1"] // OTKP only
  },
  otkhp: {
    name: "Otomatisasi Tata Kelola Humas dan Keprotokolan",
    expertises: ["7.2.1"] // OTKP only
  },
  gto: {
    name: "Gambar Teknik Otomotif",
    expertises: ["1.10"] // TBSM only
  },
  tdo: {
    name: "Teknologi Dasar Otomotif",
    expertises: ["1.10"] // TBSM only
  },
  pdto: {
    name: "Pekerjaan Dasar Teknik Otomotif",
    expertises: ["1.10"] // TBSM only
  },
  pmsm: {
    name: "Pemeliharaan Mesin Sepeda Motor",
    expertises: ["1.10.2"] // TBSM only
  },
  pssm: {
    name: "Pemeliharaan Sasis Sepeda Motor",
    expertises: ["1.10.2"] // TBSM only
  },
  plsm: {
    name: "Pemeliharaan Listrik Sepeda Motor",
    expertises: ["1.10.2"] // TBSM only
  },
  pbsm: {
    name: "Pengelolaan Bengkel Sepeda Motor",
    expertises: ["1.10.2"] // TBSM only
  },
  // Additional subjects from TKJ
  sk: {
    name: "Sistem Komputer",
    expertises: ["3.1"] // TKJ only
  },
  kjd: {
    name: "Komputer dan Jaringan Dasar",
    expertises: ["3.1"] // TKJ only
  },
  pd: {
    name: "Pemrograman Dasar",
    expertises: ["3.1"] // TKJ only
  },
  ddg: {
    name: "Dasar Desain Grafis",
    expertises: ["3.1"] // TKJ only
  },
  tjbl: {
    name: "Teknologi Jaringan Berbasis Luas (WAN)",
    expertises: ["3.1.2"] // TKJ only
  },
  aij: {
    name: "Administrasi Infrastruktur Jaringan",
    expertises: ["3.1.2"] // TKJ only
  },
  asj: {
    name: "Administrasi Sistem Jaringan",
    expertises: ["3.1.2"] // TKJ only
  },
  tlj: {
    name: "Teknologi Layanan Jaringan",
    expertises: ["3.1.2"] // TKJ only
  }
}