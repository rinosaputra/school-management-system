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
  tlj: "tlj", // Teknologi Layanan Jaringan
  blam: "blam", // Bahasa Lampung
  pak: "pak", // Pendidikan Anti Korupsi
} as const

export type CurriculumK13SubjectKey = keyof typeof CurriculumK13SubjectKey

export type CurriculumK13Subject = Record<CurriculumK13SubjectKey, SubjectSchema & {
  group: CurriculumK13SubjectGroup
  expertises?: (`${number}` | `${number}.${number}` | `${number}.${number}.${number}`)[]
}>

export const CurriculumK13Subject: CurriculumK13Subject = {
  agama: {
    name: "Pendidikan Agama dan Budi Pekerti",
    group: "a",
  },
  pkn: {
    name: "Pendidikan Pancasila dan Kewarganegaraan",
    group: "a",
  },
  bindo: {
    name: "Bahasa Indonesia",
    group: "a",
  },
  mtk: {
    name: "Matematika",
    group: "a",
  },
  sejarah: {
    name: "Sejarah Indonesia",
    group: "a",
  },
  bing: {
    name: "Bahasa Inggris",
    group: "a",
  },
  sb: {
    name: "Seni Budaya",
    group: "b",
  },
  pjok: {
    name: "Pendidikan Jasmani, Olahraga dan Kesehatan",
    group: "b",
  },
  simdig: {
    name: "Simulasi dan Komunikasi Digital",
    group: "c1",
  },
  fisika: {
    name: "Fisika",
    group: "c1",
    expertises: ["1.10.2", "3.1.2"] // TBSM, TKJ
  },
  kimia: {
    name: "Kimia",
    group: "c1",
    expertises: ["1.10.2", "3.1.2"] // TBSM, TKJ
  },
  ipa: {
    name: "Ilmu Pengetahuan Alam",
    group: "c1",
    expertises: ["7.2"] // OTKP only
  },
  pkwu: {
    name: "Produk Kreatif dan Kewirausahaan",
    group: "c2",
  },
  eb: {
    name: "Ekonomi Bisnis",
    group: "c2",
    expertises: ["7.2"] // OTKP only
  },
  au: {
    name: "Administrasi Umum",
    group: "c2",
    expertises: ["7.2"] // OTKP only
  },
  tp: {
    name: "Teknologi Perkantoran",
    group: "c2",
    expertises: ["7.2"] // OTKP only
  },
  kp: {
    name: "Korespondensi",
    group: "c2",
    expertises: ["7.2"] // OTKP only
  },
  ka: {
    name: "Kearsipan",
    group: "c2",
    expertises: ["7.2"] // OTKP only
  },
  otkkp: {
    name: "Otomatisasi Tata Kelola Kepegawaian",
    group: "c3",
    expertises: ["7.2.1"] // OTKP only
  },
  otkpu: {
    name: "Otomatisasi Tata Kelola Keuangan",
    group: "c3",
    expertises: ["7.2.1"] // OTKP only
  },
  otkpsp: {
    name: "Otomatisasi Tata Kelola Sarana dan Prasarana",
    group: "c3",
    expertises: ["7.2.1"] // OTKP only
  },
  otkhp: {
    name: "Otomatisasi Tata Kelola Humas dan Keprotokolan",
    group: "c3",
    expertises: ["7.2.1"] // OTKP only
  },
  gto: {
    name: "Gambar Teknik Otomotif",
    group: "c2",
    expertises: ["1.10"] // TBSM only
  },
  tdo: {
    name: "Teknologi Dasar Otomotif",
    group: "c2",
    expertises: ["1.10"] // TBSM only
  },
  pdto: {
    name: "Pekerjaan Dasar Teknik Otomotif",
    group: "c3",
    expertises: ["1.10"] // TBSM only
  },
  pmsm: {
    name: "Pemeliharaan Mesin Sepeda Motor",
    group: "c3",
    expertises: ["1.10.2"] // TBSM only
  },
  pssm: {
    name: "Pemeliharaan Sasis Sepeda Motor",
    group: "c3",
    expertises: ["1.10.2"] // TBSM only
  },
  plsm: {
    name: "Pemeliharaan Listrik Sepeda Motor",
    group: "c3",
    expertises: ["1.10.2"] // TBSM only
  },
  pbsm: {
    name: "Pengelolaan Bengkel Sepeda Motor",
    group: "c3",
    expertises: ["1.10.2"] // TBSM only
  },
  // Additional subjects from TKJ
  sk: {
    name: "Sistem Komputer",
    group: "c3",
    expertises: ["3.1"] // TKJ only
  },
  kjd: {
    name: "Komputer dan Jaringan Dasar",
    group: "c3",
    expertises: ["3.1"] // TKJ only
  },
  pd: {
    name: "Pemrograman Dasar",
    group: "c3",
    expertises: ["3.1"] // TKJ only
  },
  ddg: {
    name: "Dasar Desain Grafis",
    group: "c3",
    expertises: ["3.1"] // TKJ only
  },
  tjbl: {
    name: "Teknologi Jaringan Berbasis Luas (WAN)",
    group: "c3",
    expertises: ["3.1.2"] // TKJ only
  },
  aij: {
    name: "Administrasi Infrastruktur Jaringan",
    group: "c3",
    expertises: ["3.1.2"] // TKJ only
  },
  asj: {
    name: "Administrasi Sistem Jaringan",
    group: "c3",
    expertises: ["3.1.2"] // TKJ only
  },
  tlj: {
    name: "Teknologi Layanan Jaringan",
    group: "c3",
    expertises: ["3.1.2"] // TKJ only
  },
  blam: {
    name: "Bahasa Lampung",
    group: "a",
  },
  pak: {
    name: "Pendidikan Anti Korupsi",
    group: "a",
  },
}