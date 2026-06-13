/* ========================================
   PROJECT DETAIL PAGE JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  initThemeToggle();
  loadProjectData();
  initNavArrows();
});

/* THEME TOGGLE */
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

/* ========================================
   PROJECT DATA
   ======================================== */
const PROJECTS = {
  ecommerce: {
    icon: 'shopping-cart',
    title: 'E-Commerce Platform',
    category: 'web',
    categoryLabel: 'Web App',
    status: 'Completed',
    duration: '3 bulan',
    role: 'Fullstack Developer',
    shortDesc: 'Platform belanja online dengan fitur keranjang, checkout, dan payment gateway.',
    fullDesc: 'Platform belanja online fullstack yang dibangun dari nol dengan fokus pada pengalaman pengguna yang seamless. Mengimplementasikan sistem autentikasi pengguna, manajemen produk dengan filter dan pencarian, keranjang belanja real-time, serta integrasi payment gateway untuk proses checkout yang aman. Dilengkapi dengan dashboard admin untuk mengelola inventaris, pesanan, dan laporan penjualan.',
    features: [
      'Autentikasi pengguna (register/login)',
      'Keranjang belanja real-time',
      'Filter & pencarian produk',
      'Checkout dengan payment gateway',
      'Dashboard admin',
      'Responsive design'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe'],
    images: [],
    demo: '#',
    source: '#'
  },
  weather: {
    icon: 'cloud-sun',
    title: 'Weather Dashboard',
    category: 'frontend',
    categoryLabel: 'Frontend',
    status: 'Completed',
    duration: '1 bulan',
    role: 'Frontend Developer',
    shortDesc: 'Dashboard cuaca interaktif dengan data real-time dan visualisasi grafik.',
    fullDesc: 'Dashboard cuaca interaktif yang menampilkan data cuaca real-time dari OpenWeatherMap API. Menyediakan visualisasi grafik suhu, kelembaban, dan kecepatan angin menggunakan Chart.js. Fitur pencarian kota dengan autocomplete, prakiraan cuaca 7 hari, serta tampilan yang adaptif terhadap kondisi cuaca saat ini (animasi hujan, cerah, berawan).',
    features: [
      'Data cuaca real-time',
      'Visualisasi grafik interaktif',
      'Pencarian kota dengan autocomplete',
      'Prakiraan 7 hari',
      'Animasi kondisi cuaca',
      'Mode gelap/terang otomatis'
    ],
    tech: ['Vue.js', 'Chart.js', 'OpenWeatherMap API', 'CSS3 Animations'],
    images: [],
    demo: '#',
    source: '#'
  },
  chat: {
    icon: 'message-square',
    title: 'Chat Application',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    status: 'Completed',
    duration: '2 bulan',
    role: 'Fullstack Developer',
    shortDesc: 'Aplikasi chat real-time dengan fitur group chat, file sharing, dan notifikasi.',
    fullDesc: 'Aplikasi chat real-time yang memungkinkan pengguna berkomunikasi secara langsung maupun dalam grup. Dibangun dengan Socket.io untuk komunikasi WebSocket yang cepat dan reliable. Mendukung pengiriman teks, emoji, dan berbagi file. Dilengkapi dengan sistem notifikasi push, status online/offline pengguna, serta riwayat chat yang tersimpan di database.',
    features: [
      'Chat real-time dengan WebSocket',
      'Group chat',
      'File sharing',
      'Notifikasi push',
      'Status online/offline',
      'Riwayat chat tersimpan'
    ],
    tech: ['React', 'Socket.io', 'Express', 'Node.js', 'MongoDB'],
    images: [],
    demo: '#',
    source: '#'
  },
  taskmanager: {
    icon: 'check-square',
    title: 'Task Manager',
    category: 'web',
    categoryLabel: 'Web App',
    status: 'Completed',
    duration: '2 bulan',
    role: 'Fullstack Developer',
    shortDesc: 'Aplikasi manajemen tugas dengan drag-and-drop, deadline reminder, dan statistik.',
    fullDesc: 'Aplikasi manajemen tugas modern dengan antarmuka drag-and-drop yang intuitif. Menggunakan Prisma ORM untuk manajemen database PostgreSQL yang efisien. Fitur meliputi pembuatan tugas dengan prioritas dan deadline, pengelompokan dalam board dan list, statistik produktivitas, serta integrasi kalender untuk visualisasi jadwal.',
    features: [
      'Drag-and-drop task management',
      'Prioritas & deadline',
      'Board & list organization',
      'Statistik produktivitas',
      'Integrasi kalender',
      'Kolaborasi tim'
    ],
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'DnD Kit'],
    images: [],
    demo: '#',
    source: '#'
  }
};

