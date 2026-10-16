// ===== Pengaturan =====
const CV_URL = ""; // isi dengan link/file CV PDF, contoh: "assets/cv/CV-Adikto.pdf"
const MUSIC = { src: "", start: 40, end: 120, vol: 0.2 }; // isi src dengan file mp3 yang boleh dipakai publik, contoh: "assets/audio/lagu.mp3"

// ===== Keahlian =====
const SKG = [
  ["Teknis", ["HTML", "CSS", "PHP", "C++", "React JS", "Figma"]],
  ["QA & dokumentasi", ["Pengujian manual", "Pelaporan bug", "PRD", "ClickUp"]],
  ["Soft skill", ["Kerja sama tim", "Komunikasi", "Manajemen waktu", "Pemecahan masalah", "Detail oriented"]],
];

// ===== Gambar =====
const IMG = {
  bnsp1: "assets/img/certificates/bnsp-halaman-1.jpg",
  bnsp2: "assets/img/certificates/bnsp-halaman-2.jpg",
  telkom: "assets/img/certificates/telkom-uiux.jpg",
  ef: "assets/img/certificates/ef-set.jpg",
  seeds: "assets/img/certificates/seeds-internship.jpg",
  p_figma: "assets/img/projects/prasimax-figma.jpg",
  p_login: "assets/img/projects/prasimax-login.jpg",
  p_inv: "assets/img/projects/prasimax-invoice.jpg",
  p_code: "assets/img/projects/prasimax-code.jpg",
  g_play: "assets/img/projects/game-play.jpg",
  g_editor: "assets/img/projects/game-editor.jpg",
  g_code: "assets/img/projects/game-code.jpg",
};

// ===== Sertifikat =====
const CT = {
  magang: [
    {
      i: "briefcase",
      t: "Certificate of Internship: Quality Analyst",
      m: ["seeds"],
      o: "Seeds Finance",
      d: "8 Apr – 7 Jul 2026",
      n: "Apresiasi atas kinerja yang melampaui harapan dan sikap profesional.",
    },
  ],
  prestasi: [
    {
      i: "award",
      t: "Desainer Multimedia Muda",
      m: ["bnsp1", "bnsp2"],
      o: "Sertifikat Kompetensi BNSP · LSP Teknologi Digital",
      d: "27 Jan 2023",
      n: "Berlaku 3 tahun (hingga Jan 2026). Mencakup 8 unit kompetensi, antara lain perencanaan dan evaluasi user experience.",
      tag: "Masa berlaku berakhir",
    },
    {
      i: "palette",
      t: "Junior Multimedia Designer (UI/UX)",
      m: ["telkom"],
      o: "Telkom DigiUp · PT Telkom Prima Cipta Certifia",
      d: "21 – 26 Nov 2022",
      n: "Pelatihan UI/UX menggunakan Figma.",
    },
  ],
  bahasa: [
    {
      i: "globe",
      t: "EF SET English Certificate: B1 Intermediate",
      m: ["ef"],
      o: "EF SET",
      d: "28 Jul 2025",
      n: "Skor 42/100. Reading 33 (A2), Listening 51 (B2).",
      l: "https://cert.efset.org/EbBq8S",
    },
  ],
};
const CTabs = [
  ["magang", "Magang"],
  ["prestasi", "Prestasi & Kompetensi"],
  ["bahasa", "Bahasa"],
];

// ===== Menu tersembunyi: hobi & lagi belajar =====
const SX = {
  hobi: {
    t: "Hobi",
    photo: "",
    items: [
      ["tv", "Nonton anime & kenalan sama karakter favorit"],
      ["palette", "Desain poster & dekor"],
      ["plane", "Jalan-jalan"],
      ["code", "Ngoprek tampilan UI"],
    ],
  },
  belajar: {
    t: "Lagi belajar",
    items: [
      ["atom", "React & JavaScript"],
      ["check", "Playwright automation"],
      ["file", "Dokumentasi yang rapi"],
    ],
  },
};

// ===== Galeri karakter (halaman Hobi) =====
const GAL = [
  {
    src: "assets/img/gallery/mai-shiranui-hanafuda.jpg",
    t: "Mai Shiranui",
    s: "Hanafuda skin",
    g: "Honor of Kings",
  },
  {
    src: "assets/img/gallery/mai-shiranui-art.jpg",
    t: "Mai Shiranui",
    s: "Art oleh freakyoo",
    g: "Honor of Kings",
  },
  { src: "assets/img/gallery/da-qiao.jpg", t: "Da Qiao", s: "Art oleh freakyoo", g: "Honor of Kings" },
  { src: "assets/img/gallery/garo.jpg", t: "Garo", s: "Koleksi favorit", g: "Honor of Kings" },
  {
    src: "assets/img/gallery/wang-zhaojun.jpg",
    t: "Wang Zhaojun",
    s: "Koleksi favorit",
    g: "Honor of Kings",
  },
  { src: "assets/img/gallery/nakoruru.jpg", t: "Nakoruru", s: "Koleksi favorit", g: "Honor of Kings" },
];

// ===== Cuplikan project =====
const PXC = [
  ["p_figma", "Desain Figma: Tender List (disamarkan)"],
  ["p_login", "Halaman login Vendora"],
  ["p_inv", "Formulir submit invoice (data kosong)"],
  ["p_code", "Kode antarmuka login (React)"],
];
const GMC = [
  ["g_play", "Gameplay: kubus biru menghindari rintangan merah"],
  ["g_editor", "Scene dan komponen di Unity Editor"],
  ["g_code", "Skrip CubeController.cs (C#)"],
];

// ===== Warna efek bintang =====
const FXC = ["#ef5b21", "#e8567a", "#3fa7c4", "#f2a007"];

// ===== Vibe hari ini (halaman Hobi) =====
const VIBES = [
  [4, "Pagi yang cerah", "Mode fokus: satu tugas kecil dulu."],
  [10, "Siang yang produktif", "Mode ngoding: kopi, kode, selesai."],
  [15, "Sore yang santai", "Mode nonton: satu episode dulu."],
  [18, "Malam yang tenang", "Mode main game: satu ronde lagi."],
];
const VH = [["tv", "Nonton anime"], ["book", "Baca manhwa"], ["gamepad", "Main game"]];
