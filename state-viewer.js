// =========================================================================
// INCREDIBLE INDIA - DEDICATED STATE PORTAL VIEWER
// Displays full dedicated State view with District Slider
// =========================================================================

function openStateDetail(stateId) {
  let data = null;

  if (stateId === 'himachal' && typeof himachalGuideData !== 'undefined') {
    data = himachalGuideData;
  } else if (stateId === 'rajasthan' && typeof rajasthanGuideData !== 'undefined') {
    data = rajasthanGuideData;
  }

  if (!data) {
    alert("Guide data is loading. Please try again.");
    return;
  }

  // Check ya create state view screen
  let viewContainer = document.getElementById('dedicatedStatePortalView');
  if (!viewContainer) {
    viewContainer = document.createElement('div');
    viewContainer.id = 'dedicatedStatePortalView';
    viewContainer.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      background: #070c16;
      z-index: 999999;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      color: #f1f5f9;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    `;
    document.body.appendChild(viewContainer);
  }

  // Render State View
  viewContainer.innerHTML = `
    <!-- Top Sticky Navigation Bar -->
    <header style="position: sticky; top: 0; background: rgba(7, 12, 22, 0.95); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.1); padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; z-index: 100;">
      <button onclick="closeStatePortal()" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #38bdf8; font-weight: 700; font-size: 0.9rem; padding: 7px 16px; border-radius: 50px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
        &larr; Back to Home
      </button>
      <span style="font-size: 0.85rem; font-weight: 800; color: #FF5412; letter-spacing: 1px; text-transform: uppercase;">
        State Tourism Portal
      </span>
    </header>

    <!-- State Hero Banner with Video -->
    <div style="position: relative; width: 100%; height: 380px; overflow: hidden; background: #000;">
      ${data.heroVideo ? `
        <video autoplay muted loop playsinline poster="${data.heroPoster || ''}" style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); opacity: 0.75;">
          <source src="${data.heroVideo}" type="video/mp4">
        </video>
      ` : `
        <div style="position: absolute; inset: 0; background: url('${data.heroPoster || data.heroImage}') center/cover no-repeat; opacity: 0.75;"></div>
      `}
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(7,12,22,0.1) 0%, rgba(7,12,22,0.95) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 28px 20px; max-width: 1200px; margin: 0 auto;">
        <span style="color: #38bdf8; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">Welcome to</span>
        <h1 style="margin: 4px 0 6px 0; font-size: clamp(2.2rem, 5vw, 3.6rem); color: #fff; font-family: 'Playfair Display', serif; font-weight: 800; line-height: 1.1;">
          ${data.name}
        </h1>
        <p style="color: #cbd5e1; font-size: clamp(0.95rem, 2vw, 1.15rem); margin: 0; max-width: 700px;">
          ${data.tagline}
        </p>
      </div>
    </div>

    <!-- Main Container -->
    <main style="max-width: 1200px; margin: 0 auto; padding: 24px 20px 60px 20px;">
      
      <!-- Key Statistics Strip -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; margin-bottom: 36px;">
        <div style="background: #0f172a; padding: 14px; border-radius: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.06);">
          <small style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; font-weight: 700;">Capital</small>
          <strong style="display: block; font-size: 0.95rem; color: #fff; margin-top: 4px;">${data.capital}</strong>
        </div>
        <div style="background: #0f172a; padding: 14px; border-radius: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.06);">
          <small style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; font-weight: 700;">Best Season</small>
          <strong style="display: block; font-size: 0.95rem; color: #FF5412; margin-top: 4px;">${data.bestSeason}</strong>
        </div>
        <div style="background: #0f172a; padding: 14px; border-radius: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.06);">
          <small style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; font-weight: 700;">Ideal Duration</small>
          <strong style="display: block; font-size: 0.95rem; color: #38bdf8; margin-top: 4px;">${data.idealDuration}</strong>
        </div>
        <div style="background: #0f172a; padding: 14px; border-radius: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.06);">
          <small style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; font-weight: 700;">Total Districts</small>
          <strong style="display: block; font-size: 0.95rem; color: #fff; margin-top: 4px;">${data.districtsCount} Districts</strong>
        </div>
      </div>

      <!-- About Section -->
      <section style="margin-bottom: 38px;">
        <h2 style="font-size: 1.4rem; color: #fff; border-left: 4px solid #FF5412; padding-left: 10px; margin-bottom: 12px; font-family: 'Playfair Display', serif;">
          About the State
        </h2>
        <p style="color: #cbd5e1; font-size: 1rem; line-height: 1.7; margin: 0;">
          ${data.overview}
        </p>
      </section>

      <!-- DISTRICTS SLIDER SECTION -->
      ${data.districts && data.districts.length > 0 ? `
        <section style="margin-bottom: 45px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 14px;">
            <div>
              <span style="color: #FF5412; font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Districts Directory</span>
              <h2 style="font-size: 1.4rem; color: #fff; margin: 2px 0 0; font-family: 'Playfair Display', serif;">
                Explore All ${data.districts.length} Districts
              </h2>
            </div>
            <div style="display: flex; gap: 8px;">
              <button onclick="document.getElementById('stateDistTrack').scrollBy({left: -320, behavior: 'smooth'})" style="background: #1e293b; border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 38px; height: 38px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">&#8249;</button>
              <button onclick="document.getElementById('stateDistTrack').scrollBy({left: 320, behavior: 'smooth'})" style="background: #1e293b; border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 38px; height: 38px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">&#8250;</button>
            </div>
          </div>

          <!-- Slide Track -->
          <div id="stateDistTrack" style="display: flex; gap: 18px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 6px 2px 14px 2px; -webkit-overflow-scrolling: touch; scrollbar-width: thin;">
            ${data.districts.map(dist => `
              <div style="flex: 0 0 290px; scroll-snap-align: start; background: #0f172a; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 8px 24px rgba(0,0,0,0.3);">
                <div style="height: 160px; width: 100%; position: relative; background: #000;">
                  <img src="${dist.image}" alt="${dist.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
                  <span style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.7); backdrop-filter: blur(6px); color: #38bdf8; font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 30px;">
                    ${dist.vibe}
                  </span>
                </div>
                <div style="padding: 16px; display: flex; flex-direction: column; flex: 1;">
                  <h3 style="margin: 0 0 2px 0; font-size: 1.18rem; color: #fff;">${dist.name}</h3>
                  <small style="color: #FF5412; font-size: 0.78rem; font-weight: 700; margin-bottom: 8px;">${dist.tag}</small>
                  <p style="color: #94a3b8; font-size: 0.85rem; line-height: 1.5; margin: 0; flex: 1;">
                    <strong style="color: #cbd5e1;">Top Spots:</strong> ${dist.attractions}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Suggested Route Itinerary -->
      <section style="margin-bottom: 38px;">
        <h2 style="font-size: 1.4rem; color: #fff; border-left: 4px solid #FF5412; padding-left: 10px; margin-bottom: 16px; font-family: 'Playfair Display', serif;">
          Curated Travel Route
        </h2>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${data.itinerary.map(it => `
            <div style="background: #0f172a; border-left: 3px solid #38bdf8; padding: 14px 18px; border-radius: 0 12px 12px 0; border-top: 1px solid rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: #38bdf8; font-size: 0.8rem; font-weight: 800; text-transform: uppercase;">${it.day}</span>
              <h3 style="color: #fff; font-weight: 700; font-size: 1.05rem; margin: 3px 0 6px;">${it.title}</h3>
              <p style="color: #94a3b8; font-size: 0.88rem; line-height: 1.5; margin: 0;">${it.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Culinary Heritage -->
      <section style="margin-bottom: 38px;">
        <h2 style="font-size: 1.4rem; color: #fff; border-left: 4px solid #FF5412; padding-left: 10px; margin-bottom: 16px; font-family: 'Playfair Display', serif;">
          Taste of ${data.name}
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
          ${data.cuisine.map(c => `
            <div style="background: #0f172a; border: 1px solid rgba(255,255,255,0.06); padding: 14px; border-radius: 12px;">
              <b style="color: #fbbf24; font-size: 0.95rem; display: block; margin-bottom: 4px;">🍛 ${c.item}</b>
              <span style="color: #cbd5e1; font-size: 0.84rem; line-height: 1.4; display: block;">${c.desc}</span>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Connectivity & Emergency -->
      <section style="background: #0f172a; border: 1px solid rgba(255,255,255,0.08); padding: 20px; border-radius: 14px;">
        <h3 style="margin: 0 0 10px; color: #fff; font-size: 1.1rem;">✈️ Connectivity & Official Contacts</h3>
        <p style="color: #cbd5e1; font-size: 0.88rem; margin-bottom: 6px;"><strong>Airports:</strong> ${data.connectivity.airports}</p>
        <p style="color: #cbd5e1; font-size: 0.88rem; margin-bottom: 6px;"><strong>Rail Access:</strong> ${data.connectivity.railway}</p>
        <p style="color: #cbd5e1; font-size: 0.88rem; margin-bottom: 14px;"><strong>Highways:</strong> ${data.connectivity.highways}</p>
        <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px; color: #94a3b8; font-size: 0.85rem; display: flex; flex-wrap: wrap; gap: 16px;">
          <span>📞 Tourist Helpline: <strong>${data.helplines.touristAssistance}</strong></span>
          <span>🏛️ State Tourism: <strong>${data.helplines.stateTourism}</strong></span>
        </div>
      </section>

    </main>
  `;

  viewContainer.style.display = 'block';
  viewContainer.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeStatePortal() {
  const viewContainer = document.getElementById('dedicatedStatePortalView');
  if (viewContainer) {
    viewContainer.style.display = 'none';
  }
  document.body.style.overflow = 'auto';
}

window.openStateDetail = openStateDetail;
window.closeStatePortal = closeStatePortal;
