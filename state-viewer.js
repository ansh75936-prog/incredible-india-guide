// =========================================================================
// UNIVERSAL STATE DETAILS VIEWER ENGINE
// Pure English Base (Clean, No Booking Forms, Live Translation Friendly)
// =========================================================================

function openStateDetail(stateId) {
  let data = null;

  // Har state ke data object ko check karega
  if (stateId === 'rajasthan' && typeof rajasthanGuideData !== 'undefined') {
    data = rajasthanGuideData;
  } else if (stateId === 'himachal' && typeof himachalGuideData !== 'undefined') {
    data = himachalGuideData;
  }

  if (!data) {
    alert("Guide data is loading or file is missing. Please check back in a moment.");
    return;
  }

  // Modal container create ya reuse karein
  let viewer = document.getElementById('stateDetailModal');
  if (!viewer) {
    viewer = document.createElement('div');
    viewer.id = 'stateDetailModal';
    viewer.style.cssText = `
      position: fixed;
      inset: 0;
      background: #070c16;
      z-index: 2147483640;
      overflow-y: auto;
      color: #f1f5f9;
      padding: 0 0 50px 0;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-overflow-scrolling: touch;
    `;
    document.body.appendChild(viewer);
  }

  // Dynamic Content Render
  viewer.innerHTML = `
    <!-- Sticky Top Navigation -->
    <div style="position: sticky; top: 0; background: rgba(7, 12, 22, 0.95); backdrop-filter: blur(12px); padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); z-index: 10;">
      <button onclick="closeStateDetail()" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #38bdf8; font-weight: 700; font-size: 0.9rem; padding: 6px 14px; border-radius: 8px; cursor: pointer;">
        &larr; Back to Portal
      </button>
      <span style="font-size: 0.85rem; font-weight: 700; color: #FF5412; letter-spacing: 0.5px;">Official State Guide</span>
    </div>

    <!-- Hero Image & Header -->
    <div style="position: relative; height: 320px; background: url('${data.heroImage}') center/cover no-repeat;">
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, #070c16 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 24px;">
        <span style="color: #FF5412; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.2px;">Explore Bharat</span>
        <h1 style="font-size: 2.3rem; margin: 4px 0; color: #fff; font-family: 'Playfair Display', serif; font-weight: 800;">${data.name}</h1>
        <p style="color: #cbd5e1; font-size: 0.95rem; margin: 0;">${data.tagline}</p>
      </div>
    </div>

    <!-- Main Content Container -->
    <div style="max-width: 900px; margin: 0 auto; padding: 20px 16px;">
      
      <!-- Key Statistics Strip -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-bottom: 28px;">
        <div style="background: #0f172a; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); text-align: center;">
          <small style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase;">Capital</small>
          <div style="font-weight: 700; color: #fff; font-size: 0.95rem; margin-top: 2px;">${data.capital}</div>
        </div>
        <div style="background: #0f172a; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); text-align: center;">
          <small style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase;">Best Season</small>
          <div style="font-weight: 700; color: #FF5412; font-size: 0.95rem; margin-top: 2px;">${data.bestSeason}</div>
        </div>
        <div style="background: #0f172a; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); text-align: center;">
          <small style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase;">Ideal Duration</small>
          <div style="font-weight: 700; color: #38bdf8; font-size: 0.95rem; margin-top: 2px;">${data.idealDuration}</div>
        </div>
        <div style="background: #0f172a; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); text-align: center;">
          <small style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase;">Districts</small>
          <div style="font-weight: 700; color: #fff; font-size: 0.95rem; margin-top: 2px;">${data.districtsCount}</div>
        </div>
      </div>

      <!-- About Section -->
      <section style="margin-bottom: 30px;">
        <h2 style="font-size: 1.3rem; color: #fff; border-left: 4px solid #FF5412; padding-left: 10px; margin-bottom: 12px;">About the State</h2>
        <p style="color: #cbd5e1; line-height: 1.7; font-size: 0.95rem;">${data.overview}</p>
      </section>

      <!-- Top Destinations & Circuits -->
      <section style="margin-bottom: 30px;">
        <h2 style="font-size: 1.3rem; color: #fff; border-left: 4px solid #FF5412; padding-left: 10px; margin-bottom: 14px;">Key Destinations & Hubs</h2>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${data.topDestinations.map(d => `
            <div style="background: #0f172a; border: 1px solid rgba(255,255,255,0.08); padding: 16px; border-radius: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
                <h3 style="margin: 0; font-size: 1.15rem; color: #fff;">${d.name}</h3>
                <span style="color: #38bdf8; font-size: 0.8rem; font-weight: 700;">${d.alias}</span>
              </div>
              <p style="margin: 6px 0 8px; color: #cbd5e1; font-size: 0.88rem; line-height: 1.5;"><strong>Highlights:</strong> ${d.highlights}</p>
              <span style="display: inline-block; background: rgba(255,84,18,0.15); color: #FF5412; font-size: 0.75rem; padding: 4px 10px; border-radius: 6px; font-weight: 600;">Best for: ${d.bestFor}</span>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Curated Itinerary -->
      <section style="margin-bottom: 30px;">
        <h2 style="font-size: 1.3rem; color: #fff; border-left: 4px solid #FF5412; padding-left: 10px; margin-bottom: 14px;">Suggested Travel Itinerary</h2>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${data.itinerary.map(it => `
            <div style="background: #0f172a; border-left: 3px solid #38bdf8; padding: 14px 16px; border-radius: 0 10px 10px 0; border-top: 1px solid rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.04);">
              <div style="font-size: 0.8rem; color: #38bdf8; font-weight: 800; text-transform: uppercase;">${it.day}</div>
              <div style="font-size: 1rem; font-weight: 700; color: #fff; margin: 3px 0 6px;">${it.title}</div>
              <div style="font-size: 0.88rem; color: #94a3b8; line-height: 1.5;">${it.desc}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Culinary Heritage -->
      <section style="margin-bottom: 30px;">
        <h2 style="font-size: 1.3rem; color: #fff; border-left: 4px solid #FF5412; padding-left: 10px; margin-bottom: 14px;">Culinary Heritage (Taste of Bharat)</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px;">
          ${data.cuisine.map(c => `
            <div style="background: #0f172a; border: 1px solid rgba(255,255,255,0.08); padding: 14px; border-radius: 12px;">
              <b style="color: #fbbf24; font-size: 0.95rem; display: block; margin-bottom: 4px;">🍛 ${c.item}</b>
              <span style="color: #cbd5e1; font-size: 0.83rem; line-height: 1.4; display: block;">${c.desc}</span>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Connectivity & Emergency Info -->
      <section style="background: #0f172a; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 18px;">
        <h3 style="margin-top: 0; font-size: 1.1rem; color: #fff; margin-bottom: 12px;">✈️ Connectivity & Transit Access</h3>
        <p style="font-size: 0.88rem; color: #cbd5e1; margin-bottom: 8px;"><strong>Airports:</strong> ${data.connectivity.airports}</p>
        <p style="font-size: 0.88rem; color: #cbd5e1; margin-bottom: 8px;"><strong>Rail Access:</strong> ${data.connectivity.railway}</p>
        <p style="font-size: 0.88rem; color: #cbd5e1; margin-bottom: 16px;"><strong>Key Highways:</strong> ${data.connectivity.highways}</p>
        
        <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 12px; font-size: 0.83rem; color: #94a3b8; display: flex; flex-direction: column; gap: 4px;">
          <div>📞 <strong>National Tourist Helpline:</strong> ${data.helplines.touristAssistance}</div>
          <div>🏛️ <strong>Official Tourism Authority:</strong> ${data.helplines.stateTourism}</div>
        </div>
      </section>

    </div>
  `;

  viewer.style.display = 'block';
  viewer.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeStateDetail() {
  const viewer = document.getElementById('stateDetailModal');
  if (viewer) viewer.style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.openStateDetail = openStateDetail;
window.closeStateDetail = closeStateDetail;
