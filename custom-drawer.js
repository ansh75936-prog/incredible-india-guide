// =========================================================================
// INCREDIBLE INDIA - LOCKED 3-DOT DRAWER MENU
// =========================================================================

(function () {
  // Purane extra overlays aur containers ko remove karein
  const oldDrawer = document.getElementById('unifiedDrawer');
  if (oldDrawer) oldDrawer.remove();
  const oldOverlay = document.getElementById('unifiedDrawerOverlay');
  if (oldOverlay) oldOverlay.remove();
  const dedicatedPages = document.getElementById('dedicatedPagesContainer');
  if (dedicatedPages) dedicatedPages.remove();

  const drawerHTML = `
    <div id="unifiedDrawerOverlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.7); z-index:99998; backdrop-filter:blur(3px);"></div>
    
    <div id="unifiedDrawer" style="position:fixed; top:0; left:-330px; width:310px; height:100vh; background:#0b1329; color:#fff; z-index:99999; box-shadow:4px 0 25px rgba(0,0,0,0.5); transition:left 0.28s ease; display:flex; flex-direction:column; box-sizing:border-box; overflow-y:auto; padding:20px 16px;">
      
      <!-- Top Fixed Header -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08);">
        <h3 style="margin:0; font-size:1.15rem; font-weight:800; color:#FF5412; display:flex; align-items:center; gap:8px;">
          🇮🇳 Incredible India
        </h3>
        <button id="closeDrawerBtn" style="background:transparent; border:none; color:#94a3b8; font-size:1.5rem; cursor:pointer; line-height:1;">&times;</button>
      </div>

      <!-- 1. Language Selector -->
      <div style="margin-bottom:14px;">
        <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:6px; font-weight:600;">🌐 Select Language</label>
        <select id="siteLanguageSelector" style="width:100%; padding:10px; background:#1e293b; color:#fff; border:1px solid rgba(255,255,255,0.12); border-radius:8px; font-size:0.85rem; outline:none;">
          <option value="en" selected>English (Default)</option>
          <option value="hi">हिंदी (Hindi)</option>
          <option value="bn">বাংলা (Bengali)</option>
          <option value="te">తెలుగు (Telugu)</option>
          <option value="ta">தமிழ் (Tamil)</option>
          <option value="mr">मराठी (Marathi)</option>
          <option value="gu">ગુજરાતી (Gujarati)</option>
          <option value="fr">Français (French)</option>
          <option value="es">Español (Spanish)</option>
          <option value="de">Deutsch (German)</option>
        </select>
        <div id="google_translate_element" style="display:none;"></div>
      </div>

      <!-- 2. Login / Sign Up Button -->
      <button id="drawerLoginBtn" style="display:flex; align-items:center; justify-content:center; gap:8px; background:#FF5412; border:none; padding:12px; border-radius:8px; color:#fff; font-weight:700; font-size:0.9rem; cursor:pointer; width:100%; margin-bottom:14px;">
        🔐 Login / Sign Up
      </button>

      <!-- 3. Helpline Badge -->
      <a href="tel:1363" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:10px 14px; border-radius:8px; text-decoration:none; color:#f1f5f9; font-size:0.85rem; font-weight:600; margin-bottom:16px;">
        📞 Helpline: 1363 (24×7)
      </a>

      <!-- 4. Navigation Menu List -->
      <div style="display:flex; flex-direction:column; gap:10px;">
        
        <button class="drawer-menu-item" data-action="quote" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>📝 Plan Trip / Get Free Quote</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

        <button class="drawer-menu-item" data-action="estimator" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#FF5412; font-weight:600; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>🧮 Tour Cost Estimator</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

        <button class="drawer-menu-item" data-action="circuits" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>🏛️ Tour Circuits & Itineraries</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

        <button class="drawer-menu-item" data-action="registry" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>🛡️ Official State & UT Registry</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

      </div>
    </div>
  `;

  // Google Translate Helper
  function loadGoogleTranslator() {
    if (!document.getElementById('google-translate-script')) {
      const s = document.createElement('script');
      s.id = 'google-translate-script';
      s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.head.appendChild(s);
    }
  }

  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,hi,bn,te,ta,mr,gu,fr,es,de',
      autoDisplay: false
    }, 'google_translate_element');
  };

  function initDrawer() {
    document.body.insertAdjacentHTML('beforeend', drawerHTML);
    loadGoogleTranslator();

    const drawer = document.getElementById('unifiedDrawer');
    const overlay = document.getElementById('unifiedDrawerOverlay');
    const closeBtn = document.getElementById('closeDrawerBtn');

    function openDrawer() {
      drawer.style.left = '0px';
      overlay.style.display = 'block';
    }

    function closeDrawer() {
      drawer.style.left = '-330px';
      overlay.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // 3-dot click listener
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('button, div, a');
      if (btn && (btn.id === 'unified3DotBtn' || btn.textContent.includes('⋮') || btn.getAttribute('aria-label')?.includes('Menu'))) {
        e.preventDefault();
        openDrawer();
      }
    });

    // Language Dropdown Change Handler
    const langSelect = document.getElementById('siteLanguageSelector');
    langSelect.addEventListener('change', function () {
      const targetLang = this.value;
      const gtCombo = document.querySelector('.goog-te-combo');
      if (gtCombo) {
        gtCombo.value = targetLang;
        gtCombo.dispatchEvent(new Event('change'));
      } else {
        document.cookie = `googtrans=/en/${targetLang}; path=/;`;
        location.reload();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDrawer);
  } else {
    initDrawer();
  }
})();
