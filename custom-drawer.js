// =========================================================================
// CUSTOM 3-DOT DRAWER: LOGIN, LANGUAGES & DEDICATED PAGES
// =========================================================================

(function () {
  const drawerHTML = `
    <div id="unifiedDrawerOverlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.7); z-index:99998; backdrop-filter:blur(4px);"></div>
    <div id="unifiedDrawer" style="position:fixed; top:0; left:-320px; width:300px; height:100vh; background:#0b1329; color:#fff; z-index:99999; box-shadow:4px 0 25px rgba(0,0,0,0.5); transition:left 0.3s cubic-bezier(0.4, 0, 0.2, 1); display:flex; flex-direction:column; padding:20px 16px; box-sizing:border-box;">
      
      <!-- Drawer Header -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.08);">
        <h3 style="margin:0; font-size:1.15rem; font-weight:800; color:#FF5412; display:flex; align-items:center; gap:8px;">
          🇮🇳 Incredible India
        </h3>
        <button id="closeDrawerBtn" style="background:transparent; border:none; color:#94a3b8; font-size:1.5rem; cursor:pointer; line-height:1;">&times;</button>
      </div>

      <!-- Language Selector Dropdown -->
      <div style="margin-bottom:12px;">
        <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:4px; font-weight:600;">🌐 Select Language</label>
        <select id="siteLanguageSelector" style="width:100%; padding:9px 10px; background:#1e293b; color:#fff; border:1px solid rgba(255,255,255,0.12); border-radius:8px; font-size:0.85rem; outline:none;">
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

      <!-- Login / Account Button -->
      <button class="drawer-nav-item" data-page="login" style="display:flex; align-items:center; justify-content:center; gap:8px; background:#FF5412; border:none; padding:10px; border-radius:8px; color:#fff; font-weight:700; font-size:0.9rem; cursor:pointer; width:100%; margin-bottom:14px;">
        🔐 Login / Sign Up
      </button>

      <!-- Helpline -->
      <a href="tel:1363" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:9px 12px; border-radius:8px; text-decoration:none; color:#f1f5f9; font-size:0.82rem; font-weight:600; margin-bottom:14px;">
        📞 Helpline: 1363 (24x7)
      </a>

      <!-- Page Links -->
      <div style="display:flex; flex-direction:column; gap:8px; flex:1; overflow-y:auto;">
        
        <button class="drawer-nav-item" data-page="quote" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); padding:10px 12px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; text-align:left; cursor:pointer; width:100%;">
          📝 Plan Trip / Get Free Quote
        </button>

        <button class="drawer-nav-item" data-page="estimator" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); padding:10px 12px; border-radius:8px; color:#FF5412; font-weight:600; font-size:0.88rem; text-align:left; cursor:pointer; width:100%;">
          🧮 Tour Cost Estimator
        </button>

        <button class="drawer-nav-item" data-page="circuits" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); padding:10px 12px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; text-align:left; cursor:pointer; width:100%;">
          🏛️ Tour Circuits & Itineraries
        </button>

        <button class="drawer-nav-item" data-page="map" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); padding:10px 12px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; text-align:left; cursor:pointer; width:100%;">
          🗺️ Live Interactive Map
        </button>

        <button class="drawer-nav-item" data-page="registry" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); padding:10px 12px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; text-align:left; cursor:pointer; width:100%;">
          🛡️ Official State & UT Registry
        </button>

      </div>
    </div>
  `;

  // Attach Google Translate Script silently
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
    if (!document.getElementById('unifiedDrawer')) {
      document.body.insertAdjacentHTML('beforeend', drawerHTML);
      loadGoogleTranslator();
    }

    const drawer = document.getElementById('unifiedDrawer');
    const overlay = document.getElementById('unifiedDrawerOverlay');
    const closeBtn = document.getElementById('closeDrawerBtn');

    function openDrawer() {
      drawer.style.left = '0px';
      overlay.style.display = 'block';
    }

    function closeDrawer() {
      drawer.style.left = '-320px';
      overlay.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Three-dot button listener
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('button, div, a');
      if (btn && (btn.id === 'unified3DotBtn' || btn.textContent.includes('⋮') || btn.getAttribute('aria-label')?.includes('Menu'))) {
        e.preventDefault();
        openDrawer();
      }
    });

    // Page switcher click
    document.querySelectorAll('.drawer-nav-item').forEach(btn => {
      btn.addEventListener('click', function () {
        const page = this.getAttribute('data-page');
        closeDrawer();
        if (window.openDedicatedPage) {
          window.openDedicatedPage(page);
        }
      });
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
        // Fallback cookie for Google Translate
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
