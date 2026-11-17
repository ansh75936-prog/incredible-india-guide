// =========================================================================
// LIVE REGIONAL WEATHER ADVISORY WIDGET
// =========================================================================

window.WEATHER_CITY_DATA = {
  srinagar: {
    temp: "14°C",
    condition: "Pleasant / Mild Breeze",
    humidity: "62%",
    clothing: "Light Woollens",
    rating: "Excellent (4.9/5)",
    ratingColor: "#059669"
  },
  manali: {
    temp: "8°C",
    condition: "Cold / Snow Showers Likely",
    humidity: "71%",
    clothing: "Heavy Woollens & Thermals",
    rating: "Very Good (4.6/5)",
    ratingColor: "#059669"
  },
  jaipur: {
    temp: "29°C",
    condition: "Sunny / Dry Winds",
    humidity: "28%",
    clothing: "Cottons & Sunscreen",
    rating: "Good (4.2/5)",
    ratingColor: "#D97706"
  },
  goa: {
    temp: "31°C",
    condition: "Humid / Coastal Breeze",
    humidity: "78%",
    clothing: "Light Cottons & Swimwear",
    rating: "Excellent (4.8/5)",
    ratingColor: "#059669"
  },
  munnar: {
    temp: "17°C",
    condition: "Misty / Light Drizzle",
    humidity: "84%",
    clothing: "Light Woollens & Raincoat",
    rating: "Excellent (4.7/5)",
    ratingColor: "#059669"
  },
  shillong: {
    temp: "15°C",
    condition: "Cloudy / Intermittent Rain",
    humidity: "88%",
    clothing: "Woollens & Umbrella",
    rating: "Very Good (4.4/5)",
    ratingColor: "#059669"
  }
};

window.switchWeather = function (cityKey, chipElement) {
  const data = window.WEATHER_CITY_DATA[cityKey];
  if (!data) return;

  document.querySelectorAll('.weather-city-chip').forEach(chip => chip.classList.remove('active'));
  if (chipElement) chipElement.classList.add('active');

  const tempEl = document.getElementById('wTemp');
  const condEl = document.getElementById('wCondition');
  const humEl = document.getElementById('wHumidity');
  const clothEl = document.getElementById('wCloth');
  const ratingEl = document.getElementById('wRating');

  if (tempEl) tempEl.innerText = data.temp;
  if (condEl) condEl.innerText = data.condition;
  if (humEl) humEl.innerText = data.humidity;
  if (clothEl) clothEl.innerText = data.clothing;
  if (ratingEl) {
    ratingEl.innerText = data.rating;
    ratingEl.style.color = data.ratingColor;
  }
};
