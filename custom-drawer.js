// =========================================================================
// INCREDIBLE INDIA - WORKING THEME SWITCHER + HAMBURGER + TRANSLATE
// =========================================================================

(function () {
  // 1. Force Clean Old Header Artifacts
  function purgeOldHeaderArtifacts() {
    document.querySelectorAll('.topbar, .top-bar, #topbar, select[id*="curr"], div[class*="currency"]').forEach(el => {
      el.remove();
    });

    document.querySelectorAll('button, div, span').forEach(el => {
      if (el.closest('#unifiedDrawer') || el.id === 'appHamburgerBtn') return;
      const t = (el.textContent || '').trim();
      if (t === 'Theme' || t.includes('Theme') || t.includes('₹') || t.includes('INR')) {
        const parent = el.closest('.topbar') || el.closest('header') || el;
        if (parent && !parent.id.includes('unified')) {
          el.style.setProperty('display', 'none', 'important');
        }
      }
    });
  }
  purgeOldHeaderArtifacts();
  setInterval(purgeOldHeaderArtifacts, 400);

  // 2. Global Dark Mode Styles Enforcer
  if (!document.getElementById('forcedGlobalThemeStyles')) {
    const themeStyle = document.createElement('style');
    themeStyle.id = 'forcedGlobalThemeStyles';
    themeStyle.innerHTML = `
      [data-theme="dark"], body.dark, html.dark {
        --bg-base: #070c16 !important;
        --surface: #0e1726 !important;
        --text-main: #f1f5f9 !important;
        --text-muted: #94a3b8 !important;
        --border-light: #1e293b !important;
        background-color: #070c16 !important;
        color: #f1f5f9 !important;
      }
      [data-theme="dark"] .site-header,
      body.dark .site-header,
      html.dark .site-header {
        background: rgba(14, 23, 38, 0.95) !important;
        border-bottom-color: #1e293b !important;
      }
      [data-theme="dark"] .destination-card-unit,
      body.dark .destination-card-unit,
      [data-theme="dark"] .state-card-tile,
      body.dark .state-card-tile,
      [data-theme="dark"] section#states,
      body.dark section#states {
        background: #0e1726 !important;
        border-color: #1e293b !important;
        color: #f1f5f9 !important;
      }
      [data-theme="dark"] .dest-card-heading,
      body.dark .dest-card-heading,
      [data-theme="dark"] .state-tile-meta h3,
      body.dark .state-tile-meta h3,
      [data-theme="dark"] h1, body.dark h1,
      [data-theme="dark"] h2, body.dark h2,
      [data-theme="dark"] h3, body.dark h3 {
        color: #ffffff !important;
      }
    `;
    document.head.appendChild(themeStyle);
  }

  // 3. Google Translate Engine Setup
  if (!document.getElementById('googleTranslateScriptTag')) {
    const s = document.createElement('script');
    s.id = 'googleTranslateScriptTag';
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInitCallback';
    document.body.appendChild(s);

    const hiddenDiv = document.createElement('div');
    hiddenDiv.id = 'google_translate_element';
    hiddenDiv.style.display = 'none';
    document.body.appendChild(hiddenDiv);

    window.googleTranslateElementInitCallback = function () {
      new google.translate.TranslateElement(
        { pageLanguage: 'en', autoDisplay: false },
        'google_translate_element'
      );
    };
  }

  // 4. Languages List
  const globalLangs = [
    { code: 'hi', name: 'Hindi', native: 'हिन्दी', region: 'India' },
    { code: 'en', name: 'English', native: 'English', region: 'Global' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు', region: 'India' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்', region: 'India' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা', region: 'India' },
    { code: 'mr', name: 'Marathi', native: 'मराठी', region: 'India' },
    { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', region: 'India' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', region: 'India' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം', region: 'India' },
    { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', region: 'India' },
    { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', region: 'India' },
    { code: 'as', name: 'Assamese', native: 'অসমীয়া', region: 'India' },
    { code: 'ur', name: 'Urdu', native: 'اردو', region: 'India' },
    { code: 'es', name: 'Spanish', native: 'Español', region: 'Global' },
    { code: 'fr', name: 'French', native: 'Français', region: 'France' },
    { code: 'de', name: 'German', native: 'Deutsch', region: 'Germany' },
    { code: 'nl', name: 'Dutch', native: 'Nederlands', region: 'Netherlands' },
    { code: 'ru', name: 'Russian', native: 'Русский', region: 'Russia' },
    { code: 'ja', name: 'Japanese', native: '日本語', region: 'Japan' },
    { code: 'zh-CN', name: 'Chinese', native: '中文', region: 'China' },
    { code: 'ar', name: 'Arabic', native: 'العربية', region: 'Middle East' },
    { code: 'pt', name: 'Portuguese', native: 'Português', region: 'Global' },
    { code: 'it', name: 'Italian', native: 'Italiano', region: 'Italy' },
    { code: 'ko', name: 'Korean', native: '한국어', region: 'South Korea' },
    { code: 'tr', name: 'Turkish', native: 'Türkçe', region: 'Turkey' }
  ];

  // 5. Drawer DOM
  const oldDrawer = document.getElementById('unifiedDrawer');
  if (oldDrawer) oldDrawer.remove();
  const oldOverlay = document.getElementById('unifiedDrawerOverlay');
  if (oldOverlay) oldOverlay.remove();

  const currentUser = JSON.parse(localStorage.getItem('incredible_user') || 'null');
  const savedTheme = localStorage.getItem('theme') || 'light';

  const drawerHTML = `
    <div id="unifiedDrawerOverlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.75); z-index:2147483646; backdrop-filter:blur(3px);"></div>
    
    <div id="unifiedDrawer" style="position:fixed; top:0; left:-330px; width:310px; height:100vh; background:#0b1329; color:#fff; z-index:2147483647; box-shadow:4px 0 25px rgba(0,0,0,0.6); transition:left 0.25s ease; display:flex; flex-direction:column; box-sizing:border-box; overflow-y:auto; padding:20px 16px;">
      
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08);">
        <h3 style="margin:0; font-size:1.15rem; font-weight:800; color:#FF5412; display:flex; align-items:center; gap:8px;">
          🇮🇳 Incredible India
        </h3>
        <button id="closeDrawerBtn" style="background:transparent; border:none; color:#94a3b8; font-size:1.5rem; cursor:pointer; line-height:1;">&times;</button>
      </div>

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
        <span id="themeBadgeText" style="font-size:0.75rem; background:rgba(255,255,255,0.1); padding:2px 8px; border-radius:12px; color:#38bdf8;">
          ${savedTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </span>
      </button>

      <!-- Helpline -->
      <a href="tel:1363" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:10px 14px; border-radius:8px; text-decoration:none; color:#f1f5f9; font-size:0.85rem; font-weight:600; margin-bottom:12px;">
        📞 Helpline: 1363 (24×7)
      </a>

      <!-- Single Language Button -->
      <button id="drawerLanguageOpenBtn" style="display:flex; justify-content:space-between; align-items:center; background:rgba(56,189,248,0.08); border:1px solid rgba(56,189,248,0.25); padding:12px 14px; border-radius:8px; color:#38bdf8; font-weight:700; font-size:0.88rem; cursor:pointer; text-align:left; width:100%; margin-bottom:12px;">
        <span>🌐 Choose Language / भाषा</span>
        <span style="color:#38bdf8; font-size:0.85rem;">›</span>
      </button>

      <!-- Navigation Pages -->
      <div style="display:flex; flex-direction:column; gap:10px;">
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
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', drawerHTML);

  const drawer = document.getElementById('unifiedDrawer');
  const overlay = document.getElementById('unifiedDrawerOverlay');
  const closeBtn = document.getElementById('closeDrawerBtn');

  function openDrawer(e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    purgeOldHeaderArtifacts();
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

  // 6. Hamburger Button
  let hamBtn = document.getElementById('appHamburgerBtn');
  if (!hamBtn) {
    hamBtn = document.createElement('button');
    hamBtn.id = 'appHamburgerBtn';
    hamBtn.innerHTML = '&#9776;';
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
  `;

  // 7. REAL WORKING THEME TOGGLE LOGIC
  function applyTheme(theme) {
    const html = document.documentElement;
    const body = document.body;

    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      body.setAttribute('data-theme', 'dark');
      html.classList.add('dark');
      body.classList.add('dark');
      document.getElementById('themeBadgeText').innerText = 'Dark Mode';
    } else {
      html.setAttribute('data-theme', 'light');
      body.setAttribute('data-theme', 'light');
      html.classList.remove('dark');
      body.classList.remove('dark');
      document.getElementById('themeBadgeText').innerText = 'Light Mode';
    }
    localStorage.setItem('theme', theme);
  }

  // Load saved theme initially
  applyTheme(savedTheme);

  const themeSwitchBtn = document.getElementById('inDrawerThemeToggle');
  themeSwitchBtn.addEventListener('click', function () {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);

    // Call background website functions if present
    if (typeof window.toggleTheme === 'function') window.toggleTheme();
  });

  // 8. Language Search Modal
  let modalEl = document.getElementById('addonLangSearchModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.id = 'addonLangSearchModal';
    modalEl.style.cssText = 'display:none; position:fixed; inset:0; background:rgba(6,11,23,0.96); backdrop-filter:blur(12px); z-index:2147483648; padding:20px 16px; box-sizing:border-box; overflow-y:auto; -webkit-overflow-scrolling:touch;';
    document.body.appendChild(modalEl);
  }

  function renderList(items) {
    const box = document.getElementById('addonLangListTarget');
    if (!box) return;
    if (items.length === 0) {
      box.innerHTML = '<div style="text-align:center; padding:25px; color:#94a3b8; font-size:0.85rem;">Koi bhasha nahi mili. Spelling check karein.</div>';
      return;
    }
    const cur = localStorage.getItem('selectedAppLanguage') || 'en';
    box.innerHTML = items.map(l => `
      <div onclick="selectLanguageLive('${l.code}', '${l.name}')" style="display:flex; justify-content:space-between; align-items:center; background:${l.code === cur ? 'rgba(255,84,18,0.2)' : '#0f172a'}; border:1px solid ${l.code === cur ? '#FF5412' : 'rgba(255,255,255,0.08)'}; padding:12px 16px; border-radius:10px; cursor:pointer; margin-bottom:8px;">
        <div>
          <b style="color:#fff; font-size:0.95rem; display:block;">${l.name}</b>
          <span style="color:#94a3b8; font-size:0.75rem;">${l.region}</span>
        </div>
        <div style="text-align:right;">
          <span style="color:#FF5412; font-weight:700; font-size:0.95rem; display:block;">${l.native}</span>
          <span style="font-size:0.7rem; color:#64748b; text-transform:uppercase;">${l.code}</span>
        </div>
      </div>
    `).join('');
  }

  window.closeAddonLangModal = function () {
    modalEl.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  window.selectLanguageLive = function (code, name) {
    localStorage.setItem('selectedAppLanguage', code);
    window.closeAddonLangModal();

    document.cookie = `googtrans=/en/${code}; path=/`;
    document.cookie = `googtrans=/en/${code}; domain=.${location.hostname}; path=/`;

    const gCombo = document.querySelector('.goog-te-combo');
    if (gCombo) {
      gCombo.value = code;
      gCombo.dispatchEvent(new Event('change'));
    } else {
      location.reload();
    }
  };

  function openLanguageModalDirect() {
    closeDrawer();
    document.body.style.overflow = 'hidden';
    modalEl.style.display = 'block';
    modalEl.scrollTop = 0;

    modalEl.innerHTML = `
      <div style="max-width:480px; margin:0 auto; text-align:left;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <div>
            <h2 style="margin:0; font-size:1.25rem; color:#fff; font-weight:800;">🌐 Select Language</h2>
            <span style="font-size:0.75rem; color:#94a3b8;">Search Indian & World Languages</span>
          </div>
          <button onclick="closeAddonLangModal()" style="background:#1e293b; border:none; color:#fff; width:34px; height:34px; border-radius:8px; font-size:1.2rem; cursor:pointer;">&times;</button>
        </div>
        <div style="position:relative; margin-bottom:16px;">
          <input type="text" id="addonSearchField" placeholder="Type language (e.g. Telugu, Tamil, German, Dutch)..." autocomplete="off" style="width:100%; box-sizing:border-box; background:#0f172a; border:1px solid rgba(255,255,255,0.2); color:#fff; padding:12px 14px 12px 38px; border-radius:10px; font-size:0.92rem; outline:none;" />
          <span style="position:absolute; left:12px; top:12px; font-size:0.95rem; color:#94a3b8;">🔍</span>
        </div>
        <div id="addonLangListTarget" style="display:flex; flex-direction:column; gap:8px;"></div>
      </div>
    `;

    renderList(globalLangs);

    const inp = document.getElementById('addonSearchField');
    if (inp) {
      inp.focus();
      inp.addEventListener('input', function () {
        const q = this.value.trim().toLowerCase();
        const res = globalLangs.filter(l => l.name.toLowerCase().includes(q) || l.native.toLowerCase().includes(q) || l.code.toLowerCase().includes(q));
        renderList(res);
      });
    }
  }

  document.getElementById('drawerLanguageOpenBtn').addEventListener('click', openLanguageModalDirect);

  // 9. Dedicated Pages Navigation Trigger
  document.querySelectorAll('.drawer-nav-trigger').forEach(btn => {
    btn.addEventListener('click', function () {
      const page = this.getAttribute('data-page');
      closeDrawer();
      if (window.openAppPage) window.openAppPage(page);
    });
  });
})();
