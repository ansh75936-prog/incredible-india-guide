// =========================================================================
// INCREDIBLE INDIA - DRAWER CONTROLLER
// =========================================================================

(function () {
  // Purane duplicate drawers aur overlays ko remove karein
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

  const oldDrawer = document.getElementById('unifiedDrawer');
  if (oldDrawer) oldDrawer.remove();
  const oldOverlay = document.getElementById('unifiedDrawerOverlay');
  if (oldOverlay) oldOverlay.remove();

  // Current logged in user status check
  const currentUser = JSON.parse(localStorage.getItem('incredible_user') || 'null');

  const drawerHTML = `
    <div id="unifiedDrawerOverlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.75); z-index:2147483646; backdrop-filter:blur(3px);"></div>
    
    <div id="unifiedDrawer" style="position:fixed; top:0; left:-330px; width:310px; height:100vh; background:#0b1329; color:#fff; z-index:2147483647; box-shadow:4px 0 25px rgba(0,0,0,0.6); transition:left 0.25s ease; display:flex; flex-direction:column; box-sizing:border-box; overflow-y:auto; padding:20px 16px;">
      
      <!-- Drawer Header -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08);">
        <h3 style="margin:0; font-size:1.15rem; font-weight:800; color:#FF5412; display:flex; align-items:center; gap:8px;">
          🇮🇳 Incredible India
        </h3>
        <button id="closeDrawerBtn" style="background:transparent; border:none; color:#94a3b8; font-size:1.5rem; cursor:pointer; line-height:1;">&times;</button>
      </div>

      <!-- User Profile / Login Button Status -->
      <div id="drawerUserStatusBlock" style="margin-bottom:14px;">
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

      <!-- Helpline -->
      <a href="tel:1363" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:10px 14px; border-radius:8px; text-decoration:none; color:#f1f5f9; font-size:0.85rem; font-weight:600; margin-bottom:16px;">
        📞 Helpline: 1363 (24×7)
      </a>

      <!-- Menu Options -->
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

  // Capture 3-dot clicks
  window.addEventListener('click', function (e) {
    const btn = e.target.closest('#unified3DotBtn, .three-dot-btn, [aria-label*="Menu"]');
    if (btn) openDrawer(e);
  }, true);

  // Click triggers to open dedicated full pages
  document.querySelectorAll('.drawer-nav-trigger').forEach(btn => {
    btn.addEventListener('click', function () {
      const page = this.getAttribute('data-page');
      closeDrawer();
      if (window.openAppPage) {
        window.openAppPage(page);
      }
    });
  });

  // Load Google Translator backend quietly
  if (!document.getElementById('google-translate-script')) {
    const s = document.createElement('script');
    s.id = 'google-translate-script';
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(s);
  }

  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,hi,bn,te,ta,mr,gu,ur,kn,ml,pa,or,as',
      autoDisplay: false
    }, 'google_translate_element');
  };
})();
// =========================================================================
// REMOVE CURRENCY DROPDOWN & FIX HAMBURGER (☰) BUTTON
// =========================================================================
(function fixTopBar() {
  function applyFix() {
    // 1. Currency dropdown aur uske text ko hide karein
    document.querySelectorAll('select, option, button, div').forEach(el => {
      if (el.id === 'unifiedDrawer' || el.id === 'dedicatedAppContainer') return;
      if (
        el.tagName === 'SELECT' || 
        el.id.toLowerCase().includes('curr') || 
        el.className.toString().toLowerCase().includes('curr')
      ) {
        el.style.setProperty('display', 'none', 'important');
      }
    });

    // 2. Hamburger (☰) Button ko top-left me clean floating button banayein
    let btn = document.getElementById('unified3DotBtn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'unified3DotBtn';
      document.body.appendChild(btn);
    }

    btn.innerHTML = '&#9776;'; // Hamburger icon (3 horizontal lines ☰)
    btn.setAttribute('aria-label', 'Open Navigation Menu');

    btn.style.cssText = `
      position: fixed !important;
      top: 14px !important;
      left: 14px !important;
      width: 42px !important;
      height: 42px !important;
      background: #0f172a !important;
      border: 1px solid rgba(255,255,255,0.15) !important;
      border-radius: 10px !important;
      color: #fff !important;
      font-size: 1.3rem !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      cursor: pointer !important;
      z-index: 99999 !important;
      box-shadow: 0 4px 14px rgba(0,0,0,0.4) !important;
      line-height: 1 !important;
    `;
  }

  applyFix();
  setTimeout(applyFix, 500);
})();
// =========================================================================
// INCREDIBLE INDIA - HAMBURGER ICON DRAWER (SAME FUNCTIONS RETAINED)
// =========================================================================

(function () {
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

  const oldDrawer = document.getElementById('unifiedDrawer');
  if (oldDrawer) oldDrawer.remove();
  const oldOverlay = document.getElementById('unifiedDrawerOverlay');
  if (oldOverlay) oldOverlay.remove();

  const currentUser = JSON.parse(localStorage.getItem('incredible_user') || 'null');

  const drawerHTML = `
    <div id="unifiedDrawerOverlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.75); z-index:2147483646; backdrop-filter:blur(3px);"></div>
    
    <div id="unifiedDrawer" style="position:fixed; top:0; left:-330px; width:310px; height:100vh; background:#0b1329; color:#fff; z-index:2147483647; box-shadow:4px 0 25px rgba(0,0,0,0.6); transition:left 0.25s ease; display:flex; flex-direction:column; box-sizing:border-box; overflow-y:auto; padding:20px 16px;">
      
      <!-- Drawer Header -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08);">
        <h3 style="margin:0; font-size:1.15rem; font-weight:800; color:#FF5412; display:flex; align-items:center; gap:8px;">
          🇮🇳 Incredible India
        </h3>
        <button id="closeDrawerBtn" style="background:transparent; border:none; color:#94a3b8; font-size:1.5rem; cursor:pointer; line-height:1;">&times;</button>
      </div>

      <!-- User Status / Login -->
      <div id="drawerUserStatusBlock" style="margin-bottom:14px;">
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

      <!-- Helpline -->
      <a href="tel:1363" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:10px 14px; border-radius:8px; text-decoration:none; color:#f1f5f9; font-size:0.85rem; font-weight:600; margin-bottom:16px;">
        📞 Helpline: 1363 (24×7)
      </a>

      <!-- Menu Items -->
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

  // Existing trigger buttons (3-dot ya theme selector ke andar wale) ko Hamburger me badalna
  function convertToHamburger() {
    document.querySelectorAll('#unified3DotBtn, .three-dot-btn, button').forEach(el => {
      if (el.textContent.includes('⋮') || el.innerHTML.includes('&#8942;')) {
        el.innerHTML = '&#9776;'; // Replace with ☰
        el.style.fontSize = '1.3rem';
      }
    });
  }
  convertToHamburger();
  setTimeout(convertToHamburger, 500);

  // Global click support for Hamburger
  window.addEventListener('click', function (e) {
    const btn = e.target.closest('#unified3DotBtn, .three-dot-btn, [aria-label*="Menu"]');
    if (btn || (e.target.textContent && (e.target.textContent.includes('☰') || e.target.textContent.includes('⋮')))) {
      openDrawer(e);
    }
  }, true);

  // Pages switcher triggers
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
