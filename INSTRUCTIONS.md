# Instruksi Pemasangan Foto Profile

## Langkah-langkah Memindahkan Foto Profile:

### 1. Persiapan File
- Pastikan file `profile.jpg` ada di folder `app/assets/`
- File harus berformat JPG/JPEG dengan ukuran yang reasonable (disarankan max 500KB)

### 2. Pemindahan File
```bash
# Pindahkan file ke folder public
cp app/assets/profile.jpg public/profile.jpg

# Atau jika menggunakan Windows, copy file secara manual dari app/assets/ ke public/
```

### 3. Verifikasi
- Pastikan file `profile.jpg` sekarang ada di folder `public/`
- Path yang digunakan di kode sudah benar: `/profile.jpg`

### 4. Testing
- Jalankan development server: `npm run dev`
- Buka browser dan cek apakah foto profile muncul dengan benar

## Catatan Penting:
- Next.js hanya bisa mengakses file di folder `public/` untuk assets statis
- Path di kode sudah diupdate menjadi `/profile.jpg` (dari root)
- File akan otomatis dioptimalkan oleh Next.js Image component
- Gunakan format JPG/JPEG untuk kompatibilitas terbaik

## Troubleshooting:
- Jika foto tidak muncul, cek console browser untuk error
- Pastikan file tidak terlalu besar (max 1MB disarankan)
- Verifikasi path file di folder public/
- Restart development server jika perlu