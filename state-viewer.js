// =========================================================================
// IN-PLACE CARD ACCORDION ENGINE (Opens INSIDE the Himachal Card itself)
// =========================================================================

function openStateDetail(stateId, triggerElement) {
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

  // Card element dhoondhein (button ya card khud)
  let card = triggerElement ? triggerElement.closest('.state-card-tile, .state-card, button') : null;
  if (!card) {
    card = document.querySelector('[data-state="Himachal Pradesh"]') || document.querySelector('.state-card-tile');
  }

  if (!card) return;

  // Agar card pehle se open hai toh close kar do (Toggle feature)
  if (card.getAttribute('data-is-expanded') === 'true') {
    closeCardDetail(card);
    return;
  }

  // Pehle kisi doosre card me open ho toh use normal kar do
  const alreadyExpanded = document.querySelector('[data-is-expanded="true"]');
  if (alreadyExpanded) {
    closeCardDetail(alreadyExpanded);
  }

  // Card ka purana HTML save kar lo taaki Close par wapas wahi ban jaye
  if (!card.getAttribute('data-original-html')) {
    card.setAttribute('data-original-html', encodeURIComponent(card.innerHTML));
  }
  card.setAttribute('data-is-expanded', 'true');

  // Card styling adjust karein taaki full width & responsive lage
  card.style.display = 'block';
  card.style.padding = '0';
  card.style.overflow = 'hidden';
  card.style.cursor = 'default';
  card.style.gridColumn = '1 / -1';
  card.style.border = '1px solid rgba(255, 84, 18, 0.45)';
  card.style.boxShadow = '0 16px 40px rgba(0,0,0,0.6)';

  // Usi card ke andar naya expanded content daal dein
  card.innerHTML = `
    <!-- Top Bar inside Card -->
    <div style="background: rgba(11, 19, 41, 0.98); padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08);">
      <span style="font-size: 0.78rem; font-weight: 800; color: #FF5412; text-transform: uppercase; letter-spacing: 1.2px;">Official State Guide</span>
      <button type="button" onclick="event.stopPropagation(); closeCardDetail(this.closest('[data-is-expanded]'))" style="background: rgba(239,68,68,0.18); border: 1px solid rgba(239,68,68,0.35); color: #f87171; font-weight: 700; padding: 6px 14px; border-radius: 8px; cursor: pointer; font-size: 0.82rem;">
        ✕ Close
      </button>
    </div>

    <!-- Hero Video / Poster inside Card -->
    <div style="position: relative; width: 100%; height: 260px; overflow: hidden; background: #000;">
      ${data.heroVideo ? `
        <video autoplay muted loop playsinline poster="${data.heroPoster || ''}" style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; object-fit: cover; transform: translate(-50%, -50%); opacity: 0.75;">
          <source src="${data.heroVideo}" type="video/mp4">
        </video>
      ` : `
        <div style="position: absolute; inset: 0; background: url('${data.heroPoster || data.heroImage}') center/cover no-repeat; opacity: 0.75;"></div>
      `}
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11,19,41,0.15) 0%, rgba(11,19,41,0.95) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;">
        <span style="color: #38bdf8; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px;">Explore Bharat</span>
        <h2 style="margin: 2px 0 4px; font-size: 1.9rem; color: #fff; font-family: 'Playfair Display', serif; font-weight: 800;">${data.name}</h2>
        <p style="color: #cbd5e1; font-size: 0.88rem; margin: 0;">${data.tagline}</p>
      </div>
    </div>

    <!-- Inside Card Body -->
    <div style="padding: 18px 16px;">
      
      <!-- Key Statistics -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 10px; margin-bottom: 22px;">
        <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 10px; text-align: center; border: 1px solid rgba(255,255,255,0.06);">
          <small style="color: #94a3b8; font-size: 0.7rem; display: block; text-transform: uppercase;">CAPITAL</small>
          <strong style="font-size: 0.82rem; color: #fff;">${data.capital}</strong>
        </div>
        <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 10px; text-align: center; border: 1px solid rgba(255,255,255,0.06);">
          <small style="color: #94a3b8; font-size: 0.7rem; display: block; text-transform: uppercase;">BEST SEASON</small>
          <strong style="font-size: 0.82rem; color: #FF5412;">${data.bestSeason}</strong>
        </div>
        <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 10px; text-align: center; border: 1px solid rgba(255,255,255,0.06);">
          <small style="color: #94a3b8; font-size: 0.7rem; display: block; text-transform: uppercase;">DURATION</small>
          <strong style="font-size: 0.82rem; color: #38bdf8;">${data.idealDuration}</strong>
        </div>
        <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 10px; text-align: center; border: 1px solid rgba(255,255,255,0.06);">
          <small style="color: #94a3b8; font-size: 0.7rem; display: block; text-transform: uppercase;">DISTRICTS</small>
          <strong style="font-size: 0.82rem; color: #fff;">${data.districtsCount} Districts</strong>
        </div>
      </div>

      <!-- About Section -->
      <div style="margin-bottom: 24px; text-align: left;">
        <h3 style="font-size: 1.1rem; color: #fff; border-left: 3px solid #FF5412; padding-left: 8px; margin-bottom: 8px;">About ${data.name}</h3>
        <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin: 0;">${data.overview}</p>
      </div>

      <!-- ============================================== -->
      <!-- ALL 12 DISTRICTS SLIDER INSIDE HIMACHAL CARD -->
      <!-- ============================================== -->
      ${data.districts && data.districts.length > 0 ? `
        <div style="margin-bottom: 26px; text-align: left;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div>
              <h3 style="font-size: 1.1rem; color: #fff; border-left: 3px solid #FF5412; padding-left: 8px; margin: 0;">
                All ${data.districts.length} Districts (Slide to Explore)
              </h3>
            </div>
            <div style="display: flex; gap: 6px;">
              <button type="button" onclick="event.stopPropagation(); document.getElementById('cardDistSlider').scrollBy({left: -260, behavior: 'smooth'})" style="background: #1e293b; border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1rem;">&#8249;</button>
              <button type="button" onclick="event.stopPropagation(); document.getElementById('cardDistSlider').scrollBy({left: 260, behavior: 'smooth'})" style="background: #1e293b; border: 1px solid rgba(255,255,255,0.15); color: #fff; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1rem;">&#8250;</button>
            </div>
          </div>

          <!-- Horizontal Slide Track -->
          <div id="cardDistSlider" style="display: flex; gap: 12px; overflow-x: auto; scroll-snap-type: x mandatory; padding: 4px 2px 12px 2px; -webkit-overflow-scrolling: touch; scrollbar-width: thin;">
            ${data.districts.map(dist => `
              <div style="flex: 0 0 250px; scroll-snap-align: start; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; overflow: hidden; display: flex; flex-direction: column;">
                <div style="height: 135px; width: 100%; position: relative; background: #000;">
                  <img src="${dist.image}" alt="${dist.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
                  <span style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); color: #38bdf8; font-size: 0.68rem; font-weight: 700; padding: 3px 8px; border-radius: 20px;">${dist.vibe}</span>
                </div>
                <div style="padding: 12px; display: flex; flex-direction: column; flex: 1;">
                  <h4 style="margin: 0 0 2px 0; font-size: 1rem; color: #fff;">${dist.name}</h4>
                  <small style="color: #FF5412; font-size: 0.72rem; font-weight: 700; margin-bottom: 6px;">${dist.tag}</small>
                  <p style="color: #94a3b8; font-size: 0.78rem; line-height: 1.4; margin: 0; flex: 1;"><strong style="color: #cbd5e1;">Spots:</strong> ${dist.attractions}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Suggested Route Itinerary -->
      <div style="margin-bottom: 24px; text-align: left;">
        <h3 style="font-size: 1.1rem; color: #fff; border-left: 3px solid #FF5412; padding-left: 8px; margin-bottom: 10px;">Suggested Travel Route</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${data.itinerary.map(it => `
            <div style="background: rgba(255,255,255,0.02); border-left: 3px solid #38bdf8; padding: 10px 12px; border-radius: 0 8px 8px 0;">
              <span style="color: #38bdf8; font-size: 0.75rem; font-weight: 800;">${it.day}</span>
              <div style="color: #fff; font-weight: 600; font-size: 0.88rem; margin: 2px 0;">${it.title}</div>
              <div style="color: #94a3b8; font-size: 0.8rem; line-height: 1.4;">${it.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Cuisine -->
      <div style="margin-bottom: 24px; text-align: left;">
        <h3 style="font-size: 1.1rem; color: #fff; border-left: 3px solid #FF5412; padding-left: 8px; margin-bottom: 10px;">Taste of ${data.name}</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px;">
          ${data.cuisine.map(c => `
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 10px; border-radius: 8px;">
              <b style="color: #fbbf24; font-size: 0.85rem; display: block; margin-bottom: 2px;">🍛 ${c.item}</b>
              <span style="color: #cbd5e1; font-size: 0.78rem; line-height: 1.3; display: block;">${c.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Transit Access -->
      <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 12px; border-radius: 10px; font-size: 0.8rem; text-align: left;">
        <h4 style="margin: 0 0 6px; color: #fff; font-size: 0.9rem;">✈️ Transit Access & Helpline</h4>
        <div style="color: #cbd5e1; margin-bottom: 3px;"><strong>Airports:</strong> ${data.connectivity.airports}</div>
        <div style="color: #cbd5e1; margin-bottom: 3px;"><strong>Rail:</strong> ${data.connectivity.railway}</div>
        <div style="color: #cbd5e1; margin-bottom: 8px;"><strong>Highways:</strong> ${data.connectivity.highways}</div>
        <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 6px; color: #94a3b8;">
          <span>📞 Helpline: 1363</span> | <span>🏛️ Tourism: ${data.helplines.stateTourism}</span>
        </div>
      </div>

    </div>
  `;

  card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeCardDetail(card) {
  if (!card) return;
  const originalHtml = card.getAttribute('data-original-html');
  if (originalHtml) {
    card.innerHTML = decodeURIComponent(originalHtml);
  }
  card.removeAttribute('data-is-expanded');
  card.removeAttribute('data-original-html');
  card.removeAttribute('style'); // wapas normal styling restore ho jayegi
}

window.openStateDetail = openStateDetail;
window.closeCardDetail = closeCardDetail;
