// =========================================================================
// INCREDIBLE INDIA - POPULAR DESTINATIONS SLIDER (PERFECT FULL DETAILS VIEW)
// =========================================================================

(function () {
  // Destination Full Circuit Details Database
  const circuitDetailsDB = {
    'jaipur': {
      title: 'Rajasthan',
      tagline: '"The Land of Kings & Desert Splendor"',
      capital: 'Jaipur',
      bestTime: 'October se March',
      totalDistricts: '50',
      bannerImg: 'https://images.unsplash.com/photo-1603288940356-9b044d50cbf1?auto=format&fit=crop&w=800&q=80',
      attractions: ['Amer Fort Jaipur', 'Lake Pichola Udaipur', 'Jaisalmer Sam Sand Dunes', 'Mehrangarh Fort Jodhpur', 'Ranthambore Safari'],
      delicacies: ['Dal Baati Churma', 'Laal Maas', 'Ghewar', 'Pyaaz Kachori']
    },
    'manali': {
      title: 'Himachal Pradesh',
      tagline: '"Land of the Gods & Snowy Mountain Passes"',
      capital: 'Shimla (Summer), Dharamshala (Winter)',
      bestTime: 'Saal bhar (Barf ke liye Dec-Feb, Mausam ke liye Mar-Jun)',
      totalDistricts: '12',
      bannerImg: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      attractions: ['Solang Valley Skiing & Paragliding', 'Atal Tunnel Rohtang', 'Kasol & Parvati Valley', 'Spiti Valley Monasteries', 'Jakhoo Temple Shimla'],
      delicacies: ['Dham Feast', 'Siddu with Ghee', 'Chha Gosht', 'Babru & Trout Fish']
    },
    'munnar': {
      title: 'Kerala',
      tagline: '"God\'s Own Country & Serene Backwaters"',
      capital: 'Thiruvananthapuram',
      bestTime: 'September se March (Pleasant), June se Aug (Ayurveda)',
      totalDistricts: '14',
      bannerImg: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
      attractions: ['Alleppey Houseboats Cruise', 'Munnar Tea Hills & Top Station', 'Thekkady Periyar Wildlife Sanctuary', 'Varkala Cliff Beach', 'Athirappilly Waterfalls'],
      delicacies: ['Appam with Stew', 'Kerala Sadya Feast', 'Karimeen Pollichathu', 'Malabar Parotta']
    },
    'goa': {
      title: 'Goa',
      tagline: '"Sun, Sand, Portuguese Architecture & Nightlife"',
      capital: 'Panaji',
      bestTime: 'November se February',
      totalDistricts: '2',
      bannerImg: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      attractions: ['Baga & Anjuna Vibrant Beaches', 'Basilica of Bom Jesus (UNESCO)', 'Dudhsagar Waterfalls Trek', 'Palolem Crescent Beach', 'Fort Aguada & Lighthouse'],
      delicacies: ['Goan Fish Curry', 'Pork Vindaloo', 'Bebinca Dessert', 'Prawn Rava Fry']
    },
    'srinagar': {
      title: 'Jammu & Kashmir',
      tagline: '"Paradise on Earth — Valleys & Gondolas"',
      capital: 'Srinagar (Summer), Jammu (Winter)',
      bestTime: 'April se Oct (Flowers & Pleasant), Dec se Feb (Snow)',
      totalDistricts: '20',
      bannerImg: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      attractions: ['Dal Lake Shikara & Houseboats', 'Gulmarg Gondola & Skiing', 'Pahalgam Betaab Valley', 'Sonamarg Glaciers', 'Shankaracharya Temple'],
      delicacies: ['Rogan Josh', 'Kashmiri Wazwan Feast', 'Kahwa Tea', 'Modur Pulao']
    },
    'shillong': {
      title: 'Meghalaya',
      tagline: '"The Abode of Clouds & Living Root Bridges"',
      capital: 'Shillong',
      bestTime: 'October se April (Waterfalls ke liye July-Sept)',
      totalDistricts: '12',
      bannerImg: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800',
      attractions: ['Cherrapunji Nohkalikai Falls', 'Double Decker Living Root Bridge', 'Dawki Crystal Clear River', 'Mawlynnong Cleanest Village', 'Umiam Lake View'],
      delicacies: ['Jadoh Rice Dish', 'Dohneiiong Pork', 'Tungrymbai', 'Pukhlein Sweet']
    }
  };

  const weatherCoords = {
    'jaipur': { lat: 26.9124, lon: 75.7873 },
    'manali': { lat: 32.2432, lon: 77.1892 },
    'munnar': { lat: 10.0889, lon: 77.0595 },
    'goa': { lat: 15.2993, lon: 74.1240 },
    'srinagar': { lat: 34.0837, lon: 74.7973 },
    'shillong': { lat: 25.5788, lon: 91.8933 }
  };

  function getWeatherDesc(code) {
    if (code === 0) return { t: 'Clear Sky', i: '☀️' };
    if ([1, 2].includes(code)) return { t: 'Partly Cloudy', i: '🌤️' };
    if (code === 3) return { t: 'Overcast', i: '☁️' };
    if ([45, 48].includes(code)) return { t: 'Misty', i: '🌫️' };
    if ([51, 53, 55, 61, 63, 65].includes(code)) return { t: 'Rain', i: '🌧️' };
    if ([71, 73, 75, 77, 85, 86].includes(code)) return { t: 'Snow', i: '❄️' };
    return { t: 'Pleasant', i: '⛅' };
  }

  async function loadCardWeather(key, badgeEl) {
    const c = weatherCoords[key];
    if (!c || !badgeEl) return;
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${c.lat}&longitude=${c.lon}&current_weather=true`);
      const data = await res.json();
      if (data?.current_weather) {
        const info = getWeatherDesc(data.current_weather.weathercode);
        badgeEl.innerHTML = `${info.i} <b style="color:#0f172a;">${Math.round(data.current_weather.temperature)}°C</b> • ${info.t}`;
      }
    } catch (e) {
      badgeEl.innerHTML = `⛅ Live Weather`;
    }
  }

  // Dedicated Detail View Page Container
  let detailPage = document.getElementById('circuitDetailPageModal');
  if (!detailPage) {
    detailPage = document.createElement('div');
    detailPage.id = 'circuitDetailPageModal';
    detailPage.style.cssText = `
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
    document.body.appendChild(detailPage);
  }

  window.closeCircuitDetail = function () {
    detailPage.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  // Render Full Destination Details (Capital, Districts, Attractions, Delicacies)
  window.showFullDestinationDetail = function (key) {
    const data = circuitDetailsDB[key];
    if (!data) return;

    document.body.style.overflow = 'hidden';
    detailPage.style.display = 'block';
    detailPage.scrollTop = 0;

    const attractionsList = data.attractions.map(item => `
      <li style="margin-bottom:8px; display:flex; align-items:center; gap:8px;">
        <span style="color:#f59e0b;">✨</span>
        <span style="color:#f1f5f9; font-size:0.9rem;">${item}</span>
      </li>
    `).join('');

    const delicaciesList = data.delicacies.map(item => `
      <div style="background:rgba(255,255,255,0.05); padding:8px 12px; border-radius:8px; border:1px solid rgba(255,255,255,0.08); font-size:0.85rem; color:#f8fafc; font-weight:600; display:flex; align-items:center; gap:6px;">
        🍱 <span>${item}</span>
      </div>
    `).join('');

    detailPage.innerHTML = `
      <div style="max-width:540px; margin:0 auto; text-align:left;">
        
        <!-- Header -->
        <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:18px;">
          <button onclick="closeCircuitDetail()" style="background:#1e293b; border:1px solid rgba(255,255,255,0.15); color:#fff; padding:8px 18px; border-radius:8px; font-weight:700; cursor:pointer; font-size:0.9rem; display:flex; align-items:center; gap:6px;">
            ← Back
          </button>
          <span style="font-weight:800; color:#38bdf8; font-size:0.9rem;">IncredibleIndiaGuide</span>
        </div>

        <!-- Banner Card -->
        <div style="background:#0f172a; border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,0.08); margin-bottom:18px; box-shadow:0 8px 24px rgba(0,0,0,0.4);">
          <div style="position:relative; width:100%; height:190px;">
            <img src="${data.bannerImg}" style="width:100%; height:100%; object-fit:cover; display:block;" alt="${data.title}" />
            <div style="position:absolute; inset:0; background:linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(15,23,42,0.95));"></div>
            <div style="position:absolute; top:14px; left:16px;">
              <span style="background:#FF5412; color:#fff; font-size:0.68rem; font-weight:800; padding:4px 10px; border-radius:20px; text-transform:uppercase; letter-spacing:0.5px;">
                OFFICIAL TOURISM CIRCUIT
              </span>
            </div>
            <div style="position:absolute; bottom:14px; left:16px; right:16px;">
              <h1 style="margin:0; font-size:1.65rem; color:#fff; font-weight:800;">${data.title}</h1>
              <p style="margin:4px 0 0 0; color:#cbd5e1; font-size:0.83rem; font-style:italic;">${data.tagline}</p>
            </div>
          </div>

          <!-- Fast Facts -->
          <div style="padding:16px; background:#0b1329; border-top:1px solid rgba(255,255,255,0.06); display:flex; flex-direction:column; gap:8px; font-size:0.85rem;">
            <div>🏛️ <b style="color:#94a3b8;">Capital:</b> <span style="color:#fff;">${data.capital}</span></div>
            <div>🗓️ <b style="color:#94a3b8;">Best Time:</b> <span style="color:#4ade80; font-weight:600;">${data.bestTime}</span></div>
            <div>📍 <b style="color:#94a3b8;">Total Districts:</b> <span style="color:#fff;">${data.totalDistricts}</span></div>
          </div>
        </div>

        <!-- Top Attractions Highlights -->
        <div style="background:#0f172a; padding:18px; border-radius:14px; border:1px solid rgba(255,255,255,0.08); margin-bottom:18px;">
          <h3 style="margin:0 0 14px 0; font-size:1.1rem; color:#FF5412; display:flex; align-items:center; gap:6px;">
            ⭐ Top Attractions (Highlights)
          </h3>
          <ul style="list-style:none; padding:0; margin:0;">
            ${attractionsList}
          </ul>
        </div>

        <!-- Famous Delicacies (Local Cuisine) -->
        <div style="background:#0f172a; padding:18px; border-radius:14px; border:1px solid rgba(255,255,255,0.08); margin-bottom:20px;">
          <h3 style="margin:0 0 14px 0; font-size:1.1rem; color:#38bdf8; display:flex; align-items:center; gap:6px;">
            🍱 Famous Delicacies (Local Cuisine)
          </h3>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            ${delicaciesList}
          </div>
        </div>

        <!-- Action / Booking Button -->
        <button onclick="closeCircuitDetail(); if(window.openAppPage){ window.openAppPage('quote'); setTimeout(()=>{ const el=document.getElementById('tripDest')||document.getElementById('quoteDest'); if(el){ el.value='${data.title} Tour Package'; } }, 120); }" style="width:100%; background:#FF5412; border:none; color:#fff; padding:13px; border-radius:10px; font-size:0.95rem; font-weight:800; cursor:pointer; box-shadow:0 4px 14px rgba(255,84,18,0.4);">
          📝 Plan Trip to ${data.title} ›
        </button>

      </div>
    `;
  };

  function applySlider() {
    let heading = null;
    document.querySelectorAll('h1, h2, h3, h4').forEach(h => {
      const txt = (h.textContent || '').toLowerCase();
      if (txt.includes('popular travel destinations') || txt.includes('most popular')) {
        heading = h;
      }
    });

    if (!heading) return;

    const section = heading.closest('section') || heading.parentElement;
    if (!section) return;

    let cardsContainer = null;
    section.querySelectorAll('div').forEach(box => {
      if (cardsContainer) return;
      const count = Array.from(box.children).filter(ch => {
        const t = ch.textContent || '';
        return t.includes('Jaipur') || t.includes('Manali') || t.includes('Munnar') || t.includes('Goa') || t.includes('Srinagar') || t.includes('Shillong');
      }).length;
      if (count >= 2) {
        cardsContainer = box;
      }
    });

    if (!cardsContainer) return;

    if (!document.getElementById('sliderFixedStyleSheet')) {
      const style = document.createElement('style');
      style.id = 'sliderFixedStyleSheet';
      style.innerHTML = `
        .slider-scroll-track {
          display: flex !important;
          flex-direction: row !important;
          align-items: stretch !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
          scroll-snap-type: x mandatory !important;
          -webkit-overflow-scrolling: touch !important;
          gap: 16px !important;
          padding: 8px 16px 20px 16px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          scrollbar-width: none !important;
        }
        .slider-scroll-track::-webkit-scrollbar {
          display: none !important;
        }
        .slider-single-card {
          flex: 0 0 85% !important;
          max-width: 320px !important;
          min-width: 275px !important;
          height: auto !important;
          scroll-snap-align: start !important;
          margin: 0 !important;
          box-sizing: border-box !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          background: #ffffff !important;
          border-radius: 16px !important;
          overflow: hidden !important;
          box-shadow: 0 4px 18px rgba(0,0,0,0.08) !important;
          position: relative !important;
          cursor: pointer !important;
        }
        .slider-single-card img {
          width: 100% !important;
          height: 195px !important;
          object-fit: cover !important;
          display: block !important;
        }
      `;
      document.head.appendChild(style);
    }

    cardsContainer.classList.add('slider-scroll-track');

    Array.from(cardsContainer.children).forEach(card => {
      card.classList.add('slider-single-card');

      const cardText = (card.textContent || '').toLowerCase();
      let key = null;
      if (cardText.includes('jaipur')) key = 'jaipur';
      else if (cardText.includes('manali')) key = 'manali';
      else if (cardText.includes('munnar')) key = 'munnar';
      else if (cardText.includes('goa')) key = 'goa';
      else if (cardText.includes('srinagar')) key = 'srinagar';
      else if (cardText.includes('shillong') || cardText.includes('cherrapunji')) key = 'shillong';

      // Fix Meghalaya Image
      const img = card.querySelector('img');
      if (img && key === 'shillong') {
        const curSrc = img.getAttribute('src') || '';
        if (!curSrc || curSrc.includes('Dawki') || curSrc.includes('wikimedia') || img.naturalWidth === 0) {
          img.src = 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800';
        }
      }

      // DIRECT CLICK BINDING: Card ya 'Guide Dekhein' button par click karte hi direct full details khulegi
      if (key && !card.dataset.detailBound) {
        card.dataset.detailBound = key;

        card.addEventListener('click', function (e) {
          if (e.target.closest('button[class*="share"], a[href^="http"]')) return;
          e.preventDefault();
          e.stopPropagation();
          window.showFullDestinationDetail(key);
        }, true);
      }

      // Live Weather Badge
      if (key && !card.querySelector('.live-slider-weather-pill')) {
        const badge = document.createElement('div');
        badge.className = 'live-slider-weather-pill';
        badge.style.cssText = `
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #0f172a;
          font-size: 0.74rem;
          padding: 4px 10px;
          border-radius: 20px;
          margin: 6px 14px 10px 14px;
          font-weight: 600;
          align-self: flex-start;
        `;
        badge.innerHTML = `<span>⏳ Weather...</span>`;

        let bestLine = null;
        card.querySelectorAll('*').forEach(el => {
          if (!bestLine && (el.textContent || '').includes('Best:') && el.children.length <= 2) {
            bestLine = el;
          }
        });

        if (bestLine && bestLine.parentElement) {
          bestLine.parentElement.insertBefore(badge, bestLine);
        } else {
          card.appendChild(badge);
        }

        loadCardWeather(key, badge);
      }
    });

    if (!document.getElementById('sliderSwipeHintMsg')) {
      const hint = document.createElement('div');
      hint.id = 'sliderSwipeHintMsg';
      hint.style.cssText = `
        text-align: center;
        color: #FF5412;
        font-size: 0.75rem;
        font-weight: 700;
        margin-top: 4px;
        margin-bottom: 24px;
      `;
      hint.innerHTML = `⟵ Swipe horizontally to explore ⟶`;
      cardsContainer.parentNode.insertBefore(hint, cardsContainer.nextSibling);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySlider);
  } else {
    applySlider();
  }
  setTimeout(applySlider, 400);
  setTimeout(applySlider, 1000);
})();