const PROJECT_ORDER = ['ecommerce', 'weather', 'chat', 'taskmanager'];

/* ========================================
   LOAD PROJECT DATA
   ======================================== */
function loadProjectData() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');

  if (!projectId || !PROJECTS[projectId]) {
    // Redirect to main page if no valid project ID
    window.location.href = 'index.html#projects';
    return;
  }

  const project = PROJECTS[projectId];

  // Update page title
  document.title = `${project.title} — Adikto Hutabalian`;

  // Hero section
  document.getElementById('pj-icon').innerHTML = `<i data-lucide="${project.icon}"></i>`;
  document.getElementById('pj-title').textContent = project.title;
  document.getElementById('pj-category').textContent = project.categoryLabel;
  document.getElementById('pj-status').textContent = project.status;
  document.getElementById('pj-duration').textContent = project.duration;
  document.getElementById('pj-short-desc').textContent = project.shortDesc;
  document.getElementById('pj-demo').href = project.demo;
  document.getElementById('pj-source').href = project.source;

  // Content section
  document.getElementById('pj-full-desc').textContent = project.fullDesc;
  document.getElementById('pj-role').textContent = project.role;
  document.getElementById('pj-duration-detail').textContent = project.duration;
  document.getElementById('pj-status-detail').textContent = project.status;
  document.getElementById('pj-category-detail').textContent = project.categoryLabel;

  // Features
  const featuresGrid = document.getElementById('pj-features');
  featuresGrid.innerHTML = '';
  project.features.forEach(feature => {
    const div = document.createElement('div');
    div.className = 'pj-feature-item';
    div.innerHTML = `<span class="pj-feature-dot"></span><span>${feature}</span>`;
    featuresGrid.appendChild(div);
  });

  // Tech stack
  const techGrid = document.getElementById('pj-tech');
  techGrid.innerHTML = '';
  project.tech.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'pj-tech-pill';
    span.innerHTML = `<span class="pj-tech-dot"></span>${tech}`;
    techGrid.appendChild(span);
  });

  // Gallery
  const gallery = document.getElementById('pj-gallery');
  gallery.innerHTML = '';
  if (project.images && project.images.length > 0) {
    const grid = document.createElement('div');
    grid.className = 'pj-gallery-grid';
    project.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = project.title + ' screenshot';
      img.className = 'pj-gallery-img';
      img.addEventListener('click', () => openLightbox(src, project.title));
      grid.appendChild(img);
    });
    gallery.appendChild(grid);
  } else {
    gallery.innerHTML = `
      <div class="pj-gallery-placeholder">
        <i data-lucide="image"></i>
        <p>Screenshot proyek akan ditampilkan di sini</p>
        <span>Tambahkan gambar ke folder <code>assets/projects/</code></span>
      </div>
    `;
  }

  // Update nav arrows state
  updateNavArrows(projectId);

  // Re-init lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
}

/* ========================================
   NAVIGATION ARROWS
   ======================================== */
function initNavArrows() {
  const prevBtn = document.getElementById('pj-prev');
  const nextBtn = document.getElementById('pj-next');

  prevBtn.addEventListener('click', () => navigateProject(-1));
  nextBtn.addEventListener('click', () => navigateProject(1));
}

function updateNavArrows(currentId) {
  const currentIndex = PROJECT_ORDER.indexOf(currentId);
  const prevBtn = document.getElementById('pj-prev');
  const nextBtn = document.getElementById('pj-next');

  prevBtn.disabled = currentIndex <= 0;
  nextBtn.disabled = currentIndex >= PROJECT_ORDER.length - 1;
}

function navigateProject(direction) {
  const params = new URLSearchParams(window.location.search);
  const currentId = params.get('id');
  const currentIndex = PROJECT_ORDER.indexOf(currentId);
  const newIndex = currentIndex + direction;

  if (newIndex >= 0 && newIndex < PROJECT_ORDER.length) {
    window.location.href = `project.html?id=${PROJECT_ORDER[newIndex]}`;
  }
}

/* ========================================
   LIGHTBOX
   ======================================== */
function openLightbox(src, alt) {
  // Create lightbox if not exists
  let lightbox = document.querySelector('.pj-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'pj-lightbox';
    lightbox.innerHTML = `
      <button class="pj-lightbox-close" aria-label="Tutup"><i data-lucide="x"></i></button>
      <img src="" alt="">
    `;
    document.body.appendChild(lightbox);

    // Close handlers
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('.pj-lightbox-close')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });

    if (window.lucide) lucide.createIcons();
  }

  lightbox.querySelector('img').src = src;
  lightbox.querySelector('img').alt = alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.querySelector('.pj-lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}
