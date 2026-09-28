// =========================================================================
// UNIVERSAL SITE CLEANER & FULL ENGLISH TRANSLATOR (UPDATED)
// =========================================================================

(function () {
  const translations = [
    // Navigation & Buttons
    { match: /←\s*Wapas/gi, replace: "← Back" },
    { match: /Wapas/gi, replace: "Back" },
    { match: /Khojein/gi, replace: "Explore" },
    { match: /Vistar Se Janein/gi, replace: "View Details" },
    { match: /Jankari Dekhein/gi, replace: "View Info" },

    // Cuisine & Tour Tips
    { match: /Prasiddh Vyanjan\s*\(Local Cuisine\)/gi, replace: "Famous Delicacies (Local Cuisine)" },
    { match: /Prasiddh Vyanjan/gi, replace: "Popular Delicacies" },
    { match: /Tour Tip:\s*(\d+)[-–](\d+)\s*Din/gi, replace: "Tour Tip: $1-$2 Days" },
    { match: /(\d+)\s*Din/gi, replace: "$1 Days" },
    { match: /(\d+)\s*Raat/gi, replace: "$1 Nights" },

    // Districts & State Subtitles
    { match: /Sabhi Districts & Kshetra/gi, replace: "All Districts & Regions" },
    { match: /Sabhi Jile/gi, replace: "All Districts" },
    { match: /Sabhi Rajya/gi, replace: "All States" },
    { match: /Kisi bhi district par tap karein verified hotels, hospitals, photos aur food dekhne ke liye:/gi, replace: "Tap any district to view verified hotels, hospitals, photos, and local food:" },
    { match: /verified hotels, hospitals, photos aur food dekhne ke liye/gi, replace: "to view verified hotels, hospitals, photos, and food" },

    // General Tourism Headings & Badges
    { match: /Ek Desh, Anant Rang/gi, replace: "One Nation, Infinite Colors" },
    { match: /Poora Bharat/gi, replace: "All India" },
    { match: /Kahan jana chahte hain\?/gi, replace: "Where do you want to go?" },
    { match: /Pramukh Aakarshan/gi, replace: "Top Attractions" },
    { match: /Jane Ka Sahi Samay/gi, replace: "Best Time to Visit" },
    { match: /Kaise Pahunchein/gi, replace: "How to Reach" },
    { match: /Pahunchne ke Raste/gi, replace: "Travel Routes" },
    { match: /Hawai Adda/gi, replace: "Airport" },
    { match: /Railway Station/gi, replace: "Railway Station" },
    { match: /Sarak Marg/gi, replace: "By Road" },
    { match: /Khas Bat/gi, replace: "Highlights" },
    { match: /Khan-Pan/gi, replace: "Local Cuisine" },
    { match: /Khareedari/gi, replace: "Shopping & Souvenirs" },
    { match: /Mausam/gi, replace: "Weather" },
    { match: /Kul Jile/gi, replace: "Total Districts" },
    { match: /Rajdhani/gi, replace: "Capital" },
    { match: /Bhasha/gi, replace: "Language" },
    { match: /Aabadi/gi, replace: "Population" },
    { match: /Kshetraphal/gi, replace: "Area" },

    // Booking & Support Form
    { match: /Aapka Naam/gi, replace: "Your Full Name" },
    { match: /Kitne Yatri Hain\?/gi, replace: "Number of Travelers" },
    { match: /Anumanit Budget/gi, replace: "Estimated Budget" },
    { match: /Koi Khas Zarurat ya Sawal\?/gi, replace: "Special Requests or Questions?" },
    { match: /Free Travel Plan & Quote Payein/gi, replace: "Get Free Travel Plan & Quote" }
  ];

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

  document.addEventListener("DOMContentLoaded", runCompleteSweep);
  window.addEventListener("load", runCompleteSweep);
  document.addEventListener("click", () => setTimeout(runCompleteSweep, 100));
  setInterval(runCompleteSweep, 500);
})();
