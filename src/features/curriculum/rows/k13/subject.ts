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
  kk: "kk", // Kompetensi Keahlian
  dpk: "dpk", // Dasar Program Keahlian
} as const

export type CurriculumK13SubjectKey = keyof typeof CurriculumK13SubjectKey

export type CurriculumK13Subject = Record<CurriculumK13SubjectKey, SubjectSchema & {
  group: CurriculumK13SubjectGroup
  expertises?: (`${number}` | `${number}.${number}` | `${number}.${number}.${number}`)[]
  index: number
}>

export const CurriculumK13Subject: CurriculumK13Subject = {
  agama: {
    name: "Pendidikan Agama dan Budi Pekerti",
    group: "a",
    index: 1
  },
  pkn: {
    name: "Pendidikan Pancasila dan Kewarganegaraan",
    group: "a",
    index: 2
  },
  bindo: {
    name: "Bahasa Indonesia",
    group: "a",
    index: 3
  },
  mtk: {
    name: "Matematika",
    group: "a",
    index: 4
  },
  sejarah: {
    name: "Sejarah Indonesia",
    group: "a",
    index: 5
  },
  bing: {
    name: "Bahasa Inggris",
    group: "a",
    index: 6
  },
  sb: {
    name: "Seni Budaya",
    group: "b",
    index: 7
  },
  pjok: {
    name: "Pendidikan Jasmani, Olahraga dan Kesehatan",
    group: "b",
    index: 8
  },
  simdig: {
    name: "Simulasi dan Komunikasi Digital",
    group: "c1",
    index: 9
  },
  fisika: {
    name: "Fisika",
    group: "c1",
    expertises: ["1.10.2", "3.1.2"], // TBSM, TKJ
    index: 10
  },
  kimia: {
    name: "Kimia",
    group: "c1",
    expertises: ["1.10.2", "3.1.2"], // TBSM, TKJ
    index: 11
  },
  ipa: {
    name: "Ilmu Pengetahuan Alam",
    group: "c1",
    expertises: ["7.2"], // OTKP only
    index: 12
  },
  pkwu: {
    name: "Produk Kreatif dan Kewirausahaan",
    group: "c2",
    index: 13
  },
  blam: {
    name: "Bahasa Lampung",
    group: "a",
    index: 13.1,
  },
  pak: {
    name: "Pendidikan Anti Korupsi",
    group: "a",
    index: 13.2,
  },
  eb: {
    name: "Ekonomi Bisnis",
    level: ['smk'],
    group: "c2",
    expertises: ["7.2"], // OTKP only
    index: 14
  },
  au: {
    name: "Administrasi Umum",
    level: ['smk'],
    group: "c2",
    expertises: ["7.2"], // OTKP only
    index: 15
  },
  tp: {
    name: "Teknologi Perkantoran",
    level: ['smk'],
    group: "c2",
    expertises: ["7.2"], // OTKP only
    index: 16
  },
  kp: {
    name: "Korespondensi",
    level: ['smk'],
    group: "c2",
    expertises: ["7.2"], // OTKP only
    index: 17
  },
  ka: {
    name: "Kearsipan",
    level: ['smk'],
    group: "c2",
    expertises: ["7.2"], // OTKP only
    index: 18
  },
  otkkp: {
    name: "Otomatisasi Tata Kelola Kepegawaian",
    level: ['smk'],
    group: "c3",
    index: 19,
    expertises: ["7.2.1"] // OTKP only
  },
  otkpu: {
    name: "Otomatisasi Tata Kelola Keuangan",
    level: ['smk'],
    group: "c3",
    index: 20,
    expertises: ["7.2.1"] // OTKP only
  },
  otkpsp: {
    name: "Otomatisasi Tata Kelola Sarana dan Prasarana",
    level: ['smk'],
    group: "c3",
    index: 21,
    expertises: ["7.2.1"] // OTKP only
  },
  otkhp: {
    name: "Otomatisasi Tata Kelola Humas dan Keprotokolan",
    level: ['smk'],
    group: "c3",
    index: 22,
    expertises: ["7.2.1"] // OTKP only
  },
  gto: {
    name: "Gambar Teknik Otomotif",
    level: ['smk'],
    group: "c2",
    index: 23,
    expertises: ["1.10"] // TBSM only
  },
  tdo: {
    name: "Teknologi Dasar Otomotif",
    level: ['smk'],
    group: "c2",
    index: 24,
    expertises: ["1.10"] // TBSM only
  },
  pdto: {
    name: "Pekerjaan Dasar Teknik Otomotif",
    level: ['smk'],
    group: "c3",
    index: 25,
    expertises: ["1.10"] // TBSM only
  },
  pmsm: {
    name: "Pemeliharaan Mesin Sepeda Motor",
    level: ['smk'],
    group: "c3",
    index: 26,
    expertises: ["1.10.2"] // TBSM only
  },
  pssm: {
    name: "Pemeliharaan Sasis Sepeda Motor",
    level: ['smk'],
    group: "c3",
    index: 27,
    expertises: ["1.10.2"] // TBSM only
  },
  plsm: {
    name: "Pemeliharaan Listrik Sepeda Motor",
    level: ['smk'],
    group: "c3",
    index: 28,
    expertises: ["1.10.2"] // TBSM only
  },
  pbsm: {
    name: "Pengelolaan Bengkel Sepeda Motor",
    level: ['smk'],
    group: "c3",
    index: 29,
    expertises: ["1.10.2"] // TBSM only
  },
  // Additional subjects from TKJ
  sk: {
    name: "Sistem Komputer",
    level: ['smk'],
    group: "c3",
    index: 30,
    expertises: ["3.1"] // TKJ only
  },
  kjd: {
    name: "Komputer dan Jaringan Dasar",
    level: ['smk'],
    group: "c3",
    index: 31,
    expertises: ["3.1"] // TKJ only
  },
  pd: {
    name: "Pemrograman Dasar",
    level: ['smk'],
    group: "c3",
    index: 32,
    expertises: ["3.1"] // TKJ only
  },
  ddg: {
    name: "Dasar Desain Grafis",
    level: ['smk'],
    group: "c3",
    index: 33,
    expertises: ["3.1"] // TKJ only
  },
  tjbl: {
    name: "Teknologi Jaringan Berbasis Luas (WAN)",
    level: ['smk'],
    group: "c3",
    index: 34,
    expertises: ["3.1.2"] // TKJ only
  },
  aij: {
    name: "Administrasi Infrastruktur Jaringan",
    level: ['smk'],
    group: "c3",
    index: 35,
    expertises: ["3.1.2"] // TKJ only
  },
  asj: {
    name: "Administrasi Sistem Jaringan",
    level: ['smk'],
    group: "c3",
    index: 36,
    expertises: ["3.1.2"] // TKJ only
  },
  tlj: {
    name: "Teknologi Layanan Jaringan",
    level: ['smk'],
    group: "c3",
    index: 37,
    expertises: ["3.1.2"] // TKJ only
  },
  kk: {
    name: "Kompetensi Keahlian",
    level: ['smk'],
    group: "c3",
    index: 40,
  },
  dpk: {
    name: "Dasar Program Keahlian",
    level: ['smk'],
    group: "c2",
    index: 41,
  },
}