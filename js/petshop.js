/**
 * petshop.js — PKD (Persatuan Kucing Depok)
 * Logika pencarian petshop berdasarkan nama atau area/kecamatan
 */

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // STATE
  // =============================================
  let searchQuery = '';

  // =============================================
  // DOM REFERENCES
  // =============================================
  const searchInput = document.getElementById('petshop-search');
  const petshopGrid = document.getElementById('petshop-grid');
  const emptyState = document.getElementById('empty-state');
  const resultCount = document.getElementById('result-count');

  // =============================================
  // RENDER PETSHOP
  // =============================================
  function renderPetshops() {
    let filtered = petshopsData;

    // Filter berdasarkan pencarian (nama atau area)
    if (searchQuery) {
      filtered = petshopsData.filter(shop => {
        const name = normalizeSearch(shop.name);
        const area = normalizeSearch(shop.area);
        const address = normalizeSearch(shop.address);
        const query = normalizeSearch(searchQuery);
        return name.includes(query) || area.includes(query) || address.includes(query);
      });
    }

    // Update jumlah hasil
    if (resultCount) {
      resultCount.textContent = `${filtered.length} petshop ditemukan`;
    }

    // Tampilkan empty state atau kartu
    if (filtered.length === 0) {
      petshopGrid.innerHTML = '';
      emptyState.style.display = 'flex';
    } else {
      emptyState.style.display = 'none';
      petshopGrid.innerHTML = filtered.map(shop => createPetshopCard(shop)).join('');

      // Tambahkan animasi masuk
      const cards = petshopGrid.querySelectorAll('.petshop-card');
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 80}ms`;
        card.classList.add('card-appear');
      });
    }
  }

  /**
   * Membuat HTML kartu petshop
   * @param {Object} shop - Data petshop dari petshopsData
   * @returns {string} HTML string
   */
  function createPetshopCard(shop) {
    const services = shop.services
      .map(s => `<span class="service-tag">${s}</span>`)
      .join('');

    return `
      <article class="petshop-card" role="listitem">
        <div class="petshop-header">
          <div class="petshop-emoji-wrapper">
            <span class="petshop-emoji" aria-hidden="true">${shop.emoji}</span>
          </div>
          <div class="petshop-title-info">
            <h3 class="petshop-name">${shop.name}</h3>
            <span class="petshop-area-badge">📍 ${shop.area}</span>
          </div>
        </div>
        <div class="petshop-body">
          <div class="petshop-info-row">
            <span class="info-icon" aria-hidden="true">📌</span>
            <span>${shop.address}</span>
          </div>
          <div class="petshop-info-row">
            <span class="info-icon" aria-hidden="true">🕐</span>
            <span>${shop.hours}</span>
          </div>
          <div class="petshop-info-row">
            <span class="info-icon" aria-hidden="true">📞</span>
            <span>${shop.phone}</span>
          </div>
          <div class="petshop-services">
            <p class="services-label">Layanan:</p>
            <div class="services-list">${services}</div>
          </div>
        </div>
        <div class="petshop-footer">
          <a 
            href="${shop.mapsUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary maps-btn"
            aria-label="Lihat lokasi ${shop.name} di Google Maps"
          >
            🗺️ Lihat Lokasi
          </a>
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
      renderPetshops();
    }, 300);

    searchInput.addEventListener('input', debouncedSearch);

    // Tombol clear search dengan Escape
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        searchQuery = '';
        renderPetshops();
      }
    });
  }

  // =============================================
  // INISIALISASI PERTAMA
  // =============================================
  renderPetshops();

});
