import { ExpertiseAreaSchema, ExpertiseCompetencySchema, ExpertiseProgramSchema } from "@/features/expertise/schema";


export type CurriculumK13ExpertiseRows = Record<number, {
  result: ExpertiseAreaSchema
  children: Record<number, ExpertiseProgramSchema & {
    children: Record<number, ExpertiseCompetencySchema>
  }>
}>

export const CurriculumK13ExpertiseRows: CurriculumK13ExpertiseRows = {
  1: {
    result: { name: "Teknologi dan Rekayasa" },
    children: {
      1: {
        name: "Teknik Konstruksi dan Properti",
        children: {
          1: { index: 1, name: "Konstruksi Gedung, Sanitasi dan Perawatan", year: 4 },
          2: { index: 2, name: "Konstruksi Jalan, Irigasi dan Jembatan", year: 4 },
          3: { index: 3, name: "Bisnis Konstruksi dan Properti", year: 4 },
          4: { index: 4, name: "Desain Pemodelan dan Informasi Bangunan", year: 4 }
        }
      },
      2: {
        name: "Teknik Geomatika dan Geospasial",
        children: {
          5: { index: 5, name: "Teknik Geomatika", year: 4 }
        }
      },
      3: {
        name: "Teknik Ketenagalistrikan",
        children: {
          6: { index: 6, name: "Teknik Pembangkit Tenaga Listrik", year: 4 },
          7: { index: 7, name: "Teknik Jaringan Tenaga Listrik", year: 4 },
          8: { index: 8, name: "Teknik Instalasi Tenaga Listrik", year: 4 },
          9: { index: 9, name: "Teknik Otomasi Industri", year: 4 },
          10: { index: 10, name: "Teknik Pendingin dan Tata Udara", year: 4 }
        }
      },
      4: {
        name: "Teknik Mesin",
        children: {
          11: { index: 11, name: "Teknik Pemesinan", year: 4 },
          12: { index: 12, name: "Teknik Pengelasan", year: 4 },
          13: { index: 13, name: "Teknik Pengecoran Logam", year: 4 },
          14: { index: 14, name: "Teknik Mekanik Industri", year: 4 },
          15: { index: 15, name: "Teknik Perancangan dan Gambar Mesin", year: 4 }
        }
      },
      5: {
        name: "Teknik Grafika",
        children: {
          16: { index: 16, name: "Desain Grafika", year: 4 },
          17: { index: 17, name: "Produksi Grafika", year: 4 }
        }
      },
      6: {
        name: "Teknik Instrumentasi Industri",
        children: {
          18: { index: 18, name: "Teknik Instrumentasi Logam", year: 4 },
          19: { index: 19, name: "Teknik Instrumentasi Gelas dan Kimia", year: 4 }
        }
      },
      7: {
        name: "Teknik Industri",
        children: {
          20: { index: 20, name: "Teknik Pengendalian Produksi", year: 3 },
          21: { index: 21, name: "Teknik Tata Kelola Logistik", year: 3 }
        }
      },
      8: {
        name: "Teknologi Tekstil",
        children: {
          22: { index: 22, name: "Teknik Pemintalan Serat Buatan", year: 3 },
          23: { index: 23, name: "Teknik Pembuatan Benang", year: 3 },
          24: { index: 24, name: "Teknik Pembuatan Kain", year: 3 },
          25: { index: 25, name: "Teknik Penyempurnaan Tekstil", year: 3 }
        }
      },
      9: {
        name: "Teknik Kimia",
        children: {
          26: { index: 26, name: "Analisis Pengujian Laboratorium", year: 3 },
          27: { index: 27, name: "Kimia Industri", year: 3 },
          28: { index: 28, name: "Kimia Analisis", year: 3 },
          29: { index: 29, name: "Kimia Tekstil", year: 3 }
        }
      },
      10: {
        name: "Teknik Otomotif",
        children: {
          30: { index: 30, name: "Teknik Kendaraan Ringan Otomotif", year: 3 },
          31: { index: 31, name: "Teknik dan Bisnis Sepeda Motor", year: 3 },
          32: { index: 32, name: "Teknik Alat Berat", year: 3 },
          33: { index: 33, name: "Teknik Bodi Otomotif", year: 3 },
          34: { index: 34, name: "Teknik Ototronik", year: 3 },
          35: { index: 35, name: "Teknik dan Manajemen Perawatan Otomotif", year: 3 },
          36: { index: 36, name: "Otomotif Daya dan Konversi Energi", year: 3 }
        }
      },
      11: {
        name: "Teknik Perkapalan",
        children: {
          37: { index: 37, name: "Konstruksi Kapal Baja", year: 3 },
          38: { index: 38, name: "Konstruksi Kapal Non Baja", year: 3 },
          39: { index: 39, name: "Teknik Pemesinan Kapal", year: 3 },
          40: { index: 40, name: "Teknik Pengelasan Kapal", year: 3 },
          41: { index: 41, name: "Teknik Kelistrikan Kapal", year: 3 },
          42: { index: 42, name: "Desain dan Rancang Bangun Kapal", year: 3 },
          43: { index: 43, name: "Interior Kapal", year: 3 }
        }
      },
      12: {
        name: "Teknik Elektronika",
        children: {
          44: { index: 44, name: "Teknik Audio Video Industri", year: 3 },
          45: { index: 45, name: "Teknik Elektronika Industri", year: 3 },
          46: { index: 46, name: "Teknik Mekatronika", year: 3 },
          47: { index: 47, name: "Teknik Elektronika Daya dan Komunikasi", year: 3 },
          48: { index: 48, name: "Instrumentasi Medik", year: 3 }
        }
      }
    }
  },
  2: {
    result: { name: "Energi dan Pertambangan" },
    children: {
      1: {
        name: "Teknik Perminyakan",
        children: {
          49: { index: 49, name: "Teknik Produksi Minyak dan Gas", year: 3 },
          50: { index: 50, name: "Teknik Pemboran Minyak dan Gas", year: 3 },
          51: { index: 51, name: "Teknik Pengolahan Minyak, Gas dan Petrokimia", year: 3 }
        }
      },
      2: {
        name: "Geologi Pertambangan",
        children: {
          52: { index: 52, name: "Geologi Pertambangan", year: 3 }
        }
      },
      3: {
        name: "Teknik Energi Terbarukan",
        children: {
          53: { index: 53, name: "Teknik Energi Surya, Hidro, dan Angin", year: 3 },
          54: { index: 54, name: "Teknik Energi Biomassa", year: 3 }
        }
      }
    }
  },
  3: {
    result: { name: "Teknologi Informasi dan Komunikasi" },
    children: {
      1: {
        name: "Teknik Komputer dan Informatika",
        children: {
          55: { index: 55, name: "Rekayasa Perangkat Lunak", year: 3 },
          56: { index: 56, name: "Teknik Komputer dan Jaringan", year: 3 },
          57: { index: 57, name: "Multimedia", year: 3 },
          58: { index: 58, name: "Sistem Informatika, Jaringan dan Aplikasi", year: 3 }
        }
      },
      2: {
        name: "Teknik Telekomunikasi",
        children: {
          59: { index: 59, name: "Teknik Transmisi Telekomunikasi", year: 3 },
          60: { index: 60, name: "Teknik Jaringan Akses Telekomunikasi", year: 3 }
        }
      }
    }
  },
  4: {
    result: { name: "Kesehatan dan Pekerjaan Sosial" },
    children: {
      1: {
        name: "Keperawatan",
        children: {
          61: { index: 61, name: "Asisten Keperawatan", year: 3 }
        }
      },
      2: {
        name: "Kesehatan Gigi",
        children: {
          62: { index: 62, name: "Dental Asisten", year: 3 }
        }
      },
      3: {
        name: "Teknologi Laboratorium Medik",
        children: {
          63: { index: 63, name: "Teknologi Laboratorium Medik", year: 3 }
        }
      },
      4: {
        name: "Farmasi",
        children: {
          64: { index: 64, name: "Farmasi Klinis dan Komunitas", year: 3 },
          65: { index: 65, name: "Farmasi Industri", year: 3 }
        }
      },
      5: {
        name: "Pekerjaan Sosial",
        children: {
          66: { index: 66, name: "Social Care (Keperawatan Sosial)", year: 3 },
          67: { index: 67, name: "Caregiver", year: 3 }
        }
      }
    }
  },
  5: {
    result: { name: "Agribisnis dan Agroteknologi" },
    children: {
      1: {
        name: "Agribisnis Tanaman",
        children: {
          68: { index: 68, name: "Agribisnis Tanaman Pangan dan Hortikultura", year: 3 },
          69: { index: 69, name: "Agribisnis Tanaman Perkebunan", year: 3 },
          70: { index: 70, name: "Pemuliaan dan Perbenihan Tanaman", year: 3 },
          71: { index: 71, name: "Lanskap dan Pertamanan", year: 3 },
          72: { index: 72, name: "Produksi dan Pengelolaan Perkebunan", year: 3 },
          73: { index: 73, name: "Agribisnis Organik Ekologi", year: 3 }
        }
      },
      2: {
        name: "Agribisnis Ternak",
        children: {
          74: { index: 74, name: "Agribisnis Ternak Ruminansia", year: 3 },
          75: { index: 75, name: "Agribisnis Ternak Unggas", year: 3 },
          76: { index: 76, name: "Industri Peternakan", year: 3 }
        }
      },
      3: {
        name: "Kesehatan Hewan",
        children: {
          77: { index: 77, name: "Keperawatan Hewan", year: 3 },
          78: { index: 78, name: "Kesehatan dan Reproduksi Hewan", year: 3 }
        }
      },
      4: {
        name: "Agribisnis Pengolahan Hasil Pertanian",
        children: {
          79: { index: 79, name: "Agribisnis Pengolahan Hasil Pertanian", year: 3 },
          80: { index: 80, name: "Pengawasan Mutu Hasil Pertanian", year: 3 },
          81: { index: 81, name: "Agroindustri", year: 3 }
        }
      },
      5: {
        name: "Teknik Pertanian",
        children: {
          82: { index: 82, name: "Alat Mesin Pertanian", year: 3 },
          83: { index: 83, name: "Otomatisasi Pertanian", year: 3 }
        }
      },
      6: {
        name: "Kehutanan",
        children: {
          84: { index: 84, name: "Teknik Inventarisasi dan Pemetaan Hutan", year: 3 },
          85: { index: 85, name: "Teknik Konservasi Sumber Daya Alam", year: 3 },
          86: { index: 86, name: "Teknik Rehabilitasi dan Reklamasi Hutan", year: 3 },
          87: { index: 87, name: "Teknologi Produksi Hasil Hutan", year: 3 }
        }
      }
    }
  },
  6: {
    result: { name: "Kemaritiman" },
    children: {
      1: {
        name: "Pelayaran Kapal Penangkap Ikan",
        children: {
          88: { index: 88, name: "Nautika Kapal Penangkap Ikan", year: 3 },
          89: { index: 89, name: "Teknika Kapal Penangkap Ikan", year: 3 }
        }
      },
      2: {
        name: "Pelayaran Kapal Niaga",
        children: {
          90: { index: 90, name: "Nautika Kapal Niaga", year: 3 }
        }
      },
      3: {
        name: "Perikanan",
        children: {
          91: { index: 91, name: "Agribisnis Perikanan Air Tawar", year: 3 },
          92: { index: 92, name: "Agribisnis Perikanan Air Payau dan Laut", year: 3 },
          93: { index: 93, name: "Agribisnis Ikan Hias", year: 3 },
          94: { index: 94, name: "Agribisnis Rumput Laut", year: 3 },
          95: { index: 95, name: "Industri Perikanan Laut", year: 3 }
        }
      },
      4: {
        name: "Pengolahan Hasil Perikanan",
        children: {
          96: { index: 96, name: "Agribisnis Pengolahan Hasil Perikanan", year: 3 }
        }
      }
    }
  },
  7: {
    result: { name: "Bisnis dan Manajemen" },
    children: {
      1: {
        name: "Bisnis dan Pemasaran",
        children: {
          97: { index: 97, name: "Bisnis Daring dan Pemasaran", year: 3 }
        }
      },
      2: {
        name: "Manajemen Perkantoran",
        children: {
          98: { index: 98, name: "Otomatisasi dan Tata Kelola Perkantoran", year: 3 }
        }
      },
      3: {
        name: "Akuntansi dan Keuangan",
        children: {
          99: { index: 99, name: "Akuntansi dan Keuangan Lembaga", year: 3 },
          100: { index: 100, name: "Perbankan dan Keuangan Mikro", year: 3 },
          101: { index: 101, name: "Perbankan Syariah", year: 3 }
        }
      }
    }
  },
  8: {
    result: { name: "Pariwisata" },
    children: {
      1: {
        name: "Perhotelan dan Jasa Pariwisata",
        children: {
          102: { index: 102, name: "Usaha Perjalanan Wisata", year: 3 },
          103: { index: 103, name: "Perhotelan", year: 3 },
          104: { index: 104, name: "Wisata Bahari dan Ekowisata", year: 3 }
        }
      },
      2: {
        name: "Kuliner",
        children: {
          105: { index: 105, name: "Tata Boga", year: 3 }
        }
      },
      3: {
        name: "Tata Kecantikan",
        children: {
          106: { index: 106, name: "Tata Kecantikan Kulit dan Rambut", year: 3 },
          107: { index: 107, name: "Spa dan Beauty Therapy", year: 3 }
        }
      },
      4: {
        name: "Tata Busana",
        children: {
          108: { index: 108, name: "Tata Busana", year: 3 },
          109: { index: 109, name: "Desain Fesyen", year: 3 }
        }
      }
    }
  },
  9: {
    result: { name: "Seni dan Industri Kreatif" },
    children: {
      1: {
        name: "Seni Rupa",
        children: {
          110: { index: 110, name: "Seni Lukis", year: 3 },
          111: { index: 111, name: "Seni Patung", year: 3 },
          112: { index: 112, name: "Desain Komunikasi Visual", year: 3 },
          113: { index: 113, name: "Desain Interior dan Teknik Furnitur", year: 3 },
          114: { index: 114, name: "Animasi", year: 3 }
        }
      },
      2: {
        name: "Desain dan Produk Kreatif Kriya",
        children: {
          115: { index: 115, name: "Kriya Kreatif Batik dan Tekstil", year: 3 },
          116: { index: 116, name: "Kriya Kreatif Kulit dan Imitasi", year: 3 },
          117: { index: 117, name: "Kriya Kreatif Keramik", year: 3 },
          118: { index: 118, name: "Kriya Kreatif Logam dan Perhiasan", year: 3 },
          119: { index: 119, name: "Kriya Kreatif Kayu dan Rotan", year: 3 }
        }
      },
      3: {
        name: "Seni Musik",
        children: {
          120: { index: 120, name: "Seni Musik Klasik", year: 3 },
          121: { index: 121, name: "Seni Musik Populer", year: 3 }
        }
      },
      4: {
        name: "Seni Tari",
        children: {
          122: { index: 122, name: "Seni Tari", year: 3 },
          123: { index: 123, name: "Penataan Tari", year: 3 }
        }
      },
      5: {
        name: "Seni Karawitan",
        children: {
          124: { index: 124, name: "Seni Karawitan", year: 3 },
          125: { index: 125, name: "Penataan Karawitan", year: 3 }
        }
      },
      6: {
        name: "Seni Pedalangan",
        children: {
          126: { index: 126, name: "Seni Pedalangan", year: 3 }
        }
      },
      7: {
        name: "Seni Teater",
        children: {
          127: { index: 127, name: "Pemeranan", year: 3 },
          128: { index: 128, name: "Tata Artistik Teater", year: 3 }
        }
      },
      8: {
        name: "Seni Broadcasting dan Film",
        children: {
          129: { index: 129, name: "Produksi dan Siaran Program Radio", year: 3 },
          130: { index: 130, name: "Produksi dan Siaran Program Televisi", year: 3 },
          131: { index: 131, name: "Produksi Film dan Program Televisi", year: 3 }
        }
      }
    }
  }
};

