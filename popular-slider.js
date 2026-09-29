// =========================================================================
// INCREDIBLE INDIA - POPULAR DESTINATIONS HORIZONTAL SLIDER (SAFE DOM VERSION)
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

  function getWeatherDesc(code) {
    if (code === 0) return { t: 'Clear Sky', i: '☀️' };
    if ([1, 2].includes(code)) return { t: 'Partly Cloudy', i: '🌤️' };
    if (code === 3) return { t: 'Overcast', i: '☁️' };
    if ([45, 48].includes(code)) return { t: 'Misty', i: '🌫️' };
    if ([51, 53, 55, 61, 63, 65].includes(code)) return { t: 'Rain Showers', i: '🌧️' };
    if ([71, 73, 75, 77, 85, 86].includes(code)) return { t: 'Snowfall', i: '❄️' };
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
        badgeEl.innerHTML = `${info.i} <b style="color:#fff;">${Math.round(data.current_weather.temperature)}°C</b> • ${info.t}`;
      }
    } catch (e) {
      badgeEl.innerHTML = `⛅ Live Mausam`;
    }
  }

  function applySlider() {
    // 1. Heading locate karein
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

    // 2. Sirf pure cards ke common parent grid container ko slider style dein
    // Bina DOM nodes ko tode ya chhede!
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

    // Pure container ko directly horizontal touch swipe banayein
    cardsContainer.style.setProperty('display', 'flex', 'important');
    cardsContainer.style.setProperty('flex-direction', 'row', 'important');
    cardsContainer.style.setProperty('overflow-x', 'auto', 'important');
    cardsContainer.style.setProperty('overflow-y', 'hidden', 'important');
    cardsContainer.style.setProperty('scroll-snap-type', 'x mandatory', 'important');
    cardsContainer.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
    cardsContainer.style.setProperty('gap', '16px', 'important');
    cardsContainer.style.setProperty('padding', '10px 16px 20px 16px', 'important');
    cardsContainer.style.setProperty('margin-left', '-16px', 'important');
    cardsContainer.style.setProperty('margin-right', '-16px', 'important');
    cardsContainer.style.setProperty('scrollbar-width', 'none', 'important');

    // Har card ko carousel card shape dein (image bilkul safe rahegi)
    Array.from(cardsContainer.children).forEach(card => {
      card.style.setProperty('flex', '0 0 82%', 'important');
      card.style.setProperty('max-width', '320px', 'important');
      card.style.setProperty('min-width', '280px', 'important');
      card.style.setProperty('scroll-snap-align', 'start', 'important');
      card.style.setProperty('margin', '0', 'important');
      card.style.setProperty('box-sizing', 'border-box', 'important');

      // Live weather badge add karein
      const cardText = (card.textContent || '').toLowerCase();
      let key = null;
      if (cardText.includes('jaipur')) key = 'jaipur';
      else if (cardText.includes('manali')) key = 'manali';
      else if (cardText.includes('munnar')) key = 'munnar';
      else if (cardText.includes('goa')) key = 'goa';
      else if (cardText.includes('srinagar')) key = 'srinagar';
      else if (cardText.includes('shillong')) key = 'shillong';

      if (key && !card.querySelector('.live-slider-weather-pill')) {
        const badge = document.createElement('div');
        badge.className = 'live-slider-weather-pill';
        badge.style.cssText = `
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(15, 23, 42, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(6px);
          color: #38bdf8;
          font-size: 0.76rem;
          padding: 5px 12px;
          border-radius: 20px;
          margin: 6px 0 10px 0;
          font-weight: 600;
        `;
        badge.innerHTML = `<span>⏳ Loading weather...</span>`;

        const guideBtn = card.querySelector('button, a[class*="guide"], div:has(> *:contains("Guide"))') || card.lastElementChild;
        if (guideBtn && guideBtn.parentElement) {
          guideBtn.parentElement.insertBefore(badge, guideBtn);
        } else {
          card.appendChild(badge);
        }

        loadCardWeather(key, badge);
      }
    });

    // Swipe hint indicator
    if (!document.getElementById('sliderSwipeHintMsg')) {
      const hint = document.createElement('div');
      hint.id = 'sliderSwipeHintMsg';
      hint.style.cssText = `
        text-align: center;
        color: #FF5412;
        font-size: 0.76rem;
        font-weight: 700;
        margin-top: -6px;
        margin-bottom: 22px;
      `;
      hint.innerHTML = `⟵ Swipe horizontally to view all 6 destinations ⟶`;
      cardsContainer.parentNode.insertBefore(hint, cardsContainer.nextSibling);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySlider);
  } else {
    applySlider();
  }
  setTimeout(applySlider, 600);
  setTimeout(applySlider, 1200);
})();
