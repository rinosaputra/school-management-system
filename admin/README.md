# Dokumentasi index.ts

Script ini menginisialisasi koneksi ke Firebase Admin SDK, mengatur environment untuk emulator, dan menyiapkan beberapa koleksi Firestore yang digunakan dalam aplikasi.

## Variabel & Fungsi

- **findFile(...paths: string[]): string**
  Fungsi utilitas untuk menggabungkan path relatif terhadap direktori file saat ini.

- **adminAuth**
  Instance dari Firebase Admin Auth, digunakan untuk operasi autentikasi.

- **adminFirestore**
  Instance dari Firebase Firestore, digunakan untuk operasi database.

- **StudentCollection**
  Referensi ke koleksi Firestore untuk data siswa.

- **RombelCollection**
  Referensi ke koleksi Firestore untuk data rombongan belajar, berdasarkan tahun aktif dari environment variable.

- **GraduationCollection**
  Referensi ke koleksi Firestore untuk data kelulusan, berdasarkan tahun aktif dari environment variable.

## Catatan

- Script ini menggunakan environment variable `VITE_FIREBASE_EMULATOR` untuk menentukan apakah akan menggunakan emulator Firebase.
- Service account diambil dari file `_service_account.json`.
- Path koleksi diambil dari fungsi konstanta pada masing-masing fitur (`student`, `rombel`, `graduation`).