export type CurriculumK13ExpertiseRowsKey = Record<`${number}.${number}.${number}`, [number, number, number]>

export const CurriculumK13ExpertiseRowsKey: CurriculumK13ExpertiseRowsKey = {
  // Bidang 1: Teknologi dan Rekayasa
  '1.1.1': [1, 1, 1],   // Konstruksi Gedung, Sanitasi dan Perawatan
  '1.1.2': [1, 1, 2],   // Konstruksi Jalan, Irigasi dan Jembatan
  '1.1.3': [1, 1, 3],   // Bisnis Konstruksi dan Properti
  '1.1.4': [1, 1, 4],   // Desain Pemodelan dan Informasi Bangunan
  '1.2.1': [1, 2, 5],   // Teknik Geomatika
  '1.3.1': [1, 3, 6],   // Teknik Pembangkit Tenaga Listrik
  '1.3.2': [1, 3, 7],   // Teknik Jaringan Tenaga Listrik
  '1.3.3': [1, 3, 8],   // Teknik Instalasi Tenaga Listrik
  '1.3.4': [1, 3, 9],   // Teknik Otomasi Industri
  '1.3.5': [1, 3, 10],  // Teknik Pendingin dan Tata Udara
  '1.4.1': [1, 4, 11],  // Teknik Pemesinan
  '1.4.2': [1, 4, 12],  // Teknik Pengelasan
  '1.4.3': [1, 4, 13],  // Teknik Pengecoran Logam
  '1.4.4': [1, 4, 14],  // Teknik Mekanik Industri
  '1.4.5': [1, 4, 15],  // Teknik Perancangan dan Gambar Mesin
  '1.5.1': [1, 5, 16],  // Desain Grafika
  '1.5.2': [1, 5, 17],  // Produksi Grafika
  '1.6.1': [1, 6, 18],  // Teknik Instrumentasi Logam
  '1.6.2': [1, 6, 19],  // Teknik Instrumentasi Gelas dan Kimia
  '1.7.1': [1, 7, 20],  // Teknik Pengendalian Produksi
  '1.7.2': [1, 7, 21],  // Teknik Tata Kelola Logistik
  '1.8.1': [1, 8, 22],  // Teknik Pemintalan Serat Buatan
  '1.8.2': [1, 8, 23],  // Teknik Pembuatan Benang
  '1.8.3': [1, 8, 24],  // Teknik Pembuatan Kain
  '1.8.4': [1, 8, 25],  // Teknik Penyempurnaan Tekstil
  '1.9.1': [1, 9, 26],  // Analisis Pengujian Laboratorium
  '1.9.2': [1, 9, 27],  // Kimia Industri
  '1.9.3': [1, 9, 28],  // Kimia Analisis
  '1.9.4': [1, 9, 29],  // Kimia Tekstil
  '1.10.1': [1, 10, 30], // Teknik Kendaraan Ringan Otomotif
  '1.10.2': [1, 10, 31], // Teknik dan Bisnis Sepeda Motor
  '1.10.3': [1, 10, 32], // Teknik Alat Berat
  '1.10.4': [1, 10, 33], // Teknik Bodi Otomotif
  '1.10.5': [1, 10, 34], // Teknik Ototronik
  '1.10.6': [1, 10, 35], // Teknik dan Manajemen Perawatan Otomotif
  '1.10.7': [1, 10, 36], // Otomotif Daya dan Konversi Energi
  '1.11.1': [1, 11, 37], // Konstruksi Kapal Baja
  '1.11.2': [1, 11, 38], // Konstruksi Kapal Non Baja
  '1.11.3': [1, 11, 39], // Teknik Pemesinan Kapal
  '1.11.4': [1, 11, 40], // Teknik Pengelasan Kapal
  '1.11.5': [1, 11, 41], // Teknik Kelistrikan Kapal
  '1.11.6': [1, 11, 42], // Desain dan Rancang Bangun Kapal
  '1.11.7': [1, 11, 43], // Interior Kapal
  '1.12.1': [1, 12, 44], // Teknik Audio Video Industri
  '1.12.2': [1, 12, 45], // Teknik Elektronika Industri
  '1.12.3': [1, 12, 46], // Teknik Mekatronika
  '1.12.4': [1, 12, 47], // Teknik Elektronika Daya dan Komunikasi
  '1.12.5': [1, 12, 48], // Instrumentasi Medik

  // Bidang 2: Energi dan Pertambangan
  '2.1.1': [2, 1, 49],  // Teknik Produksi Minyak dan Gas
  '2.1.2': [2, 1, 50],  // Teknik Pemboran Minyak dan Gas
  '2.1.3': [2, 1, 51],  // Teknik Pengolahan Minyak, Gas dan Petrokimia
  '2.2.1': [2, 2, 52],  // Geologi Pertambangan
  '2.3.1': [2, 3, 53],  // Teknik Energi Surya, Hidro, dan Angin
  '2.3.2': [2, 3, 54],  // Teknik Energi Biomassa

  // Bidang 3: Teknologi Informasi dan Komunikasi
  '3.1.1': [3, 1, 55],  // Rekayasa Perangkat Lunak
  '3.1.2': [3, 1, 56],  // Teknik Komputer dan Jaringan
  '3.1.3': [3, 1, 57],  // Multimedia
  '3.1.4': [3, 1, 58],  // Sistem Informatika, Jaringan dan Aplikasi
  '3.2.1': [3, 2, 59],  // Teknik Transmisi Telekomunikasi
  '3.2.2': [3, 2, 60],  // Teknik Jaringan Akses Telekomunikasi

  // Bidang 4: Kesehatan dan Pekerjaan Sosial
  '4.1.1': [4, 1, 61],  // Asisten Keperawatan
  '4.2.1': [4, 2, 62],  // Dental Asisten
  '4.3.1': [4, 3, 63],  // Teknologi Laboratorium Medik
  '4.4.1': [4, 4, 64],  // Farmasi Klinis dan Komunitas
  '4.4.2': [4, 4, 65],  // Farmasi Industri
  '4.5.1': [4, 5, 66],  // Social Care (Keperawatan Sosial)
  '4.5.2': [4, 5, 67],  // Caregiver

  // Bidang 5: Agribisnis dan Agroteknologi
  '5.1.1': [5, 1, 68],  // Agribisnis Tanaman Pangan dan Hortikultura
  '5.1.2': [5, 1, 69],  // Agribisnis Tanaman Perkebunan
  '5.1.3': [5, 1, 70],  // Pemuliaan dan Perbenihan Tanaman
  '5.1.4': [5, 1, 71],  // Lanskap dan Pertamanan
  '5.1.5': [5, 1, 72],  // Produksi dan Pengelolaan Perkebunan
  '5.1.6': [5, 1, 73],  // Agribisnis Organik Ekologi
  '5.2.1': [5, 2, 74],  // Agribisnis Ternak Ruminansia
  '5.2.2': [5, 2, 75],  // Agribisnis Ternak Unggas
  '5.2.3': [5, 2, 76],  // Industri Peternakan
  '5.3.1': [5, 3, 77],  // Keperawatan Hewan
  '5.3.2': [5, 3, 78],  // Kesehatan dan Reproduksi Hewan
  '5.4.1': [5, 4, 79],  // Agribisnis Pengolahan Hasil Pertanian
  '5.4.2': [5, 4, 80],  // Pengawasan Mutu Hasil Pertanian
  '5.4.3': [5, 4, 81],  // Agroindustri
  '5.5.1': [5, 5, 82],  // Alat Mesin Pertanian
  '5.5.2': [5, 5, 83],  // Otomatisasi Pertanian
  '5.6.1': [5, 6, 84],  // Teknik Inventarisasi dan Pemetaan Hutan
  '5.6.2': [5, 6, 85],  // Teknik Konservasi Sumber Daya Alam
  '5.6.3': [5, 6, 86],  // Teknik Rehabilitasi dan Reklamasi Hutan
  '5.6.4': [5, 6, 87],  // Teknologi Produksi Hasil Hutan

  // Bidang 6: Kemaritiman
  '6.1.1': [6, 1, 88],  // Nautika Kapal Penangkap Ikan
  '6.1.2': [6, 1, 89],  // Teknika Kapal Penangkap Ikan
  '6.2.1': [6, 2, 90],  // Nautika Kapal Niaga
  '6.3.1': [6, 3, 91],  // Agribisnis Perikanan Air Tawar
  '6.3.2': [6, 3, 92],  // Agribisnis Perikanan Air Payau dan Laut
  '6.3.3': [6, 3, 93],  // Agribisnis Ikan Hias
  '6.3.4': [6, 3, 94],  // Agribisnis Rumput Laut
  '6.3.5': [6, 3, 95],  // Industri Perikanan Laut
  '6.4.1': [6, 4, 96],  // Agribisnis Pengolahan Hasil Perikanan

  // Bidang 7: Bisnis dan Manajemen
  '7.1.1': [7, 1, 97],  // Bisnis Daring dan Pemasaran
  '7.2.1': [7, 2, 98],  // Otomatisasi dan Tata Kelola Perkantoran
  '7.3.1': [7, 3, 99],  // Akuntansi dan Keuangan Lembaga
  '7.3.2': [7, 3, 100], // Perbankan dan Keuangan Mikro
  '7.3.3': [7, 3, 101], // Perbankan Syariah

  // Bidang 8: Pariwisata
  '8.1.1': [8, 1, 102], // Usaha Perjalanan Wisata
  '8.1.2': [8, 1, 103], // Perhotelan
  '8.1.3': [8, 1, 104], // Wisata Bahari dan Ekowisata
  '8.2.1': [8, 2, 105], // Tata Boga
  '8.3.1': [8, 3, 106], // Tata Kecantikan Kulit dan Rambut
  '8.3.2': [8, 3, 107], // Spa dan Beauty Therapy
  '8.4.1': [8, 4, 108], // Tata Busana
  '8.4.2': [8, 4, 109], // Desain Fesyen

  // Bidang 9: Seni dan Industri Kreatif
  '9.1.1': [9, 1, 110], // Seni Lukis
  '9.1.2': [9, 1, 111], // Seni Patung
  '9.1.3': [9, 1, 112], // Desain Komunikasi Visual
  '9.1.4': [9, 1, 113], // Desain Interior dan Teknik Furnitur
  '9.1.5': [9, 1, 114], // Animasi
  '9.2.1': [9, 2, 115], // Kriya Kreatif Batik dan Tekstil
  '9.2.2': [9, 2, 116], // Kriya Kreatif Kulit dan Imitasi
  '9.2.3': [9, 2, 117], // Kriya Kreatif Keramik
  '9.2.4': [9, 2, 118], // Kriya Kreatif Logam dan Perhiasan
  '9.2.5': [9, 2, 119], // Kriya Kreatif Kayu dan Rotan
  '9.3.1': [9, 3, 120], // Seni Musik Klasik
  '9.3.2': [9, 3, 121], // Seni Musik Populer
  '9.4.1': [9, 4, 122], // Seni Tari
  '9.4.2': [9, 4, 123], // Penataan Tari
  '9.5.1': [9, 5, 124], // Seni Karawitan
  '9.5.2': [9, 5, 125], // Penataan Karawitan
  '9.6.1': [9, 6, 126], // Seni Pedalangan
  '9.7.1': [9, 7, 127], // Pemeranan
  '9.7.2': [9, 7, 128], // Tata Artistik Teater
  '9.8.1': [9, 8, 129], // Produksi dan Siaran Program Radio
  '9.8.2': [9, 8, 130], // Produksi dan Siaran Program Televisi
  '9.8.3': [9, 8, 131]  // Produksi Film dan Program Televisi
};