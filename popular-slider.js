// =========================================================================
// INCREDIBLE INDIA - POPULAR DESTINATIONS SLIDER WITH DIRECT FULL-DETAIL TRIGGER
// =========================================================================

(function () {
  const destinationMap = {
    'jaipur': { state: 'Rajasthan', code: 'RJ' },
    'manali': { state: 'Himachal Pradesh', code: 'HP' },
    'munnar': { state: 'Kerala', code: 'KL' },
    'goa': { state: 'Goa', code: 'GA' },
    'srinagar': { state: 'Jammu & Kashmir', code: 'JK' },
    'shillong': { state: 'Meghalaya', code: 'ML' }
  };

  const weatherCoords = {
    'jaipur': { lat: 26.9124, lon: 75.7873 },
    'manali': { lat: 32.2432, lon: 77.1892 },
    'munnar': { lat: 10.0889, lon: 77.0595 },
    'goa': { lat: 15.2993, lon: 74.1240 },
    'srinagar': { lat: 34.0837, lon: 74.7973 },
    'shillong': { lat: 25.5788, lon: 91.8933 }
  };

  const dawkiRiverFixedImage = 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800';

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

  // Open the full-detail state tourism guide page
  function openDestinationDetail(key) {
    const info = destinationMap[key];
    if (!info) return;

    if (typeof window.openStatePage === 'function') {
      window.openStatePage(info.state);
    } else if (typeof window.openAppPage === 'function') {
      window.openAppPage(info.state);
    } else {
      // Trigger native click on internal state directory buttons if present
      const stateBtn = Array.from(document.querySelectorAll('button, a')).find(el => {
        return (el.textContent || '').trim().toLowerCase() === info.state.toLowerCase();
      });
      if (stateBtn) {
        stateBtn.click();
      }
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

      // Fix Meghalaya image
      const img = card.querySelector('img');
      if (img && key === 'shillong') {
        const curSrc = img.getAttribute('src') || '';
        if (!curSrc || curSrc.includes('Dawki') || curSrc.includes('wikimedia') || img.naturalWidth === 0) {
          img.src = dawkiRiverFixedImage;
        }
      }

      // Connect Card and Guide Dekhein button to Open Full Detail Page
      const guideBtn = card.querySelector('button, a, div:has(> button)') || card.lastElementChild;
      if (key && !card.dataset.detailBound) {
        card.dataset.detailBound = key;

        // Make button and card open the respective state detail
        if (guideBtn) {
          guideBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            openDestinationDetail(key);
          });
        }

        card.addEventListener('click', function (e) {
          // If share button or direct link was clicked, allow native handling
          if (e.target.closest('button[class*="share"], a[href^="http"]')) return;
          openDestinationDetail(key);
        });
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
