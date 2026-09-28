// =========================================================================
// INCREDIBLE INDIA - SINGLE CLEAN DRAWER (AGGRESSIVE DUPLICATE KILLER)
// =========================================================================

(function () {
  // 1. Purane drawer ko uske text se pehchan kar turant remove karein
  function permanentlyNukeOldDrawer() {
    // Purane drawer me jo khas text the unhe match karke remove karein
    document.querySelectorAll('div, aside, nav, section').forEach(el => {
      if (el.id === 'unifiedDrawer' || el.id === 'unifiedDrawerOverlay') return;
      
      const txt = el.textContent || '';
      if (
        (txt.includes('All 36 States & UTs') || txt.includes('Live Interactive Map')) &&
        (el.offsetHeight > 200 || window.getComputedStyle(el).position === 'fixed')
      ) {
        el.style.setProperty('display', 'none', 'important');
        el.style.setProperty('visibility', 'hidden', 'important');
        el.style.setProperty('pointer-events', 'none', 'important');
        el.remove();
      }
    });
  }

  // Turant run karein aur lagatar check karein
  permanentlyNukeOldDrawer();
  setInterval(permanentlyNukeOldDrawer, 100);

  // 2. Fresh Naya Single Drawer Banayein
  const oldDrawer = document.getElementById('unifiedDrawer');
  if (oldDrawer) oldDrawer.remove();
  const oldOverlay = document.getElementById('unifiedDrawerOverlay');
  if (oldOverlay) oldOverlay.remove();

  const drawerHTML = `
    <div id="unifiedDrawerOverlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.75); z-index:2147483646; backdrop-filter:blur(3px);"></div>
    
    <div id="unifiedDrawer" style="position:fixed; top:0; left:-330px; width:310px; height:100vh; background:#0b1329; color:#fff; z-index:2147483647; box-shadow:4px 0 25px rgba(0,0,0,0.6); transition:left 0.25s ease; display:flex; flex-direction:column; box-sizing:border-box; overflow-y:auto; padding:20px 16px;">
      
      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.08);">
        <h3 style="margin:0; font-size:1.15rem; font-weight:800; color:#FF5412; display:flex; align-items:center; gap:8px;">
          🇮🇳 Incredible India
        </h3>
        <button id="closeDrawerBtn" style="background:transparent; border:none; color:#94a3b8; font-size:1.5rem; cursor:pointer; line-height:1;">&times;</button>
      </div>

      <!-- Language Selector -->
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

      <!-- Login Button -->
      <button id="drawerLoginBtn" style="display:flex; align-items:center; justify-content:center; gap:8px; background:#FF5412; border:none; padding:12px; border-radius:8px; color:#fff; font-weight:700; font-size:0.9rem; cursor:pointer; width:100%; margin-bottom:14px;">
        🔐 Login / Sign Up
      </button>

      <!-- Helpline -->
      <a href="tel:1363" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:10px 14px; border-radius:8px; text-decoration:none; color:#f1f5f9; font-size:0.85rem; font-weight:600; margin-bottom:16px;">
        📞 Helpline: 1363 (24×7)
      </a>

      <!-- Menu Items -->
      <div style="display:flex; flex-direction:column; gap:10px;">
        
        <button class="drawer-menu-item" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>📝 Plan Trip / Get Free Quote</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

        <button class="drawer-menu-item" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#FF5412; font-weight:600; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>🧮 Tour Cost Estimator</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

        <button class="drawer-menu-item" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
          <span>🏛️ Tour Circuits & Itineraries</span>
          <span style="color:#64748b; font-size:0.8rem;">›</span>
        </button>

        <button class="drawer-menu-item" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px 14px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left; width:100%;">
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
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
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

  drawer.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Event capturing se sabse pehle hamara click register hoga
  window.addEventListener('click', function (e) {
    const btn = e.target.closest('#unified3DotBtn, .three-dot-btn, [aria-label*="Menu"]');
    if (btn) {
      openDrawer(e);
    }
  }, true);

  // Language change
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

  if (!document.getElementById('google-translate-script')) {
    const s = document.createElement('script');
    s.id = 'google-translate-script';
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(s);
  }
})();
