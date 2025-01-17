# MamCook

**MamCook** adalah platform untuk kelas resep membuat makanan yang dibangun menggunakan Laravel 11, Filament, React, Vite dan juga Typescript. Aplikasi ini memudahkan pengguna untuk mencari resep makanan, melihat detail, dan menonton tutorial melalui web ini.

Disusun Oleh :

-   Muhammad Al Ghifari - 223040001
-   George Frederik Pingak - 223040080
-   Muhammad Alief Arrizal Effendi - 223040061
-   Farid Maulana Suherman - 223040008

## Fitur

-   Cari dan jelajahi berbagai resep
-   Lihat detail resep dengan tampilan intuitif
-   Dapatkan rekomendasi tempat pembelian resep terdekat

## Persyaratan Sistem

Pastikan Anda telah menginstal prasyarat berikut:

-   PHP >= 8.3
-   Composer
-   MySQL atau database lain yang didukung Laravel
    h`

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek **MamCook** di lingkungan lokal Anda.

### 1. Clone Repository

Clone repository ini ke direktori lokal Anda:

```bash
git clone https://github.com/algididntwakeup/MamCook.git
cd MamCook
```

### 2. Instal Dependensi

Instal semua dependensi Laravel menggunakan Composer:

```bash
composer install
```

Dan instal semua dependensi Vite+React+TS menggunakan NPM:

```bash
npm install
```

### 3. Konfigurasi Environment

Buat file `.env` dengan menyalin `.env.example`:

```bash
cp .env.example .env
```

### 4. Generate Key Aplikasi

Jalankan perintah berikut untuk menghasilkan key aplikasi Laravel:

```bash
php artisan key:generate
```

### 5. Konfigurasi Database

Edit file `.env` dan sesuaikan konfigurasi database Anda:

```dotenv
DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=
```

### 6. Migrasi dan Seed Database

Jalankan migrasi untuk membuat tabel database, dan tambahkan data awal jika tersedia:

```bash
php artisan migrate:fresh
```

### 7. Jalankan Server

Setelah semua konfigurasi selesai, untuk Backend, Jalankan

```bash
php artisan serve
```

Dan untuk Frontend, Jalankan

```bash
npm run dev
```

Aplikasi akan dapat diakses di `http://127.0.0.1:8000`.

## Cara Penggunaan

-   Buka `localhost:5173` di browser Anda
-   Jelajahi Beragam Resep Makanan yang menarik bagi anda

## Testing

Untuk menjalankan tes pada aplikasi ini, gunakan perintah berikut:

```bash
php artisan test
```

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan buat pull request dengan penjelasan singkat tentang perubahan yang Anda buat.

## Lisensi

## Aplikasi ini dilisensikan di bawah [MIT License](https://opensource.org/licenses/MIT).

**MamCook** - Platform Resep makanan andalan anda.
