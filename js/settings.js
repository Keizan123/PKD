/**
 * settings.js — PKD (Persatuan Kucing Depok)
 * Pengaturan Lengkap: Bahasa (ID / EN), Tema Tampilan, Ukuran Teks, Suara Meow, & Animasi
 */

(function () {
  'use strict';

  // =============================================
  // KAMUS BAHASA (I18N DICTIONARY)
  // =============================================
  const translations = {
    id: {
      navHome: "Home",
      navCats: "Jenis Kucing",
      navFood: "Makanan",
      navPetshop: "Petshop",
      navAbout: "Tentang",
      navExplore: "Jelajahi Kucing 🐾",
      navFindPetshop: "Cari Petshop 🏪",

      // Hero index
      heroBadge: "KOTA DEPOK & SEKITARNYA",
      heroTitlePrefix: "Welcome to",
      heroTitleSuffix: "Persatuan Kucing Depok",
      heroRibbon: "🐾 Kenali Rasnya. Penuhi Nutrisinya. Temukan Petshopnya.",
      heroDesc: "Pusat informasi dan edukasi dasar seputar kucing terlengkap di Kota Depok — mulai dari karakteristik 15 ras kucing populer, tips memilih makanan basah dan kering, hingga daftar lokasi petshop terpercaya dengan peta rute langsung!",
      heroBtnCats: "Jelajahi Jenis Kucing 🐈",
      heroBtnPetshop: "Cari Petshop Depok 🏪",
      heroCardBadge: "✨ 100% Edukatif & Gratis",
      heroCardTitle: "Persatuan Kucing Depok",
      heroCardCaption: "Edukasi & direktori ramah bagi semua pemilik kucing di Depok! 🐱",

      // Marquee
      marqueeItems: [
        "🐾 15+ RAS KUCING POPULER",
        "🥫 PANDUAN MAKANAN KERING & BASAH",
        "🏪 7+ LOKASI PETSHOP KOTA DEPOK",
        "💡 TIPS NUTRISI & KESEHATAN HARIAN",
        "🏫 STUDY GROUP XI SMA MUHAMMADIYAH 4 DEPOK",
        "❤️ 100% GRATIS & RAMAH PEMULA"
      ],

      // Section Apa itu PKD
      aboutCardTitle: "Apa itu <span>Persatuan Kucing Depok?</span>",
      aboutCardText1: "<strong>Persatuan Kucing Depok (PKD)</strong> hadir sebagai platform informasi digital yang membantu pemilik kucing pemula maupun berpengalaman di Kota Depok untuk memperoleh pengetahuan dasar tentang perawatan, variasi ras kucing di dunia, serta kebutuhan nutrisi harian yang tepat.",
      aboutCardText2: "Kami merangkum data dan lokasi petshop di berbagai kecamatan Depok (seperti Beji, Sukmajaya, Cimanggis, Limo, hingga Sawangan) agar kamu tidak perlu bingung mencari pakan dan perlengkapan anabul tercinta.",
      aboutChip1: "🐱 15 Ras Kucing Lengkap",
      aboutChip2: "🍽️ Edukasi Pakan Aman",
      aboutChip3: "🗺️ Google Maps Terintegrasi",
      aboutChip4: "📱 Responsif di HP & Laptop",

      // Steps 1 2 3
      stepsPill: "FITUR WEBSITE",
      stepsTitle: "3 Langkah Mudah Bersama PKD",
      stepsSubtitle: "Semua yang kamu butuhkan untuk merawat kucing kesayangan di Kota Depok",
      step1Title: "Kenali Jenis Kucing",
      step1Desc: "Pelajari 15 ras kucing terpopuler di dunia dan Indonesia — mulai dari Persia, Maine Coon, Russian Blue, hingga Kucing Kampung yang tangguh.",
      step1Btn: "Lihat Katalog Kucing →",
      step2Title: "Pilih Nutrisi yang Pas",
      step2Desc: "Pahami perbedaan makanan kering vs basah, porsi makan untuk kitten maupun kucing dewasa, serta tips membaca kandungan gizi pada kemasan.",
      step2Btn: "Panduan Makanan →",
      step3Title: "Temukan Petshop Depok",
      step3Desc: "Temukan petshop terdekat di sekitarmu dengan alamat lengkap, jam operasional, dan tombol navigasi Google Maps untuk belanja tanpa repot.",
      step3Btn: "Cari Lokasi Petshop →",

      // Dark Navy 4 Cards
      darkNavyTitle: "Inisiatif Pelajar SMA<br /><span>dengan Semangat Besar</span>",
      darkCard1Title: "Kecintaan pada Kucing",
      darkCard1Desc: "Dibangun dari kepedulian bersama terhadap kesejahteraan dan kesehatan anabul di Depok.",
      darkCard2Title: "Informasi Mudah & Praktis",
      darkCard2Desc: "Konten disajikan dengan bahasa sederhana, ramah pelajar, dan mudah dipahami siapa saja.",
      darkCard3Title: "Riset & Terpercaya",
      darkCard3Desc: "Tips nutrisi dan data jenis kucing disusun dari sumber referensi umum yang bertanggung jawab.",
      darkCard4Title: "Karya Study Group",
      darkCard4Desc: "Proyek pembelajaran KKA Kelas XI SMA Muhammadiyah 4 Depok berbantuan AI Coding.",

      // Catalog Preview
      previewPill: "KATALOG PILIHAN",
      previewTitle: "🐾 Kucing Paling Populer",
      previewSubtitle: "Intip beberapa ras kucing yang paling diminati para pecinta kucing di Indonesia",
      btnAllCats: "Lihat Seluruh 15 Ras Kucing Lengkap 🐾",

      // Subpages Headers
      kucingHeroTitle: "Jenis-Jenis Ras Kucing",
      kucingHeroDesc: "Kenali 15 ras kucing terpopuler di dunia dan Indonesia — temukan karakter dan anabul yang paling pas untukmu!",
      makananHeroTitle: "Rekomendasi Makanan Kucing",
      makananHeroDesc: "Panduan nutrisi tepat untuk anabul kesayanganmu — pahami porsi, makanan kering vs basah, dan tips makanan sehat.",
      petshopHeroTitle: "Petshop di Kota Depok",
      petshopHeroDesc: "Temukan petshop terdekat untuk membeli pakan, grooming, aksesoris, dan obat anabul di seluruh wilayah Depok.",
      tentangHeroTitle: "Tentang Persatuan Kucing Depok",
      tentangHeroDesc: "Mengenal visi, tujuan edukasi, dan tim siswa di balik pembuatan website PKD.",

      // Search & Filters
      searchCatPlaceholder: "Cari nama kucing atau ciri (contoh: persia, lincah, russian)...",
      searchPetshopPlaceholder: "Cari petshop atau nama kecamatan (contoh: Beji, Cinere, Sawangan)...",
      filterAll: "🐾 Semua Ras",
      filterLong: "🌟 Berbulu Panjang",
      filterShort: "✨ Berbulu Pendek",
      foundCats: "kucing ditemukan",
      foundPetshops: "petshop ditemukan",
      escapeTip: "💡 Tips: Tekan Escape untuk reset",
      mapsTip: "💡 Klik 'Lihat Lokasi' untuk membuka rute Google Maps",
      viewLocationBtn: "🗺️ Lihat Lokasi",

      // Settings Modal
      settingsTitle: "Pengaturan Website",
      settingsLangTitle: "🌐 Bahasa / Language",
      settingsThemeTitle: "🎨 Tema Tampilan / Theme",
      settingsFontSizeTitle: "🔤 Ukuran Teks / Font Size",
      settingsSoundTitle: "🔊 Efek Suara Meow",
      settingsSoundDesc: "Mainkan nada meow ceria saat mengklik elemen web",
      settingsTestMeow: "Coba Meow 🐾",
      settingsMotionTitle: "✨ Efek Animasi / Motion",
      settingsResetBtn: "🔄 Reset Pengaturan",
      settingsSaveBtn: "✓ Selesai & Tutup",

      // Footer
      footerDesc: "Pusat informasi dan edukasi ramah seputar kucing untuk masyarakat Kota Depok.",
      footerExplore: "Jelajahi Menu",
      footerTeamHeading: "Study Group (XI)",
      footerCopyright: "© 2026 Persatuan Kucing Depok (PKD) · Webflow 'Bubble Bash' Style Remake 🐾"
    },

    en: {
      navHome: "Home",
      navCats: "Cat Breeds",
      navFood: "Food & Diet",
      navPetshop: "Petshops",
      navAbout: "About Us",
      navExplore: "Explore Cats 🐾",
      navFindPetshop: "Find Petshop 🏪",

      // Hero index
      heroBadge: "DEPOK CITY & SURROUNDINGS",
      heroTitlePrefix: "Welcome to",
      heroTitleSuffix: "Persatuan Kucing Depok",
      heroRibbon: "🐾 Know the Breeds. Perfect the Diet. Find the Supplies.",
      heroDesc: "The premier cat information and care hub in Depok City — discover profiles of 15 popular cat breeds, wet vs dry food nutrition guides, and verified petshop directories with direct navigation maps!",
      heroBtnCats: "Explore Cat Breeds 🐈",
      heroBtnPetshop: "Find Depok Petshops 🏪",
      heroCardBadge: "✨ 100% Free & Educational",
      heroCardTitle: "Persatuan Kucing Depok",
      heroCardCaption: "Friendly educational cat hub for all pet parents in Depok! 🐱",

      // Marquee
      marqueeItems: [
        "🐾 15+ POPULAR CAT BREEDS",
        "🥫 DRY & WET FOOD NUTRITION GUIDE",
        "🏪 7+ VERIFIED DEPOK PETSHOPS",
        "💡 DAILY HEALTH & CARE TIPS",
        "🏫 STUDY GROUP XI SMA MUHAMMADIYAH 4 DEPOK",
        "❤️ 100% FREE & BEGINNER FRIENDLY"
      ],

      // Section Apa itu PKD
      aboutCardTitle: "What is <span>Persatuan Kucing Depok?</span>",
      aboutCardText1: "<strong>Persatuan Kucing Depok (PKD)</strong> is a dedicated digital platform created to assist both new and experienced cat parents in Depok City with fundamental knowledge on breed traits, daily care, and balanced pet nutrition.",
      aboutCardText2: "We gather reliable petshop locations across Depok sub-districts (such as Beji, Sukmajaya, Cimanggis, Limo, and Sawangan) so you can easily find food, accessories, and grooming services for your feline friends.",
      aboutChip1: "🐱 15 Complete Cat Breeds",
      aboutChip2: "🍽️ Safe Diet Education",
      aboutChip3: "🗺️ Integrated Google Maps",
      aboutChip4: "📱 Mobile & Desktop Friendly",

      // Steps 1 2 3
      stepsPill: "WEBSITE HIGHLIGHTS",
      stepsTitle: "3 Simple Steps with PKD",
      stepsSubtitle: "Everything you need to care for your beloved cats in Depok City",
      step1Title: "Discover Cat Breeds",
      step1Desc: "Explore 15 popular cat breeds across the globe — from Persian, Maine Coon, Russian Blue, to the resilient Indonesian Domestic cat.",
      step1Btn: "Browse Cat Catalog →",
      step2Title: "Pick the Right Nutrition",
      step2Desc: "Learn the pros and cons of dry vs wet food, portion sizing for kittens and adults, and how to read nutritional labels on pet food packaging.",
      step2Btn: "Nutrition Guide →",
      step3Title: "Find Nearby Petshops",
      step3Desc: "Locate verified petshops near you complete with addresses, operating hours, and one-tap Google Maps directions.",
      step3Btn: "Locate Petshops →",

      // Dark Navy 4 Cards
      darkNavyTitle: "High School Student Initiative<br /><span>with a Big Heart</span>",
      darkCard1Title: "Love for Cats",
      darkCard1Desc: "Rooted in our shared compassion for the health and happiness of cats across Depok.",
      darkCard2Title: "Practical & Clear",
      darkCard2Desc: "Content written in friendly, accessible language suitable for students and pet parents alike.",
      darkCard3Title: "Reliable Research",
      darkCard3Desc: "Diet and breed facts curated from responsible veterinary and animal care guidelines.",
      darkCard4Title: "Study Group Project",
      darkCard4Desc: "AI Coding collaborative project by 11th Grade students of SMA Muhammadiyah 4 Depok.",

      // Catalog Preview
      previewPill: "FEATURED CATALOG",
      previewTitle: "🐾 Most Popular Breeds",
      previewSubtitle: "A glimpse of the most sought-after feline companions in Indonesia",
      btnAllCats: "View All 15 Cat Breeds 🐾",

      // Subpages Headers
      kucingHeroTitle: "Feline Breeds & Characteristics",
      kucingHeroDesc: "Get to know 15 world-famous cat breeds — discover the unique personality and care needs of each!",
      makananHeroTitle: "Cat Food & Nutrition Guide",
      makananHeroDesc: "Tailored dietary guides for your cat — understand portioning, dry vs wet kibbles, and essential healthy habits.",
      petshopHeroTitle: "Petshops in Depok City",
      petshopHeroDesc: "Find nearby pet supplies, grooming salons, accessories, and pet medications across Depok.",
      tentangHeroTitle: "About Persatuan Kucing Depok",
      tentangHeroDesc: "Learn about our vision, educational mission, and the student team behind the PKD website.",

      // Search & Filters
      searchCatPlaceholder: "Search cat breed or personality (e.g. persian, agile, russian)...",
      searchPetshopPlaceholder: "Search petshop or district (e.g. Beji, Cinere, Sawangan)...",
      filterAll: "🐾 All Breeds",
      filterLong: "🌟 Long Hair",
      filterShort: "✨ Short Hair",
      foundCats: "cats found",
      foundPetshops: "petshops found",
      escapeTip: "💡 Tip: Press Escape to clear search",
      mapsTip: "💡 Click 'View Location' for Google Maps directions",
      viewLocationBtn: "🗺️ View Location",

      // Settings Modal
      settingsTitle: "Website Settings",
      settingsLangTitle: "🌐 Language / Bahasa",
      settingsThemeTitle: "🎨 Color Theme / Tema",
      settingsFontSizeTitle: "🔤 Font Size / Ukuran Teks",
      settingsSoundTitle: "🔊 Meow Sound Effects",
      settingsSoundDesc: "Play cheerful meow sound bites when interacting with buttons",
      settingsTestMeow: "Test Meow 🐾",
      settingsMotionTitle: "✨ Motion & Animations",
      settingsResetBtn: "🔄 Reset to Default",
      settingsSaveBtn: "✓ Done & Close",

      // Footer
      footerDesc: "A friendly educational pet hub and directory for the cat-loving community of Depok City.",
      footerExplore: "Explore Menu",
      footerTeamHeading: "Study Group (Grade 11)",
      footerCopyright: "© 2026 Persatuan Kucing Depok (PKD) · Webflow 'Bubble Bash' Style Remake 🐾"
    }
  };

  // =============================================
  // WEB AUDIO MEOW SYNTHESIS
  // =============================================
  function playMeowSound() {
    if (localStorage.getItem('pkd_sound') === 'off') return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      const now = ctx.currentTime;

      // Realistic playful kitten meow curve: starts 480Hz -> peaks at 880Hz -> soft fall to 390Hz
      osc.frequency.setValueAtTime(480, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      osc.frequency.exponentialRampToValueAtTime(390, now + 0.34);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.22, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);

      setTimeout(() => {
        try { ctx.close(); } catch(e){}
      }, 500);
    } catch (err) {
      // AudioContext policy fallback
    }
  }

  // Expose sound to window
  window.pkdPlayMeow = playMeowSound;

  // =============================================
  // STATE MANAGEMENT
  // =============================================
  const state = {
    theme: localStorage.getItem('pkd_theme') || 'default',
    lang: localStorage.getItem('pkd_lang') || 'id',
    fontSize: localStorage.getItem('pkd_fontsize') || 'normal',
    sound: localStorage.getItem('pkd_sound') || 'on',
    motion: localStorage.getItem('pkd_motion') || 'full'
  };

  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem('pkd_theme', theme);
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    updateModalUI();
  }

  function applyFontSize(size) {
    state.fontSize = size;
    localStorage.setItem('pkd_fontsize', size);
    if (size === 'normal') {
      document.documentElement.removeAttribute('data-fontsize');
    } else {
      document.documentElement.setAttribute('data-fontsize', size);
    }
    updateModalUI();
  }

  function applyMotion(motion) {
    state.motion = motion;
    localStorage.setItem('pkd_motion', motion);
    if (motion === 'full') {
      document.documentElement.removeAttribute('data-motion');
    } else {
      document.documentElement.setAttribute('data-motion', motion);
    }
    updateModalUI();
  }

  function applySound(sound) {
    state.sound = sound;
    localStorage.setItem('pkd_sound', sound);
    updateModalUI();
  }

  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('pkd_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const t = translations[lang] || translations.id;

    // 1. Navbar
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    if (navLinks.length >= 5) {
      navLinks[0].textContent = t.navHome;
      navLinks[1].textContent = t.navCats;
      navLinks[2].textContent = t.navFood;
      navLinks[3].textContent = t.navPetshop;
      navLinks[4].textContent = t.navAbout;
    }

    const headerCta = document.querySelector('.header-cta');
    if (headerCta) {
      if (headerCta.getAttribute('href').includes('kucing')) {
        headerCta.textContent = t.navExplore;
      } else {
        headerCta.textContent = t.navFindPetshop;
      }
    }

    // 2. Hero Section on Index
    const pillBadge = document.querySelector('.hero-content .pill-badge');
    if (pillBadge) {
      pillBadge.innerHTML = `<span class="pill-dot"></span> ${t.heroBadge}`;
    }

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.innerHTML = `${t.heroTitlePrefix}<br /><span class="brand-highlight">${t.heroTitleSuffix}</span>`;
    }

    const heroRibbon = document.querySelector('.hero-ribbon-pill');
    if (heroRibbon) heroRibbon.textContent = t.heroRibbon;

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.textContent = t.heroDesc;

    const heroBtnCats = document.querySelector('.hero-actions a[href="kucing.html"]');
    if (heroBtnCats) heroBtnCats.textContent = t.heroBtnCats;

    const heroBtnPetshop = document.querySelector('.hero-actions a[href="petshop.html"]');
    if (heroBtnPetshop) heroBtnPetshop.textContent = t.heroBtnPetshop;

    const heroFloatTag = document.querySelector('.hero-floating-tag');
    if (heroFloatTag) heroFloatTag.innerHTML = t.heroCardBadge;

    const heroCardTitle = document.querySelector('.hero-card-title');
    if (heroCardTitle) heroCardTitle.textContent = t.heroCardTitle;

    const heroCardCaption = document.querySelector('.hero-card-caption');
    if (heroCardCaption) heroCardCaption.textContent = t.heroCardCaption;

    // 3. Marquee Ticker
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
      const itemsHtml = t.marqueeItems.map(item => `<span class="marquee-item">${item}</span>`).join('');
      // Repeat twice for seamless scroll
      marqueeContent.innerHTML = itemsHtml + itemsHtml;
    }

    // 4. Subpage Heros
    const pageHeroTitle = document.querySelector('.page-hero-title');
    const pageHeroDesc = document.querySelector('.page-hero-desc');
    const pathname = window.location.pathname.toLowerCase();

    if (pageHeroTitle && pageHeroDesc) {
      if (pathname.includes('kucing')) {
        pageHeroTitle.textContent = t.kucingHeroTitle;
        pageHeroDesc.textContent = t.kucingHeroDesc;
      } else if (pathname.includes('makanan')) {
        pageHeroTitle.textContent = t.makananHeroTitle;
        pageHeroDesc.textContent = t.makananHeroDesc;
      } else if (pathname.includes('petshop')) {
        pageHeroTitle.textContent = t.petshopHeroTitle;
        pageHeroDesc.textContent = t.petshopHeroDesc;
      } else if (pathname.includes('tentang')) {
        pageHeroTitle.textContent = t.tentangHeroTitle;
        pageHeroDesc.textContent = t.tentangHeroDesc;
      }
    }

    // 5. Search Inputs Placeholder
    const catSearch = document.getElementById('cat-search');
    if (catSearch) catSearch.placeholder = t.searchCatPlaceholder;

    const petshopSearch = document.getElementById('petshop-search');
    if (petshopSearch) petshopSearch.placeholder = t.searchPetshopPlaceholder;

    // 6. Filter Buttons on Kucing page
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length >= 3) {
      filterBtns[0].textContent = t.filterAll;
      filterBtns[1].textContent = t.filterLong;
      filterBtns[2].textContent = t.filterShort;
    }

    // Trigger re-render if cat or petshop scripts are loaded
    if (typeof window.pkdRenderCats === 'function') {
      window.pkdRenderCats();
    }
    if (typeof window.pkdRenderPetshops === 'function') {
      window.pkdRenderPetshops();
    }

    updateModalUI();
  }

  // =============================================
  // MODAL BUILDER & INJECTION
  // =============================================
  function injectSettingsUI() {
    // 1. Add Settings button in Header
    const headerInner = document.querySelector('.header-inner');
    if (headerInner && !document.getElementById('btn-open-settings')) {
      const settingsBtn = document.createElement('button');
      settingsBtn.id = 'btn-open-settings';
      settingsBtn.className = 'btn-settings-toggle';
      settingsBtn.setAttribute('aria-label', 'Buka Pengaturan Website');
      settingsBtn.setAttribute('title', 'Pengaturan / Settings');
      settingsBtn.innerHTML = '⚙️';
      settingsBtn.addEventListener('click', () => {
        playMeowSound();
        openSettingsModal();
      });

      // Insert before hamburger if mobile, or right after header-cta
      const headerCta = headerInner.querySelector('.header-cta');
      if (headerCta) {
        headerInner.insertBefore(settingsBtn, headerCta);
      } else {
        headerInner.appendChild(settingsBtn);
      }
    }

    // 2. Build Modal Markup
    if (!document.getElementById('settings-modal')) {
      const modalBackdrop = document.createElement('div');
      modalBackdrop.id = 'settings-modal';
      modalBackdrop.className = 'settings-modal-backdrop';
      modalBackdrop.setAttribute('role', 'dialog');
      modalBackdrop.setAttribute('aria-modal', 'true');
      modalBackdrop.setAttribute('aria-label', 'Pengaturan Website');

      modalBackdrop.innerHTML = `
        <div class="settings-modal-card">
          <!-- Header -->
          <div class="settings-modal-header">
            <h3 class="settings-modal-title" id="modal-title-text">
              <span>⚙️</span> Pengaturan Website
            </h3>
            <button class="settings-close-btn" id="btn-close-settings" aria-label="Tutup Pengaturan">✕</button>
          </div>

          <!-- Section 1: Bahasa -->
          <div class="settings-section-box">
            <h4 class="settings-section-title" id="title-lang">🌐 Bahasa / Language</h4>
            <div class="settings-pill-group">
              <button class="settings-pill-btn" data-lang="id">🇮🇩 Bahasa Indonesia</button>
              <button class="settings-pill-btn" data-lang="en">🇬🇧 English</button>
            </div>
          </div>

          <!-- Section 2: Tema -->
          <div class="settings-section-box">
            <h4 class="settings-section-title" id="title-theme">🎨 Tema Warna / Color Theme</h4>
            <div class="theme-options-grid">
              <!-- Default -->
              <div class="theme-card-option" data-theme="default">
                <div class="theme-color-preview" style="background: linear-gradient(135deg, #FFC83B, #FF4D8D);">🟡</div>
                <div class="theme-name-group">
                  <span class="theme-name-title">Bubble Bash</span>
                  <span class="theme-name-desc">Kuning Hangat & Pink</span>
                </div>
              </div>
              <!-- Dark -->
              <div class="theme-card-option" data-theme="dark">
                <div class="theme-color-preview" style="background: linear-gradient(135deg, #0B132B, #19CFB8); color:#FFF;">🌙</div>
                <div class="theme-name-group">
                  <span class="theme-name-title">Midnight Cat</span>
                  <span class="theme-name-desc">Dark Mode & Neon</span>
                </div>
              </div>
              <!-- Pastel -->
              <div class="theme-card-option" data-theme="pastel">
                <div class="theme-color-preview" style="background: linear-gradient(135deg, #FFB5A7, #FCD5CE);">🌸</div>
                <div class="theme-name-group">
                  <span class="theme-name-title">Cotton Candy</span>
                  <span class="theme-name-desc">Soft Pastel Pink</span>
                </div>
              </div>
              <!-- Nature -->
              <div class="theme-card-option" data-theme="nature">
                <div class="theme-color-preview" style="background: linear-gradient(135deg, #2A9D8F, #E76F51);">🌿</div>
                <div class="theme-name-group">
                  <span class="theme-name-title">Fresh Nature</span>
                  <span class="theme-name-desc">Mint Green & Coral</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Ukuran Font -->
          <div class="settings-section-box">
            <h4 class="settings-section-title" id="title-fontsize">🔤 Ukuran Teks / Font Size</h4>
            <div class="settings-pill-group">
              <button class="settings-pill-btn" data-fontsize="small">A- Ringkas (15px)</button>
              <button class="settings-pill-btn" data-fontsize="normal">A Standar (16px)</button>
              <button class="settings-pill-btn" data-fontsize="large">A+ Besar (18px)</button>
            </div>
          </div>

          <!-- Section 4: Efek Suara Meow -->
          <div class="settings-section-box">
            <div class="settings-toggle-row">
              <div>
                <h4 class="settings-section-title" style="margin-bottom:0.2rem;" id="title-sound">🔊 Suara Meow Kucing</h4>
                <p style="font-size:0.8rem; color:var(--color-text-muted);" id="desc-sound">Nada meow sintetis ceria saat mengklik tombol</p>
              </div>
              <button class="btn-test-meow" id="btn-test-meow">Test Meow 🐾</button>
            </div>
            <div class="settings-pill-group" style="margin-top:0.75rem;">
              <button class="settings-pill-btn" data-sound="on">🔊 Nyala (ON)</button>
              <button class="settings-pill-btn" data-sound="off">🔇 Mati (OFF)</button>
            </div>
          </div>

          <!-- Section 5: Efek Gerak / Animasi -->
          <div class="settings-section-box">
            <h4 class="settings-section-title" id="title-motion">✨ Efek Gerak & Animasi</h4>
            <div class="settings-pill-group">
              <button class="settings-pill-btn" data-motion="full">✨ Animasi Penuh</button>
              <button class="settings-pill-btn" data-motion="reduced">🛑 Kurangi Gerak</button>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="settings-modal-footer">
            <button class="btn-reset-settings" id="btn-reset-settings">🔄 Reset ke Setelan Awal</button>
            <button class="btn btn-pink btn-sm" id="btn-save-settings">✓ Selesai & Tutup</button>
          </div>
        </div>
      `;

      document.body.appendChild(modalBackdrop);

      // Bind Modal Events
      modalBackdrop.querySelector('#btn-close-settings').addEventListener('click', closeSettingsModal);
      modalBackdrop.querySelector('#btn-save-settings').addEventListener('click', closeSettingsModal);
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeSettingsModal();
      });

      // Language Buttons
      modalBackdrop.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', () => {
          playMeowSound();
          applyLanguage(btn.dataset.lang);
        });
      });

      // Theme Buttons
      modalBackdrop.querySelectorAll('[data-theme]').forEach(card => {
        card.addEventListener('click', () => {
          playMeowSound();
          applyTheme(card.dataset.theme);
        });
      });

      // Font Size Buttons
      modalBackdrop.querySelectorAll('[data-fontsize]').forEach(btn => {
        btn.addEventListener('click', () => {
          playMeowSound();
          applyFontSize(btn.dataset.fontsize);
        });
      });

      // Sound Buttons
      modalBackdrop.querySelectorAll('[data-sound]').forEach(btn => {
        btn.addEventListener('click', () => {
          applySound(btn.dataset.sound);
          if (btn.dataset.sound === 'on') playMeowSound();
        });
      });

      // Motion Buttons
      modalBackdrop.querySelectorAll('[data-motion]').forEach(btn => {
        btn.addEventListener('click', () => {
          playMeowSound();
          applyMotion(btn.dataset.motion);
        });
      });

      // Test Meow Button
      modalBackdrop.querySelector('#btn-test-meow').addEventListener('click', () => {
        playMeowSound();
      });

      // Reset Button
      modalBackdrop.querySelector('#btn-reset-settings').addEventListener('click', () => {
        playMeowSound();
        applyTheme('default');
        applyLanguage('id');
        applyFontSize('normal');
        applySound('on');
        applyMotion('full');
      });
    }
  }

  function openSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      updateModalUI();
    }
  }

  function closeSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      playMeowSound();
    }
  }

  function updateModalUI() {
    const modal = document.getElementById('settings-modal');
    if (!modal) return;

    // Active Lang
    modal.querySelectorAll('[data-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === state.lang);
    });

    // Active Theme
    modal.querySelectorAll('[data-theme]').forEach(card => {
      card.classList.toggle('active', card.dataset.theme === state.theme);
    });

    // Active Font Size
    modal.querySelectorAll('[data-fontsize]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.fontsize === state.fontSize);
    });

    // Active Sound
    modal.querySelectorAll('[data-sound]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sound === state.sound);
    });

    // Active Motion
    modal.querySelectorAll('[data-motion]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.motion === state.motion);
    });

    // Texts inside modal based on lang
    const t = translations[state.lang] || translations.id;
    const titleText = modal.querySelector('#modal-title-text');
    if (titleText) titleText.innerHTML = `<span>⚙️</span> ${t.settingsTitle}`;

    const titleLang = modal.querySelector('#title-lang');
    if (titleLang) titleLang.textContent = t.settingsLangTitle;

    const titleTheme = modal.querySelector('#title-theme');
    if (titleTheme) titleTheme.textContent = t.settingsThemeTitle;

    const titleFontSize = modal.querySelector('#title-fontsize');
    if (titleFontSize) titleFontSize.textContent = t.settingsFontSizeTitle;

    const titleSound = modal.querySelector('#title-sound');
    if (titleSound) titleSound.textContent = t.settingsSoundTitle;

    const descSound = modal.querySelector('#desc-sound');
    if (descSound) descSound.textContent = t.settingsSoundDesc;

    const btnTestMeow = modal.querySelector('#btn-test-meow');
    if (btnTestMeow) btnTestMeow.textContent = t.settingsTestMeow;

    const titleMotion = modal.querySelector('#title-motion');
    if (titleMotion) titleMotion.textContent = t.settingsMotionTitle;

    const btnReset = modal.querySelector('#btn-reset-settings');
    if (btnReset) btnReset.textContent = t.settingsResetBtn;

    const btnSave = modal.querySelector('#btn-save-settings');
    if (btnSave) btnSave.textContent = t.settingsSaveBtn;
  }

  // =============================================
  // GLOBAL SOUND EFFECTS ON USER CLICKS
  // =============================================
  function attachGlobalSoundEffects() {
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.btn, .cat-card, .catalog-card, .filter-btn, .step-card, .nav-link, .pill-badge, .chunky-feature-card');
      if (target && !e.target.closest('.settings-modal-card')) {
        playMeowSound();
      }
    });
  }

  // =============================================
  // INIT
  // =============================================
  document.addEventListener('DOMContentLoaded', () => {
    // Apply saved preferences immediately
    applyTheme(state.theme);
    applyFontSize(state.fontSize);
    applyMotion(state.motion);

    injectSettingsUI();
    applyLanguage(state.lang);
    attachGlobalSoundEffects();
  });

  // Hot apply immediately if document already parsed
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    applyTheme(state.theme);
    applyFontSize(state.fontSize);
    applyMotion(state.motion);
  }

})();
