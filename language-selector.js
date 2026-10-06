// =========================================================================
// INCREDIBLE INDIA - GLOBAL & INDIAN MULTI-LANGUAGE (AUTO-INJECTOR ENGINE)
// =========================================================================

(function () {
  const languagesList = [
    // Indian Languages
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

    // World Languages
    { code: 'es', name: 'Spanish', native: 'Español', region: 'Spain / Latin America' },
    { code: 'fr', name: 'French', native: 'Français', region: 'France' },
    { code: 'de', name: 'German', native: 'Deutsch', region: 'Germany' },
    { code: 'nl', name: 'Dutch', native: 'Nederlands', region: 'Netherlands' },
    { code: 'ru', name: 'Russian', native: 'Русский', region: 'Russia' },
    { code: 'ja', name: 'Japanese', native: '日本語', region: 'Japan' },
    { code: 'zh-CN', name: 'Chinese', native: '中文', region: 'China' },
    { code: 'ar', name: 'Arabic', native: 'العربية', region: 'Middle East' },
    { code: 'pt', name: 'Portuguese', native: 'Português', region: 'Portugal / Brazil' },
    { code: 'it', name: 'Italian', native: 'Italiano', region: 'Italy' },
    { code: 'ko', name: 'Korean', native: '한국어', region: 'South Korea' },
    { code: 'tr', name: 'Turkish', native: 'Türkçe', region: 'Turkey' }
  ];

  // Language Modal Overlay
  let langModal = document.getElementById('globalLanguageModal');
  if (!langModal) {
    langModal = document.createElement('div');
    langModal.id = 'globalLanguageModal';
    langModal.style.cssText = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(6, 11, 23, 0.96);
      backdrop-filter: blur(12px);
      z-index: 2147483647;
      padding: 20px 16px;
      box-sizing: border-box;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    `;
    document.body.appendChild(langModal);
  }

  window.closeLanguageModal = function () {
    langModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  window.selectLanguage = function (code, name) {
    localStorage.setItem('selectedAppLanguage', code);
    window.closeLanguageModal();

    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: #FF5412;
      color: #fff;
      padding: 10px 22px;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 700;
      z-index: 2147483648;
      box-shadow: 0 4px 16px rgba(0,0,0,0.5);
    `;
    toast.innerHTML = `🌐 Language selected: ${name}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);

    const googleSelect = document.querySelector('.goog-te-combo');
    if (googleSelect) {
      googleSelect.value = code;
      googleSelect.dispatchEvent(new Event('change'));
    }
  };

  window.openLanguageModal = function () {
    // Jo bhi drawer ya overlay khula ho band karein
    document.querySelectorAll('[id*="Drawer"], [class*="drawer"], [class*="menu"]').forEach(el => {
      if (el !== langModal) {
        el.classList.remove('open', 'active');
        if (el.style.left === '0px') el.style.left = '-330px';
      }
    });
    const overlay = document.getElementById('unifiedDrawerOverlay') || document.getElementById('drawerOverlay');
    if (overlay) overlay.style.display = 'none';

    document.body.style.overflow = 'hidden';
    langModal.style.display = 'block';
    langModal.scrollTop = 0;

    langModal.innerHTML = `
      <div style="max-width:480px; margin:0 auto; text-align:left;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <div>
            <h2 style="margin:0; font-size:1.25rem; color:#fff; font-weight:800;">🌐 Select Language</h2>
            <span style="font-size:0.75rem; color:#94a3b8;">Type in English (e.g. Telugu, Dutch, Tamil, German)</span>
          </div>
          <button onclick="closeLanguageModal()" style="background:#1e293b; border:none; color:#fff; width:34px; height:34px; border-radius:8px; font-size:1.2rem; cursor:pointer;">&times;</button>
        </div>

        <div style="position:relative; margin-bottom:16px;">
          <input 
            type="text" 
            id="langLiveSearchInput" 
            placeholder="Search language (e.g. Telugu, German, Tamil)..." 
            autocomplete="off"
            style="width:100%; box-sizing:border-box; background:#0f172a; border:1px solid rgba(255,255,255,0.2); color:#fff; padding:12px 14px 12px 38px; border-radius:10px; font-size:0.92rem; outline:none;"
          />
          <span style="position:absolute; left:12px; top:12px; font-size:0.95rem; color:#94a3b8;">🔍</span>
        </div>

        <div id="languagesListResultBox" style="display:flex; flex-direction:column; gap:8px;"></div>
      </div>
    `;

    renderLangItems(languagesList);

    const input = document.getElementById('langLiveSearchInput');
    if (input) {
      input.focus();
      input.addEventListener('input', function () {
        const q = this.value.trim().toLowerCase();
        const filtered = languagesList.filter(l => 
          l.name.toLowerCase().includes(q) || 
          l.native.toLowerCase().includes(q) || 
          l.code.toLowerCase().includes(q)
        );
        renderLangItems(filtered);
      });
    }
  };

  function renderLangItems(list) {
    const box = document.getElementById('languagesListResultBox');
    if (!box) return;

    if (list.length === 0) {
      box.innerHTML = `<div style="text-align:center; padding:30px; color:#94a3b8; font-size:0.85rem;">Koi bhasha nahi mili. Please check spelling.</div>`;
      return;
    }

    const currentLang = localStorage.getItem('selectedAppLanguage') || 'en';

    box.innerHTML = list.map(item => `
      <div 
        onclick="selectLanguage('${item.code}', '${item.name}')" 
        style="display:flex; justify-content:space-between; align-items:center; background:${item.code === currentLang ? 'rgba(255,84,18,0.2)' : '#0f172a'}; border:1px solid ${item.code === currentLang ? '#FF5412' : 'rgba(255,255,255,0.08)'}; padding:12px 16px; border-radius:10px; cursor:pointer;"
      >
        <div>
          <b style="color:#fff; font-size:0.95rem; display:block;">${item.name}</b>
          <span style="color:#94a3b8; font-size:0.75rem;">${item.region}</span>
        </div>
        <div style="text-align:right;">
          <span style="color:#FF5412; font-weight:700; font-size:0.95rem; display:block;">${item.native}</span>
          <span style="font-size:0.7rem; color:#64748b; text-transform:uppercase;">${item.code}</span>
        </div>
      </div>
    `).join('');
  }

  // FORCE INJECTOR: Har tarah ke drawer menu me automatically ghusega
  function forceInjectLanguageButton() {
    if (document.getElementById('forceInjectedLangBtn')) return;

    // Koi bhi drawer container dhoondo
    const drawerContainer = 
      document.querySelector('#unifiedDrawer .drawer-menu-list') || 
      document.querySelector('#mobileDrawer ul') || 
      document.querySelector('.drawer-links') || 
      document.querySelector('.nav-drawer ul') ||
      document.querySelector('#unifiedDrawer');

    if (!drawerContainer) return;

    const btnWrapper = document.createElement(drawerContainer.tagName === 'UL' ? 'li' : 'div');
    btnWrapper.id = 'forceInjectedLangBtn';
    btnWrapper.style.cssText = `
      display: block;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 10px;
    `;

    btnWrapper.innerHTML = `
      <button type="button" onclick="openLanguageModal()" style="display:flex; justify-content:space-between; align-items:center; width:100%; background:rgba(56,189,248,0.12); border:1px solid rgba(56,189,248,0.35); padding:12px 14px; border-radius:10px; color:#38bdf8; font-weight:700; font-size:0.9rem; cursor:pointer; text-align:left; box-sizing:border-box;">
        <span>🌐 Choose Language / भाषा</span>
        <span style="font-size:0.85rem; color:#38bdf8;">›</span>
      </button>
    `;

    // Drawer ke sabse top par insert karein
    if (drawerContainer.firstChild) {
      drawerContainer.insertBefore(btnWrapper, drawerContainer.firstChild);
    } else {
      drawerContainer.appendChild(btnWrapper);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceInjectLanguageButton);
  } else {
    forceInjectLanguageButton();
  }
  setInterval(forceInjectLanguageButton, 700);
})();
