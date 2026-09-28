// =========================================================================
// GUARANTEED THEME TOGGLE & CURRENCY INSIDE 3-DOT DRAWER
// =========================================================================

(function () {
  // 1. Bahar ka sara clutter permanently hide karein
  function cleanHeaderOutside() {
    const toHide = document.querySelectorAll(
      '.topbar-right, .topbar select, .topbar button:not(#unified3DotBtn), ' +
      'header select, header .theme-toggle-btn, .header-actions select, ' +
      '#forcedControlBar, #hamburgerBtn, .hamburger-btn, #workingLeftHamburger'
    );
    toHide.forEach(el => el.style.setProperty('display', 'none', 'important'));

    const topbar = document.querySelector('.topbar');
    if (topbar) {
      topbar.style.setProperty('background', 'transparent', 'important');
      topbar.style.setProperty('border', 'none', 'important');
    }
  }

  // 2. Texts aur headings clean English karein
  function fixTextsCleanly() {
    const exploreBtns = document.querySelectorAll('button, a');
    exploreBtns.forEach(b => {
      if (b.innerText && b.innerText.includes('Explore') && b.innerText.includes('Destinations')) {
        b.innerHTML = '<svg viewBox="0 0 512 512" style="width:16px;height:16px;fill:currentColor;margin-right:6px;display:inline-block;vertical-align:-2px;"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg> Explore Destinations';
      }
      if (b.innerText && b.innerText.trim() === 'Poora Bharat') {
        b.innerHTML = '<span>All India</span>';
      }
    });

    const h1 = document.querySelector('h1');
    if (h1 && (h1.innerText.includes('Destinations Destinations') || h1.innerText.includes('Ek Desh'))) {
      h1.innerText = "One Nation, Infinite Colors — Explore Incredible Bharat";
    }
  }

  // 3. 3-Dot Drawer ke andar Dark Mode + Currency force inject karein
  function injectDirectlyInsideDrawer() {
    if (document.getElementById('verifiedDrawerControls')) return;

    // Drawer dhoondne ke liye "Incredible India" heading ya "1363" helpline target karein
    const allHeadings = document.querySelectorAll('h1, h2, h3, h4, span, div, a');
    let drawerHeaderTitle = null;

    for (let el of allHeadings) {
      if (el.textContent && el.textContent.includes('Incredible India') && el.closest('aside, [class*="drawer"], [id*="drawer"], div[style*="fixed"]')) {
        drawerHeaderTitle = el;
        break;
      }
    }

    if (!drawerHeaderTitle) {
      // Fallback: Helpline button ke parent ko dhoondein
      for (let el of allHeadings) {
        if (el.textContent && el.textContent.includes('1363')) {
          drawerHeaderTitle = el;
          break;
        }
      }
    }

    if (drawerHeaderTitle) {
      const containerBox = document.createElement('div');
      containerBox.id = 'verifiedDrawerControls';
      containerBox.style.cssText = `
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        gap: 10px !important;
        width: 100% !important;
        margin: 12px 0 14px 0 !important;
        padding: 6px !important;
        box-sizing: border-box !important;
      `;

      containerBox.innerHTML = `
        <!-- Currency Dropdown -->
        <select id="directDrawerCurrency" onchange="if(typeof changeCurrency==='function') changeCurrency(this.value);" style="flex:1; padding:9px 10px; background:#162032; color:#FFFFFF; border:1px solid rgba(255,255,255,0.2); border-radius:10px; font-weight:700; font-size:0.85rem; cursor:pointer; outline:none;">
          <option value="INR" selected>INR (₹)</option>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="AED">AED (د.إ)</option>
        </select>

        <!-- Dark Mode Toggle Button -->
        <button id="directDrawerDarkBtn" type="button" aria-label="Toggle Dark Mode" style="display:flex; align-items:center; justify-content:center; gap:6px; padding:9px 14px; background:#162032; border:1px solid rgba(255,255,255,0.2); border-radius:10px; color:#FFB800; font-weight:700; font-size:0.85rem; cursor:pointer;">
          <span>🌓</span> <span style="color:#FFF; font-size:0.8rem;">Theme</span>
        </button>
      `;

      // Header ke theek baad ya Helpline ke theek pehle lagayein
      drawerHeaderTitle.insertAdjacentElement('afterend', containerBox);

      // Dark Mode Click Action
      const themeBtn = containerBox.querySelector('#directDrawerDarkBtn');
      themeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', targetTheme);
        document.body.setAttribute('data-theme', targetTheme);

        try {
          localStorage.setItem('theme', targetTheme);
        } catch(err) {}

        const origBtn = document.getElementById('themeToggleBtn');
        if (origBtn) origBtn.click();
      });
    }
  }

  function runAll() {
    cleanHeaderOutside();
    fixTextsCleanly();
    injectDirectlyInsideDrawer();
  }

  document.addEventListener("DOMContentLoaded", runAll);
  window.addEventListener("load", runAll);
  document.addEventListener("click", () => setTimeout(runAll, 80));
  setInterval(runAll, 400);
})();
