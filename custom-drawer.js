(function () {
  // 1. Forcefully inject CSS to kill home page clutter permanently
  const style = document.createElement('style');
  style.id = 'kill-header-clutter-css';
  style.innerHTML = `
    /* Home page / Navbar se currency aur theme ko bahar aane se rokein */
    .topbar-right, 
    .topbar select, 
    .topbar button:not([aria-label*="Menu"]):not(#unified3DotBtn),
    header select, 
    header .theme-toggle-btn, 
    .header-actions select, 
    .header-actions .theme-toggle-btn,
    .header-actions .currency-select-box,
    #hamburgerBtn, 
    .hamburger-btn, 
    #workingLeftHamburger {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }

    /* Topbar container ko sirf 3-dot trigger banayein */
    .topbar {
      background: transparent !important;
      border: none !important;
    }
  `;
  if (!document.getElementById('kill-header-clutter-css')) {
    document.head.appendChild(style);
  }

  // 2. English text aur button loop fix
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

  // 3. Controls strictly drawer ke andar lagayein
  function injectInsideDrawer() {
    // Sirf drawer panel dhoondein
    const drawer = document.querySelector('.admin-leads-drawer, #adminLeadsDrawer, #mobileDrawer, .nav-drawer, aside');
    if (!drawer) return;

    if (drawer.querySelector('#strictInsideBar')) return;

    // "Incredible India" title ke theek neeche lagayein
    const titleEl = Array.from(drawer.querySelectorAll('h1, h2, h3, h4, span, div')).find(
      el => el.textContent && el.textContent.includes('Incredible India')
    );

    const controlBox = document.createElement('div');
    controlBox.id = 'strictInsideBar';
    controlBox.style.cssText = `
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 10px !important;
      width: calc(100% - 24px) !important;
      margin: 12px 12px 14px 12px !important;
      box-sizing: border-box !important;
    `;

    controlBox.innerHTML = `
      <select id="directDrawerCurrency" onchange="if(typeof changeCurrency==='function') changeCurrency(this.value);" style="flex:1; padding:9px 10px; background:#162032; color:#FFFFFF; border:1px solid rgba(255,255,255,0.2); border-radius:10px; font-weight:700; font-size:0.85rem; cursor:pointer; outline:none;">
        <option value="INR" selected>INR (₹)</option>
        <option value="USD">USD ($)</option>
        <option value="EUR">EUR (€)</option>
        <option value="GBP">GBP (£)</option>
        <option value="AED">AED (د.إ)</option>
      </select>

      <button id="directDrawerDarkBtn" type="button" aria-label="Toggle Theme" style="display:flex; align-items:center; justify-content:center; gap:6px; padding:9px 14px; background:#162032; border:1px solid rgba(255,255,255,0.2); border-radius:10px; color:#FFB800; font-weight:700; font-size:0.85rem; cursor:pointer;">
        <span>🌓</span> <span style="color:#FFF; font-size:0.8rem;">Theme</span>
      </button>
    `;

    if (titleEl && titleEl.parentElement) {
      titleEl.parentElement.insertAdjacentElement('afterend', controlBox);
    } else {
      drawer.insertBefore(controlBox, drawer.firstChild);
    }

    // Dark Mode Toggle
    const themeBtn = controlBox.querySelector('#directDrawerDarkBtn');
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

  function runAll() {
    fixTextsCleanly();
    injectInsideDrawer();
  }

  document.addEventListener("DOMContentLoaded", runAll);
  window.addEventListener("load", runAll);
  document.addEventListener("click", () => setTimeout(runAll, 50));
  setInterval(runAll, 300);
})();
