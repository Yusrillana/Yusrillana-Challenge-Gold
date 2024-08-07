
project challenge Nizarudin Yusril Lana
Aplikasi Keuangan Bulanan 

saya ingin membuat aplikasi web pintar untuk pencatatan dan
managemen keuangan bulanan yang terinspirasi dari aplikasi 
bukukas  

saya mau membuat semua orang mengatur keuangan dengan baik
maka dari itu didalam aplikasi web tersebut saya harus mempunyai fitur layanan pencatatan keuangan
dalam skala waktu yang bertingkat, dari hari ke hari, bulan ke bulan hingga tahun ke tahun.


ada beberapa fitur didalamnya yaitu 
1. login akun pake google/no telephone (ini nanti akan dipakai juga untuk mengirim notofikasi)
2. fitur pencatatan pamasukan bulanan (gaji dan lainya)
3. fitur pencatatan pengeluaran bulanan (keinginan dan kebutuhan)
4. fitur catatan tabungan pasti
5. fitur rata rata pengeluaran dalam sebulan 
6. fitur peringatan keuangan (bentuknya notofikasi "kondisi keuangan sedang kritis" yang akan dikirimkan ke no.wa akun. kondisi ini akan terjadi ketika status saldo awal hanya tinggal 10% atau kurang dari 250.000) 
8. fitur achievment (diperoleh ketika teratur dalam pengelolaan uang dan saldo tidak pernah kurang dari 300.000)
9. fitur management keuangan (berupa anggaran bulanan/pemisahan uang untuk tabungan)


bukan hanya itu saja namun ada fitur unggulan berupa managemen keuangan yang memiliki
fungsi untuk menjadwalkan pengeluaran agar tidak overbudget. di aplikasi web ini juga
memiliki achievment pada pengguna jika pengguna dapat mengatur keuangannya dengan baik

didalamnya akan juga ada fitur fitur untuk membantu kita ketika mengelola keuangan dengan rumus pencatatan yang custom presentasinya 
tetapi kita juga memiliki standard dalam menentukan rumus

rumus yang dapat menyempurnakan aplikasi ini adalah 
rumus dalam pengelolahan keuangan dalam sebulan sehingga ada dana tabungan 

rumus pengelolahan keuangan =
kebutuhan harus lebih besar dari tabungan
tabungan harus lebih besar atau sama dari keinginan
keinginan harus lebih kecil dari kebutuhan 

data data yang saya perlukan untuk menyempurnakan
aplikasi web pintar ini adalah

1. Akun Pengguna (data= Email, password )
2. profil pengguna (data= ID pengguna, nama Pengguna, pekerjaan pengguna, alamat pengguna, nomor HP, email pengguna)

data transaksional

1. data gaji tetap 
2. data pemasukan lain
3. data pengeluaran untuk kebutuhan
4. data pengeluaran untuk keinginan
5. tabungan tetap bulanan

___________________________________

Struktur data 

Yusrillana-Challenge_Gold/
├── index.html          (Halaman utama/login)
├── dashboard.html      (Halaman dasbor/pengelolaan keuangan)
├── style.css           (Gaya CSS untuk seluruh aplikasi)
├── script.js           (Logika JavaScript utama)
├── assets/
│   ├── images/         (Ikon, gambar latar, dll.)
│   └── fonts/          (Font kustom jika ada)
├── components/         (Komponen HTML yang dapat digunakan kembali)
│   ├── header.html
│   ├── footer.html
│   ├── transaction-form.html  (Formulir input transaksi)
│   └── ...
├── utils/
│   └── financial-utils.js     (Fungsi utilitas perhitungan keuangan)
├── data/
│   └── user-data.json       (Simulasi penyimpanan data pengguna)

