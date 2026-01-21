/**
 * MarTech Members JavaScript Engine
 * ระบบ filter, search และ render สำหรับ WordPress Elementor
 */

const MartechMembers = (function() {
  // State
  let selectedTags = [];
  let searchQuery = '';
  
  // DOM Elements (จะถูก set เมื่อ init)
  let companiesContainer = null;
  let personsContainer = null;
  let searchInput = null;
  let tagsContainer = null;

  /**
   * Initialize component
   */
  function init() {
    companiesContainer = document.getElementById('martech-companies-list');
    personsContainer = document.getElementById('martech-persons-list');
    searchInput = document.getElementById('martech-search');
    tagsContainer = document.getElementById('martech-tags');

    if (tagsContainer) renderTags();
    if (companiesContainer) renderCompanies();
    if (personsContainer) renderPersons();
    
    if (searchInput) {
      searchInput.addEventListener('input', function(e) {
        searchQuery = e.target.value.toLowerCase().trim();
        renderCompanies();
      });
    }
  }

  /**
   * Render popular tags
   */
  function renderTags() {
    if (!tagsContainer || typeof MARTECH_POPULAR_TAGS === 'undefined') return;
    
    let html = '<span class="tag-label">แท็กยอดนิยม:</span>';
    MARTECH_POPULAR_TAGS.forEach(function(tag) {
      const isActive = selectedTags.includes(tag);
      html += '<span class="tag-item ' + (isActive ? 'active' : '') + '" data-tag="' + tag + '">' + tag + '</span>';
    });
    tagsContainer.innerHTML = html;

    // Add click events
    tagsContainer.querySelectorAll('.tag-item').forEach(function(el) {
      el.addEventListener('click', function() {
        toggleTag(this.dataset.tag);
      });
    });
  }

  /**
   * Toggle tag filter
   */
  function toggleTag(tag) {
    const index = selectedTags.indexOf(tag);
    if (index > -1) {
      selectedTags.splice(index, 1);
    } else {
      selectedTags.push(tag);
    }
    renderTags();
    renderCompanies();
  }

  /**
   * Filter companies
   */
  function filterCompanies() {
    if (typeof MARTECH_COMPANIES === 'undefined') return [];
    
    return MARTECH_COMPANIES.filter(function(company) {
      // Search filter
      if (searchQuery) {
        const searchIn = [
          company.nameTh || '',
          company.nameEn || '',
          company.description || '',
          (company.tags || []).join(' ')
        ].join(' ').toLowerCase();
        
        if (!searchIn.includes(searchQuery)) return false;
      }
      
      // Tag filter (AND logic)
      if (selectedTags.length > 0) {
        const companyTags = company.tags || [];
        const hasAllTags = selectedTags.every(function(tag) {
          return companyTags.includes(tag);
        });
        if (!hasAllTags) return false;
      }
      
      return true;
    }).sort(function(a, b) {
      return (a.nameTh || '').localeCompare(b.nameTh || '', 'th');
    });
  }

  /**
   * Render companies list
   */
  function renderCompanies() {
    if (!companiesContainer) return;
    
    const companies = filterCompanies();
    
    if (companies.length === 0) {
      companiesContainer.innerHTML = '<li class="no-results">' +
        '<div class="no-results-icon">🔍</div>' +
        '<div class="no-results-text">ไม่พบบริษัทที่ค้นหา</div>' +
        '<button class="clear-search-btn" onclick="MartechMembers.clearFilters()">ล้างคำค้นหา</button>' +
        '</li>';
      return;
    }

    let html = '';
    companies.forEach(function(company, index) {
      const popupClass = (index % 4 >= 2) ? 'popup-left' : 'popup';
      
      html += '<li>';
      html += '<span class="group">';
      html += '<div class="profile"><div class="img" style="background-image: url(\'' + company.logo + '\');"></div></div>';
      html += '<span class="name">' + company.nameTh + '</span>';
      
      // Popup
      html += '<div class="' + popupClass + '">';
      html += '<div class="popup-title">' + company.nameTh + '</div>';
      if (company.nameEn) html += '<div class="popup-sub-title">' + company.nameEn + '</div>';
      if (company.businessType) html += '<div class="popup-meta"><strong>ประเภทธุรกิจ : </strong>' + company.businessType + '</div>';
      if (company.contact) html += '<div class="popup-meta"><strong>Contact : </strong>' + company.contact + '</div>';
      if (company.phone) html += '<div class="popup-meta"><strong>Phone : </strong>' + company.phone + '</div>';
      if (company.email) html += '<div class="popup-meta"><strong>Email : </strong>' + company.email + '</div>';
      if (company.website) html += '<div class="popup-meta"><strong>Website : </strong><a href="' + company.website + '" target="_blank">' + company.website.replace(/^https?:\/\//, '') + '</a></div>';
      if (company.description) html += '<div class="popup-desc">' + company.description + '</div>';
      html += '</div>';
      
      html += '</span>';
      html += '</li>';
    });

    companiesContainer.innerHTML = html;
  }

  /**
   * Render persons list
   */
  function renderPersons() {
    if (!personsContainer || typeof MARTECH_PERSONS === 'undefined') return;
    
    let html = '';
    MARTECH_PERSONS.forEach(function(person) {
      html += '<div class="person-item">' + person.name + '</div>';
    });
    personsContainer.innerHTML = html;
  }

  /**
   * Clear all filters
   */
  function clearFilters() {
    selectedTags = [];
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    renderTags();
    renderCompanies();
  }

  // Public API
  return {
    init: init,
    toggleTag: toggleTag,
    clearFilters: clearFilters,
    renderCompanies: renderCompanies,
    renderPersons: renderPersons
  };
})();

// Auto init when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', MartechMembers.init);
} else {
  MartechMembers.init();
}
