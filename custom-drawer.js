// =========================================================================
// CUSTOM DRAWER & ENGLISH FIX (STANDALONE FILE)
// =========================================================================

(function () {
  // 1. Bahar ka sara clutter (Currency, Dark Mode, Hamburgers) hide karein
  function cleanHeaderOutside() {
    const toHide = document.querySelectorAll(
      '#hamburgerBtn, .hamburger-btn, #workingLeftHamburger, #unifiedLeftMenuBtn, ' +
      '.header-actions .currency-select-box, .header-actions .theme-toggle-btn'
    );
    toHide.forEach(el => el.style.setProperty('display', 'none', 'important'));

    // Topbar bahar se bilkul clean dikhe, sirf 3-dot rahe
    const strayBars = document.querySelectorAll('#forcedControlBar');
    strayBars.forEach(b => {
      if (!b.closest('aside, [role="dialog"], .admin-leads-drawer, #mobileDrawer, .nav-drawer')) {
        b.remove();
      }
    });
  }

  // 2. Safe English Text Fix (Bina kisi repeat/loop ke)
  function applyEnglishText() {
    const headings = document.querySelectorAll('h1, h2, h3, p, span');
    headings.forEach(el => {
      if (el.children.length === 0) {
        if (el.textContent.includes('Ek Desh, Anant Rang') || el.textContent.includes('Destinations Destinations')) {
          el.textContent = "One Nation, Infinite Colors — Explore Incredible Bharat";
        }
      }
    });

    const searchBox = document.querySelector('input[type="text"], input[type="search"]');
    if (searchBox && searchBox.placeholder.includes('Kahan')) {
      searchBox.placeholder = "Where do you want to go? (e.g. Manali, Goa)";
    }
  }

  // 3. Dark Mode aur Currency ko STRICTLY 3-dot Drawer ke andar dalna
  function injectInsideDrawer() {
    const drawer = document.querySelector(
      '.admin-leads-drawer, #adminLeadsDrawer, #mobileDrawer, .nav-drawer, aside'
    );
    if (!drawer || drawer.querySelector('#cleanInsideControls')) return;

    // Helpline ke upar ya drawer ke top par inject karein
    const allEls = drawer.querySelectorAll('a, button, div, span');
    let targetEl = null;
    for (let el of allEls) {
      if (el.textContent && (el.textContent.includes('1363') || el.textContent.includes('States'))) {
        targetEl = el;
        break;
      }
    }

    const controlBox = document.createElement('div');
    controlBox.id = 'cleanInsideControls';
    controlBox.style.cssText = `
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 10px !important;
      margin: 12px 0 16px 0 !important;
      padding: 8px 10px !important;
      background: rgba(255, 255, 255, 0.05) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 12px !important;
      box-sizing: border-box !important;
      width: 100% !important;
    `;

    controlBox.innerHTML = `
      <select id="insideCurrencySelect" onchange="if(typeof changeCurrency==='function') changeCurrency(this.value);" style="flex:1; padding:9px 10px; background:#162032; color:#FFFFFF; border:1px solid rgba(255,255,255,0.2); border-radius:10px; font-weight:700; font-size:0.85rem; cursor:pointer; outline:none;">
        <option value="INR" selected>INR (₹)</option>
        <option value="USD">USD ($)</option>
        <option value="EUR">EUR (€)</option>
        <option value="GBP">GBP (£)</option>
        <option value="AED">AED (د.إ)</option>
      </select>

      <button id="insideDarkToggleBtn" type="button" aria-label="Toggle Theme" style="display:flex; align-items:center; justify-content:center; gap:6px; padding:9px 14px; background:#162032; border:1px solid rgba(255,255,255,0.2); border-radius:10px; color:#FFB800; font-weight:700; font-size:0.85rem; cursor:pointer;">
        <span>🌓</span> <span style="color:#FFF; font-size:0.8rem;">Theme</span>
      </button>
    `;

    if (targetEl) {
      targetEl.insertAdjacentElement('beforebegin', controlBox);
    } else {
      drawer.insertBefore(controlBox, drawer.firstChild);
    }

    // Dark Mode Toggle Listener
    const themeBtn = controlBox.querySelector('#insideDarkToggleBtn');
    themeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const html = document.documentElement;
      const current = html.getAttribute('data-theme') || 'dark';
      const target = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', target);
      document.body.setAttribute('data-theme', target);
      try { localStorage.setItem('theme', target); } catch(err) {}
    });
  }

  // Har situation mein auto-run
  function runAll() {
    cleanHeaderOutside();
    applyEnglishText();
    injectInsideDrawer();
  }

  document.addEventListener("DOMContentLoaded", runAll);
  window.addEventListener("load", runAll);
  document.addEventListener("click", () => setTimeout(runAll, 120));
  setInterval(runAll, 600);
})();
