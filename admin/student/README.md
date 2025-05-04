# Student Data Import Script

Script ini digunakan untuk mengimpor data siswa dari file Excel (`dapodik.xlsx`) ke database Firestore pada sistem manajemen sekolah.

## Fitur Utama

- Membaca data siswa dari file Excel mulai dari baris ke-6.
- File `dapodik.xlsx` diambil dari hasil ekspor data pada aplikasi Dapodik di menu Peserta Didik, kemudian diubah namanya menjadi `dapodik.xlsx`.
- Menyimpan data siswa dan rombel ke koleksi Firestore (`StudentCollection`, `RombelCollection`).
- Mendukung fitur kelulusan (Graduation) jika environment variable `VITE_FEATURE_GRADUATION` diaktifkan.
- Validasi data menggunakan Zod schema.
- Transaksi Firestore untuk memastikan integritas data.

## Cara Menjalankan

1. Pastikan file `dapodik.xlsx` tersedia di folder `student`.
2. Jalankan perintah berikut:
    ```bash
    node --import=tsx admin/student/index.ts
    ```

## Penjelasan Script

- **Pembacaan Data:** Menggunakan library `xlsx` untuk membaca dan mengonversi data Excel ke JSON.
- **Mapping Data:** Data siswa dan rombel dipetakan ke dalam struktur sesuai schema masing-masing.
- **Validasi:** Data divalidasi menggunakan Zod sebelum disimpan ke Firestore.
- **Transaksi Firestore:** Data siswa dan rombel disimpan secara atomik menggunakan transaksi.
- **Graduation:** Jika fitur kelulusan aktif, data kelulusan siswa kelas 12 juga disimpan.

## Catatan

- Pastikan environment variable sudah dikonfigurasi dengan benar.
- Struktur kolom pada file Excel harus sesuai dengan yang diharapkan script.
- Script ini hanya untuk keperluan internal pengelolaan data siswa dan rombel.
