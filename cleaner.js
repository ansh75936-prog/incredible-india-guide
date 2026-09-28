// =========================================================================
// UNIVERSAL SITE TRANSLATOR & REAL-TIME SANITIZER (CURRENT + FUTURE DATA)
// =========================================================================

(function () {
  // Master Comprehensive Translation Map
  const translationMap = [
    // --- Common Hinglish / Hindi Connectors & Phrases ---
    [/\bhai\b/gi, "is"],
    [/\bhain\b/gi, "are"],
    [/\bke liye\b/gi, "for"],
    [/\bse lekar\b/gi, "ranging from"],
    [/\baur\b/gi, "and"],
    [/\bya\b/gi, "or"],
    [/\bka\b|\bki\b|\bke\b/gi, "of"],
    [/\bmein\b|\bme\b/gi, "in"],
    [/\bpar\b/gi, "at"],
    [/\bse\b/gi, "from"],
    [/\bsabse\b/gi, "most"],
    [/\bprasiddh\b/gi, "famous"],
    [/\bitihasik\b/gi, "historical"],
    [/\bpramukh\b/gi, "prominent"],
    [/\bkhubsurat\b/gi, "beautiful"],
    [/\bgaye\b/gi, "visited"],
    [/\bjayein\b/gi, "visit"],
    [/\bkarein\b/gi, "explore"],
    [/\bdekhne\b/gi, "to see"],
    [/\bkripya\b/gi, "please"],
    [/\bdhyan dein\b/gi, "note"],

    // --- State, District & Regional UI ---
    [/Ek Desh, Anant Rang/gi, "One Nation, Infinite Colors"],
    [/Bharat Ki Sabse Lokpriya Yatra Sthalein/gi, "India's Most Popular Travel Destinations"],
    [/Lokpriya Yatra Sthalein/gi, "Popular Travel Destinations"],
    [/Poora Bharat/gi, "All India"],
    [/Kahan jana chahte hain\?/gi, "Where do you want to go?"],
    [/Sabhi Rajya aur Kendrashasit Pradesh/gi, "All States & Union Territories"],
    [/Sabhi Rajya/gi, "All States"],
    [/Sabhi Jile/gi, "All Districts"],
    [/Sabhi Districts & Kshetra/gi, "All Districts & Regions"],
    [/Explore Destinations Destinations(\s*Destinations)*/gi, "Explore Destinations"],
    [/Khojein/gi, "Explore"],
    [/←\s*Wapas/gi, "← Back"],
    [/Wapas/gi, "Back"],
    [/Peeche/gi, "Back"],
    [/Kul Jile/gi, "Total Districts"],
    [/Rajdhani/gi, "Capital"],
    [/Bhasha/gi, "Official Language"],
    [/Aabadi/gi, "Population"],
    [/Kshetraphal/gi, "Total Area"],
    [/Paryatan Sthal/gi, "Tourist Spots"],
    [/Jila Guide/gi, "District Guide"],
    [/Jila\b/gi, "District"],
    [/Jile\b/gi, "Districts"],
    [/Rajya\b/gi, "State"],

    // --- Guides, Facilities & Information ---
    [/Kisi bhi district par tap karein verified hotels, hospitals, photos aur food dekhne ke liye:/gi, "Tap any district to view verified hotels, hospitals, photos, and local food:"],
    [/verified hotels, hospitals, photos aur food dekhne ke liye/gi, "to view verified hotels, hospitals, photos, and food"],
    [/Pramukh Aakarshan/gi, "Top Attractions"],
    [/Jane Ka Sahi Samay/gi, "Best Time to Visit"],
    [/Kaise Pahunchein/gi, "How to Reach"],
    [/Pahunchne ke Raste/gi, "Travel Routes"],
    [/Hawai Adda/gi, "Airport"],
    [/Railway Station/gi, "Railway Station"],
    [/Sarak Marg/gi, "By Road"],
    [/Vistar Se Janein/gi, "View Details"],
    [/Jankari Dekhein/gi, "View Guide"],
    [/Khas Bat/gi, "Highlights"],
    [/Khas Baat/gi, "Key Highlights"],
    [/Prasiddh Vyanjan\s*\(Local Cuisine\)/gi, "Famous Delicacies (Local Cuisine)"],
    [/Prasiddh Vyanjan/gi, "Famous Delicacies"],
    [/Mashhoor Khana/gi, "Famous Dishes"],
    [/Khareedari/gi, "Shopping & Souvenirs"],
    [/Mausam/gi, "Weather & Climate"],
    [/Najdiki Hawai Adda/gi, "Nearest Airport"],
    [/Najdiki Railway Station/gi, "Nearest Railway Station"],
    [/Najdiki/gi, "Nearest"],
    [/Ghumne ka samay/gi, "Visiting Hours"],
    [/Entry Fees/gi, "Entry Fee"],
    [/Bina kisi shulk ke/gi, "Free Entry"],

    // --- Durations & Tour Tips ---
    [/Tour Tip:\s*(\d+)[-–](\d+)\s*Din/gi, "Tour Tip: $1-$2 Days"],
    [/(\d+)\s*Din\s*\/\s*(\d+)\s*Raat/gi, "$1 Days / $2 Nights"],
    [/(\d+)\s*Din/gi, "$1 Days"],
    [/(\d+)\s*Raat/gi, "$1 Nights"],
    [/Pahaad, jungle wildlife, chai ke baagan aur shaant backwaters ka perfect mixture\./gi, "A perfect blend of mountains, wildlife, tea plantations, and tranquil backwaters."],
    [/Ganga Aarti ki aadhyatmik oorja ke sath Himalayas ke pavitra shivalaya darshan\./gi, "Experience the spiritual bliss of Ganga Aarti alongside holy Himalayan shrines."],

    // --- Inquiry & Booking Forms ---
    [/Apna Bharat Yatra Plan Customize Karein/gi, "Customize Your India Travel Plan"],
    [/Chaahe solo backpacking ho, honeymoon, ya family tour/gi, "Whether solo backpacking, a romantic honeymoon, or a family holiday"],
    [/humari team aapke liye sateek travel plan bana kar degi\./gi, "our team will create the perfect customized travel plan for you."],
    [/Aapka Naam/gi, "Your Full Name"],
    [/WhatsApp Number/gi, "WhatsApp Phone Number"],
    [/Email Address \(Optional\)/gi, "Email Address (Optional)"],
    [/Destination \/ State/gi, "Destination / Preferred State"],
    [/Kitne Yatri Hain\?/gi, "Number of Travelers"],
    [/Anumanit Budget \(Per Person\)/gi, "Estimated Budget (Per Person)"],
    [/Anumanit Budget/gi, "Estimated Budget"],
    [/Koi Khas Zarurat ya Sawal\?/gi, "Special Requests or Questions?"],
    [/Free Travel Plan & Quote Payein/gi, "Get Free Travel Plan & Quote"],

    // --- Footer & Legal Credits ---
    [/Bharat ke har rajya, sanskriti, khan-paan aur virasat ki pramanik jankari pradan karne wala swatantra tourism portal\./gi, "An independent national tourism portal providing authentic insights across every Indian state, culture, and cuisine."],
    [/swatantra tourism portal/gi, "independent tourism portal"],
    [/Popular Circuits/gi, "Popular Circuits"]
  ];

  // Universal text processor
  function applyTranslation(text) {
    if (!text || typeof text !== 'string') return text;
    let result = text;
    translationMap.forEach(([regex, replacement]) => {
      if (regex.test(result)) {
        result = result.replace(regex, replacement);
      }
    });
    return result;
  }

  // Recursive DOM scanner
  function scanAndTranslate(node) {
    if (!node) return;

    if (node.nodeType === Node.TEXT_NODE) {
      const originalText = node.nodeValue;
      if (originalText && originalText.trim().length > 0) {
        const translated = applyTranslation(originalText);
        if (translated !== originalText) {
          node.nodeValue = translated;
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Input placeholders & labels
      if (node.placeholder) {
        node.placeholder = applyTranslation(node.placeholder);
        if (node.placeholder.includes('Rahul')) node.placeholder = "e.g. John Smith";
        if (node.placeholder.includes('Kahan')) node.placeholder = "Where do you want to go? (e.g. Manali, Goa)";
      }
      if (node.title) node.title = applyTranslation(node.title);
      if (node.getAttribute('aria-label')) {
        node.setAttribute('aria-label', applyTranslation(node.getAttribute('aria-label')));
      }

      // Children traverse karein
      let child = node.firstChild;
      while (child) {
        scanAndTranslate(child);
        child = child.nextSibling;
      }
    }
  }

  // Clean Header Clutter
  function purgeHeaderStray() {
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

  function sweepEverything() {
    purgeHeaderStray();
    scanAndTranslate(document.body);
  }

  // MutationObserver for Future & Dynamic Components
  const realTimeObserver = new MutationObserver(mutations => {
    for (let mutation of mutations) {
      for (let addedNode of mutation.addedNodes) {
        scanAndTranslate(addedNode);
      }
      if (mutation.type === 'characterData') {
        const target = mutation.target;
        const currentText = target.nodeValue;
        const translated = applyTranslation(currentText);
        if (translated !== currentText) {
          target.nodeValue = translated;
        }
      }
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    sweepEverything();
    realTimeObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  });

  window.addEventListener("load", sweepEverything);
  document.addEventListener("click", () => setTimeout(sweepEverything, 60));
  setInterval(sweepEverything, 500);
})();
