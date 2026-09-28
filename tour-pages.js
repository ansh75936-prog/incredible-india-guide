// =========================================================================
// INCREDIBLE INDIA - BULLETPROOF DEDICATED PAGES (INLINE FORCED VISIBILITY)
// =========================================================================

(function () {
  let appBox = document.getElementById('dedicatedAppContainer');
  if (!appBox) {
    appBox = document.createElement('div');
    appBox.id = 'dedicatedAppContainer';
    document.body.appendChild(appBox);
  }

  // Force styling directly so no cleaner can hide it
  appBox.style.cssText = `
    display: none !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    background: #080f1e !important;
    color: #f8fafc !important;
    z-index: 2147483647 !important;
    overflow-y: auto !important;
    padding: 20px 16px 80px 16px !important;
    box-sizing: border-box !important;
  `;

  window.closeAppPage = function () {
    appBox.style.setProperty('display', 'none', 'important');
    appBox.innerHTML = '';
    document.body.style.overflow = 'auto';
  };

  window.openAppPage = function (pageType) {
    document.body.style.overflow = 'hidden';
    appBox.style.setProperty('display', 'block', 'important');

    const header = `
      <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:20px;">
        <button onclick="closeAppPage()" style="background:#1e293b; border:1px solid rgba(255,255,255,0.15); color:#fff; padding:8px 18px; border-radius:8px; font-weight:700; cursor:pointer; font-size:0.9rem;">
          ← Back
        </button>
        <span style="font-weight:800; color:#FF5412; font-size:0.95rem;">Incredible India</span>
      </div>
    `;

    let body = '';

    // ================= 1. LANGUAGES =================
    if (pageType === 'language') {
      const languages = [
        { code: 'en', name: 'English', native: 'English' },
        { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
        { code: 'bn', name: 'Bengali', native: 'বাংলা' },
        { code: 'te', name: 'Telugu', native: 'తెలుగు' },
        { code: 'mr', name: 'Marathi', native: 'मराठी' },
        { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
        { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
        { code: 'ur', name: 'Urdu', native: 'اردو' },
        { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
        { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' },
        { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
        { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
        { code: 'as', name: 'Assamese', native: 'অসমীয়া' }
      ];

      body = `
        <h2 style="margin:0 0 6px 0; font-size:1.35rem; color:#fff;">Select Language / भाषा चुनें</h2>
        <p style="color:#94a3b8; font-size:0.85rem; margin-bottom:18px;">Tap any language to instantly translate the site.</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          ${languages.map(l => `
            <button onclick="applyLanguage('${l.code}')" style="background:#0f172a; border:1px solid rgba(255,255,255,0.1); padding:14px; border-radius:10px; color:#fff; cursor:pointer; text-align:left;">
              <b style="font-size:1rem; color:#FF5412; display:block;">${l.native}</b>
              <span style="font-size:0.75rem; color:#94a3b8;">${l.name}</span>
            </button>
          `).join('')}
        </div>
      `;
    }

    // ================= 2. LOGIN / SIGNUP =================
    else if (pageType === 'login') {
      const currentUser = JSON.parse(localStorage.getItem('incredible_user') || 'null');

      if (currentUser) {
        body = `
          <div style="max-width:380px; margin:20px auto; background:#0f172a; padding:24px 20px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); text-align:center;">
            <div style="width:64px; height:64px; border-radius:50%; background:#FF5412; display:flex; align-items:center; justify-content:center; margin:0 auto 12px auto; font-size:1.6rem; font-weight:bold; color:#fff;">
              ${currentUser.name.charAt(0).toUpperCase()}
            </div>
            <h3 style="margin:0; color:#fff;">${currentUser.name}</h3>
            <p style="color:#94a3b8; font-size:0.85rem; margin-top:4px;">${currentUser.email}</p>
            <div style="color:#4ade80; font-size:0.85rem; background:rgba(74,222,128,0.12); padding:8px; border-radius:6px; margin:18px 0; border:1px solid rgba(74,222,128,0.2);">
              ✔ Account Active (Cached Locally)
            </div>
            <button onclick="logoutUser()" style="width:100%; padding:12px; background:#ef4444; border:none; border-radius:8px; color:#fff; font-weight:700; cursor:pointer; font-size:0.95rem;">
              Logout
            </button>
          </div>
        `;
      } else {
        body = `
          <div style="max-width:400px; margin:10px auto; background:#0f172a; padding:24px 20px; border-radius:14px; border:1px solid rgba(255,255,255,0.12);">
            
            <div style="display:flex; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:20px;">
              <button id="tabBtnLogin" onclick="showAuthView('login')" style="flex:1; padding:10px; background:transparent; border:none; border-bottom:2px solid #FF5412; color:#fff; font-weight:700; cursor:pointer; font-size:1rem;">Login</button>
              <button id="tabBtnSignup" onclick="showAuthView('signup')" style="flex:1; padding:10px; background:transparent; border:none; color:#94a3b8; font-weight:600; cursor:pointer; font-size:1rem;">Sign Up</button>
            </div>

            <!-- LOGIN VIEW -->
            <div id="authViewLogin" style="display:block;">
              <div style="margin-bottom:14px;">
                <label style="display:block; font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">Email Address</label>
                <input type="text" id="inEmail" placeholder="Enter your email" style="display:block !important; width:100% !important; padding:12px !important; background:#1e293b !important; color:#fff !important; border:1px solid #334155 !important; border-radius:8px !important; font-size:0.95rem !important; box-sizing:border-box !important;">
              </div>
              <div style="margin-bottom:18px;">
                <label style="display:block; font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">Password</label>
                <input type="password" id="inPass" placeholder="••••••••" style="display:block !important; width:100% !important; padding:12px !important; background:#1e293b !important; color:#fff !important; border:1px solid #334155 !important; border-radius:8px !important; font-size:0.95rem !important; box-sizing:border-box !important;">
              </div>
              <button onclick="doLogin()" style="width:100%; padding:13px; background:#FF5412; border:none; border-radius:8px; color:#fff; font-weight:700; font-size:1rem; cursor:pointer;">
                Sign In
              </button>
            </div>

            <!-- SIGNUP VIEW -->
            <div id="authViewSignup" style="display:none;">
              <div style="margin-bottom:14px;">
                <label style="display:block; font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">Full Name</label>
                <input type="text" id="upName" placeholder="Your Name" style="display:block !important; width:100% !important; padding:12px !important; background:#1e293b !important; color:#fff !important; border:1px solid #334155 !important; border-radius:8px !important; font-size:0.95rem !important; box-sizing:border-box !important;">
              </div>
              <div style="margin-bottom:14px;">
                <label style="display:block; font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">Email Address</label>
                <input type="text" id="upEmail" placeholder="Your Email" style="display:block !important; width:100% !important; padding:12px !important; background:#1e293b !important; color:#fff !important; border:1px solid #334155 !important; border-radius:8px !important; font-size:0.95rem !important; box-sizing:border-box !important;">
              </div>
              <div style="margin-bottom:18px;">
                <label style="display:block; font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">Create Password</label>
                <input type="password" id="upPass" placeholder="Create password" style="display:block !important; width:100% !important; padding:12px !important; background:#1e293b !important; color:#fff !important; border:1px solid #334155 !important; border-radius:8px !important; font-size:0.95rem !important; box-sizing:border-box !important;">
              </div>
              <button onclick="doSignup()" style="width:100%; padding:13px; background:#FF5412; border:none; border-radius:8px; color:#fff; font-weight:700; font-size:1rem; cursor:pointer;">
                Create Account
              </button>
            </div>

          </div>
        `;
      }
    }

    // ================= 3. PLAN TRIP =================
    else if (pageType === 'quote') {
      const u = JSON.parse(localStorage.getItem('incredible_user') || '{}');
      body = `
        <h2 style="font-size:1.35rem; margin-top:0; color:#fff;">📝 Plan Trip / Get Free Quote</h2>
        <p style="color:#94a3b8; font-size:0.85rem; margin-bottom:16px;">Fill details to connect with travel coordinator on WhatsApp.</p>

        <div style="max-width:440px; background:#0f172a; padding:20px; border-radius:12px; border:1px solid rgba(255,255,255,0.12);">
          
          <div style="margin-bottom:14px;">
            <label style="display:block; font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">Your Name</label>
            <input type="text" id="tripName" value="${u.name || ''}" placeholder="Full Name" style="display:block !important; width:100% !important; padding:12px !important; background:#1e293b !important; color:#fff !important; border:1px solid #334155 !important; border-radius:8px !important; font-size:0.95rem !important; box-sizing:border-box !important;">
          </div>

          <div style="margin-bottom:14px;">
            <label style="display:block; font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">WhatsApp Phone Number</label>
            <input type="tel" id="tripPhone" placeholder="+91 9876543210" style="display:block !important; width:100% !important; padding:12px !important; background:#1e293b !important; color:#fff !important; border:1px solid #334155 !important; border-radius:8px !important; font-size:0.95rem !important; box-sizing:border-box !important;">
          </div>

          <div style="margin-bottom:14px;">
            <label style="display:block; font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">Destination / State</label>
            <input type="text" id="tripDest" placeholder="e.g. Kashmir, Rajasthan, Goa" style="display:block !important; width:100% !important; padding:12px !important; background:#1e293b !important; color:#fff !important; border:1px solid #334155 !important; border-radius:8px !important; font-size:0.95rem !important; box-sizing:border-box !important;">
          </div>

          <div style="margin-bottom:18px;">
            <label style="display:block; font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">Notes / Group Size</label>
            <textarea id="tripNotes" rows="3" placeholder="Tell us dates, number of people..." style="display:block !important; width:100% !important; padding:12px !important; background:#1e293b !important; color:#fff !important; border:1px solid #334155 !important; border-radius:8px !important; font-size:0.95rem !important; box-sizing:border-box !important; font-family:inherit;"></textarea>
          </div>

          <button onclick="sendTripInquiry()" style="width:100%; padding:14px; background:#FF5412; border:none; border-radius:8px; color:#fff; font-weight:700; font-size:1rem; cursor:pointer;">
            Send Inquiry Via WhatsApp
          </button>
        </div>
      `;
    }

    // ================= 4. ESTIMATOR =================
    else if (pageType === 'estimator') {
      body = `
        <h2 style="font-size:1.35rem; margin-top:0; color:#fff;">🧮 Interactive Tour Cost Estimator</h2>
        <p style="color:#94a3b8; font-size:0.85rem;">Estimate your trip budget across 28 States & 8 UTs instantly.</p>
        
        <div style="background:#0f172a; padding:18px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); max-width:440px; margin-top:16px;">
          <div style="margin-bottom:14px;">
            <label style="font-size:0.85rem; color:#94a3b8;">Trip Duration: <b id="estDaysLabel" style="color:#FF5412;">5 Days</b></label>
            <input type="range" id="estDays" min="1" max="25" value="5" style="width:100%; margin-top:6px;" oninput="updateTourEstimate()">
          </div>

          <div style="margin-bottom:14px;">
            <label style="font-size:0.85rem; color:#94a3b8;">Travelers: <b id="estPaxLabel" style="color:#FF5412;">2 Persons</b></label>
            <input type="range" id="estPax" min="1" max="10" value="2" style="width:100%; margin-top:6px;" oninput="updateTourEstimate()">
          </div>

          <div style="margin-bottom:18px;">
            <label style="font-size:0.85rem; color:#94a3b8; display:block; margin-bottom:4px;">Stay Quality:</label>
            <select id="estTier" style="width:100%; padding:10px; background:#1e293b; color:#fff; border:1px solid rgba(255,255,255,0.1); border-radius:8px;" onchange="updateTourEstimate()">
              <option value="1800">Budget Homestay (₹1,800/day)</option>
              <option value="3600" selected>Comfort Hotel (₹3,600/day)</option>
              <option value="7500">Luxury 5-Star Resort (₹7,500/day)</option>
            </select>
          </div>

          <div style="background:#1e293b; padding:16px; border-radius:10px; text-align:center;">
            <span style="font-size:0.85rem; color:#94a3b8;">Estimated Total Tour Budget:</span>
            <div id="estTotalDisplay" style="font-size:1.8rem; font-weight:800; color:#4ade80; margin-top:6px;">₹36,000</div>
          </div>
        </div>
      `;
    }

    // ================= 5. CIRCUITS & REGISTRY =================
    else if (pageType === 'circuits') {
      body = `
        <h2 style="font-size:1.35rem; margin-top:0; color:#fff;">🏛️ Curated Tour Circuits</h2>
        <div style="display:flex; flex-direction:column; gap:12px; margin-top:14px; max-width:440px;">
          <div style="background:#0f172a; padding:14px; border-radius:10px; border-left:4px solid #FF5412;">
            <b style="color:#FF5412;">Golden Triangle (6D / 5N)</b>
            <p style="color:#cbd5e1; font-size:0.85rem; margin:4px 0 0 0;">Delhi ➔ Agra (Taj Mahal) ➔ Jaipur (Hawa Mahal).</p>
          </div>
          <div style="background:#0f172a; padding:14px; border-radius:10px; border-left:4px solid #FF5412;">
            <b style="color:#FF5412;">Kerala Backwaters (7D / 6N)</b>
            <p style="color:#cbd5e1; font-size:0.85rem; margin:4px 0 0 0;">Kochi ➔ Munnar Hills ➔ Alleppey Houseboats.</p>
          </div>
        </div>
      `;
    } else {
      body = `
        <h2 style="font-size:1.35rem; margin-top:0; color:#fff;">🛡️ Official State & UT Registry</h2>
        <div style="background:#0f172a; padding:16px; border-radius:12px; margin-top:14px; line-height:1.6; font-size:0.9rem; max-width:440px;">
          ✔ 28 States & 8 Union Territories registered.<br>
          ✔ 780+ Districts data synchronized.<br>
          ✔ 24×7 Helpline: <b>1363</b>
        </div>
      `;
    }

    appBox.innerHTML = header + body;
  };

  // Auth Switch tabs
  window.showAuthView = function (v) {
    const lV = document.getElementById('authViewLogin');
    const sV = document.getElementById('authViewSignup');
    const tL = document.getElementById('tabBtnLogin');
    const tS = document.getElementById('tabBtnSignup');

    if (v === 'signup') {
      lV.style.display = 'none';
      sV.style.display = 'block';
      tS.style.borderBottom = '2px solid #FF5412';
      tS.style.color = '#fff';
      tL.style.borderBottom = 'none';
      tL.style.color = '#94a3b8';
    } else {
      sV.style.display = 'none';
      lV.style.display = 'block';
      tL.style.borderBottom = '2px solid #FF5412';
      tL.style.color = '#fff';
      tS.style.borderBottom = 'none';
      tS.style.color = '#94a3b8';
    }
  };

  // Signup Logic
  window.doSignup = function () {
    const name = document.getElementById('upName').value.trim();
    const email = document.getElementById('upEmail').value.trim().toLowerCase();
    const pass = document.getElementById('upPass').value;

    if (!name || !email || !pass) {
      alert('Please fill all fields!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('incredible_all_users') || '{}');
    if (users[email]) {
      alert('Account already exists! Please Login.');
      return;
    }

    users[email] = { name, email, pass };
    localStorage.setItem('incredible_all_users', JSON.stringify(users));
    localStorage.setItem('incredible_user', JSON.stringify({ name, email }));

    alert('Account created successfully! Welcome ' + name);
    location.reload();
  };

  // Login Logic
  window.doLogin = function () {
    const email = document.getElementById('inEmail').value.trim().toLowerCase();
    const pass = document.getElementById('inPass').value;

    if (!email || !pass) {
      alert('Please enter email and password!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('incredible_all_users') || '{}');
    const u = users[email];

    if (!u || u.pass !== pass) {
      alert('Invalid Email or Password! If you are new, tap Sign Up.');
      return;
    }

    localStorage.setItem('incredible_user', JSON.stringify({ name: u.name, email: u.email }));
    alert('Logged in successfully!');
    location.reload();
  };

  // Logout Logic
  window.logoutUser = function () {
    localStorage.removeItem('incredible_user');
    alert('Logged out.');
    location.reload();
  };

  // WhatsApp Inquiry Logic
  window.sendTripInquiry = function () {
    const name = document.getElementById('tripName').value.trim();
    const phone = document.getElementById('tripPhone').value.trim();
    const dest = document.getElementById('tripDest').value.trim();
    const notes = document.getElementById('tripNotes').value.trim();

    if (!name || !phone || !dest) {
      alert('Please fill Name, WhatsApp Phone, and Destination!');
      return;
    }

    const msg = `*New Travel Inquiry - Incredible India*%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Destination:* ${encodeURIComponent(dest)}%0A*Notes:* ${encodeURIComponent(notes || 'None')}`;
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  // Language Apply Engine
  window.applyLanguage = function (langCode) {
    const gtCombo = document.querySelector('.goog-te-combo');
    if (gtCombo) {
      gtCombo.value = langCode;
      gtCombo.dispatchEvent(new Event('change'));
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      location.reload();
    }
    window.closeAppPage();
  };

  // Estimator Logic
  window.updateTourEstimate = function () {
    const days = parseInt(document.getElementById('estDays').value);
    const pax = parseInt(document.getElementById('estPax').value);
    const tier = parseInt(document.getElementById('estTier').value);

    document.getElementById('estDaysLabel').innerText = `${days} Days`;
    document.getElementById('estPaxLabel').innerText = `${pax} Persons`;
    document.getElementById('estTotalDisplay').innerText = `₹${(days * pax * tier).toLocaleString('en-IN')}`;
  };
})();
