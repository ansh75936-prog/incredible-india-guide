// =========================================================================
// INCREDIBLE INDIA - COMPLETE TRAVEL SERVICES (SRTC BUG FIXED)
// =========================================================================

(function () {
  let travelPage = document.getElementById('travelServicesPage');
  if (!travelPage) {
    travelPage = document.createElement('div');
    travelPage.id = 'travelServicesPage';
    travelPage.style.cssText = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #060b17;
      color: #f8fafc;
      z-index: 2147483648;
      overflow-y: auto;
      padding: 18px 16px 80px 16px;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
    `;
    document.body.appendChild(travelPage);
  }

  window.closeTravelPage = function () {
    travelPage.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  window.openTravelPage = function () {
    const drawer = document.getElementById('unifiedDrawer');
    const overlay = document.getElementById('unifiedDrawerOverlay');
    if (drawer) drawer.style.left = '-330px';
    if (overlay) overlay.style.display = 'none';

    document.body.style.overflow = 'hidden';
    travelPage.style.display = 'block';
    travelPage.scrollTop = 0;

    travelPage.innerHTML = `
      <!-- Header -->
      <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:18px; max-width:520px; margin-left:auto; margin-right:auto;">
        <button onclick="closeTravelPage()" style="background:#1e293b; border:1px solid rgba(255,255,255,0.15); color:#fff; padding:8px 18px; border-radius:8px; font-weight:700; cursor:pointer; font-size:0.9rem; display:flex; align-items:center; gap:6px;">
          ← Back
        </button>
        <span style="font-weight:800; color:#38bdf8; font-size:0.9rem;">Transit & Transport</span>
      </div>

      <div style="max-width:520px; margin:0 auto; text-align:left;">
        <h1 style="margin:0 0 6px 0; font-size:1.4rem; color:#fff; font-weight:800;">
          🚆 India Travel Services & Transit
        </h1>
        <p style="margin:0 0 20px 0; font-size:0.85rem; color:#94a3b8; line-height:1.5;">
          Official portals for booking Trains, State Express Buses, City Cabs, Rapido Rides, and Air Hubs across India.
        </p>

        <!-- Transit Cards -->
        <div style="display:flex; flex-direction:column; gap:14px;">

          <!-- 1. Indian Railways & Vande Bharat -->
          <div style="background:#0f172a; padding:18px; border-radius:14px; border:1px solid rgba(255,255,255,0.08); border-left:4px solid #38bdf8; box-shadow:0 4px 16px rgba(0,0,0,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
              <div>
                <b style="color:#fff; font-size:1.05rem;">🚆 Indian Railways & High-Speed Rail</b>
                <span style="display:block; font-size:0.75rem; color:#38bdf8; font-weight:600; margin-top:2px;">Vande Bharat, Shatabdi & Heritage Rail</span>
              </div>
              <span style="background:rgba(56,189,248,0.15); color:#38bdf8; font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:10px;">IRCTC</span>
            </div>
            <p style="color:#cbd5e1; font-size:0.83rem; line-height:1.5; margin:0 0 12px 0;">
              Over 50+ semi-high-speed Vande Bharat corridors, heritage hill rail, and express networks connecting all 28 states.
            </p>
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
              <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" style="background:#38bdf8; color:#060b17; text-decoration:none; padding:8px 14px; border-radius:8px; font-size:0.8rem; font-weight:700; display:inline-block;">
                Book IRCTC Train Tickets ↗
              </a>
              <a href="https://enquiry.indianrail.gov.in" target="_blank" rel="noopener noreferrer" style="background:rgba(255,255,255,0.06); color:#cbd5e1; text-decoration:none; padding:8px 14px; border-radius:8px; font-size:0.8rem; font-weight:600; display:inline-block; border:1px solid rgba(255,255,255,0.12);">
                Live Train Status ↗
              </a>
            </div>
          </div>

          <!-- 2. CITY RIDES & LOCAL CABS (RAPIDO, OLA, UBER) -->
          <div style="background:#0f172a; padding:18px; border-radius:14px; border:1px solid rgba(255,255,255,0.08); border-left:4px solid #facc15; box-shadow:0 4px 16px rgba(0,0,0,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
              <div>
                <b style="color:#fff; font-size:1.05rem;">🛵 City Cabs, Auto & Bike Taxi</b>
                <span style="display:block; font-size:0.75rem; color:#facc15; font-weight:600; margin-top:2px;">Fast intra-city transit & station transfers</span>
              </div>
              <span style="background:rgba(250,204,21,0.15); color:#facc15; font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:10px;">Instant Rides</span>
            </div>
            <p style="color:#cbd5e1; font-size:0.83rem; line-height:1.5; margin:0 0 12px 0;">
              Fastest point-to-point city commuting across 100+ tourist hubs via verified bikes, metered autos, and local cabs.
            </p>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <a href="https://www.rapido.bike" target="_blank" rel="noopener noreferrer" style="background:#facc15; color:#0f172a; text-decoration:none; padding:8px 12px; border-radius:8px; font-size:0.8rem; font-weight:800; display:inline-flex; align-items:center; gap:4px;">
                🛵 Rapido (Bike & Auto) ↗
              </a>
              <a href="https://www.olacabs.com" target="_blank" rel="noopener noreferrer" style="background:#1e293b; color:#fff; text-decoration:none; padding:8px 12px; border-radius:8px; font-size:0.8rem; font-weight:700; display:inline-block; border:1px solid rgba(255,255,255,0.15);">
                🚕 Ola Cabs ↗
              </a>
              <a href="https://m.uber.com" target="_blank" rel="noopener noreferrer" style="background:#1e293b; color:#fff; text-decoration:none; padding:8px 12px; border-radius:8px; font-size:0.8rem; font-weight:700; display:inline-block; border:1px solid rgba(255,255,255,0.15);">
                🚗 Uber Rides ↗
              </a>
            </div>
          </div>

          <!-- 3. STATE ROADWAYS (SRTC) & EXPRESS BUSES - DIRECT BUS BOOKING ONLY -->
          <div style="background:#0f172a; padding:18px; border-radius:14px; border:1px solid rgba(255,255,255,0.08); border-left:4px solid #4ade80; box-shadow:0 4px 16px rgba(0,0,0,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
              <div>
                <b style="color:#fff; font-size:1.05rem;">🚌 Inter-State State Roadways (SRTC)</b>
                <span style="display:block; font-size:0.75rem; color:#4ade80; font-weight:600; margin-top:2px;">Government Volvo, AC & Sleeper buses</span>
              </div>
              <span style="background:rgba(74,222,128,0.15); color:#4ade80; font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:10px;">SRTC Portals</span>
            </div>
            <p style="color:#cbd5e1; font-size:0.83rem; line-height:1.5; margin:0 0 12px 0;">
              Official state government portals for safe, economical inter-state and mountain bus booking:
            </p>
            
            <!-- Direct Bus Portal Links -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">
              <a href="https://upsrtc.up.gov.in" target="_blank" rel="noopener noreferrer" style="background:#1e293b; color:#4ade80; text-decoration:none; padding:9px 10px; border-radius:6px; font-size:0.75rem; font-weight:700; border:1px solid rgba(74,222,128,0.25); text-align:center; display:block;">
                UP Roadways (UPSRTC) ↗
              </a>
              <a href="https://www.hrtchp.com" target="_blank" rel="noopener noreferrer" style="background:#1e293b; color:#4ade80; text-decoration:none; padding:9px 10px; border-radius:6px; font-size:0.75rem; font-weight:700; border:1px solid rgba(74,222,128,0.25); text-align:center; display:block;">
                Himachal (HRTC) ↗
              </a>
              <a href="https://rsrtconline.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" style="background:#1e293b; color:#4ade80; text-decoration:none; padding:9px 10px; border-radius:6px; font-size:0.75rem; font-weight:700; border:1px solid rgba(74,222,128,0.25); text-align:center; display:block;">
                Rajasthan (RSRTC) ↗
              </a>
              <a href="https://www.ksrtc.in" target="_blank" rel="noopener noreferrer" style="background:#1e293b; color:#4ade80; text-decoration:none; padding:9px 10px; border-radius:6px; font-size:0.75rem; font-weight:700; border:1px solid rgba(74,222,128,0.25); text-align:center; display:block;">
                South India (KSRTC) ↗
              </a>
            </div>

            <!-- All India Bus Aggregator (Direct Online Booking) -->
            <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; display:flex; gap:8px; align-items:center;">
              <span style="font-size:0.75rem; color:#94a3b8; white-space:nowrap;">All India Buses:</span>
              <a href="https://www.redbus.in" target="_blank" rel="noopener noreferrer" style="background:#d84e55; color:#fff; text-decoration:none; padding:6px 12px; border-radius:6px; font-size:0.75rem; font-weight:700;">
                RedBus Official ↗
              </a>
              <a href="https://www.abhibus.com" target="_blank" rel="noopener noreferrer" style="background:#1e293b; color:#cbd5e1; text-decoration:none; padding:6px 12px; border-radius:6px; font-size:0.75rem; font-weight:600; border:1px solid rgba(255,255,255,0.15);">
                AbhiBus ↗
              </a>
            </div>
          </div>

          <!-- 4. Domestic & International Airports -->
          <div style="background:#0f172a; padding:18px; border-radius:14px; border:1px solid rgba(255,255,255,0.08); border-left:4px solid #f59e0b; box-shadow:0 4px 16px rgba(0,0,0,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
              <div>
                <b style="color:#fff; font-size:1.05rem;">✈️ Major Airport Gateways</b>
                <span style="display:block; font-size:0.75rem; color:#f59e0b; font-weight:600; margin-top:2px;">UDAN Regional Air Connectivity</span>
              </div>
              <span style="background:rgba(245,158,11,0.15); color:#f59e0b; font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:10px;">Air Hubs</span>
            </div>
            <p style="color:#cbd5e1; font-size:0.83rem; line-height:1.5; margin:0 0 10px 0;">
              Key hubs: Delhi (DEL), Mumbai (BOM), Bengaluru (BLR), Chennai (MAA), Kolkata (CCU). Regional flights available for Kullu, Leh, and Shillong.
            </p>
            <div style="font-size:0.75rem; color:#94a3b8; background:rgba(255,255,255,0.03); padding:8px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.06);">
              💡 <b>Tip:</b> Direct pre-paid taxi stands and app pick-up zones are located 24×7 at all terminal arrival gates.
            </div>
          </div>

          <!-- 5. Travel Permits (ILP & PAP) -->
          <div style="background:#0f172a; padding:18px; border-radius:14px; border:1px solid rgba(255,255,255,0.08); border-left:4px solid #ec4899; box-shadow:0 4px 16px rgba(0,0,0,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <b style="color:#fff; font-size:1rem;">🛡️ Tourist Permits (ILP & PAP)</b>
              <span style="background:rgba(236,72,153,0.15); color:#ec4899; font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:10px;">Official</span>
            </div>
            <p style="color:#cbd5e1; font-size:0.83rem; line-height:1.5; margin:0 0 8px 0;">
              Inner Line Permits (ILP) are mandatory for visiting protected border areas in Arunachal Pradesh, Nagaland, Mizoram, and parts of Ladakh.
            </p>
            <div style="font-size:0.78rem; color:#f472b6;">
              📞 Official Tourism Helpline: <b>1363</b> (Toll-Free, 24×7 Multi-language support)
            </div>
          </div>

        </div>
      </div>
    `;
  };

  // Drawer me button inject karna
  function injectTravelButtonInDrawer() {
    const drawer = document.getElementById('unifiedDrawer');
    if (!drawer) return;
    if (document.getElementById('drawerTravelBtn')) return;

    const targetRef = drawer.querySelector('[data-page="circuits"]') || drawer.querySelector('[data-page="estimator"]');
    
    const travelBtn = document.createElement('button');
    travelBtn.id = 'drawerTravelBtn';
    travelBtn.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      padding: 12px 14px;
      border-radius: 8px;
      color: #38bdf8;
      font-weight: 600;
      font-size: 0.88rem;
      cursor: pointer;
      text-align: left;
      width: 100%;
    `;
    travelBtn.innerHTML = `
      <span>🚆 Travel Services & Transit</span>
      <span style="color:#64748b; font-size:0.8rem;">›</span>
    `;

    travelBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.openTravelPage();
    });

    if (targetRef && targetRef.parentNode) {
      targetRef.parentNode.insertBefore(travelBtn, targetRef);
    } else {
      drawer.appendChild(travelBtn);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectTravelButtonInDrawer);
  } else {
    injectTravelButtonInDrawer();
  }
  setInterval(injectTravelButtonInDrawer, 1000);
})();
