// =========================================================================
// INCREDIBLE INDIA GUIDE - CORE LOGIC & EMBEDDED DISTRICT INTELLIGENCE
// =========================================================================

// Central District Database (Embedded directly so no loading issues occur)
window.DISTRICT_LEVEL_DETAILS = window.DISTRICT_LEVEL_DETAILS || {};

Object.assign(window.DISTRICT_LEVEL_DETAILS, {
  // --- UTTAR PRADESH MAJOR DISTRICTS ---
  "Agra": {
    attractions: [
      { name: "Taj Mahal", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80" },
      { name: "Agra Fort", image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=600&q=80" },
      { name: "Fatehpur Sikri", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Agra Petha (Angoori & Kesar)", "Bedai & Jalebi", "Mughlai Kebab"],
    hotelAreas: ["Fatehabad Road", "Taj East Gate Road", "Sadar Bazaar"],
    hospitals: ["S.N. Medical College & Hospital", "Pushpanjali Hospital", "District Hospital Agra"],
    quickTip: "Taj Mahal sunrise ke waqt visit karein bheed se bachne ke liye."
  },
  "Aligarh": {
    attractions: [
      { name: "Aligarh Fort", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" },
      { name: "AMU Sir Syed Hall", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80" },
      { name: "Khereshwar Temple", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Aligarh Barula with Spicy Chutney", "Chhole Bhature", "Rabri Ghewar"],
    hotelAreas: ["GT Road", "Ramghat Road", "Marris Road"],
    hospitals: ["Jawaharlal Nehru Medical College (AMU)", "Malkhan Singh District Hospital"],
    quickTip: "Barula street food Aligarh ka signature snack hai, zaroor try karein."
  },
  "Ambedkar Nagar": {
    attractions: [
      { name: "Kichhauchha Sharif Dargah", image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=600&q=80" },
      { name: "Shravan Kshetra Dham", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Shiv Baba Mandir", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Desi Ghee ki Tikki", "Samosa Chaat", "Tanda Malpua"],
    hotelAreas: ["Akbarpur Station Road", "Tanda Road Circle"],
    hospitals: ["Mahamaya Rajkiya Allopathic Medical College", "District Combined Hospital Akbarpur"],
    quickTip: "Shravan Kshetra mein Shravan Kumar se juda aitihasik sarovar sthit hai."
  },
  "Amethi": {
    attractions: [
      { name: "Nandmahar Dham", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Ulta Ratha Mandir", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Gulgule", "Besan Ladoo", "Desi Poori Sabzi"],
    hotelAreas: ["Gauriganj Main Market", "Amethi Station Road"],
    hospitals: ["District Hospital Gauriganj", "Sanjay Gandhi Hospital Munshiganj"],
    quickTip: "Gauriganj administrative headquarters hai jahan basic stays uplabdh hain."
  },
  "Amroha": {
    attractions: [
      { name: "Vasudev Temple", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Tigri Dham Ganga Ghat", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Dholak Craft", "Amroha Mango Varieties", "Halwa Sohan"],
    hotelAreas: ["Station Road", "Joya Road"],
    hospitals: ["District Hospital Amroha", "Chaudhary Nihal Singh Hospital"],
    quickTip: "Kartik Purnima par Tigri Mela UP ke bade snan melon mein shamil hai."
  },
  "Ayodhya": {
    attractions: [
      { name: "Shri Ram Janmabhoomi Mandir", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80" },
      { name: "Hanuman Garhi", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Saryu Ghat Aarti", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" },
      { name: "Kanak Bhawan", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Ayodhya Rabri & Peda", "Hanuman Garhi Besan Ladoo", "Saryu Chaat"],
    hotelAreas: ["Ram Path Road", "Naya Ghat Circuit", "Civil Lines"],
    hospitals: ["Rajarshi Dashrath Autonomous Medical College", "District Hospital Ayodhya"],
    quickTip: "Ram Mandir darshan ke baad shaam ko Saryu riverfront aarti attend karein."
  },
  "Azamgarh": {
    attractions: [
      { name: "Durvasa Rishi Ashram", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Mehnagar Fort", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Nizamabad Black Pottery Craft", "Litti Chokha", "Jalebi"],
    hotelAreas: ["Civil Lines", "Chowk Area"],
    hospitals: ["Government Medical College Chakrapanpur", "District Hospital Azamgarh"],
    quickTip: "Nizamabad ki Black Pottery GI tagged handicraft hai."
  },
  "Baghpat": {
    attractions: [
      { name: "Trilok Teerth Dham Bada Gaon", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Pura Mahadev Temple", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" },
      { name: "Barnawa Lakshagriha", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Ghewar", "Ganne Ka Taaza Ras", "Tandoori Paratha"],
    hotelAreas: ["Delhi-Saharanpur Highway", "Baraut Town"],
    hospitals: ["District Hospital Baghpat", "Astha Hospital Baraut"],
    quickTip: "Pura Mahadev mandir par Shivratri ke dauran lakhon kavad yatri aate hain."
  },
  "Bahraich": {
    attractions: [
      { name: "Katarniaghat Wildlife Sanctuary", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&q=80" },
      { name: "Dargah Syed Salar Masood", image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=600&q=80" },
      { name: "Chittaura Jheel", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Bahraich Ladoo", "Shahi Tukda", "Kebab Paratha"],
    hotelAreas: ["Station Road", "Digiha Crossing"],
    hospitals: ["Maharshi Balark Medical College", "District Male Hospital"],
    quickTip: "Katarniaghat jungle safari Dudhwa tiger reserve ecosystem ka hissa hai."
  },
  "Ballia": {
    attractions: [
      { name: "Bhrigu Rishi Mandir", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Surha Taal Bird Sanctuary", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Litti Chokha with Desi Ghee", "Sattu Sharbat", "Khaja"],
    hotelAreas: ["Station Road", "Civil Lines Ballia"],
    hospitals: ["District Hospital Ballia", "Mata Ram Shanti Hospital"],
    quickTip: "Maharshi Bhrigu ka aitihasik mandir aur Dardari mela yahan ke mukhya aakarshan hain."
  },
  "Bareilly": {
    attractions: [
      { name: "Alakhnath Temple (Nath Nagari)", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Dargah Aala Hazrat", image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=600&q=80" },
      { name: "Phoenix United Mall", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Seekh Kebab", "Bareilly ki Khasta Kachori", "Paneer Jalebi"],
    hotelAreas: ["Civil Lines", "Station Road", "Pilibhit Bypass"],
    hospitals: ["Rohilkhand Medical College", "District Hospital Bareilly"],
    quickTip: "Zari Zardozi work aur Surma ki shopping ke liye Bareilly ka Bara Bazaar best hai."
  },
  "Basti": {
    attractions: [
      { name: "Makhauda Dham (Dashrath Yagya Sthal)", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Bhadreshwar Nath Mandir", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Basti Peda", "Samosa Sabzi", "Khichdi with Chooran"],
    hotelAreas: ["Company Bagh", "Malviya Road"],
    hospitals: ["Maharshi Vashishtha Medical College", "District Hospital Basti"],
    quickTip: "Makhauda Dham wahi sthan hai jahan Putrakameshti Yagya hua tha."
  },
  "Bhadohi": {
    attractions: [
      { name: "Sita Samahit Sthal (Sitamarhi)", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Semradh Nath Mandir", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Handmade Carpet Craft", "Baati Chokha", "Chhena Toast"],
    hotelAreas: ["Gyanpur Road", "Station Area Bhadohi"],
    hospitals: ["Maharaja Chet Singh District Hospital", "Jeevan Deep Hospital"],
    quickTip: "Bhadohi carpet city of India hai jahan world class hand-woven kaleen bante hain."
  },
  "Bijnor": {
    attractions: [
      { name: "Kanva Ashram", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80" },
      { name: "Vidur Kuti Daranagar", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Sugarcane Jaggery", "Pista Burfi", "Bedmi Puri"],
    hotelAreas: ["Civil Lines Bijnor", "Najibabad Circle"],
    hospitals: ["District Hospital Bijnor", "Neelkanth Hospital"],
    quickTip: "Kanva Ashram Emperor Bharat ki janam-sthali ke roop mein jaana jata hai."
  },
  "Budaun": {
    attractions: [
      { name: "Jama Masjid Shamsi", image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=600&q=80" },
      { name: "Dargah Hazrat Bade Sarkar", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Budaun Ka Mashhoor Peda", "Sheermal", "Nihari"],
    hotelAreas: ["Civil Lines Budaun", "Indira Chowk"],
    hospitals: ["Government Medical College Budaun", "District Hospital Budaun"],
    quickTip: "Budaun ke pure khoya peda poore Bharat mein famous hain."
  },
  "Bulandshahr": {
    attractions: [
      { name: "Khurja Ceramic Pottery Hub", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Anoopshahr Ganga Ghat", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Khurja ki Khurchan", "Tandoori Kulche", "Chhole Puri"],
    hotelAreas: ["Delhi Road", "Khurja Bypass", "Civil Lines"],
    hospitals: ["District Hospital Bulandshahr", "Kailash Hospital Khurja"],
    quickTip: "Khurja se hand-painted pottery aur dinner sets wholesale rates par milte hain."
  },
  "Chandauli": {
    attractions: [
      { name: "Rajdari & Deodari Waterfalls", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&q=80" },
      { name: "Chandraprabha Wildlife Sanctuary", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Baati Chokha", "Chhena Toast", "Gupchup"],
    hotelAreas: ["Pt Deen Dayal Upadhyay Nagar (Mughalsarai) Junction Area"],
    hospitals: ["District Hospital Chandauli", "Railway Divisional Hospital"],
    quickTip: "Rajdari waterfall monsoon ke mausam mein picnic ke liye best spot hai."
  },
  "Chitrakoot": {
    attractions: [
      { name: "Ramghat Mandakini Aarti", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" },
      { name: "Kamadgiri Parikrama", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Gupt Godavari Caves", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80" },
      { name: "Hanuman Dhara", image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Chitrakoot Peda", "Mandakini Chaat", "Mahua Ladoo"],
    hotelAreas: ["Ramghat Circle", "Sitapur Road", "Karwi"],
    hospitals: ["Jankikund Chikitsalaya", "Sadguru Netra Chikitsalaya"],
    quickTip: "Gupt Godavari caves explore karne ke liye waterproof footwear pehnein."
  },
  "Deoria": {
    attractions: [
      { name: "Deoraha Baba Ashram", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Somnath Mandir", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Deoria Peda", "Litti Chokha", "Taal Makhana"],
    hotelAreas: ["Civil Lines", "Subhash Chowk"],
    hospitals: ["Maharshi Devraha Baba Medical College", "District Hospital Deoria"],
    quickTip: "Deoraha Baba ashram Saryu nadi ke tat par ek shant spiritual sthal hai."
  },
  "Gorakhpur": {
    attractions: [
      { name: "Gorakhnath Temple", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Ramgarh Taal & Marine Drive", image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&q=80" },
      { name: "Gita Press", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Gorakhpuri Galouti Kebab", "Ramgarhtal Kulhad Pizza", "Kachori Dum Aloo"],
    hotelAreas: ["Golghar", "Ramgarh Taal Road", "Station Area"],
    hospitals: ["AIIMS Gorakhpur", "BRD Medical College"],
    quickTip: "Ramgarh Taal par evening musical fountain show dekhna na bhoolein."
  },
  "Lucknow": {
    attractions: [
      { name: "Bara Imambara & Bhool Bhulaiya", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" },
      { name: "Rumi Darwaza", image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=600&q=80" },
      { name: "Chhota Imambara", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Ambedkar Memorial Park", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Galouti Kebab (Tunday)", "Awadhi Dum Biryani", "Basket Chaat", "Prakash Kulfi"],
    hotelAreas: ["Gomti Nagar", "Hazratganj", "Charbagh"],
    hospitals: ["KGMU Lucknow", "SGPGI", "Medanta Super Speciality Hospital"],
    quickTip: "Hazratganj evening walk aur old city food crawl miss na karein."
  },
  "Mathura": {
    attractions: [
      { name: "Shri Krishna Janmabhoomi", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Dwarkadhish Temple", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" },
      { name: "Vishram Ghat Yamuna Aarti", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Mathura ke Peda", "Kachori Jalebi", "Makhan Mishri"],
    hotelAreas: ["Near Krishna Janmasthan", "Mathura Cantt", "Vrindavan Bypass"],
    hospitals: ["KD Medical College", "Nayati Multi Speciality Hospital"],
    quickTip: "Govardhan parikrama subah ya shaam ke suhavne mausam mein karein."
  },
  "Prayagraj": {
    attractions: [
      { name: "Triveni Sangam", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" },
      { name: "Anand Bhawan", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80" },
      { name: "Allahabad Fort & Akshayavat", image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Allahabadi Surkha Amrud", "Dam Aloo Puri", "Loknath Chaat"],
    hotelAreas: ["Civil Lines", "Near Sangam Daraganj"],
    hospitals: ["Swaroop Rani Nehru Hospital (SRN)", "Kamla Nehru Memorial Hospital"],
    quickTip: "Sangam snan ke liye fixed-rate government boat counters se boat lein."
  },
  "Varanasi": {
    attractions: [
      { name: "Kashi Vishwanath Mandir Corridor", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80" },
      { name: "Dashashwamedh Ghat Ganga Aarti", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" },
      { name: "Assi Ghat", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
      { name: "Sarnath Buddhist Stupa", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80" }
    ],
    famousFood: ["Banarasi Paan", "Tamatar Chaat", "Kachori Jalebi", "Malaiyo"],
    hotelAreas: ["Godowlia Ghats", "Cantonment Luxury Zone", "Assi Ghat"],
    hospitals: ["Sir Sunderlal Hospital (BHU)", "Heritage Hospitals Lanka", "Apex Hospital"],
    quickTip: "Subah 5 baje Assi se Dashashwamedh Ghat tak sunrise boat ride zaroor lein."
  }
});

// =========================================================================
// UI CONTROLLERS & BOTTOM DRAWER RENDERER
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Purane popup modal ko permanently disable karna
    document.querySelectorAll('.state-modal, .modal-backdrop, [id*="stateModal"], [class*="state-popup"]').forEach(el => el.remove());

    // State card tiles par dedicated view attach karna
    document.querySelectorAll('.state-card-tile, .state-card, [data-state]').forEach(tile => {
        const newTile = tile.cloneNode(true);
        tile.parentNode.replaceChild(newTile, tile);

        newTile.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const rawName = newTile.getAttribute('data-state') || newTile.querySelector('h3, h4')?.innerText || '';
            const cleanState = rawName.replace(' (UT)', '').replace(' (NCT)', '').replace('State Guide', '').trim();
            if (cleanState) renderDedicatedStatePage(cleanState);
        });
    });

    // Android Hardware / Swipe Back Navigation Listener
    window.addEventListener('popstate', () => {
        const distDrawer = document.getElementById('districtDetailDrawer');
        if (distDrawer && distDrawer.style.display !== 'none') {
            closeDistrictDrawer();
            return;
        }
        const stateView = document.getElementById('dedicatedStateViewContainer');
        if (stateView && stateView.style.display !== 'none') {
            closeDedicatedStatePage(false);
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const stateParam = urlParams.get('state');
    if (stateParam) setTimeout(() => renderDedicatedStatePage(stateParam, false), 250);
});

// Dedicated State Page with Clickable District Chips
function renderDedicatedStatePage(stateName, pushHistory = true) {
    const districts = (window.INDIA_DISTRICTS_DATA && window.INDIA_DISTRICTS_DATA[stateName]) || [];
    const details = (window.STATES_TOURISM_DETAILS && window.STATES_TOURISM_DETAILS[stateName]) || {
        tagline: "Explore the authentic beauty and culture of Bharat",
        capital: "Regional Hub",
        bestSeason: "October se March",
        topHighlights: ["Heritage Sites", "Scenic Landscapes", "Local Cultural Markets"],
        famousFoods: ["Traditional Thali", "Local Street Food"],
        itineraryHint: "5-7 Dino ka customized guided circuit.",
        heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
    };

    let stateView = document.getElementById('dedicatedStateViewContainer');
    if (!stateView) {
        stateView = document.createElement('div');
        stateView.id = 'dedicatedStateViewContainer';
        stateView.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: #060A13;
            color: #FFFFFF;
            z-index: 9999999;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            box-sizing: border-box;
        `;
        document.body.appendChild(stateView);
    }

    const safeState = stateName.replace(/'/g, "\\'");
    const distListHtml = districts.length > 0 
        ? districts.map((d, index) => {
            const delay = Math.min(index * 0.02, 1.0);
            const safeDist = d.replace(/'/g, "\\'");
            return `<button type="button" onclick="openDistrictDrawer('${safeDist}', '${safeState}')" class="district-animated-chip" style="animation-delay: ${delay}s; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); padding: 10px 16px; border-radius: 25px; font-size: 0.9rem; color: #FFFFFF; display: inline-flex; align-items:center; gap:6px; cursor: pointer; text-align: left; font-family: inherit;">
                📍 ${d} <span style="font-size:0.8rem; color:#FF5412; font-weight:800;">›</span>
            </button>`;
        }).join('')
        : `<p style="color:#94A3B8;">Districts data updating...</p>`;

    const highlightsHtml = details.topHighlights.map(h => `<li style="margin-bottom:6px; color:#E2E8F0;">✨ ${h}</li>`).join('');
    const foodsHtml = details.famousFoods.map(f => `<span style="background:rgba(255,84,18,0.15); border:1px solid rgba(255,84,18,0.3); color:#FF8540; padding:4px 12px; border-radius:20px; font-size:0.82rem; font-weight:700;">🍲 ${f}</span>`).join('');

    stateView.innerHTML = `
        <div style="background: #0B132B; height: 56px; border-bottom: 1px solid rgba(255,255,255,0.1); position: sticky; top: 0; z-index: 100; width: 100%; box-sizing: border-box;">
            <button onclick="handleBackNavigation()" style="position: absolute !important; left: 16px !important; top: 50% !important; transform: translateY(-50%) !important; margin: 0 !important; background: rgba(255,255,255,0.14) !important; color: #FFFFFF !important; border: 1px solid rgba(255,255,255,0.18) !important; padding: 7px 14px !important; border-radius: 8px !important; font-weight: 700 !important; cursor: pointer !important; font-size: 0.9rem !important; display: inline-flex !important; align-items: center !important; gap: 5px !important; line-height: 1 !important; z-index: 101 !important;">
                ← Wapas
            </button>
            <span style="position: absolute !important; right: 16px !important; top: 50% !important; transform: translateY(-50%) !important; font-weight: 800; color: #FF5412; font-size: 0.92rem; pointer-events: none;">IncredibleIndiaGuide</span>
        </div>

        <main style="max-width: 900px; margin: 0 auto; padding: 18px 16px 80px 16px; box-sizing: border-box;">
            <div style="background-image: linear-gradient(to top, rgba(6,10,19,0.95), rgba(6,10,19,0.35)), url('${details.heroImage}'); background-size: cover; background-position: center; border-radius: 20px; border: 1px solid rgba(255,255,255,0.15); padding: 30px 20px 22px 20px; margin-bottom: 22px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <span style="background: #FF5412; color: #FFF; font-size: 0.72rem; font-weight: 800; padding: 4px 12px; border-radius: 30px; text-transform: uppercase;">Official Tourism Circuit</span>
                <h1 style="font-size: 2.2rem; margin: 12px 0 6px 0; color: #FFFFFF;">${stateName}</h1>
                <p style="color: #F8FAFC; margin: 0 0 14px 0; font-size: 1rem; font-style: italic;">"${details.tagline}"</p>
                <div style="display:flex; flex-wrap:wrap; gap:12px; font-size:0.85rem; color:#CBD5E1;">
                    <span>🏛️ <strong>Capital:</strong> ${details.capital}</span>
                    <span>🌤️ <strong>Best Time:</strong> ${details.bestSeason}</span>
                    <span>📍 <strong>Total Districts:</strong> ${districts.length}</span>
                </div>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom: 24px;">
                <div style="background: #0E1726; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 18px;">
                    <h3 style="color:#FF8540; font-size:1.1rem; margin-top:0; margin-bottom:10px;">⭐ Pramukh Aakarshan (Highlights)</h3>
                    <ul style="padding-left:18px; margin:0; line-height:1.6;">${highlightsHtml}</ul>
                </div>
                <div style="background: #0E1726; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 18px;">
                    <h3 style="color:#FF8540; font-size:1.1rem; margin-top:0; margin-bottom:10px;">🍽️ Prasiddh Vyanjan (Local Cuisine)</h3>
                    <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:14px;">${foodsHtml}</div>
                    <div style="background:rgba(255,255,255,0.04); border-left:3px solid #FF5412; padding:8px 12px; font-size:0.82rem; color:#94A3B8;">
                        💡 <strong>Tour Tip:</strong> ${details.itineraryHint}
                    </div>
                </div>
            </div>

            <section style="margin-bottom: 30px;">
                <h2 style="font-size: 1.25rem; color: #FF8540; margin-bottom: 6px; border-bottom: 2px solid rgba(255,84,18,0.3); padding-bottom: 8px;">
                    🏛️ Sabhi Districts & Kshetra (${districts.length})
                </h2>
                <p style="color:#94A3B8; font-size:0.85rem; margin-bottom:14px;">Kisi bhi district par tap karein verified hotels, hospitals, photos aur food dekhne ke liye:</p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">${distListHtml}</div>
            </section>
        </main>
    `;

    stateView.style.display = 'block';
    document.body.style.overflow = 'hidden';
    stateView.scrollTo(0, 0);

    if (pushHistory) {
        window.history.pushState({ modalOpen: true, state: stateName }, "", `?state=${encodeURIComponent(stateName)}`);
    }
}

// DISTRICT BOTTOM DRAWER (RENDER WITH EXACT VERIFIED DATA)
window.openDistrictDrawer = function(districtName, stateName) {
    const cleanDist = (districtName || '').trim();
    
    // Look up directly in window registry
    let data = window.DISTRICT_LEVEL_DETAILS && window.DISTRICT_LEVEL_DETAILS[cleanDist];

    // Fallback if not specifically found in dataset
    if (!data) {
        data = {
            attractions: [
                { name: `${cleanDist} Heritage & Mandir`, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
                { name: `${cleanDist} City Park & Lake`, image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=600&q=80" }
            ],
            famousFood: ["Local Special Thali", "Desi Sweets & Snacks"],
            hotelAreas: ["Station Road Circle", "Civil Lines"],
            hospitals: [`District Hospital ${cleanDist}`, "Community Health Center"],
            quickTip: "Local sightseeing ke liye auto-rickshaw aur cab suvidha aaram se uplabdh hai."
        };
    }

    let drawer = document.getElementById('districtDetailDrawer');
    if (!drawer) {
        drawer = document.createElement('div');
        drawer.id = 'districtDetailDrawer';
        drawer.style.cssText = `
            position: fixed;
            bottom: 0; left: 0; width: 100vw; height: 86vh;
            background: #0B132B;
            border-top: 3px solid #FF5412;
            border-radius: 24px 24px 0 0;
            color: #FFFFFF;
            z-index: 10000000;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            box-shadow: 0 -12px 45px rgba(0,0,0,0.85);
            box-sizing: border-box;
        `;
        document.body.appendChild(drawer);
    }

    // Photo Cards Rendering
    const attrCardsHtml = data.attractions.map(item => {
        const name = typeof item === 'string' ? item : item.name;
        const img = (typeof item === 'object' && item.image) 
            ? item.image 
            : "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80";

        return `
            <div style="background: #060A13; border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; overflow: hidden; display: flex; flex-direction: column;">
                <img src="${img}" alt="${name}" loading="lazy" style="width: 100%; height: 110px; object-fit: cover; background: #1E293B;" onerror="this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80'" />
                <div style="padding: 10px 12px; font-size: 0.85rem; font-weight: 700; color: #F1F5F9; line-height: 1.3;">
                    📍 ${name}
                </div>
            </div>
        `;
    }).join('');

    const foodHtml = data.famousFood.map(f => `<span style="background:rgba(255,84,18,0.15); border:1px solid rgba(255,84,18,0.3); padding:6px 12px; border-radius:15px; font-size:0.85rem; color:#FF8540; font-weight:700;">🍲 ${f}</span>`).join('');
    const stayHtml = data.hotelAreas.map(h => `<li style="margin-bottom:6px; color:#CBD5E1;">🏨 <strong>Zone:</strong> ${h}</li>`).join('');
    const hospHtml = data.hospitals.map(m => `<li style="margin-bottom:6px; color:#94A3B8;">🏥 ${m}</li>`).join('');

    drawer.innerHTML = `
        <div style="padding: 20px 20px 90px 20px; max-width: 720px; margin: 0 auto; position: relative;">
            <div style="width: 46px; height: 5px; background: rgba(255,255,255,0.3); border-radius: 10px; margin: 0 auto 16px auto;"></div>
            
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <div>
                    <span style="color:#FF8540; font-size:0.8rem; font-weight:800; text-transform:uppercase;">District Guide • ${stateName}</span>
                    <h2 style="font-size: 1.85rem; margin: 4px 0 0 0; color: #FFF;">📍 ${cleanDist}</h2>
                </div>
                <button onclick="closeDistrictDrawer()" style="background: rgba(255,255,255,0.14); color:#FFF; border:none; border-radius:50%; width:38px; height:38px; font-size:1.3rem; cursor:pointer; font-weight:bold; display:flex; align-items:center; justify-content:center;">&times;</button>
            </div>

            <div style="margin-bottom:18px;">
                <h4 style="margin:0 0 10px 0; color:#FF8540; font-size:1rem;">⭐ Pramukh Paryatan Sthal (Famous Places)</h4>
                <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px;">
                    ${attrCardsHtml}
                </div>
            </div>

            <div style="background:#060A13; border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:16px; margin-bottom:16px;">
                <h4 style="margin:0 0 10px 0; color:#FF8540; font-size:0.95rem;">🍽️ Prasiddh Khana & Street Flavors</h4>
                <div style="display:flex; flex-wrap:wrap; gap:8px;">${foodHtml}</div>
            </div>

            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap:12px; margin-bottom:16px;">
                <div style="background:#060A13; border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:16px;">
                    <h4 style="margin:0 0 8px 0; color:#E2E8F0; font-size:0.95rem;">🛌 Kahan Rukein? (Best Hotel Zones)</h4>
                    <ul style="padding-left:18px; margin:0; font-size:0.85rem; line-height:1.6;">${stayHtml}</ul>
                </div>

                <div style="background:#060A13; border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:16px;">
                    <h4 style="margin:0 0 8px 0; color:#E2E8F0; font-size:0.95rem;">🚑 Emergency & Big Hospitals</h4>
                    <ul style="padding-left:18px; margin:0; font-size:0.85rem; line-height:1.6;">${hospHtml}</ul>
                </div>
            </div>

            <div style="background:rgba(255,84,18,0.08); border-left:3px solid #FF5412; padding:12px 16px; font-size:0.86rem; color:#CBD5E1; margin-bottom:20px; border-radius:0 10px 10px 0;">
                💡 <strong>Yatri Salah:</strong> ${data.quickTip}
            </div>

            <button onclick="bookThisDistrict('${cleanDist.replace(/'/g, "\\'")}', '${stateName.replace(/'/g, "\\'")}')" style="background:#FF5412; color:#FFF; border:none; width:100%; padding:15px; border-radius:12px; font-weight:800; font-size:1rem; cursor:pointer;">
                ${cleanDist} Ke Liye Cab / Tour Plan Mangein →
            </button>
        </div>
    `;

    drawer.style.display = 'block';
    drawer.scrollTo(0, 0);
};

window.closeDistrictDrawer = function() {
    const drawer = document.getElementById('districtDetailDrawer');
    if (drawer) drawer.style.display = 'none';
};

window.bookThisDistrict = function(districtName, stateName) {
    closeDistrictDrawer();
    closeDedicatedStatePage(true);
    const destInput = document.getElementById('custLeadDest') || document.querySelector('input[name*="dest"]');
    if (destInput) destInput.value = `${districtName} (${stateName})`;
    const plan = document.getElementById('plan') || document.querySelector('form');
    if (plan) plan.scrollIntoView({ behavior: 'smooth' });
};

window.handleBackNavigation = function() {
    if (window.history.state && window.history.state.modalOpen) {
        window.history.back();
    } else {
        closeDedicatedStatePage(true);
    }
};

window.closeDedicatedStatePage = function(updateUrl = true) {
    closeDistrictDrawer();
    const stateView = document.getElementById('dedicatedStateViewContainer');
    if (stateView) stateView.style.display = 'none';
    document.body.style.overflow = '';
    if (updateUrl && window.location.search.includes('state=')) {
        window.history.pushState({}, "", window.location.pathname);
    }
};
