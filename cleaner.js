// =========================================================================
// UNIVERSAL SITE CLEANER & FULL ENGLISH TRANSLATOR (STATES, DISTRICTS & UI)
// =========================================================================

(function () {
  // 1. Dictionary: Hindi / Hinglish Words -> Proper English
  const translations = [
    // Header & Hero
    { match: /Ek Desh, Anant Rang/gi, replace: "One Nation, Infinite Colors" },
    { match: /Poora Bharat/gi, replace: "All India" },
    { match: /Kahan jana chahte hain\?/gi, replace: "Where do you want to go?" },
    { match: /Sabhi Rajya/gi, replace: "All States" },
    { match: /Sabhi Jile/gi, replace: "All Districts" },
    { match: /Khojein/gi, replace: "Explore" },

    // Categories & Filter Tabs
    { match: /Pahadi Kshetra/gi, replace: "Hill Stations & Mountains" },
    { match: /Dharohar va Mandir/gi, replace: "Heritage & Temples" },
    { match: /Samudra Tat va Dweep/gi, replace: "Beaches & Islands" },
    { match: /Vanya Jeev va Prakriti/gi, replace: "Wildlife & Nature" },
    { match: /Registan/gi, replace: "Deserts" },
    { match: /Adhyatmik Sthal/gi, replace: "Spiritual Sites" },
    { match: /Sanskritik Virasat/gi, replace: "Cultural Heritage" },

    // Card Details & Badges
    { match: /Pramukh Aakarshan/gi, replace: "Top Attractions" },
    { match: /Jane Ka Sahi Samay/gi, replace: "Best Time to Visit" },
    { match: /Kaise Pahunchein/gi, replace: "How to Reach" },
    { match: /Pahunchne ke Raste/gi, replace: "How to Reach" },
    { match: /Hawai Adda/gi, replace: "Airport" },
    { match: /Railway Station/gi, replace: "Railway Station" },
    { match: /Sarak Marg/gi, replace: "By Road" },
    { match: /Vistar Se Janein/gi, replace: "View Details" },
    { match: /Jankari Dekhein/gi, replace: "Explore Guide" },
    { match: /Khas Bat/gi, replace: "Highlights" },
    { match: /Khan-Pan/gi, replace: "Local Cuisine" },
    { match: /Mashhoor Khana/gi, replace: "Famous Dishes" },
    { match: /Khareedari/gi, replace: "Shopping & Crafts" },
    { match: /Mausam/gi, replace: "Weather & Climate" },
    { match: /Duri/gi, replace: "Distance" },

    // District & Registry Labels
    { match: /Kul Jile/gi, replace: "Total Districts" },
    { match: /Rajdhani/gi, replace: "Capital" },
    { match: /Bhasha/gi, replace: "Language" },
    { match: /Aabadi/gi, replace: "Population" },
    { match: /Kshetraphal/gi, replace: "Area" },
    { match: /Paryatan Sthal/gi, replace: "Tourist Spots" },
    { match: /Jila Guide/gi, replace: "District Guide" },

    // Support / Booking Form Labels
    { match: /Aapka Naam/gi, replace: "Your Full Name" },
    { match: /Kitne Yatri Hain\?/gi, replace: "Number of Travelers" },
    { match: /Anumanit Budget/gi, replace: "Estimated Budget" },
    { match: /Koi Khas Zarurat ya Sawal\?/gi, replace: "Special Requests or Questions?" },
    { match: /Free Travel Plan & Quote Payein/gi, replace: "Get Free Travel Plan & Quote" }
  ];

  // 2. Text node replace engine
  function walkAndTranslate(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let val = node.nodeValue;
      if (val && val.trim().length > 0) {
        translations.forEach(item => {
          if (item.match.test(val)) {
            val = val.replace(item.match, item.replace);
          }
        });
        node.nodeValue = val;
      }
    } else {
      // Input placeholders handle karein
      if (node.placeholder) {
        translations.forEach(item => {
          if (item.match.test(node.placeholder)) {
            node.placeholder = node.placeholder.replace(item.match, item.replace);
          }
        });
      }
      for (let child of node.childNodes) {
        walkAndTranslate(child);
      }
    }
  }

  // 3. UI Cleaner: Header se unwanted items remove karein
  function cleanHeader() {
    const stray = document.querySelectorAll(
      '.header-actions, .currency-select-box, .theme-toggle-btn, ' +
      'header select, .topbar-right, #hamburgerBtn, .hamburger-btn, #workingLeftHamburger'
    );
    stray.forEach(el => {
      if (!el.closest('aside, [role="dialog"], [class*="drawer"], [id*="drawer"]')) {
        el.remove();
      }
    });
  }

  function runCompleteSweep() {
    cleanHeader();
    walkAndTranslate(document.body);
  }

  // Document life cycle runs
  document.addEventListener("DOMContentLoaded", runCompleteSweep);
  window.addEventListener("load", runCompleteSweep);

  // Jab user state ya district par click kare tab dynamic cards ko bhi turant English karein
  document.addEventListener("click", () => setTimeout(runCompleteSweep, 150));
  setInterval(runCompleteSweep, 800);
})();
