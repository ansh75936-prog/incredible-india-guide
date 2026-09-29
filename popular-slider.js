// =========================================================================
// INCREDIBLE INDIA - POPULAR DESTINATIONS SLIDER (IMAGE & BADGE FIX)
// =========================================================================

(function () {
  const weatherCoords = {
    'jaipur': { lat: 26.9124, lon: 75.7873 },
    'manali': { lat: 32.2432, lon: 77.1892 },
    'munnar': { lat: 10.0889, lon: 77.0595 },
    'goa': { lat: 15.2993, lon: 74.1240 },
    'srinagar': { lat: 34.0837, lon: 74.7973 },
    'shillong': { lat: 25.5788, lon: 91.8933 }
  };

  // Reliable Direct CDN Images (No hotlink blocks)
  const reliableImages = {
    'shillong': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Umngot_river_Dawki_Meghalaya.jpg/800px-Umngot_river_Dawki_Meghalaya.jpg',
    'jaipur': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amber_Fort_Jaipur_India.jpg/800px-Amber_Fort_Jaipur_India.jpg',
    'manali': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Solang_Valley_Himachal_Pradesh.jpg/800px-Solang_Valley_Himachal_Pradesh.jpg',
    'munnar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Munnar_tea_plantations.jpg/800px-Munnar_tea_plantations.jpg',
    'goa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Palolem_beach_Goa.jpg/800px-Palolem_beach_Goa.jpg',
    'srinagar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Dal_Lake_Srinagar_Kashmir.jpg/800px-Dal_Lake_Srinagar_Kashmir.jpg'
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
        }
        .slider-single-card img {
          width: 100% !important;
          height: 195px !important;
          object-fit: cover !important;
          display: block !important;
          background: #e2e8f0 !important;
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

      // Fix ONLY Broken Images safely via onerror
      const img = card.querySelector('img');
      if (img && key) {
        img.onerror = function () {
          this.onerror = null;
          this.src = reliableImages[key];
        };
        // Agar src pehle se broken Dawki wala hai ya load fail hua ho
        const currentSrc = img.getAttribute('src') || '';
        if (currentSrc.includes('Dawki') || currentSrc.includes('unsplash.com')) {
          img.src = reliableImages[key];
        }
      }

      // Live Weather Badge Placement (Inside White Card Body, above 'Best:' row)
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

        // Card ke andar "Best:" wala element locate karein
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
