// =========================================================================
// DEDICATED FULL-SCREEN PAGES (LOGIN, PLAN TRIP, ESTIMATOR, MAP)
// =========================================================================

(function () {
  const container = document.createElement('div');
  container.id = 'dedicatedPagesContainer';
  container.style.cssText = `
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #080f1e;
    color: #f8fafc;
    z-index: 100000;
    overflow-y: auto;
    padding: 20px 16px 60px 16px;
    box-sizing: border-box;
  `;
  document.body.appendChild(container);

  window.closeDedicatedPage = function () {
    container.style.display = 'none';
    container.innerHTML = '';
    document.body.style.overflow = 'auto';
  };

  window.openDedicatedPage = function (pageType) {
    document.body.style.overflow = 'hidden';
    container.style.display = 'block';

    const header = `
      <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.08); margin-bottom:20px;">
        <button onclick="closeDedicatedPage()" style="background:#1e293b; border:1px solid rgba(255,255,255,0.1); color:#fff; padding:8px 16px; border-radius:8px; font-weight:600; cursor:pointer;">
          ← Back to Home
        </button>
        <span style="font-weight:700; color:#FF5412; font-size:0.9rem;">Incredible India Portal</span>
      </div>
    `;

    let content = '';

    // 1. DEDICATED LOGIN / SIGN UP PAGE
    if (pageType === 'login') {
      content = `
        <div style="max-width:380px; margin:20px auto 0 auto; background:#0f172a; padding:24px 20px; border-radius:14px; border:1px solid rgba(255,255,255,0.08); text-align:center;">
          <h2 style="margin:0 0 6px 0; font-size:1.4rem;">Welcome Back</h2>
          <p style="color:#94a3b8; font-size:0.85rem; margin-bottom:20px;">Log in to access saved trips, bookings, and custom itineraries.</p>

          <form onsubmit="event.preventDefault(); alert('Authentication system initialized.');" style="display:flex; flex-direction:column; gap:14px;">
            <input type="email" placeholder="Email address" required style="padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:#fff; font-size:0.9rem;">
            <input type="password" placeholder="Password" required style="padding:12px; background:#1e293b; border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:#fff; font-size:0.9rem;">
            
            <button type="submit" style="padding:12px; background:#FF5412; border:none; border-radius:8px; color:#fff; font-weight:700; font-size:0.95rem; cursor:pointer; margin-top:4px;">
              Sign In
            </button>
          </form>

          <div style="margin:18px 0; font-size:0.8rem; color:#64748b;">OR</div>

          <button onclick="alert('Google Sign-in initialized.')" style="width:100%; padding:10px; background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:8px; color:#cbd5e1; font-weight:600; font-size:0.85rem; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px;">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" height="18" alt="Google"> Continue with Google
          </button>

          <p style="color:#94a3b8; font-size:0.8rem; margin-top:18px;">
            Don't have an account? <a href="#" style="color:#FF5412; text-decoration:none; font-weight:600;">Create one</a>
          </p>
        </div>
      `;
    }

    // 2. PLAN TRIP / GET FREE QUOTE PAGE
    else if (pageType === 'quote') {
      content = `
        <h2 style="font-size:1.4rem; margin-top:0;">📝 Plan Trip / Get Free Quote</h2>
        <p style="color:#94a3b8; font-size:0.85rem;">Tell us about your upcoming travel plans and our travel desk will assist you.</p>

        <form action="https://formspree.io/f/xbjnqepq" method="POST" style="display:flex; flex-direction:column; gap:12px; margin-top:16px; max-width:480px;">
          <input type="text" name="name" placeholder="Your Full Name" required style="padding:12px; background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:#fff;">
          <input type="tel" name="phone" placeholder="WhatsApp / Phone Number" required style="padding:12px; background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:#fff;">
          <input type="text" name="destination" placeholder="Destination / Preferred State" required style="padding:12px; background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:#fff;">
          <textarea name="notes" rows="4" placeholder="Special Requests or questions..." style="padding:12px; background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:8px; color:#fff;"></textarea>
          <button type="submit" style="padding:14px; background:#FF5412; border:none; border-radius:8px; color:#fff; font-weight:700; cursor:pointer;">Submit Travel Inquiry</button>
        </form>
      `;
    }

    // 3. TOUR COST ESTIMATOR PAGE
    else if (pageType === 'estimator') {
      content = `
        <h2 style="font-size:1.4rem; margin-top:0;">🧮 Interactive Tour Cost Estimator</h2>
        <p style="color:#94a3b8; font-size:0.85rem;">Adjust parameters to calculate your estimated tour expenses.</p>
        
        <div style="background:#0f172a; padding:18px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); display:flex; flex-direction:column; gap:14px; margin-top:16px; max-width:480px;">
          <div>
            <label style="font-size:0.85rem; color:#94a3b8;">Trip Duration (Days): <b id="estDaysLabel" style="color:#FF5412;">5</b></label>
            <input type="range" id="estDays" min="1" max="25" value="5" style="width:100%; margin-top:6px;" oninput="updateEstimate()">
          </div>

          <div>
            <label style="font-size:0.85rem; color:#94a3b8;">Total Travelers: <b id="estPaxLabel" style="color:#FF5412;">2</b></label>
            <input type="range" id="estPax" min="1" max="10" value="2" style="width:100%; margin-top:6px;" oninput="updateEstimate()">
          </div>

          <div>
            <label style="font-size:0.85rem; color:#94a3b8;">Stay Quality:</label>
            <select id="estTier" style="width:100%; padding:10px; background:#1e293b; color:#fff; border:1px solid rgba(255,255,255,0.1); border-radius:8px; margin-top:6px;" onchange="updateEstimate()">
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

    // 4. TOUR CIRCUITS PAGE
    else if (pageType === 'circuits') {
      content = `
        <h2 style="font-size:1.4rem; margin-top:0;">🏛️ Curated Tour Circuits</h2>
        <p style="color:#94a3b8; font-size:0.85rem;">Hand-picked multi-day travel routes across India.</p>

        <div style="display:flex; flex-direction:column; gap:14px; margin-top:16px; max-width:480px;">
          <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.08); padding:16px; border-radius:12px;">
            <span style="color:#FF5412; font-size:0.8rem; font-weight:700;">6 Days / 5 Nights</span>
            <h3 style="margin:6px 0;">Golden Triangle Circuit</h3>
            <p style="color:#94a3b8; font-size:0.85rem;">Delhi ➔ Agra ➔ Jaipur. Experience royal architecture, the Taj Mahal, and heritage forts.</p>
          </div>
          <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.08); padding:16px; border-radius:12px;">
            <span style="color:#FF5412; font-size:0.8rem; font-weight:700;">7 Days / 6 Nights</span>
            <h3 style="margin:6px 0;">God's Own Country Circuit</h3>
            <p style="color:#94a3b8; font-size:0.85rem;">Kochi ➔ Munnar ➔ Alleppey. Lush tea gardens, misty hill stations, and private backwaters.</p>
          </div>
        </div>
      `;
    }

    // 5. LIVE MAP PAGE
    else if (pageType === 'map') {
      content = `
        <h2 style="font-size:1.4rem; margin-top:0;">🗺️ Live Interactive Map</h2>
        <p style="color:#94a3b8; font-size:0.85rem;">Interactive visual map of top Indian tourist destinations.</p>
        <div id="dedicatedMapBox" style="height:420px; width:100%; border-radius:12px; margin-top:16px; background:#1e293b;"></div>
      `;
    }

    // 6. REGISTRY PAGE
    else {
      content = `
        <h2 style="font-size:1.4rem; margin-top:0;">🛡️ Official Registry & Bookings</h2>
        <p style="color:#94a3b8; font-size:0.85rem;">Verified database of Indian States and Union Territories.</p>
        <div style="background:#0f172a; padding:18px; border-radius:12px; margin-top:16px; border:1px solid rgba(255,255,255,0.08); max-width:480px;">
          <p style="margin:0; color:#cbd5e1; font-size:0.9rem;">All active inquiries and booking confirmations are saved locally and synced to your WhatsApp desk.</p>
        </div>
      `;
    }

    container.innerHTML = header + content;

    // Initialize Map if clicked
    if (pageType === 'map' && window.L) {
      setTimeout(() => {
        const m = L.map('dedicatedMapBox').setView([20.5937, 78.9629], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m);
        L.marker([27.1751, 78.0421]).addTo(m).bindPopup('Taj Mahal, Agra');
        L.marker([25.3176, 82.9739]).addTo(m).bindPopup('Varanasi Ghats');
        L.marker([26.9124, 75.7873]).addTo(m).bindPopup('Jaipur, Rajasthan');
      }, 100);
    }
  };

  window.updateEstimate = function () {
    const days = parseInt(document.getElementById('estDays').value);
    const pax = parseInt(document.getElementById('estPax').value);
    const tier = parseInt(document.getElementById('estTier').value);

    document.getElementById('estDaysLabel').innerText = days;
    document.getElementById('estPaxLabel').innerText = pax;

    const total = days * pax * tier;
    document.getElementById('estTotalDisplay').innerText = `₹${total.toLocaleString('en-IN')}`;
  };
})();
