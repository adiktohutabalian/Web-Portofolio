# Portofolio Adikto Hutabalian

Website portofolio satu halaman (HTML, CSS, dan JavaScript murni, tanpa framework).
Semua menu ada di satu halaman dan berpindah tampilan tanpa memuat ulang.

## Cara menjalankan
- Cara cepat: klik dua kali `index.html`.
- Disarankan di VS Code: pasang ekstensi **Live Server**, klik kanan `index.html`, lalu pilih **Open with Live Server**.

## Struktur folder
```
portfolio-adikto/
├── index.html            # struktur halaman (semua menu dalam satu file)
├── css/
│   ├── variables.css     # warna & tema terang/gelap
│   ├── layout.css        # layout dasar, header, menu, footer
│   ├── components.css    # tombol, kartu, chip, timeline, ikon
│   ├── hidden-menu.css   # menu tersembunyi "lebih dekat"
│   ├── responsive.css    # aturan responsif umum
│   ├── hobi.css          # halaman Hobi + animasi
│   ├── contact.css       # halaman Kontak
│   ├── projects.css      # halaman Project
│   └── home.css          # halaman Beranda (ukuran hero, statistik, jam, panel)
├── js/
│   ├── icons.js          # ikon SVG buatan sendiri
│   ├── data.js           # SEMUA data yang sering diubah (isi, gambar, sertifikat)
│   └── main.js           # logika: navigasi, jam, galeri, efek
└── assets/img/
    ├── certificates/     # gambar sertifikat
    ├── projects/         # logo & cuplikan project
    └── gallery/          # galeri karakter (halaman Hobi)
```
Urutan file CSS dan JS di `index.html` penting, jadi jangan diubah.

## Yang paling sering diubah
| Mau mengubah | Buka |
|---|---|
| Link CV (tombol Unduh CV) | `js/data.js` → `CV_URL` (taruh PDF di `assets/cv/`) |
| Musik halaman Hobi | `js/data.js` → `MUSIC.src` (taruh mp3 yang boleh dipakai publik di `assets/audio/`) |
| Sertifikat | `js/data.js` → `CT` dan gambar di `assets/img/certificates/` |
| Galeri karakter | `js/data.js` → `GAL` dan gambar di `assets/img/gallery/` |
| Keahlian | `js/data.js` → `SKG` |
| Teks, pengalaman, project, kontak | `index.html` (cari tulisannya) |
| Warna & tema | `css/variables.css` |

## Catatan
- Font diambil dari Google Fonts, jadi perlu internet saat pertama dibuka.
- Pastikan kamu punya izin untuk menampilkan logo dan cuplikan perusahaan, serta kredit untuk gambar karya orang lain.
- Jika hosting di GitHub Pages atau Netlify, unggah seluruh isi folder ini apa adanya.
