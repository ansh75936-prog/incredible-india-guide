// =========================================================================
// CLEAN HOME PAGE: CUT OFF EVERYTHING AFTER MAP + BRAND FOOTER + TRANSLATOR
// =========================================================================

(function () {
  // 1. CSS Rule: Map ke baad ke saare heavy sections ko hide karein
  const style = document.createElement('style');
  style.id = 'clean-map-end-style';
  style.innerHTML = `
    /* Map ke baad ka lamba content hide karein */
    #tour-circuits,
    .tour-circuits-section,
    #booking-form-section,
    .support-desk-section,
    .support-desk,
    form,
    section[id*="circuit"],
    section[class*="circuit"] {
      display: none !important;
    }

    /* Topbar & Header Cleanup */
    .topbar-right,
    .topbar select,
    .topbar .theme-toggle-btn,
    .topbar button:not([aria-label*="Menu"]):not(#unified3DotBtn),
    .header-actions .currency-select-box,
    .header-actions .theme-toggle-btn,
    #hamburgerBtn,
    .hamburger-btn,
    #workingLeftHamburger {
      display: none !important;
      visibility: hidden !important;
          /* Purane duplicate drawer ko hide karein */
    #mobileNav, 
    #mobile-nav-drawer, 
    .mobile-nav-panel, 
    .mobile-nav-drawer,
    aside.mobile-drawer,
    nav.mobile-nav,
    .mobile-sidebar {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }

    /* Naye clean drawer ko priority z-index dein */
    #unifiedDrawer {
      z-index: 2147483647 !important;
    }
    #unifiedDrawerOverlay {
      z-index: 2147483646 !important;
    }
    }
    .topbar { background: transparent !important; border: none !important; }

    /* Clean Compact Incredible India Footer */
    #cleanIncredibleFooter {
      text-align: center;
      padding: 30px 16px 50px 16px;
      background: #070c16;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      margin-top: 24px;
    }
    #cleanIncredibleFooter h3 {
      font-size: 1.3rem;
      font-weight: 800;
      color: #FF5412;
      margin: 0 0 8px 0;
      letter-spacing: 0.5px;
    }
    #cleanIncredibleFooter p {
      font-size: 0.85rem;
      color: #94a3b8;
      max-width: 480px;
      margin: 0 auto;
      line-height: 1.5;
    }
  `;
  if (!document.getElementById('clean-map-end-style')) {
    document.head.appendChild(style);
  }

  // 2. Map ke theek baad clean footer insert karein
  function setupCleanFooter() {
    if (document.getElementById('cleanIncredibleFooter')) return;

    const mapElement = document.querySelector('#map, .map-section, #map-container, leaflet-container');
    if (!mapElement) return;

    const footer = document.createElement('div');
    footer.id = 'cleanIncredibleFooter';
    footer.innerHTML = `
      <h3>IncredibleIndiaGuide.in</h3>
      <p>Discover India's 28 States, 8 UTs, authentic heritage, and cultural destinations in one place.</p>
    `;

    // Map ke parent container ke baad footer attach karein
    const mapSection = mapElement.closest('section') || mapElement;
    mapSection.insertAdjacentElement('afterend', footer);
  }

  // 3. Global English Translation Dictionary
  const translations = [
    [/Ek Desh, Anant Rang/gi, "One Nation, Infinite Colors"],
    [/Bharat Ki Sabse Lokpriya Yatra Sthalein/gi, "India's Most Popular Travel Destinations"],
    [/Lokpriya Yatra Sthalein/gi, "Popular Travel Destinations"],
    [/Poora Bharat/gi, "All India"],
    [/Kahan jana chahte hain\?/gi, "Where do you want to go?"],
    [/Sabhi Rajya aur Kendrashasit Pradesh/gi, "All States & Union Territories"],
    [/Sabhi Rajya/gi, "All States"],
    [/Sabhi Jile/gi, "All Districts"],
    [/Sabhi Districts & Kshetra/gi, "All Districts & Regions"],
    [/Explore Destinations Destinations(\s*Destinations)*/gi, "Explore Destinations"],
    [/Khojein/gi, "Explore"],
    [/←\s*Wapas/gi, "← Back"],
    [/Wapas/gi, "Back"],
    [/Pramukh Aakarshan/gi, "Top Attractions"],
    [/Jane Ka Sahi Samay/gi, "Best Time to Visit"],
    [/Kaise Pahunchein/gi, "How to Reach"],
    [/Pahunchne ke Raste/gi, "Travel Routes"],
    [/Hawai Adda/gi, "Airport"],
    [/Railway Station/gi, "Railway Station"],
    [/Sarak Marg/gi, "By Road"],
    [/Vistar Se Janein/gi, "View Details"],
    [/Jankari Dekhein/gi, "View Guide"],
    [/Khas Bat/gi, "Highlights"],
    [/Prasiddh Vyanjan\s*\(Local Cuisine\)/gi, "Famous Delicacies (Local Cuisine)"],
    [/Prasiddh Vyanjan/gi, "Famous Delicacies"],
    [/Mashhoor Khana/gi, "Famous Dishes"],
    [/Khareedari/gi, "Shopping & Souvenirs"],
    [/Mausam/gi, "Weather & Climate"],
    [/Kul Jile/gi, "Total Districts"],
    [/Rajdhani/gi, "Capital"],
    [/Bhasha/gi, "Language"],
    [/Aabadi/gi, "Population"],
    [/Kshetraphal/gi, "Area"],
    [/Paryatan Sthal/gi, "Tourist Spots"]
  ];

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let str = node.nodeValue;
      if (str && str.trim().length > 0) {
        translations.forEach(([regex, rep]) => {
          if (regex.test(str)) str = str.replace(regex, rep);
        });
        node.nodeValue = str;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.placeholder) {
        let p = node.placeholder;
        translations.forEach(([regex, rep]) => {
          if (regex.test(p)) p = p.replace(regex, rep);
        });
        node.placeholder = p;
      }
      node.childNodes.forEach(translateNode);
    }
  }

  function run() {
    setupCleanFooter();
    translateNode(document.body);
  }

  document.addEventListener("DOMContentLoaded", run);
  window.addEventListener("load", run);
  document.addEventListener("click", () => setTimeout(run, 60));
  setInterval(run, 500);
})();
