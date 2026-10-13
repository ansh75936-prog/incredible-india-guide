// =========================================================================
// IN-PAGE STATE EXPANDER ENGINE (With Ambient Hero Video Support)
// =========================================================================

function openStateDetail(stateId, triggerElement) {
  let data = null;

  if (stateId === 'rajasthan' && typeof rajasthanGuideData !== 'undefined') {
    data = rajasthanGuideData;
  } else if (stateId === 'himachal' && typeof himachalGuideData !== 'undefined') {
    data = himachalGuideData;
  }

  if (!data) {
    alert("Guide data is loading. Please try again in a moment.");
    return;
  }

  // Toggle Check: Pehle se khula hai toh band kar do
  const existingContainer = document.getElementById('inPageStateDetailContainer');
  if (existingContainer && existingContainer.getAttribute('data-active-state') === stateId) {
    existingContainer.remove();
    return;
  }
  if (existingContainer) existingContainer.remove();

  // Target: Jis card par tap kiya uske theek neeche lagana
  let target = triggerElement ? triggerElement.closest('.state-card-tile, .state-card, .destination-card-unit, section') : null;
  if (!target) {
    document.querySelectorAll('button, div, section').forEach(el => {
      if (!target && (el.innerText || '').includes('Himachal Pradesh')) {
        target = el.closest('.state-card-tile, .state-card, section') || el;
      }
    });
  }

  const inlineBox = document.createElement('div');
  inlineBox.id = 'inPageStateDetailContainer';
  inlineBox.setAttribute('data-active-state', stateId);
  inlineBox.style.cssText = `
    width: 100%;
    grid-column: 1 / -1;
    background: #0b1329;
    border: 1px solid rgba(255, 84, 18, 0.35);
    border-radius: 16px;
    margin: 18px 0;
    overflow: hidden;
    box-sizing: border-box;
    color: #f1f5f9;
    box-shadow: 0 14px 40px rgba(0,0,0,0.6);
  `;

  inlineBox.innerHTML = `
    <!-- Top Action Bar -->
    <div style="background: rgba(11, 19, 41, 0.95); padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08);">
      <span style="font-size: 0.8rem; font-weight: 800; color: #FF5412; text-transform: uppercase; letter-spacing: 1px;">Official Guide Overview</span>
      <button onclick="document.getElementById('inPageStateDetailContainer').remove()" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: #f87171; font-weight: bold; padding: 6px 12px; border-radius: 8px; cursor: pointer; font-size: 0.85rem;">
        ✕ Close
      </button>
    </div>

    <!-- Hero Section (Video / Poster Engine) -->
    <div style="position: relative; width: 100%; height: 260px; overflow: hidden; background: #000;">
      ${data.heroVideo ? `
        <video 
          autoplay 
          muted 
          loop 
          playsinline 
          poster="${data.heroPoster || ''}"
          style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); opacity: 0.75;">
          <source src="${data.heroVideo}" type="video/mp4">
        </video>
      ` : `
        <div style="position: absolute; inset: 0; background: url('${data.heroImage}') center/cover no-repeat; opacity: 0.7;"></div>
      `}

      <!-- Gradient Overlay & Titles -->
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11,19,41,0.2) 0%, rgba(11,19,41,0.95) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;">
        <span style="color: #38bdf8; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px;">Explore Bharat</span>
        <h2 style="margin: 2px 0 4px 0; font-size: 1.8rem; color: #fff; font-family: 'Playfair Display', serif; font-weight: 800;">${data.name}</h2>
        <p style="color: #cbd5e1; font-size: 0.88rem; margin: 0;">${data.tagline}</p>
      </div>
    </div>

    <!-- Content Body -->
    <div style="padding: 20px 18px;">
      
      <!-- Quick Stats -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 10px; margin-bottom: 22px;">
        <div style="background: rgba(255,255,255,0.04); padding: 10px; border-radius: 10px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
          <span style="font-size: 0.7rem; color: #94a3b8; display: block;">CAPITAL</span>
          <b style="font-size: 0.82rem; color: #fff;">${data.capital}</b>
        </div>
        <div style="background: rgba(255,255,255,0.04); padding: 10px; border-radius: 10px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
          <span style="font-size: 0.7rem; color: #94a3b8; display: block;">BEST SEASON</span>
          <b style="font-size: 0.82rem; color: #FF5412;">${data.bestSeason}</b>
        </div>
        <div style="background: rgba(255,255,255,0.04); padding: 10px; border-radius: 10px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
          <span style="font-size: 0.7rem; color: #94a3b8; display: block;">IDEAL DURATION</span>
          <b style="font-size: 0.82rem; color: #38bdf8;">${data.idealDuration}</b>
        </div>
        <div style="background: rgba(255,255,255,0.04); padding: 10px; border-radius: 10px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
          <span style="font-size: 0.7rem; color: #94a3b8; display: block;">DISTRICTS</span>
          <b style="font-size: 0.82rem; color: #fff;">${data.districtsCount}</b>
        </div>
      </div>

      <!-- About Section -->
      <div style="margin-bottom: 22px;">
        <h3 style="font-size: 1.1rem; color: #fff; border-left: 3px solid #FF5412; padding-left: 8px; margin-bottom: 8px;">About ${data.name}</h3>
        <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin: 0;">${data.overview}</p>
      </div>

      <!-- Key Destinations -->
      <div style="margin-bottom: 22px;">
        <h3 style="font-size: 1.1rem; color: #fff; border-left: 3px solid #FF5412; padding-left: 8px; margin-bottom: 12px;">Key Destinations & Hubs</h3>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${data.topDestinations.map(d => `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); padding: 12px 14px; border-radius: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <b style="font-size: 1rem; color: #fff;">${d.name}</b>
                <span style="color: #38bdf8; font-size: 0.78rem;">${d.alias}</span>
              </div>
              <div style="color: #cbd5e1; font-size: 0.85rem; margin-bottom: 6px;"><strong>Highlights:</strong> ${d.highlights}</div>
              <span style="background: rgba(255,84,18,0.15); color: #FF5412; font-size: 0.72rem; padding: 2px 8px; border-radius: 4px;">Best for: ${d.bestFor}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Travel Route Itinerary -->
      <div style="margin-bottom: 22px;">
        <h3 style="font-size: 1.1rem; color: #fff; border-left: 3px solid #FF5412; padding-left: 8px; margin-bottom: 12px;">Suggested Travel Route</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${data.itinerary.map(it => `
            <div style="background: rgba(255,255,255,0.02); border-left: 3px solid #38bdf8; padding: 10px 14px; border-radius: 0 8px 8px 0;">
              <span style="color: #38bdf8; font-size: 0.75rem; font-weight: 800;">${it.day}</span>
              <div style="color: #fff; font-weight: 600; font-size: 0.9rem; margin: 2px 0;">${it.title}</div>
              <div style="color: #94a3b8; font-size: 0.82rem; line-height: 1.4;">${it.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Taste of the State -->
      <div style="margin-bottom: 22px;">
        <h3 style="font-size: 1.1rem; color: #fff; border-left: 3px solid #FF5412; padding-left: 8px; margin-bottom: 12px;">Culinary Heritage (Taste of the State)</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px;">
          ${data.cuisine.map(c => `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 10px; border-radius: 8px;">
              <b style="color: #fbbf24; font-size: 0.88rem; display: block; margin-bottom: 2px;">🍛 ${c.item}</b>
              <span style="color: #cbd5e1; font-size: 0.8rem; line-height: 1.3; display: block;">${c.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Connectivity & Helpline -->
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 14px; border-radius: 10px; font-size: 0.83rem;">
        <h4 style="margin: 0 0 8px 0; color: #fff; font-size: 0.95rem;">✈️ Connectivity & Official Contacts</h4>
        <div style="color: #cbd5e1; margin-bottom: 4px;"><strong>Airports:</strong> ${data.connectivity.airports}</div>
        <div style="color: #cbd5e1; margin-bottom: 4px;"><strong>Rail Access:</strong> ${data.connectivity.railway}</div>
        <div style="color: #cbd5e1; margin-bottom: 10px;"><strong>Key Highways:</strong> ${data.connectivity.highways}</div>
        <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 8px; color: #94a3b8;">
          <span>📞 Tourist Helpline: ${data.helplines.touristAssistance}</span> | 
          <span>🏛️ State Tourism: ${data.helplines.stateTourism}</span>
        </div>
      </div>

    </div>
  `;

  if (target && target.parentNode) {
    target.parentNode.insertBefore(inlineBox, target.nextSibling);
    inlineBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    document.body.appendChild(inlineBox);
  }
}

window.openStateDetail = openStateDetail;
