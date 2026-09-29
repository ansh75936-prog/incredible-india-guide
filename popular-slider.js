// =========================================================================
// INCREDIBLE INDIA - POPULAR DESTINATIONS SLIDER WITH LIVE WEATHER
// =========================================================================

(function () {
  // Destination Coordinates for Live Real-Time Weather
  const weatherLocations = {
    'jaipur': { lat: 26.9124, lon: 75.7873, name: 'Jaipur' },
    'manali': { lat: 32.2432, lon: 77.1892, name: 'Manali' },
    'munnar': { lat: 10.0889, lon: 77.0595, name: 'Munnar' },
    'goa': { lat: 15.2993, lon: 74.1240, name: 'Goa' },
    'srinagar': { lat: 34.0837, lon: 74.7973, name: 'Srinagar' },
    'shillong': { lat: 25.5788, lon: 91.8933, name: 'Shillong' }
  };

  // Weather Code Interpreter
  function interpretWeather(code) {
    if (code === 0) return { text: 'Clear Sky', icon: '☀️' };
    if ([1, 2].includes(code)) return { text: 'Partly Cloudy', icon: '🌤️' };
    if (code === 3) return { text: 'Overcast', icon: '☁️' };
    if ([45, 48].includes(code)) return { text: 'Misty / Fog', icon: '🌫️' };
    if ([51, 53, 55, 61, 63, 65].includes(code)) return { text: 'Rain Showers', icon: '🌧️' };
    if ([71, 73, 75, 77, 85, 86].includes(code)) return { text: 'Snowfall', icon: '❄️' };
    if ([95, 96, 99].includes(code)) return { text: 'Thunderstorm', icon: '⛈️' };
    return { text: 'Pleasant', icon: '⛅' };
  }

  // Fetch real-time weather from Open-Meteo
  async function fetchLiveWeather(key, badgeEl) {
    const loc = weatherLocations[key];
    if (!loc || !badgeEl) return;

    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current_weather=true`);
      const data = await res.json();
      if (data && data.current_weather) {
        const temp = Math.round(data.current_weather.temperature);
        const wInfo = interpretWeather(data.current_weather.weathercode);
        
        badgeEl.innerHTML = `
          <span style="font-size:0.95rem;">${wInfo.icon}</span>
          <b style="color:#fff; font-size:0.82rem;">${temp}°C</b>
          <span style="color:#94a3b8; font-size:0.75rem;">• ${wInfo.text}</span>
        `;
      }
    } catch (err) {
      badgeEl.innerHTML = `<span style="color:#94a3b8; font-size:0.75rem;">⛅ Live Weather</span>`;
    }
  }

  function initPopularSlider() {
    let targetHeading = null;
    document.querySelectorAll('h1, h2, h3, h4, span, div').forEach(el => {
      const txt = (el.textContent || '').trim().toLowerCase();
      if (txt.includes('popular travel destinations') || txt.includes("most popular")) {
        if (!targetHeading || el.offsetHeight > 0) {
          targetHeading = el;
        }
      }
    });

    if (!targetHeading) return;

    const parentSection = targetHeading.closest('section') || targetHeading.closest('div[class*="section"]') || targetHeading.parentElement;
    if (!parentSection) return;

    const cards = [];
    parentSection.querySelectorAll('div, article').forEach(el => {
      const text = el.textContent || '';
      if (
        (text.includes('Guide Dekhein') || text.includes('Best:')) &&
        (text.includes('Jaipur') || text.includes('Manali') || text.includes('Munnar') || text.includes('Goa') || text.includes('Srinagar') || text.includes('Shillong'))
      ) {
        let cardBox = el;
        while (cardBox.parentElement && cardBox.parentElement !== parentSection && !cardBox.parentElement.classList.contains('section-wrap')) {
          if (cardBox.parentElement.children.length > 1) {
            break;
          }
          cardBox = cardBox.parentElement;
        }
        if (!cards.includes(cardBox)) {
          cards.push(cardBox);
        }
      }
    });

    if (cards.length === 0) return;

    let sliderTrack = document.getElementById('popularSliderTrack');
    if (!sliderTrack) {
      sliderTrack = document.createElement('div');
      sliderTrack.id = 'popularSliderTrack';
      const firstCard = cards[0];
      firstCard.parentNode.insertBefore(sliderTrack, firstCard);
    }

    sliderTrack.style.cssText = `
      display: flex !important;
      flex-direction: row !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      scroll-snap-type: x mandatory !important;
      -webkit-overflow-scrolling: touch !important;
      gap: 16px !important;
      padding: 10px 16px 20px 16px !important;
      margin-left: -16px !important;
      margin-right: -16px !important;
      scrollbar-width: none !important;
      box-sizing: border-box !important;
    `;

    cards.forEach(card => {
      sliderTrack.appendChild(card);
      card.style.cssText += `
        flex: 0 0 82% !important;
        max-width: 320px !important;
        min-width: 275px !important;
        scroll-snap-align: start !important;
        margin: 0 !important;
        box-sizing: border-box !important;
        border-radius: 16px !important;
        position: relative !important;
      `;

      // Card ke andar destination pehchan kar Live Weather Badge insert karein
      const cardText = (card.textContent || '').toLowerCase();
      let locKey = null;
      if (cardText.includes('jaipur')) locKey = 'jaipur';
      else if (cardText.includes('manali')) locKey = 'manali';
      else if (cardText.includes('munnar')) locKey = 'munnar';
      else if (cardText.includes('goa')) locKey = 'goa';
      else if (cardText.includes('srinagar')) locKey = 'srinagar';
      else if (cardText.includes('shillong')) locKey = 'shillong';

      if (locKey && !card.querySelector('.live-card-weather-badge')) {
        const badge = document.createElement('div');
        badge.className = 'live-card-weather-badge';
        badge.style.cssText = `
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          padding: 6px 12px;
          border-radius: 20px;
          margin: 10px 0 6px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.25);
        `;
        badge.innerHTML = `<span style="color:#94a3b8; font-size:0.75rem;">Fetching live weather...</span>`;

        // Card ke text content ke upar ya title ke theek niche insert karein
        const contentBox = card.querySelector('h2, h3, h4')?.parentElement || card;
        const targetTitle = card.querySelector('h2, h3, h4');
        if (targetTitle && targetTitle.nextSibling) {
          contentBox.insertBefore(badge, targetTitle.nextSibling);
        } else {
          card.appendChild(badge);
        }

        fetchLiveWeather(locKey, badge);
      }
    });

    if (!document.getElementById('sliderScrollHideStyle')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'sliderScrollHideStyle';
      styleEl.innerHTML = `
        #popularSliderTrack::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
      `;
      document.head.appendChild(styleEl);
    }

    if (!document.getElementById('sliderSwipeIndicator')) {
      const indicator = document.createElement('div');
      indicator.id = 'sliderSwipeIndicator';
      indicator.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        font-size: 0.76rem;
        color: #FF5412;
        font-weight: 700;
        margin-top: -6px;
        margin-bottom: 22px;
        letter-spacing: 0.3px;
      `;
      indicator.innerHTML = `<span>⟵ Swipe to explore all 6 destinations ⟶</span>`;
      sliderTrack.parentNode.insertBefore(indicator, sliderTrack.nextSibling);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPopularSlider);
  } else {
    initPopularSlider();
  }
  setTimeout(initPopularSlider, 600);
  setTimeout(initPopularSlider, 1500);
})();
