// =========================================================================
// IN-DRAWER DRILL-DOWN NAVIGATION (EVERYTHING OPENS INSIDE THE DRAWER)
// =========================================================================

(function () {
  // Purana container agar ho to hata dein
  const oldPage = document.getElementById('dedicatedPagesContainer');
  if (oldPage) oldPage.remove();

  const drawerHTML = `
    <div id="unifiedDrawerOverlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.7); z-index:99998; backdrop-filter:blur(3px);"></div>
    
    <div id="unifiedDrawer" style="position:fixed; top:0; left:-330px; width:310px; height:100vh; background:#0b1329; color:#fff; z-index:99999; box-shadow:4px 0 25px rgba(0,0,0,0.5); transition:left 0.28s ease; display:flex; flex-direction:column; box-sizing:border-box; overflow:hidden;">
      
      <div style="display:flex; justify-content:space-between; align-items:center; padding:18px 16px 14px 16px; border-bottom:1px solid rgba(255,255,255,0.08); background:#070c18;">
        <h3 id="drawerHeaderTitle" style="margin:0; font-size:1.1rem; font-weight:800; color:#FF5412; display:flex; align-items:center; gap:8px;">
          🇮🇳 Incredible India
        </h3>
        <button id="closeDrawerBtn" style="background:transparent; border:none; color:#94a3b8; font-size:1.5rem; cursor:pointer; line-height:1;">&times;</button>
      </div>

      <div id="drawerSlider" style="display:flex; width:620px; flex:1; transition:transform 0.25s ease; height:calc(100vh - 65px);">
        
        <div id="drawerViewMain" style="width:310px; padding:16px; box-sizing:border-box; overflow-y:auto; display:flex; flex-direction:column; gap:10px;">
          
          <div style="margin-bottom:6px;">
            <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:5px; font-weight:600;">🌐 Select Language</label>
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

          <button class="drawer-drill-btn" data-target="login" style="display:flex; align-items:center; justify-content:center; gap:8px; background:#FF5412; border:none; padding:11px; border-radius:8px; color:#fff; font-weight:700; font-size:0.88rem; cursor:pointer; width:100%;">
            🔐 Login / Sign Up
          </button>

          <a href="tel:1363" style="display:flex; align-items:center; gap:10px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); padding:9px 12px; border-radius:8px; text-decoration:none; color:#f1f5f9; font-size:0.82rem; font-weight:600;">
            📞 Helpline: 1363 (24x7)
          </a>

          <button class="drawer-drill-btn" data-target="quote" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left;">
            <span>📝 Plan Trip / Get Free Quote</span>
            <span style="color:#64748b;">›</span>
          </button>

          <button class="drawer-drill-btn" data-target="estimator" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px; border-radius:8px; color:#FF5412; font-weight:600; font-size:0.88rem; cursor:pointer; text-align:left;">
            <span>🧮 Tour Cost Estimator</span>
            <span style="color:#64748b;">›</span>
          </button>

          <button class="drawer-drill-btn" data-target="circuits" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left;">
            <span>🏛️ Tour Circuits & Itineraries</span>
            <span style="color:#64748b;">›</span>
          </button>

          <button class="drawer-drill-btn" data-target="registry" style="display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px; border-radius:8px; color:#cbd5e1; font-size:0.88rem; cursor:pointer; text-align:left;">
            <span>🛡️ Official State & UT Registry</span>
            <span style="color:#64748b;">›</span>
          </button>
        </div>

        <div id="drawerViewSub" style="width:310px; padding:16px; box-sizing:border-box; overflow-y:auto; display:flex; flex-direction:column; gap:12px; background:#0b1329;">
          <button id="drawerBackBtn" style="background:#1e293b; border:1px solid rgba(255,255,255,0.1); color:#38bdf8; padding:8px 12px; border-radius:6px; font-size:0.82rem; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:6px; align-self:flex-start;">
            ‹ Back
          </button>

          <div id="drawerSubContent"></div>
        </div>

      </div>
    </div>
  `;

  // Sub-detail Views ka HTML Data
  const viewContents = {
    login: `
      <h4 style="margin:4px 0 2px 0; font-size:1.1rem;">Account Login</h4>
      <p style="color:#94a3b8; font-size:0.78rem; margin-bottom:12px;">Sign in to view saved bookings.</p>
      
      <form onsubmit="event.preventDefault(); alert('Logged in successfully!');" style="display:flex; flex-direction:column; gap:10px;">
        <input type="email" placeholder="Email" required style="padding:10px; background:#1e293b; border:1px solid rgba(255,255,255,0.1); border-radius:6px; color:#fff; font-size:0.85rem;">
        <input type="password" placeholder="Password" required style="padding:10px; background:#1e293b; border:1px solid rgba(255,255,255,0.1); border-radius:6px; color:#fff; font-size:0.85rem;">
        <button type="submit" style="padding:10px; background:#FF5412; border:none; border-radius:6px; color:#fff; font-weight:700; font-size:0.85rem; cursor:pointer;">Sign In</button>
      </form>

      <div style="text-align:center; margin:10px 0; color:#64748b; font-size:0.75rem;">OR</div>
      
      <button onclick="alert('Google Auth Triggered')" style="padding:9px; background:#1e293b; border:1px solid rgba(255,255,255,0.1); border-radius:6px; color:#fff; font-size:0.8rem; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px;">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="16" height="16"> Google Sign In
      </button>
    `,

    quote: `
      <h4 style="margin:4px 0 2px 0; font-size:1.1rem;">📝 Plan Your Trip</h4>
      <p style="color:#94a3b8; font-size:0.78rem; margin-bottom:12px;">Get customized itinerary quote.</p>

      <form action="https://formspree.io/f/xbjnqepq" method="POST" style="display:flex; flex-direction:column; gap:9px;">
        <input type="text" name="name" placeholder="Full Name" required style="padding:10px; background:#1e293b; border:1px solid rgba(255,255,255,0.1); border-radius:6px; color:#fff; font-size:0.85rem;">
        <input type="tel" name="phone" placeholder="WhatsApp Number" required style="padding:10px; background:#1e293b; border:1px solid rgba(255,255,255,0.1); border-radius:6px; color:#fff; font-size:0.85rem;">
        <input type="text" name="destination" placeholder="Destination State/City" required style="padding:10px; background:#1e293b; border:1px solid rgba(255,255,255,0.1); border-radius:6px; color:#fff; font-size:0.85rem;">
        <textarea name="notes" rows="3" placeholder="Special requirements..." style="padding:10px; background:#1e293b; border:1px solid rgba(255,255,255,0.1); border-radius:6px; color:#fff; font-size:0.85rem;"></textarea>
        <button type="submit" style="padding:11px; background:#FF5412; border:none; border-radius:6px; color:#fff; font-weight:700; font-size:0.85rem; cursor:pointer;">Submit Request</button>
      </form>
    `,

    estimator: `
      <h4 style="margin:4px 0 2px 0; font-size:1.1rem;">🧮 Cost Estimator</h4>
      <p style="color:#94a3b8; font-size:0.78rem; margin-bottom:12px;">Instant rough budget calculation.</p>

      <div style="display:flex; flex-direction:column; gap:12px; background:#1e293b; padding:12px; border-radius:8px;">
        <div>
          <label style="font-size:0.75rem; color:#94a3b8;">Trip Days: <b id="subEstDays" style="color:#FF5412;">4</b></label>
          <input type="range" id="subDaysInput" min="1" max="20" value="4" style="width:100%;" oninput="calcSubEstimate()">
        </div>
        <div>
          <label style="font-size:0.75rem; color:#94a3b8;">Travelers: <b id="subEstPax" style="color:#FF5412;">2</b></label>
          <input type="range" id="subPaxInput" min="1" max="8" value="2" style="width:100%;" oninput="calcSubEstimate()">
        </div>
        <div>
          <label style="font-size:0.75rem; color:#94a3b8;">Hotel Tier:</label>
          <select id="subTierInput" style="width:100%; padding:7px; background:#0b1329; color:#fff; border:1px solid rgba(255,255,255,0.1); border-radius:6px; font-size:0.8rem; margin-top:4px;" onchange="calcSubEstimate()">
            <option value="1800">Budget (₹1,800/d)</option>
            <option value="3600" selected>Comfort (₹3,600/d)</option>
            <option value="7500">Luxury (₹7,500/d)</option>
          </select>
        </div>
        <div style="text-align:center; padding-top:6px; border-top:1px solid rgba(255,255,255,0.08);">
          <span style="font-size:0.75rem; color:#94a3b8;">Est. Total:</span>
          <div id="subEstDisplay" style="font-size:1.4rem; font-weight:800; color:#4ade80;">₹28,800</div>
        </div>
      </div>
    `,

    circuits: `
      <h4 style="margin:4px 0 2px 0; font-size:1.1rem;">🏛️ Tour Circuits</h4>
      <p style="color:#94a3b8; font-size:0.78rem; margin-bottom:12px;">Top popular routes across India.</p>

      <div style="display:flex; flex-direction:column; gap:10px;">
        <div style="background:#1e293b; padding:10px; border-radius:8px; border-left:3px solid #FF5412;">
          <b style="font-size:0.85rem; display:block;">Golden Triangle (6D / 5N)</b>
          <span style="font-size:0.75rem; color:#94a3b8;">Delhi ➔ Agra ➔ Jaipur</span>
        </div>
        <div style="background:#1e293b; padding:10px; border-radius:8px; border-left:3px solid #FF5412;">
          <b style="font-size:0.85rem; display:block;">Kerala Backwaters (7D / 6N)</b>
          <span style="font-size:0.75rem; color:#94a3b8;">Kochi ➔ Munnar ➔ Alleppey</span>
        </div>
        <div style="background:#1e293b; padding:10px; border-radius:8px; border-left:3px solid #FF5412;">
          <b style="font-size:0.85rem; display:block;">Devbhoomi Yatra (8D / 7N)</b>
          <span style="font-size:0.75rem; color:#94a3b8;">Haridwar ➔ Rishikesh ➔ Kedarnath</span>
        </div>
      </div>
    `,

    registry: `
      <h4 style="margin:4px 0 2px 0; font-size:1.1rem;">🛡️ Official Registry</h4>
      <p style="color:#94a3b8; font-size:0.78rem; margin-bottom:10px;">National tourist directory & records.</p>
      <div style="background:#1e293b; padding:12px; border-radius:8px; font-size:0.8rem; color:#cbd5e1; line-height:1.4;">
        ✔ 28 States & 8 Union Territories<br>
        ✔ 780+ Verified Districts & Guides<br>
        ✔ 24x7 Government Helpline: 1363
      </div>
    `
  };

  // Google Translate
  function loadTranslator() {
    if (!document.getElementById('gt-script')) {
      const s = document.createElement('script');
      s.id = 'gt-script';
      s.src = '//translate.google.com/translate_a/element.js?cb=gTranslateInit';
      document.head.appendChild(s);
    }
  }

  window.gTranslateInit = function () {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,hi,bn,te,ta,mr,gu,fr,es,de',
      autoDisplay: false
    }, 'google_translate_element');
  };

  function init() {
    if (!document.getElementById('unifiedDrawer')) {
      document.body.insertAdjacentHTML('beforeend', drawerHTML);
      loadTranslator();
    }

    const drawer = document.getElementById('unifiedDrawer');
    const overlay = document.getElementById('unifiedDrawerOverlay');
    const closeBtn = document.getElementById('closeDrawerBtn');
    const slider = document.getElementById('drawerSlider');
    const subContent = document.getElementById('drawerSubContent');
    const backBtn = document.getElementById('drawerBackBtn');

    function openDrawer() {
      drawer.style.left = '0px';
      overlay.style.display = 'block';
      slider.style.transform = 'translateX(0px)'; // reset to main view
    }

    function closeDrawer() {
      drawer.style.left = '-330px';
      overlay.style.display = 'none';
      setTimeout(() => { slider.style.transform = 'translateX(0px)'; }, 280);
    }

    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Open Drawer on 3-dot trigger
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('button, div, a');
      if (btn && (btn.id === 'unified3DotBtn' || btn.textContent.includes('⋮') || btn.getAttribute('aria-label')?.includes('Menu'))) {
        e.preventDefault();
        openDrawer();
      }
    });

    // In-Drawer Sub-menu Drill Navigation (No External Page!)
    document.querySelectorAll('.drawer-drill-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const target = this.getAttribute('data-target');
        if (viewContents[target]) {
          subContent.innerHTML = viewContents[target];
          slider.style.transform = 'translateX(-310px)'; // Slide to sub-detail view inside drawer
        }
      });
    });

    // Back button inside drawer
    backBtn.addEventListener('click', function () {
      slider.style.transform = 'translateX(0px)'; // Slide back to main menu
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

  // Cost calculator helper
  window.calcSubEstimate = function () {
    const days = parseInt(document.getElementById('subDaysInput').value);
    const pax = parseInt(document.getElementById('subPaxInput').value);
    const tier = parseInt(document.getElementById('subTierInput').value);

    document.getElementById('subEstDays').innerText = days;
    document.getElementById('subEstPax').innerText = pax;
    document.getElementById('subEstDisplay').innerText = `₹${(days * pax * tier).toLocaleString('en-IN')}`;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
