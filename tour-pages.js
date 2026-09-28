// =========================================================================
// INCREDIBLE INDIA - DEDICATED FULL-SCREEN PAGES (FIXED INPUT FIELDS)
// =========================================================================

(function () {
  let appBox = document.getElementById('dedicatedAppContainer');
  if (!appBox) {
    appBox = document.createElement('div');
    appBox.id = 'dedicatedAppContainer';
    appBox.style.cssText = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #080f1e;
      color: #f8fafc;
      z-index: 2147483648;
      overflow-y: auto;
      padding: 20px 16px 60px 16px;
      box-sizing: border-box;
    `;
    document.body.appendChild(appBox);
  }

  window.closeAppPage = function () {
    appBox.style.display = 'none';
    appBox.innerHTML = '';
    document.body.style.overflow = 'auto';
  };

  // Switcher function for opening dedicated pages
  window.openAppPage = function (pageType) {
    document.body.style.overflow = 'hidden';
    appBox.style.display = 'block';

    const header = `
      <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.08); margin-bottom:20px;">
        <button onclick="closeAppPage()" style="background:#1e293b; border:1px solid rgba(255,255,255,0.1); color:#fff; padding:8px 16px; border-radius:8px; font-weight:600; cursor:pointer; font-size:0.85rem;">
          ← Back
        </button>
        <span style="font-weight:700; color:#FF5412; font-size:0.9rem;">Incredible India</span>
      </div>
    `;

    let body = '';

    // ================= 1. ALL INDIAN LANGUAGES PAGE =================
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
        <h2 style="margin:0 0 6px 0; font-size:1.35rem;">Select Your Language / भाषा चुनें</h2>
        <p style="color:#94a3b8; font-size:0.85rem; margin-bottom:18px;">Choose any Indian language to translate the entire portal instantly.</p>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          ${languages.map(l => `
            <button onclick="applyLanguage('${l.code}')" style="background:#0f172a; border:1px solid rgba(255,255,255,0.08); padding:14px; border-radius:10px; color:#fff; cursor:pointer; text-align:left; display:flex; flex-direction:column;">
              <b style="font-size:0.95rem; color:#FF5412;">${l.native}</b>
              <span style="font-size:0.75rem; color:#94a3b8; margin-top:2px;">${l.name}</span>
            </button>
          `).join('')}
        </div>
      `;
    }

    // ================= 2. USER LOGIN & SIGNUP PAGE (FIXED FORMS) =================
    else if (pageType === 'login') {
      const currentUser = JSON.parse(localStorage.getItem('incredible_user') || 'null');

      if (currentUser) {
        body = `
          <div style="max-width:380px; margin:20px auto; background:#0f172a; padding:24px 20px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); text-align:center;">
            <div style="width:60px; height:60px; border-radius:50%; background:#FF5412; display:flex; align-items:center; justify-content:center; margin:0 auto 12px auto; font-size:1.5rem; font-weight:bold;">
              ${currentUser.name.charAt(0).toUpperCase()}
            </div>
            <h3 style="margin:0;">${currentUser.name}</h3>
            <p style="color:#94a3b8; font-size:0.85rem; margin-top:4px;">${currentUser.email}</p>
            <p style="color:#4ade80; font-size:0.8rem; background:rgba(74,222,128,0.1); padding:6px; border-radius:6px; margin:16px 0;">✔ Logged In (Saved Locally)</p>
            <button onclick="logoutUser()" style="width:100%; padding:12px; background:#ef4444; border:none; border-radius:8px; color:#fff; font-weight:700; cursor:pointer;">Logout Account</button>
          </div>
        `;
      } else {
        body = `
          <div style="max-width:380px; margin:10px auto; background:#0f172a; padding:24px 20px; border-radius:14px; border:1px solid rgba(255,255,255,0.08);">
            
            <div style="display:flex; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:18px;">
              <button id="authTabLogin" onclick="switchAuthTab('login')" style="flex:1; padding:10px; background:transparent; border:none; border-bottom:2px solid #FF5412; color:#fff; font-weight:700; cursor:pointer;">Login</button>
              <button id="authTabSignup" onclick="switchAuthTab('signup')" style="flex:1; padding:10px; background:transparent; border:none; color:#94a3b8; font-weight:600; cursor:pointer;">Sign Up</button>
            </div>

            <!-- Login Box -->
            <div id="loginFormBox" style="display:block;">
              <form onsubmit="handleLoginSubmit(event)" style="display:flex; flex-direction:column; gap:12px;">
                <div>
                  <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:4px;">Email Address</label>
                  <input type="email" id="loginEmail" placeholder="name@example.com" required style="width:100%; padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; box-sizing:border-box; font-size:0.9rem;">
                </div>
                <div>
                  <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:4px;">Password</label>
                  <input type="password" id="loginPassword" placeholder="••••••••" required style="width:100%; padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; box-sizing:border-box; font-size:0.9rem;">
                </div>
                <button type="submit" style="padding:12px; background:#FF5412; border:none; border-radius:8px; color:#fff; font-weight:700; cursor:pointer; margin-top:6px; font-size:0.95rem;">Sign In</button>
              </form>
            </div>

            <!-- Signup Box -->
            <div id="signupFormBox" style="display:none;">
              <form onsubmit="handleSignupSubmit(event)" style="display:flex; flex-direction:column; gap:12px;">
                <div>
                  <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:4px;">Full Name</label>
                  <input type="text" id="regName" placeholder="Enter your full name" required style="width:100%; padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; box-sizing:border-box; font-size:0.9rem;">
                </div>
                <div>
                  <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:4px;">Email Address</label>
                  <input type="email" id="regEmail" placeholder="name@example.com" required style="width:100%; padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; box-sizing:border-box; font-size:0.9rem;">
                </div>
                <div>
                  <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:4px;">Create Password</label>
                  <input type="password" id="regPassword" placeholder="Minimum 6 characters" required style="width:100%; padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; box-sizing:border-box; font-size:0.9rem;">
                </div>
                <button type="submit" style="padding:12px; background:#FF5412; border:none; border-radius:8px; color:#fff; font-weight:700; cursor:pointer; margin-top:6px; font-size:0.95rem;">Create Account</button>
              </form>
            </div>

          </div>
        `;
      }
    }

    // ================= 3. PLAN TRIP / GET FREE QUOTE (FIXED INPUT FIELDS) =================
    else if (pageType === 'quote') {
      const u = JSON.parse(localStorage.getItem('incredible_user') || '{}');
      body = `
        <h2 style="font-size:1.35rem; margin-top:0;">📝 Plan Trip / Get Free Quote</h2>
        <p style="color:#94a3b8; font-size:0.85rem;">Submit your travel details and connect directly with tour operators.</p>

        <div style="background:#0f172a; padding:20px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); margin-top:16px; max-width:480px;">
          <form onsubmit="handleInquirySubmit(event)" style="display:flex; flex-direction:column; gap:12px;">
            <div>
              <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:4px;">Full Name</label>
              <input type="text" id="quoteName" placeholder="Your Name" value="${u.name || ''}" required style="width:100%; padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; box-sizing:border-box; font-size:0.9rem;">
            </div>
            <div>
              <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:4px;">WhatsApp / Mobile Number</label>
              <input type="tel" id="quotePhone" placeholder="+91 9876543210" required style="width:100%; padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; box-sizing:border-box; font-size:0.9rem;">
            </div>
            <div>
              <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:4px;">Preferred State or City</label>
              <input type="text" id="quoteDest" placeholder="e.g. Kashmir, Rajasthan, Goa" required style="width:100%; padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; box-sizing:border-box; font-size:0.9rem;">
            </div>
            <div>
              <label style="font-size:0.75rem; color:#94a3b8; display:block; margin-bottom:4px;">Notes & Preferences</label>
              <textarea id="quoteNotes" rows="3" placeholder="Tell us about dates, family size, or special requirements..." style="width:100%; padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; box-sizing:border-box; font-size:0.9rem; font-family:inherit;"></textarea>
            </div>
            <button type="submit" style="padding:14px; background:#FF5412; border:none; border-radius:8px; color:#fff; font-weight:700; cursor:pointer; font-size:0.95rem; margin-top:4px;">
              Send Inquiry Via WhatsApp
            </button>
          </form>
        </div>
      `;
    }

    // ================= 4. TOUR COST ESTIMATOR =================
    else if (pageType === 'estimator') {
      body = `
        <h2 style="font-size:1.35rem; margin-top:0;">🧮 Interactive Tour Cost Estimator</h2>
        <p style="color:#94a3b8; font-size:0.85rem;">Estimate your trip budget across 28 States & 8 UTs instantly.</p>
        
        <div style="background:#0f172a; padding:18px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); display:flex; flex-direction:column; gap:14px; margin-top:16px; max-width:480px;">
          <div>
            <label style="font-size:0.85rem; color:#94a3b8;">Trip Duration: <b id="estDaysLabel" style="color:#FF5412;">5 Days</b></label>
            <input type="range" id="estDays" min="1" max="25" value="5" style="width:100%; margin-top:6px;" oninput="updateTourEstimate()">
          </div>

          <div>
            <label style="font-size:0.85rem; color:#94a3b8;">Travelers: <b id="estPaxLabel" style="color:#FF5412;">2 Persons</b></label>
            <input type="range" id="estPax" min="1" max="10" value="2" style="width:100%; margin-top:6px;" oninput="updateTourEstimate()">
          </div>

          <div>
            <label style="font-size:0.85rem; color:#94a3b8;">Stay Quality:</label>
            <select id="estTier" style="width:100%; padding:10px; background:#1e293b; color:#fff; border:1px solid rgba(255,255,255,0.1); border-radius:8px; margin-top:6px;" onchange="updateTourEstimate()">
              <option value="1800">Budget Homestay (₹1,800/day)</option>
              <option value="3600" selected>Comfort Hotel (₹3,600/day)</option>
              <option value="7500">Luxury 5-Star Resort (₹7,500/day)</option>
            </select>
          </div>

          <div style="background:#1e293b; padding:16px; border-radius:10px; text-align:center; margin-top:10px;">
            <span style="font-size:0.85rem; color:#94a3b8;">Estimated Total Tour Budget:</span>
            <div id="estTotalDisplay" style="font-size:1.8rem; font-weight:800; color:#4ade80; margin-top:6px;">₹36,000</div>
          </div>
        </div>
      `;
    }

    // ================= 5. CIRCUITS & REGISTRY =================
    else if (pageType === 'circuits') {
      body = `
        <h2 style="font-size:1.35rem; margin-top:0;">🏛️ Curated Tour Circuits</h2>
        <p style="color:#94a3b8; font-size:0.85rem;">Popular pre-planned tour circuits with day-by-day itineraries.</p>
        <div style="display:flex; flex-direction:column; gap:12px; margin-top:14px; max-width:480px;">
          <div style="background:#0f172a; padding:14px; border-radius:10px; border-left:4px solid #FF5412;">
            <b style="color:#FF5412;">Golden Triangle (6D / 5N)</b>
            <p style="color:#cbd5e1; font-size:0.85rem; margin:4px 0 0 0;">Delhi ➔ Agra (Taj Mahal) ➔ Jaipur (Hawa Mahal).</p>
          </div>
          <div style="background:#0f172a; padding:14px; border-radius:10px; border-left:4px solid #FF5412;">
            <b style="color:#FF5412;">Kerala Backwaters (7D / 6N)</b>
            <p style="color:#cbd5e1; font-size:0.85rem; margin:4px 0 0 0;">Kochi ➔ Tea gardens of Munnar ➔ Houseboats of Alleppey.</p>
          </div>
          <div style="background:#0f172a; padding:14px; border-radius:10px; border-left:4px solid #FF5412;">
            <b style="color:#FF5412;">Devbhoomi & Char Dham Gateway (8D / 7N)</b>
            <p style="color:#cbd5e1; font-size:0.85rem; margin:4px 0 0 0;">Haridwar ➔ Rishikesh ➔ Kedarnath & Badrinath.</p>
          </div>
        </div>
      `;
    } else {
      body = `
        <h2 style="font-size:1.35rem; margin-top:0;">🛡️ Official State & UT Registry</h2>
        <p style="color:#94a3b8; font-size:0.85rem;">Authorized government directory records for all regions.</p>
        <div style="background:#0f172a; padding:16px; border-radius:12px; margin-top:14px; line-height:1.6; font-size:0.9rem;">
          ✔ 28 States & 8 Union Territories registered.<br>
          ✔ 780+ Districts data synchronized.<br>
          ✔ 24×7 National Tourism Helpline: <b>1363</b>
        </div>
      `;
    }

    appBox.innerHTML = header + body;
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

  // Auth Switch tabs
  window.switchAuthTab = function (tab) {
    const lBox = document.getElementById('loginFormBox');
    const sBox = document.getElementById('signupFormBox');
    const lTab = document.getElementById('authTabLogin');
    const sTab = document.getElementById('authTabSignup');

    if (tab === 'signup') {
      lBox.style.display = 'none';
      sBox.style.display = 'block';
      sTab.style.borderBottom = '2px solid #FF5412';
      sTab.style.color = '#fff';
      lTab.style.borderBottom = 'none';
      lTab.style.color = '#94a3b8';
    } else {
      sBox.style.display = 'none';
      lBox.style.display = 'block';
      lTab.style.borderBottom = '2px solid #FF5412';
      lTab.style.color = '#fff';
      sTab.style.borderBottom = 'none';
      sTab.style.color = '#94a3b8';
    }
  };

  // Handle Signup
  window.handleSignupSubmit = function (e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim().toLowerCase();
    const password = document.getElementById('regPassword').value;

    const users = JSON.parse(localStorage.getItem('incredible_all_users') || '{}');
    if (users[email]) {
      alert('An account already exists with this email. Please login!');
      return;
    }

    users[email] = { name, email, password };
    localStorage.setItem('incredible_all_users', JSON.stringify(users));

    // Save active user cache
    localStorage.setItem('incredible_user', JSON.stringify({ name, email }));
    alert('Welcome ' + name + '! Your account has been registered and logged in.');
    location.reload();
  };

  // Handle Login
  window.handleLoginSubmit = function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('incredible_all_users') || '{}');
    const user = users[email];

    if (!user || user.password !== password) {
      alert('Invalid email or password! Please check or switch to Sign Up.');
      return;
    }

    localStorage.setItem('incredible_user', JSON.stringify({ name: user.name, email: user.email }));
    alert('Logged in successfully! Welcome back, ' + user.name + '.');
    location.reload();
  };

  // Logout
  window.logoutUser = function () {
    localStorage.removeItem('incredible_user');
    alert('You have been logged out.');
    location.reload();
  };

  // WhatsApp Inquiry Handler
  window.handleInquirySubmit = function (e) {
    e.preventDefault();
    const name = document.getElementById('quoteName').value.trim();
    const phone = document.getElementById('quotePhone').value.trim();
    const dest = document.getElementById('quoteDest').value.trim();
    const notes = document.getElementById('quoteNotes').value.trim();

    const msg = `*New Travel Inquiry - Incredible India Portal*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Destination:* ${encodeURIComponent(dest)}%0A*Details:* ${encodeURIComponent(notes || 'None')}`;
    
    // Redirects to official tourism desk / WhatsApp dispatch
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  // Estimator calculation
  window.updateTourEstimate = function () {
    const days = parseInt(document.getElementById('estDays').value);
    const pax = parseInt(document.getElementById('estPax').value);
    const tier = parseInt(document.getElementById('estTier').value);

    document.getElementById('estDaysLabel').innerText = `${days} Days`;
    document.getElementById('estPaxLabel').innerText = `${pax} Persons`;
    document.getElementById('estTotalDisplay').innerText = `₹${(days * pax * tier).toLocaleString('en-IN')}`;
  };
})();
