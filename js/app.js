/**
 * EZZI BEARING SUPPLIERS - Interactive Engine
 * Handles Real-Time Part Search, Multi-Facet Filters, RFQ Basket,
 * WhatsApp Lead Automation, Modals, and Technical Specifications.
 * 
 * Stockist: SKF, TATA, XNO, DSF, TIMKEN, FAG, NBC, NSK, KOYO
 * Contacts: Shabbir Sakriwala (+91 92723 95247) | Ammar Sakriwala (+91 88307 21850)
 * Address: Burhani Complex, Opp. Post Office, Near Bohri Masjid, Bohri Compound, Manmad - 423104
 */

(function () {
  'use strict';

  // Master Configuration & Contacts for EZZI Bearing Suppliers
  const CONFIG = {
    phoneShabbir: "+91 92723 95247",
    phoneAmmar: "+91 88307 21850",
    phoneShabbirClean: "919272395247",
    phoneAmmarClean: "918830721850",
    whatsappPrimary: "918830721850", // Ammar Sakriwala (Default POC)
    whatsappSecondary: "919272395247", // Shabbir Sakriwala
    email: "sales.ezzybearing@gmail.com",
    depotLocation: "Burhani Complex, Opp. Post Office, Near Bohri Masjid, Bohri Compound, Manmad - 423104 (Maharashtra)",
    storageKey: "ezzi_rfq_cart_v2"
  };

  // State Management
  const state = {
    products: [],
    categories: [],
    brands: [],
    industries: [],
    filters: {
      query: "",
      category: "all",
      brands: new Set(),
      minBore: 0,
      maxBore: 1000
    },
    viewMode: "grid", // "grid" | "table"
    visibleLimit: 24, // Page limit for smooth performance
    cart: [] // Multi-item RFQ cart
  };

  // DOM Elements Cache
  const elements = {
    // Search & Filters
    mainSearchInput: document.getElementById("mainSearchInput"),
    heroSearchInput: document.getElementById("heroSearchInput"),
    heroCategorySelect: document.getElementById("heroCategorySelect"),
    heroBrandSelect: document.getElementById("heroBrandSelect"),
    heroFinderForm: document.getElementById("heroFinderForm"),
    categoryChipsContainer: document.getElementById("categoryChipsContainer"),
    brandFiltersContainer: document.getElementById("brandFiltersContainer"),
    minBoreInput: document.getElementById("minBoreInput"),
    maxBoreInput: document.getElementById("maxBoreInput"),
    resetFiltersBtn: document.getElementById("resetFiltersBtn"),
    filterSidebar: document.getElementById("filterSidebar"),
    mobileFilterToggle: document.getElementById("mobileFilterToggle"),
    closeMobileFilterBtn: document.getElementById("closeMobileFilterBtn"),

    // Results & View
    productsGrid: document.getElementById("productsGrid"),
    productsTableBody: document.getElementById("productsTableBody"),
    productsTableView: document.getElementById("productsTableView"),
    resultsCountText: document.getElementById("resultsCountText"),
    viewGridBtn: document.getElementById("viewGridBtn"),
    viewTableBtn: document.getElementById("viewTableBtn"),

    // Categories & Sections
    categoriesGrid: document.getElementById("categoriesGrid"),
    brandStripContainer: document.getElementById("brandStripContainer"),
    industriesGrid: document.getElementById("industriesGrid"),

    // RFQ Basket & Drawer
    rfqBasketBtn: document.getElementById("rfqBasketBtn"),
    rfqBasketBadge: document.getElementById("rfqBasketBadge"),
    mobileRfqBadge: document.getElementById("mobileRfqBadge"),
    rfqDrawer: document.getElementById("rfqDrawer"),
    closeRfqDrawerBtn: document.getElementById("closeRfqDrawerBtn"),
    drawerItemsList: document.getElementById("drawerItemsList"),
    drawerEmptyState: document.getElementById("drawerEmptyState"),
    drawerFooter: document.getElementById("drawerFooter"),
    drawerSendWhatsAppBtn: document.getElementById("drawerSendWhatsAppBtn"),
    drawerPopulateFormBtn: document.getElementById("drawerPopulateFormBtn"),
    drawerClearBtn: document.getElementById("drawerClearBtn"),

    // Product Detail Modal
    productModal: document.getElementById("productModal"),
    modalCloseBtn: document.getElementById("modalCloseBtn"),
    modalContentArea: document.getElementById("modalContentArea"),

    // RFQ Form
    rfqForm: document.getElementById("rfqForm"),
    rfqPartsInput: document.getElementById("rfqPartsInput"),

    // Mobile Navigation
    mobileMenuToggle: document.getElementById("mobileMenuToggle"),
    mainNavLinks: document.getElementById("mainNavLinks"),
    mobileDockRfqBtn: document.getElementById("mobileDockRfqBtn"),

    // Toast Container
    toastContainer: document.getElementById("toastContainer")
  };

  /* ==========================================================================
     INIT & BOOTSTRAP
     ========================================================================== */
  function init() {
    if (!window.EZZI_DATA) {
      console.error("EZZI_DATA not found. Ensure products-data.js is loaded.");
      return;
    }

    state.products = window.EZZI_DATA.BEARING_PRODUCTS || [];
    state.categories = window.EZZI_DATA.BEARING_CATEGORIES || [];
    state.brands = window.EZZI_DATA.BRANDS_STOCKED || [];
    state.industries = window.EZZI_DATA.INDUSTRIES_SERVED || [];

    // Load Cart from LocalStorage
    loadCart();

    // Render Initial Components
    renderCategoriesGrid();
    renderBrandStrip();
    renderIndustriesGrid();
    renderFilterCategoriesList();
    renderFilterBrandsList();
    populateHeroSelects();

    // Render Products
    renderCatalog();

    // Attach Event Listeners
    setupEventListeners();
    setupHeaderScroll();
    updateCartUI();
  }

  /* ==========================================================================
     LOCAL STORAGE RFQ BASKET
     ========================================================================== */
  function loadCart() {
    try {
      const saved = localStorage.getItem(CONFIG.storageKey);
      if (saved) {
        state.cart = JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load cart from localStorage", e);
      state.cart = [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.cart));
      updateCartUI();
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
  }

  function addToCart(productId, quantity = 10) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        partNumber: product.partNumber,
        categoryName: product.categoryName,
        dimensions: `${product.d} x ${product.D} x ${product.B} mm`,
        brands: product.brands.join("/"),
        quantity: quantity
      });
    }

    saveCart();
    showToast(`Added ${product.partNumber} (${quantity} pcs) to Quote Sheet`);
  }

  function updateItemQuantity(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity = Math.max(1, item.quantity + delta);
    saveCart();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
  }

  function clearCart() {
    state.cart = [];
    saveCart();
    showToast("Quote Sheet cleared");
  }

  function updateCartUI() {
    const uniqueCount = state.cart.length;

    if (elements.rfqBasketBadge) {
      elements.rfqBasketBadge.textContent = uniqueCount;
    }
    if (elements.mobileRfqBadge) {
      elements.mobileRfqBadge.textContent = uniqueCount;
    }

    renderDrawerItems();
  }

  function renderDrawerItems() {
    if (!elements.drawerItemsList) return;

    if (state.cart.length === 0) {
      if (elements.drawerEmptyState) elements.drawerEmptyState.style.display = "block";
      if (elements.drawerFooter) elements.drawerFooter.style.display = "none";
      elements.drawerItemsList.innerHTML = "";
      return;
    }

    if (elements.drawerEmptyState) elements.drawerEmptyState.style.display = "none";
    if (elements.drawerFooter) elements.drawerFooter.style.display = "flex";

    elements.drawerItemsList.innerHTML = state.cart.map(item => `
      <div class="drawer-item-card" data-id="${item.id}">
        <div class="drawer-item-info">
          <span class="drawer-item-part">${escapeHtml(item.partNumber)}</span>
          <span class="drawer-item-sub">${escapeHtml(item.dimensions)} | ${escapeHtml(item.brands)}</span>
        </div>
        <div class="drawer-qty-control">
          <button class="drawer-qty-btn" onclick="window.EZZI_APP.updateQty('${item.id}', -5)">-</button>
          <span class="drawer-qty-num">${item.quantity}</span>
          <button class="drawer-qty-btn" onclick="window.EZZI_APP.updateQty('${item.id}', 5)">+</button>
        </div>
        <button class="drawer-remove-btn" title="Remove" onclick="window.EZZI_APP.removeItem('${item.id}')">&times;</button>
      </div>
    `).join("");
  }

  /* ==========================================================================
     WHATSAPP URL GENERATOR
     ========================================================================== */
  function generateSingleProductWhatsAppUrl(product) {
    const text = 
`*INQUIRY: EZZI BEARING SUPPLIERS (Manmad)*
--------------------------------------
*Bearing Part No:* ${product.partNumber}
*Category / Type:* ${product.categoryName}
*Dimensions (d x D x B):* ${product.d} x ${product.D} x ${product.B} mm
*Available Brands:* ${product.brands.join(', ')}
*Depot:* Burhani Complex, Manmad (Ready Stock)

*Buyer Requisition:*
• Company Name: 
• Delivery Destination / City: 
• Required Quantity: 
• Preferred Brand (SKF/TATA/XNO/DSF/TIMKEN/FAG/NBC): 

Please share availability & wholesale quotation. Thank you!`;

    return `https://wa.me/${CONFIG.whatsappPrimary}?text=${encodeURIComponent(text)}`;
  }

  function generateMultiItemWhatsAppUrl() {
    if (state.cart.length === 0) return "#";

    let itemsText = state.cart.map((item, index) => 
      `${index + 1}. *${item.partNumber}* (${item.dimensions}) - Brands: ${item.brands} | Qty: ${item.quantity} pcs`
    ).join("\n");

    const text = 
`*BULK RFQ: EZZI BEARING SUPPLIERS (Manmad Depot)*
--------------------------------------
*Bearing Bill of Materials (BOM):*

${itemsText}

--------------------------------------
*Procurement Details:*
• Company / Plant Name: 
• Delivery City & State: 
• GSTIN (Optional): 
• Urgency (Routine Stock / Breakdown Urgent): 

Please provide wholesale quotation & dispatch ETA from your Manmad depot.`;

    return `https://wa.me/${CONFIG.whatsappPrimary}?text=${encodeURIComponent(text)}`;
  }

  /* ==========================================================================
     RENDER METHODS
     ========================================================================== */

  // Category Explorer Grid
  function renderCategoriesGrid() {
    if (!elements.categoriesGrid) return;

    elements.categoriesGrid.innerHTML = state.categories.map(cat => `
      <div class="category-card" data-category-id="${cat.id}">
        <div class="category-card-top">
          <div class="category-icon-wrapper">
            ${getCategorySvg(cat.icon)}
          </div>
          <span class="category-badge-chip">${escapeHtml(cat.featuredBadge)}</span>
        </div>
        <h3 class="category-title">${escapeHtml(cat.name)}</h3>
        <p class="category-desc">${escapeHtml(cat.description)}</p>
        <div class="category-series-row">Series: ${escapeHtml(cat.commonSeries)}</div>
        <div class="category-footer">
          <span>Filter in Catalogue (${cat.count} SKUs)</span>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </div>
      </div>
    `).join("");

    elements.categoriesGrid.querySelectorAll(".category-card").forEach(card => {
      card.addEventListener("click", () => {
        const catId = card.getAttribute("data-category-id");
        setCategoryFilter(catId);
        scrollToCatalogue();
      });
    });
  }

  // Brands Strip
  function renderBrandStrip() {
    if (!elements.brandStripContainer) return;

    elements.brandStripContainer.innerHTML = state.brands.map(brand => `
      <div class="brand-badge-card" data-brand="${brand.name}">
        <span class="brand-name-title">${escapeHtml(brand.name)}</span>
        <span class="brand-origin-text">${escapeHtml(brand.origin)}</span>
        <span class="brand-cert-badge">
          <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          ${brand.tier}
        </span>
      </div>
    `).join("");

    elements.brandStripContainer.querySelectorAll(".brand-badge-card").forEach(card => {
      card.addEventListener("click", () => {
        const brandName = card.getAttribute("data-brand");
        toggleBrandFilter(brandName);
        scrollToCatalogue();
      });
    });
  }

  // Industries Served Grid
  function renderIndustriesGrid() {
    if (!elements.industriesGrid) return;

    elements.industriesGrid.innerHTML = state.industries.map(ind => `
      <div class="industry-card">
        <div class="industry-icon-box">
          ${getIndustrySvg(ind.icon)}
        </div>
        <h3 class="industry-title">${escapeHtml(ind.name)}</h3>
        <p class="industry-desc">${escapeHtml(ind.description)}</p>
        <div class="industry-bearings-tagrow">
          <span class="tagrow-label">Common Requisitions</span>
          <div class="tagrow-items">
            ${ind.keyBearings.map(b => `<span class="ind-bearing-tag" onclick="window.EZZI_APP.searchDirect('${b}')">${escapeHtml(b)}</span>`).join("")}
          </div>
        </div>
        <div class="industry-advantage-box">
          <strong>Manmad Hub Advantage:</strong> ${escapeHtml(ind.hubAdvantage)}
        </div>
      </div>
    `).join("");
  }

  // Sidebar Filter Category Chips
  function renderFilterCategoriesList() {
    if (!elements.categoryChipsContainer) return;

    let html = `
      <div class="filter-chip ${state.filters.category === 'all' ? 'active' : ''}" data-category="all">
        <span>All Categories</span>
        <span class="chip-count">${state.products.length}</span>
      </div>
    `;

    state.categories.forEach(cat => {
      const count = state.products.filter(p => p.category === cat.id).length;
      html += `
        <div class="filter-chip ${state.filters.category === cat.id ? 'active' : ''}" data-category="${cat.id}">
          <span>${escapeHtml(cat.shortName)}</span>
          <span class="chip-count">${count}</span>
        </div>
      `;
    });

    elements.categoryChipsContainer.innerHTML = html;

    elements.categoryChipsContainer.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const cat = chip.getAttribute("data-category");
        setCategoryFilter(cat);
      });
    });
  }

  // Sidebar Brand Filter Checkboxes
  function renderFilterBrandsList() {
    if (!elements.brandFiltersContainer) return;

    elements.brandFiltersContainer.innerHTML = state.brands.map(brand => `
      <label class="brand-check-label">
        <input type="checkbox" value="${brand.name}" ${state.filters.brands.has(brand.name) ? 'checked' : ''}>
        <span>${escapeHtml(brand.name)}</span>
      </label>
    `).join("");

    elements.brandFiltersContainer.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.addEventListener("change", (e) => {
        if (e.target.checked) {
          state.filters.brands.add(e.target.value);
        } else {
          state.filters.brands.delete(e.target.value);
        }
        renderCatalog();
      });
    });
  }

  // Populate Hero Form Selects
  function populateHeroSelects() {
    if (elements.heroCategorySelect) {
      elements.heroCategorySelect.innerHTML = `<option value="all">All Bearing Types</option>` +
        state.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
    }
    if (elements.heroBrandSelect) {
      elements.heroBrandSelect.innerHTML = `<option value="all">All Stockist Brands (SKF/TATA/XNO/DSF)</option>` +
        state.brands.map(b => `<option value="${b.name}">${b.name}</option>`).join("");
    }
  }

  /* ==========================================================================
     CATALOG RENDERING & FILTERING
     ========================================================================== */
  function getFilteredProducts() {
    let list = state.products;

    // Category Filter
    if (state.filters.category && state.filters.category !== "all") {
      list = list.filter(p => p.category === state.filters.category);
    }

    // Brands Filter
    if (state.filters.brands.size > 0) {
      list = list.filter(p => p.brands.some(b => state.filters.brands.has(b)));
    }

    // Bore Min / Max
    if (state.filters.minBore > 0) {
      list = list.filter(p => p.d >= state.filters.minBore);
    }
    if (state.filters.maxBore < 1000) {
      list = list.filter(p => p.d <= state.filters.maxBore);
    }

    // Query Search
    if (state.filters.query && state.filters.query.trim() !== "") {
      const q = state.filters.query.trim().toLowerCase();
      list = list.filter(p => {
        const matchPart = p.partNumber.toLowerCase().includes(q);
        const matchName = p.name.toLowerCase().includes(q);
        const matchCat = p.categoryName.toLowerCase().includes(q);
        const matchBrands = p.brands.some(b => b.toLowerCase().includes(q));
        const matchApps = p.popularApplications.some(a => a.toLowerCase().includes(q));
        const matchDimensions = `${p.d}x${p.D}x${p.B}`.toLowerCase().includes(q) ||
                                `${p.d} ${p.D} ${p.B}`.includes(q);
        return matchPart || matchName || matchCat || matchBrands || matchApps || matchDimensions;
      });
    }

    return list;
  }

  function renderCatalog() {
    const filtered = getFilteredProducts();

    // Update Result Count
    if (elements.resultsCountText) {
      elements.resultsCountText.innerHTML = `Showing <strong>${filtered.length}</strong> of ${state.products.length} Products`;
    }

    // Update Category Chips Active State
    if (elements.categoryChipsContainer) {
      elements.categoryChipsContainer.querySelectorAll(".filter-chip").forEach(chip => {
        const cat = chip.getAttribute("data-category");
        if (cat === state.filters.category) {
          chip.classList.add("active");
        } else {
          chip.classList.remove("active");
        }
      });
    }

    // Render Grid View
    if (elements.productsGrid) {
      if (filtered.length === 0) {
        elements.productsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-medium);">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="margin: 0 auto 16px; color: var(--amber-primary);">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <h3 style="font-family: var(--font-heading); color: #fff; margin-bottom: 8px;">No Bearings Found Matching Filter</h3>
            <p style="color: var(--text-secondary); max-width: 460px; margin: 0 auto 20px; font-size: 0.875rem;">
              We maintain ready stock at our Manmad depot for all standard and rare bearing numbers. Send us your requirement on WhatsApp for immediate verification.
            </p>
            <button class="btn-whatsapp" onclick="window.EZZI_APP.openCustomWhatsAppEnquiry()">
              Inquire Part on WhatsApp
            </button>
          </div>
        `;
      } else {
        const visibleItems = filtered.slice(0, state.visibleLimit);
        let cardsHtml = visibleItems.map(p => `
          <div class="product-card" data-id="${p.id}">
            <span class="product-card-badge">${escapeHtml(p.badge || 'Stockist Item')}</span>
            
            <h3 class="product-part-number">${escapeHtml(p.partNumber)}</h3>
            <span class="product-category-sub">${escapeHtml(p.categoryName)}</span>

            <div class="product-dimensions-blueprint" title="Bore d x Outer D x Width B">
              <div class="dim-col">
                <span class="dim-label">d (Bore)</span>
                <span class="dim-val">${p.d} mm</span>
              </div>
              <span class="dim-separator">&times;</span>
              <div class="dim-col">
                <span class="dim-label">D (Outer)</span>
                <span class="dim-val">${p.D} mm</span>
              </div>
              <span class="dim-separator">&times;</span>
              <div class="dim-col">
                <span class="dim-label">B (Width)</span>
                <span class="dim-val">${p.B} mm</span>
              </div>
            </div>

            <div class="product-brands-row">
              ${p.brands.map(b => `<span class="brand-pill">${escapeHtml(b)}</span>`).join("")}
            </div>

            <div class="product-spec-mini">
              <div class="spec-mini-row">
                <span class="key">Dyn. Load (Cr):</span>
                <span class="val">${escapeHtml(p.dynamicLoad)}</span>
              </div>
              <div class="spec-mini-row">
                <span class="key">Limiting Speed:</span>
                <span class="val">${escapeHtml(p.limitingSpeed)}</span>
              </div>
              <div class="spec-mini-row">
                <span class="key">Cage / Seal:</span>
                <span class="val">${escapeHtml(p.cage.split(' ')[0])} / ${escapeHtml(p.sealType.split(' ')[0])}</span>
              </div>
            </div>

            <div class="product-card-actions">
              <a href="${generateSingleProductWhatsAppUrl(p)}" target="_blank" rel="noopener noreferrer" class="btn-card-whatsapp" title="Instant WhatsApp Quote">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.974.53 1.774.813 2.796.814h.005c3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.767-5.773-5.773zm7.697 5.767c0 4.244-3.454 7.697-7.697 7.697-1.328 0-2.573-.344-3.659-.944l-5.372 1.408 1.433-5.234c-.689-1.134-1.085-2.47-1.085-3.902 0-4.244 3.454-7.697 7.697-7.697 4.243 0 7.683 3.453 7.683 7.697z"/>
                </svg>
                WhatsApp Quote
              </a>
              <button class="btn-add-rfq" title="Add to Multi-Item RFQ Basket" onclick="window.EZZI_APP.addCart('${p.id}')">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </button>
            </div>
            <span class="btn-view-details" onclick="window.EZZI_APP.openModal('${p.id}')">View Engineering Specifications &raquo;</span>
          </div>
        `).join("");

        if (filtered.length > state.visibleLimit) {
          const remaining = filtered.length - state.visibleLimit;
          cardsHtml += `
            <div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; margin-top: 30px; padding: 24px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px solid var(--border-subtle);">
              <span style="font-size: 0.875rem; color: var(--text-secondary);">Showing <strong>${state.visibleLimit}</strong> of <strong>${filtered.length}</strong> Products</span>
              <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <button class="btn-primary" onclick="window.EZZI_APP.loadMore()">
                  Load Next 24 Products (${remaining} remaining)
                </button>
                <button class="btn-secondary" onclick="window.EZZI_APP.showAll()">
                  View All ${filtered.length} Products
                </button>
              </div>
            </div>
          `;
        }

        elements.productsGrid.innerHTML = cardsHtml;
      }
    }

    // Render Table View
    if (elements.productsTableBody) {
      elements.productsTableBody.innerHTML = filtered.map(p => `
        <tr>
          <td class="table-part-cell">
            <span style="color: #fff; font-weight: 700; cursor: pointer;" onclick="window.EZZI_APP.openModal('${p.id}')">${escapeHtml(p.partNumber)}</span>
            <div style="font-size: 0.6875rem; color: var(--cyan-primary);">${escapeHtml(p.categoryName)}</div>
          </td>
          <td>
            <div style="display: flex; gap: 4px; flex-wrap: wrap;">
              ${p.brands.map(b => `<span class="brand-pill">${escapeHtml(b)}</span>`).join("")}
            </div>
          </td>
          <td class="table-dim-cell">${p.d} mm</td>
          <td class="table-dim-cell">${p.D} mm</td>
          <td class="table-dim-cell">${p.B} mm</td>
          <td>${escapeHtml(p.dynamicLoad)}</td>
          <td>${escapeHtml(p.limitingSpeed)}</td>
          <td><span style="font-size: 0.6875rem; color: #4ADE80; font-weight: 600;">Manmad Depot</span></td>
          <td class="table-actions-cell">
            <a href="${generateSingleProductWhatsAppUrl(p)}" target="_blank" rel="noopener noreferrer" class="btn-card-whatsapp" style="padding: 6px 10px; font-size: 0.75rem;">
              Enquire
            </a>
            <button class="btn-add-rfq" style="width: 32px; height: 32px;" title="Add to RFQ List" onclick="window.EZZI_APP.addCart('${p.id}')">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
            </button>
          </td>
        </tr>
      `).join("");
    }
  }

  /* ==========================================================================
     PRODUCT DETAIL MODAL
     ========================================================================== */
  function openProductModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product || !elements.modalContentArea || !elements.productModal) return;

    elements.modalContentArea.innerHTML = `
      <div class="modal-part-header">
        <span class="category-badge-chip" style="margin-bottom: 8px; display: inline-block;">${escapeHtml(product.categoryName)}</span>
        <h2 class="modal-part-title">${escapeHtml(product.partNumber)}</h2>
        <p style="font-size: 0.9375rem; color: var(--text-secondary); margin-top: 6px;">${escapeHtml(product.name)}</p>
      </div>

      <div class="product-dimensions-blueprint" style="margin-bottom: 24px;">
        <div class="dim-col">
          <span class="dim-label">Bore Diameter (d)</span>
          <span class="dim-val" style="font-size: 1.15rem;">${product.d} mm</span>
        </div>
        <span class="dim-separator">&times;</span>
        <div class="dim-col">
          <span class="dim-label">Outside Diameter (D)</span>
          <span class="dim-val" style="font-size: 1.15rem;">${product.D} mm</span>
        </div>
        <span class="dim-separator">&times;</span>
        <div class="dim-col">
          <span class="dim-label">Width / Thickness (B)</span>
          <span class="dim-val" style="font-size: 1.15rem;">${product.B} mm</span>
        </div>
      </div>

      <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">
        ${escapeHtml(product.description)}
      </p>

      <div class="modal-full-spec-grid">
        <div>
          <h4 style="font-family: var(--font-heading); color: #FFFFFF; font-size: 0.875rem; margin-bottom: 10px; text-transform: uppercase;">Technical Load & Speed</h4>
          <table class="spec-sheet-table">
            <tr><td>Dynamic Load (Cr)</td><td>${escapeHtml(product.dynamicLoad)}</td></tr>
            <tr><td>Static Load (Cor)</td><td>${escapeHtml(product.staticLoad)}</td></tr>
            <tr><td>Limiting Speed</td><td>${escapeHtml(product.limitingSpeed)}</td></tr>
            <tr><td>Net Unit Weight</td><td>${escapeHtml(product.weight)}</td></tr>
          </table>
        </div>
        <div>
          <h4 style="font-family: var(--font-heading); color: #FFFFFF; font-size: 0.875rem; margin-bottom: 10px; text-transform: uppercase;">Construction & Fit</h4>
          <table class="spec-sheet-table">
            <tr><td>Cage Construction</td><td>${escapeHtml(product.cage)}</td></tr>
            <tr><td>Internal Clearance</td><td>${escapeHtml(product.clearance)}</td></tr>
            <tr><td>Enclosure / Seals</td><td>${escapeHtml(product.sealType)}</td></tr>
            <tr><td>Stock Dispatch Hub</td><td>Manmad Depot (Burhani Complex)</td></tr>
          </table>
        </div>
      </div>

      <div style="margin: 20px 0;">
        <span style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Key Applications</span>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${product.popularApplications.map(app => `<span class="ind-bearing-tag" style="background: rgba(14, 165, 233, 0.1); border-color: rgba(14, 165, 233, 0.25); color: var(--cyan-primary);">${escapeHtml(app)}</span>`).join("")}
        </div>
      </div>

      <div style="margin: 20px 0;">
        <span style="display: block; font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Stockist Brands Available</span>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${product.brands.map(b => `<span class="brand-pill" style="font-size: 0.8125rem; padding: 4px 10px;">${escapeHtml(b)} Genuine</span>`).join("")}
        </div>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--border-subtle); flex-wrap: wrap;">
        <a href="${generateSingleProductWhatsAppUrl(product)}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp" style="flex: 1; min-width: 220px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.974.53 1.774.813 2.796.814h.005c3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.767-5.773-5.767zm7.697 5.767c0 4.244-3.454 7.697-7.697 7.697-1.328 0-2.573-.344-3.659-.944l-5.372 1.408 1.433-5.234c-.689-1.134-1.085-2.47-1.085-3.902 0-4.244 3.454-7.697 7.697-7.697 4.243 0 7.683 3.453 7.683 7.697z"/>
          </svg>
          Instant WhatsApp RFQ
        </a>
        <button class="btn-primary" onclick="window.EZZI_APP.addCart('${product.id}'); window.EZZI_APP.closeModal();">
          + Add to Multi-Item RFQ
        </button>
      </div>
    `;

    elements.productModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeProductModal() {
    if (elements.productModal) {
      elements.productModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  /* ==========================================================================
     DRAWER & INTERACTION HANDLERS
     ========================================================================== */
  function openRfqDrawer() {
    if (elements.rfqDrawer) {
      elements.rfqDrawer.classList.add("open");
    }
  }

  function closeRfqDrawer() {
    if (elements.rfqDrawer) {
      elements.rfqDrawer.classList.remove("open");
    }
  }

  function setCategoryFilter(categoryId) {
    state.filters.category = categoryId;
    state.visibleLimit = 24;
    renderCatalog();
  }

  function toggleBrandFilter(brandName) {
    if (state.filters.brands.has(brandName)) {
      state.filters.brands.delete(brandName);
    } else {
      state.filters.brands.add(brandName);
    }
    state.visibleLimit = 24;
    renderFilterBrandsList();
    renderCatalog();
  }

  function resetAllFilters() {
    state.filters.query = "";
    state.filters.category = "all";
    state.filters.brands.clear();
    state.filters.minBore = 0;
    state.filters.maxBore = 1000;
    state.visibleLimit = 24;

    if (elements.mainSearchInput) elements.mainSearchInput.value = "";
    if (elements.heroSearchInput) elements.heroSearchInput.value = "";
    if (elements.minBoreInput) elements.minBoreInput.value = "";
    if (elements.maxBoreInput) elements.maxBoreInput.value = "";

    renderFilterBrandsList();
    renderCatalog();
    showToast("Filters reset to all products");
  }

  function scrollToCatalogue() {
    const section = document.getElementById("catalogue-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function populateRfqFormFromCart() {
    if (state.cart.length === 0) return;

    const formattedList = state.cart.map((item, idx) => 
      `${idx + 1}. Part No: ${item.partNumber} (${item.dimensions}) | Brands: ${item.brands} | Qty: ${item.quantity} pcs`
    ).join("\n");

    if (elements.rfqPartsInput) {
      elements.rfqPartsInput.value = formattedList;
    }

    closeRfqDrawer();
    const rfqSec = document.getElementById("rfq-section");
    if (rfqSec) {
      rfqSec.scrollIntoView({ behavior: "smooth" });
      showToast("Quote items copied into RFQ Form below!");
    }
  }

  /* ==========================================================================
     EVENT LISTENERS & BINDINGS
     ========================================================================== */
  function setupEventListeners() {
    // Header RFQ Basket Button
    if (elements.rfqBasketBtn) {
      elements.rfqBasketBtn.addEventListener("click", openRfqDrawer);
    }
    if (elements.mobileDockRfqBtn) {
      elements.mobileDockRfqBtn.addEventListener("click", openRfqDrawer);
    }
    if (elements.closeRfqDrawerBtn) {
      elements.closeRfqDrawerBtn.addEventListener("click", closeRfqDrawer);
    }

    // Drawer Actions
    if (elements.drawerSendWhatsAppBtn) {
      elements.drawerSendWhatsAppBtn.addEventListener("click", () => {
        const url = generateMultiItemWhatsAppUrl();
        if (url !== "#") {
          window.open(url, "_blank");
        } else {
          showToast("Please add bearings to your quote sheet first");
        }
      });
    }

    if (elements.drawerPopulateFormBtn) {
      elements.drawerPopulateFormBtn.addEventListener("click", populateRfqFormFromCart);
    }

    if (elements.drawerClearBtn) {
      elements.drawerClearBtn.addEventListener("click", clearCart);
    }

    // Modal Close
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener("click", closeProductModal);
    }
    if (elements.productModal) {
      elements.productModal.addEventListener("click", (e) => {
        if (e.target === elements.productModal) {
          closeProductModal();
        }
      });
    }

    // Main Live Search
    if (elements.mainSearchInput) {
      elements.mainSearchInput.addEventListener("input", (e) => {
        state.filters.query = e.target.value;
        state.visibleLimit = 24;
        renderCatalog();
      });
    }

    // Hero Part Finder Form
    if (elements.heroFinderForm) {
      elements.heroFinderForm.addEventListener("submit", (e) => {
        e.preventDefault();
        state.visibleLimit = 24;
        if (elements.heroSearchInput) {
          state.filters.query = elements.heroSearchInput.value;
          if (elements.mainSearchInput) {
            elements.mainSearchInput.value = elements.heroSearchInput.value;
          }
        }
        if (elements.heroCategorySelect) {
          state.filters.category = elements.heroCategorySelect.value;
        }
        if (elements.heroBrandSelect) {
          const bVal = elements.heroBrandSelect.value;
          state.filters.brands.clear();
          if (bVal !== "all") {
            state.filters.brands.add(bVal);
          }
          renderFilterBrandsList();
        }

        renderCatalog();
        scrollToCatalogue();
      });
    }

    // Dimension Bore Filters
    if (elements.minBoreInput) {
      elements.minBoreInput.addEventListener("input", (e) => {
        state.filters.minBore = parseFloat(e.target.value) || 0;
        renderCatalog();
      });
    }
    if (elements.maxBoreInput) {
      elements.maxBoreInput.addEventListener("input", (e) => {
        state.filters.maxBore = parseFloat(e.target.value) || 1000;
        renderCatalog();
      });
    }

    // Reset Filters
    if (elements.resetFiltersBtn) {
      elements.resetFiltersBtn.addEventListener("click", resetAllFilters);
    }

    // View Toggles (Grid vs Table)
    if (elements.viewGridBtn && elements.viewTableBtn) {
      elements.viewGridBtn.addEventListener("click", () => {
        state.viewMode = "grid";
        elements.viewGridBtn.classList.add("active");
        elements.viewTableBtn.classList.remove("active");
        if (elements.productsGrid) elements.productsGrid.style.display = "grid";
        if (elements.productsTableView) elements.productsTableView.classList.remove("active");
      });

      elements.viewTableBtn.addEventListener("click", () => {
        state.viewMode = "table";
        elements.viewTableBtn.classList.add("active");
        elements.viewGridBtn.classList.remove("active");
        if (elements.productsGrid) elements.productsGrid.style.display = "none";
        if (elements.productsTableView) elements.productsTableView.classList.add("active");
      });
    }

    // Mobile Filters Toggle
    if (elements.mobileFilterToggle) {
      elements.mobileFilterToggle.addEventListener("click", () => {
        if (elements.filterSidebar) {
          elements.filterSidebar.classList.add("mobile-open");
        }
      });
    }
    if (elements.closeMobileFilterBtn) {
      elements.closeMobileFilterBtn.addEventListener("click", () => {
        if (elements.filterSidebar) {
          elements.filterSidebar.classList.remove("mobile-open");
        }
      });
    }

    // Mobile Menu Toggle
    if (elements.mobileMenuToggle && elements.mainNavLinks) {
      elements.mobileMenuToggle.addEventListener("click", () => {
        elements.mainNavLinks.classList.toggle("mobile-nav-open");
      });
    }

    // B2B Bulk RFQ Form Submit
    if (elements.rfqForm) {
      elements.rfqForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const company = document.getElementById("rfqCompany")?.value || "";
        const contact = document.getElementById("rfqContact")?.value || "";
        const city = document.getElementById("rfqCity")?.value || "";
        const parts = elements.rfqPartsInput?.value || "";

        if (!parts.trim()) {
          showToast("Please enter bearing part numbers or requirements");
          return;
        }

        const text = 
`*NEW RFQ: EZZI BEARING SUPPLIERS (Manmad Portal)*
--------------------------------------
*Company:* ${company}
*Contact / Phone:* ${contact}
*Delivery City / State:* ${city}
--------------------------------------
*Required Bearings & Specs:*
${parts}

Please reply with quotation & delivery timeline from Manmad depot.`;

        const waUrl = `https://wa.me/${CONFIG.whatsappPrimary}?text=${encodeURIComponent(text)}`;
        window.open(waUrl, "_blank");
        showToast("Quote Request submitted to WhatsApp Desk!");
      });
    }
  }

  function setupHeaderScroll() {
    const header = document.querySelector(".main-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  /* ==========================================================================
     HELPERS & UTILITIES
     ========================================================================== */
  function showToast(message) {
    if (!elements.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 20 20" fill="#F59E0B">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span>${escapeHtml(message)}</span>
    `;

    elements.toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3200);
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getCategorySvg(iconName) {
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
      <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
      <circle cx="6" cy="12" r="1.5" fill="currentColor"/>
      <circle cx="18" cy="12" r="1.5" fill="currentColor"/>
    </svg>`;
  }

  function getIndustrySvg(iconName) {
    return `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>`;
  }

  // Global API attached to window for inline onclick handlers
  window.EZZI_APP = {
    addCart: addToCart,
    updateQty: updateItemQuantity,
    removeItem: removeFromCart,
    openModal: openProductModal,
    closeModal: closeProductModal,
    openDrawer: openRfqDrawer,
    closeDrawer: closeRfqDrawer,
    searchDirect: (term) => {
      state.filters.query = term;
      state.visibleLimit = 24;
      if (elements.mainSearchInput) elements.mainSearchInput.value = term;
      renderCatalog();
      scrollToCatalogue();
    },
    loadMore: () => {
      state.visibleLimit += 24;
      renderCatalog();
    },
    showAll: () => {
      state.visibleLimit = 9999;
      renderCatalog();
    },
    openCustomWhatsAppEnquiry: () => {
      const text = `Hi Shabbirbhai & Ammarbhai (EZZI Bearing Suppliers, Manmad), I am inquiring for a bearing model/size quotation.`;
      window.open(`https://wa.me/${CONFIG.whatsappPrimary}?text=${encodeURIComponent(text)}`, "_blank");
    }
  };

  // Kickstart on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
