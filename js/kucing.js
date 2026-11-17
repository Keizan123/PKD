/**
 * kucing.js — PKD (Persatuan Kucing Depok)
 * Logika pencarian dan filter kucing dengan dukungan multi-bahasa
 */

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // STATE
  // =============================================
  let activeFilter = 'semua';
  let searchQuery = '';

  // =============================================
  // DOM REFERENCES
  // =============================================
  const searchInput = document.getElementById('cat-search');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const catGrid = document.getElementById('cat-grid');
  const emptyState = document.getElementById('empty-state');
  const resultCount = document.getElementById('result-count');

  // =============================================
  // RENDER KUCING
  // =============================================
  function renderCats() {
    const isEn = localStorage.getItem('pkd_lang') === 'en';

    // Filter berdasarkan kategori
    let filtered = catsData.filter(cat => {
      if (activeFilter === 'semua') return true;
      return cat.type === activeFilter;
    });

    // Filter berdasarkan pencarian
    if (searchQuery) {
      filtered = filtered.filter(cat => {
        const name = normalizeSearch(cat.name);
        const desc = normalizeSearch(isEn && cat.description_en ? cat.description_en : cat.description);
        const chars = (isEn && cat.characteristics_en ? cat.characteristics_en : cat.characteristics)
          .map(c => normalizeSearch(c)).join(' ');
        const query = normalizeSearch(searchQuery);
        return name.includes(query) || desc.includes(query) || chars.includes(query);
      });
    }

    // Update jumlah hasil
    if (resultCount) {
      resultCount.textContent = isEn 
        ? `${filtered.length} cat breeds found`
        : `${filtered.length} ras kucing ditemukan`;
    }

    // Tampilkan empty state atau kartu
    if (filtered.length === 0) {
      catGrid.innerHTML = '';
      emptyState.style.display = 'flex';
    } else {
      emptyState.style.display = 'none';
      catGrid.innerHTML = filtered.map(cat => createCatCard(cat, isEn)).join('');

      // Tambahkan animasi masuk
      const cards = catGrid.querySelectorAll('.cat-card');
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 50}ms`;
        card.classList.add('card-appear');
      });
    }
  }

  // Expose to window for live settings language toggle
  window.pkdRenderCats = renderCats;

  /**
   * Membuat HTML kartu kucing
   * @param {Object} cat - Data kucing dari catsData
   * @param {boolean} isEn - Mode bahasa Inggris
   * @returns {string} HTML string
   */
  function createCatCard(cat, isEn) {
    const charsList = isEn && cat.characteristics_en ? cat.characteristics_en : cat.characteristics;
    const characteristics = charsList.map(c => `<li>${c}</li>`).join('');

    const desc = isEn && cat.description_en ? cat.description_en : cat.description;
    const typeLabel = isEn && cat.typeLabel_en ? cat.typeLabel_en : cat.typeLabel;
    const origin = isEn && cat.origin_en ? cat.origin_en : cat.origin;
    const originLabel = isEn ? '🌍 Origin:' : '🌍 Asal:';

    // Gunakan foto asli jika tersedia, fallback ke emoji
    const imageSection = cat.image
      ? `<img class="cat-photo" src="${cat.image}" alt="Foto kucing ${cat.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <div class="cat-emoji-wrapper" style="background-color: ${cat.bgColor}; display:none;">
           <span class="cat-emoji" aria-hidden="true">${cat.emoji}</span>
         </div>`
      : `<div class="cat-emoji-wrapper" style="background-color: ${cat.bgColor}">
           <span class="cat-emoji" aria-hidden="true">${cat.emoji}</span>
         </div>`;

    return `
      <article class="cat-card" role="listitem">
        <div class="cat-image-container">
          ${imageSection}
        </div>
        <div class="cat-card-body">
          <div class="cat-header">
            <h3 class="cat-name">${cat.name}</h3>
            <span class="cat-type-badge ${cat.type}">${typeLabel}</span>
          </div>
          <p class="cat-description">${desc}</p>
          <div class="cat-origin">
            <span class="origin-label">${originLabel}</span>
            <span class="origin-value">${origin}</span>
          </div>
          <ul class="cat-characteristics" aria-label="Karakteristik ${cat.name}">
            ${characteristics}
          </ul>
        </div>
      </article>
    `;
  }

  // =============================================
  // EVENT LISTENERS
  // =============================================

  // Pencarian real-time dengan debounce
  if (searchInput) {
    const debouncedSearch = debounce((e) => {
      searchQuery = e.target.value;
      renderCats();
    }, 300);

    searchInput.addEventListener('input', debouncedSearch);

    // Tombol clear search
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        searchQuery = '';
        renderCats();
      }
    });
  }

  // Filter tombol kategori
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderCats();
    });
  });

  // =============================================
  // INISIALISASI PERTAMA
  // =============================================
  renderCats();

});
