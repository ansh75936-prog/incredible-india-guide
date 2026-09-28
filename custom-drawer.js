// =========================================================================
// INCREDIBLE INDIA - WORKING THEME SWITCHER + HAMBURGER DRAWER
// =========================================================================

(function () {
  // 1. Purane duplicate drawers aur overlays ko remove karein
  function permanentlyNukeOldDrawer() {
    document.querySelectorAll('div, aside, nav, section').forEach(el => {
      if (el.id === 'unifiedDrawer' || el.id === 'unifiedDrawerOverlay' || el.id === 'dedicatedAppContainer') return;
      const txt = el.textContent || '';
      if (
        (txt.includes('All 36 States & UTs') || txt.includes('Live Interactive Map')) &&
        (el.offsetHeight > 200 || window.getComputedStyle(el).position === 'fixed')
      ) {
        el.style.setProperty('display', 'none', 'important');
        el.remove();
      }
    });
  }
  permanentlyNukeOldDrawer();
  setInterval(permanentlyNukeOldDrawer, 200);

  // 2. CSS Inject: Bahar wale topbar aur theme text ko screen se hide rakhein (taaki tap na dabe)
  const styleKiller = document.createElement('style');
  styleKiller.id = 'killTopBarStyles';
  styleKiller.innerHTML = `
    .topbar, .top-bar, #topbar, nav.navbar, select[id*="curr"], div[class*="currency"] {
      display: none !important;
      visibility: hidden !important;
    }
  `;
  document.head.appendChild(styleKiller);

  const oldDrawer = document.getElementById('unifiedDrawer');
  if (oldDrawer) oldDrawer.remove();
  const oldOverlay = document.getElementById('unifiedDrawerOverlay');
  if (oldOverlay) oldOverlay.remove();

  const currentUser = JSON.parse(localStorage.getItem('incredible_user') || 'null');

  const drawerHTML = `
    <div id="unifiedDrawerOverlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.75); z-index:2147483646; backdrop-filter:blur(3px);"></div>
    
    <div id="unifiedDrawer" style="position:fixed; top:0; left:-330px; width:310px; height:100vh; background:#0b1329; color:#fff; z-index:2147483647; box-shadow:4px 0 25px rgba(0,0,0,0.6); transition:left 0.25s ease; display:flex; flex-direction:column; box-sizing:border-box; overflow-y:auto; padding:20px 16px;">
      
      <!-- Drawer Header -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08);">
        <h3 style="margin:0; font-size:1.15rem; font-weight:800; color:#FF5412; display:flex; align-items:center; gap:8px;">
          🇮🇳 Incredible India
        </h3>
        <button id="closeDrawerBtn" style="background:transparent; border:none; color:#94a3b8; font-size:1.5rem; cursor:pointer; line-height:1;">&times;</button>
      </div>

      <!-- User Account Status -->
      <div id="drawerUserStatusBlock" style="margin-bottom:12px;">
        ${currentUser ? `
          <div style="background:rgba(255,84,18,0.12); border:1px solid rgba(255,84,18,0.3); padding:10px 12px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
            <div style="display:flex; align-items:center; gap:8px; overflow:hidden;">
              <span style="background:#FF5412; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:0.85rem;">
                ${currentUser.name.charAt(0).toUpperCase()}
              </span>
              <div style="text-align:left; overflow:hidden;">
                <b style="font-size:0.85rem; display:block; text-overflow:ellipsis; white-space:nowrap; overflow:hidden;">${currentUser.name}</b>
                <span style="font-size:0.7rem; color:#94a3b8;">Logged In</span>
              </div>
            </div>
            <button onclick="window.logoutUser()" style="background:transparent; border:none; color:#f87171; font-size:0.75rem; font-weight:600; cursor:pointer;">Logout</button>
          </div>
        ` : `
          <button class="drawer-nav-trigger" data-page="login" style="display:flex; align-items:center; justify-content:center; gap:8px; background:#FF5412; border:none; padding:12px; border-radius:8px; color:#fff; font-weight:700; font-size:0.9rem; cursor:pointer; width:100%;">
            🔐 Login / Sign Up
          </button>
        `}
      </div>

      <!-- Live Theme Toggle Button -->
      <button id="inDrawerThemeToggle" style="display:flex; justify-content:space-between; align-items:center; background:#1e293b; border:1px solid rgba(255,255,255,0.12); padding:10px 14px; border-radius:8px; color:#f1f5f9; font-size:0.85rem; font-weight:600; cursor:pointer; width:100%; margin-bottom:12px;">
        <span>🌓 Switch Theme</span>
        <span id="themeBadgeText" style="font-size:0.75rem; background:rgba(255,255,255,0.1); padding:2px 8px; border-radius:12px; color:#38bdf8;">Dark / Light</span>
      </button>

      <!-- Helpline -->
      <a href="tel:1363" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:10px 14px; border-radius:8px; text-decoration:none; color:#f1f5f9; font-size:0.85rem; font-weight:600; margin-bottom:14px;">
        📞 Helpline: 1363 (24×7)
      </a>

      <!-- Navigation Pages -->
      <div style="display:flex; flex-direction:column; gap:10px;">
        
        <button class="drawer-nav-trigger" data-page="language" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>🌐 Choose Language / भाषा</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

        <button class="drawer-nav-trigger" data-page="quote" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>📝 Plan Trip / Get Free Quote</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

        <button class="drawer-nav-trigger" data-page="estimator" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#FF5412; font-weight:600; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>🧮 Tour Cost Estimator</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

        <button class="drawer-nav-trigger" data-page="circuits" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>🏛️ Tour Circuits & Itineraries</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

        <button class="drawer-nav-trigger" data-page="registry" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>🛡️ Official State & UT Registry</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

      </div>
      <div id="google_translate_element" style="display:none;"></div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', drawerHTML);

  const drawer = document.getElementById('unifiedDrawer');
  const overlay = document.getElementById('unifiedDrawerOverlay');
  const closeBtn = document.getElementById('closeDrawerBtn');

  function openDrawer(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    permanentlyNukeOldDrawer();
    drawer.style.left = '0px';
    overlay.style.display = 'block';
  }

  function closeDrawer(e) {
    if (e) e.preventDefault();
    drawer.style.left = '-330px';
    overlay.style.display = 'none';
  }

  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  drawer.addEventListener('click', e => e.stopPropagation());

  // 3. Top-left Hamburger Button create & align
  function ensureHamburger() {
    let hamBtn = document.getElementById('appHamburgerBtn');
    if (!hamBtn) {
      hamBtn = document.createElement('button');
      hamBtn.id = 'appHamburgerBtn';
      hamBtn.innerHTML = '&#9776;'; // ☰
      hamBtn.setAttribute('aria-label', 'Menu');
      document.body.appendChild(hamBtn);
      hamBtn.addEventListener('click', openDrawer);
    }

    hamBtn.style.cssText = `
      position: fixed !important;
      top: 14px !important;
      left: 14px !important;
      width: 44px !important;
      height: 44px !important;
      background: #0f172a !important;
      border: 1px solid rgba(255,255,255,0.2) !important;
      border-radius: 10px !important;
      color: #fff !important;
      font-size: 1.4rem !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      cursor: pointer !important;
      z-index: 2147483645 !important;
      box-shadow: 0 4px 16px rgba(0,0,0,0.6) !important;
      line-height: 1 !important;
    `;

    // Original bahar wale Theme button ko background mein chhupa ke rakhein (taaki click kar sakein)
    document.querySelectorAll('button, div, span').forEach(el => {
      if (el.closest('#unifiedDrawer') || el.id === 'appHamburgerBtn' || el.closest('#dedicatedAppContainer')) return;
      const txt = (el.textContent || '').trim();
      if (txt === 'Theme' || txt.includes('Theme')) {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        el.style.position = 'fixed';
        el.style.top = '-9999px';
      }
    });
  }
  ensureHamburger();
  setTimeout(ensureHamburger, 500);

  // 4. POWERFUL THEME SWITCH TRIGGER (Clicks original buttons + toggles attributes)
  const themeSwitchBtn = document.getElementById('inDrawerThemeToggle');
  themeSwitchBtn.addEventListener('click', function () {
    let triggered = false;

    // A. Original theme button dhoondh kar usko programmatically click karein
    document.querySelectorAll('button, div, a').forEach(el => {
      if (el === themeSwitchBtn || el.closest('#unifiedDrawer')) return;
      const t = (el.textContent || '').trim();
      if (
        t === 'Theme' || 
        t.includes('Theme') || 
        el.getAttribute('onclick')?.includes('theme') ||
        el.className.toString().includes('theme-toggle')
      ) {
        el.click(); // Original website toggle click
        triggered = true;
      }
    });

    // B. Direct CSS Theme Toggle (Dark / Light toggle)
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || (html.classList.contains('dark') ? 'dark' : 'light');
    const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);

    if (newTheme === 'dark') {
      html.classList.add('dark');
      document.body.classList.add('dark');
      document.getElementById('themeBadgeText').innerText = 'Dark Mode';
    } else {
      html.classList.remove('dark');
      document.body.classList.remove('dark');
      document.getElementById('themeBadgeText').innerText = 'Light Mode';
    }

    localStorage.setItem('theme', newTheme);

    // C. Global function call agar koi ho
    if (typeof window.toggleTheme === 'function') window.toggleTheme();
    if (typeof window.switchTheme === 'function') window.switchTheme();
  });

  // Dedicated Pages navigation links
  document.querySelectorAll('.drawer-nav-trigger').forEach(btn => {
    btn.addEventListener('click', function () {
      const page = this.getAttribute('data-page');
      closeDrawer();
      if (window.openAppPage) {
        window.openAppPage(page);
      }
    });
  });
})();
