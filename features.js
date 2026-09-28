// =========================================================================
// INCREDIBLE INDIA GUIDE - DYNAMIC WIKIPEDIA PHOTO ENGINE & DISTRICT LOGIC
// =========================================================================

// Central District Database
window.DISTRICT_LEVEL_DETAILS = window.DISTRICT_LEVEL_DETAILS || {};

Object.assign(window.DISTRICT_LEVEL_DETAILS, {
  // --- UTTAR PRADESH MAJOR DISTRICTS ---
  "Agra": {
    attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"],
    famousFood: ["Agra Petha (Angoori & Kesar)", "Bedai & Jalebi", "Mughlai Kebab"],
    hotelAreas: ["Fatehabad Road", "Taj East Gate Road", "Sadar Bazaar"],
    hospitals: ["S.N. Medical College & Hospital", "Pushpanjali Hospital", "District Hospital Agra"],
    quickTip: "Taj Mahal sunrise ke waqt visit karein bheed se bachne ke liye."
  },
  "Aligarh": {
    attractions: ["Aligarh Fort", "Sir Syed Hall AMU", "Khereshwar Temple"],
    famousFood: ["Aligarh Barula with Spicy Chutney", "Chhole Bhature", "Rabri Ghewar"],
    hotelAreas: ["GT Road", "Ramghat Road", "Marris Road"],
    hospitals: ["Jawaharlal Nehru Medical College (AMU)", "Malkhan Singh District Hospital"],
    quickTip: "Barula street food Aligarh ka signature snack hai, zaroor try karein."
  },
  "Ambedkar Nagar": {
    attractions: ["Kichhauchha Sharif Dargah", "Shravan Kshetra Dham", "Shiv Baba Mandir"],
    famousFood: ["Desi Ghee ki Tikki", "Samosa Chaat", "Tanda Malpua"],
    hotelAreas: ["Akbarpur Station Road", "Tanda Road Circle"],
    hospitals: ["Mahamaya Rajkiya Allopathic Medical College", "District Combined Hospital Akbarpur"],
    quickTip: "Shravan Kshetra mein Shravan Kumar se juda aitihasik sarovar sthit hai."
  },
  "Amethi": {
    attractions: ["Nandmahar Dham", "Ulta Ratha Mandir", "Bijli Pasi Fort"],
    famousFood: ["Gulgule", "Besan Ladoo", "Desi Poori Sabzi"],
    hotelAreas: ["Gauriganj Main Market", "Amethi Station Road"],
    hospitals: ["District Hospital Gauriganj", "Sanjay Gandhi Hospital Munshiganj"],
    quickTip: "Gauriganj administrative headquarters hai jahan basic stays uplabdh hain."
  },
  "Amroha": {
    attractions: ["Vasudev Temple", "Tigri Dham Ganga Ghat", "Dargah Hazrat Shah Wilayat"],
    famousFood: ["Amroha Dholak Craft", "Mango Varieties", "Halwa Sohan"],
    hotelAreas: ["Station Road", "Joya Road"],
    hospitals: ["District Hospital Amroha", "Chaudhary Nihal Singh Hospital"],
    quickTip: "Kartik Purnima par Tigri Mela UP ke bade snan melon mein shamil hai."
  },
  "Auraiya": {
    attractions: ["Devkali Temple", "Bhadreshwar Temple", "Yamuna Ghat Auraiya"],
    famousFood: ["Auraiya Pure Desi Ghee Peda", "Samosa", "Chhena Kheer"],
    hotelAreas: ["Dibiyapur Road", "NH-19 Highway Circle"],
    hospitals: ["100 Bedded District Hospital Chicholi", "Combined Health Centre Auraiya"],
    quickTip: "Auraiya pure Desi Ghee aur usse bani mithaiyon ke liye prasiddh hai."
  },
  "Ayodhya": {
    attractions: ["Ram Mandir Ayodhya", "Hanuman Garhi Ayodhya", "Kanak Bhawan", "Saryu River Ghat"],
    famousFood: ["Ayodhya Rabri & Peda", "Hanuman Garhi Besan Ladoo", "Saryu Chaat"],
    hotelAreas: ["Ram Path Road", "Naya Ghat Circuit", "Civil Lines"],
    hospitals: ["Rajarshi Dashrath Autonomous Medical College", "District Hospital Ayodhya"],
    quickTip: "Ram Mandir darshan ke baad shaam ko Saryu riverfront aarti attend karein."
  },
  "Azamgarh": {
    attractions: ["Durvasa Rishi Ashram", "Mehnagar Fort", "Dattatreya Ashram"],
    famousFood: ["Nizamabad Black Pottery Craft", "Litti Chokha", "Jalebi"],
    hotelAreas: ["Civil Lines", "Chowk Area"],
    hospitals: ["Government Medical College Chakrapanpur", "District Hospital Azamgarh"],
    quickTip: "Nizamabad ki Black Pottery GI tagged handicraft hai."
  },
  "Baghpat": {
    attractions: ["Trilok Teerth Dham", "Pura Mahadev Temple", "Barnawa Lakshagriha"],
    famousFood: ["Ghewar", "Ganne Ka Taaza Ras", "Tandoori Paratha"],
    hotelAreas: ["Delhi-Saharanpur Highway", "Baraut Town"],
    hospitals: ["District Hospital Baghpat", "Astha Hospital Baraut"],
    quickTip: "Pura Mahadev mandir par Shivratri ke dauran lakhon kavad yatri aate hain."
  },
  "Bahraich": {
    attractions: ["Katarniaghat Wildlife Sanctuary", "Dargah Syed Salar Masood", "Chittaura Jheel"],
    famousFood: ["Bahraich Ladoo", "Shahi Tukda", "Kebab Paratha"],
    hotelAreas: ["Station Road", "Digiha Crossing"],
    hospitals: ["Maharshi Balark Medical College", "District Male Hospital"],
    quickTip: "Katarniaghat jungle safari Dudhwa tiger reserve ecosystem ka hissa hai."
  },
  "Ballia": {
    attractions: ["Bhrigu Temple Ballia", "Surha Taal Bird Sanctuary", "Dardari Mela"],
    famousFood: ["Litti Chokha with Desi Ghee", "Sattu Sharbat", "Khaja"],
    hotelAreas: ["Station Road", "Civil Lines Ballia"],
    hospitals: ["District Hospital Ballia", "Mata Ram Shanti Hospital"],
    quickTip: "Maharshi Bhrigu ka mandir aur Dardari mela yahan ke mukhya aakarshan hain."
  },
  "Balrampur": {
    attractions: ["Devipatan Shaktipeeth", "Suhaildev Wildlife Sanctuary", "Bijlipur Temple"],
    famousFood: ["Tharu Tribal Food", "Desi Ghee Puri & Sabzi", "Balrampur Peda"],
    hotelAreas: ["Tulsipur Road", "Station Circle"],
    hospitals: ["Memorial Hospital Balrampur", "District Women Hospital"],
    quickTip: "Devipatan 51 Shaktipeethon mein se ek hai jo Tulsipur ke paas sthit hai."
  },
  "Banda": {
    attractions: ["Kalinjar Fort", "Bamdev Temple", "Khatri Pahar Mandir"],
    famousFood: ["Bundelkhandi Thali", "Laphra Roti", "Mawa Gujiya"],
    hotelAreas: ["Civil Lines", "Station Road Banda"],
    hospitals: ["Government Medical College Banda", "District Hospital Banda"],
    quickTip: "Kalinjar Fort pahadi par sthit aitihasik killa hai, subah jana behtar hai."
  },
  "Barabanki": {
    attractions: ["Dewa Sharif", "Parijaat Tree Kintoor", "Lodheshwar Mahadev Mandir"],
    famousFood: ["Dewa Mela Kebabs & Sweets", "Biryani", "Rewari & Gajak"],
    hotelAreas: ["Faizabad Road NH-28", "Dewa Road"],
    hospitals: ["District Hospital Barabanki", "Mayo Institute of Medical Sciences"],
    quickTip: "Kintoor ka Parijaat vriksha Mahabharat kaal se juda durlabh vriksha hai."
  },
  "Bareilly": {
    attractions: ["Alakhnath Temple", "Dargah Aala Hazrat", "Phoenix United Mall"],
    famousFood: ["Seekh Kebab", "Bareilly ki Khasta Kachori", "Paneer Jalebi"],
    hotelAreas: ["Civil Lines", "Station Road", "Pilibhit Bypass"],
    hospitals: ["Rohilkhand Medical College", "District Hospital Bareilly"],
    quickTip: "Zari Zardozi work aur Surma ki shopping ke liye Bareilly ka Bara Bazaar best hai."
  },
  "Basti": {
    attractions: ["Makhauda Dham", "Bhadreshwar Nath Mandir", "Chando Tal"],
    famousFood: ["Basti Peda", "Samosa Sabzi", "Khichdi with Chooran"],
    hotelAreas: ["Company Bagh", "Malviya Road"],
    hospitals: ["Maharshi Vashishtha Medical College", "District Hospital Basti"],
    quickTip: "Makhauda Dham wahi sthan hai jahan Putrakameshti Yagya hua tha."
  },
  "Bhadohi": {
    attractions: ["Sita Samahit Sthal Sitamarhi", "Semradh Nath Mandir", "Baba Harihar Nath"],
    famousFood: ["Handmade Carpet Craft", "Baati Chokha", "Chhena Toast"],
    hotelAreas: ["Gyanpur Road", "Station Area Bhadohi"],
    hospitals: ["Maharaja Chet Singh District Hospital", "Jeevan Deep Hospital"],
    quickTip: "Bhadohi carpet city of India hai jahan world class hand-woven kaleen bante hain."
  },
  "Bijnor": {
    attractions: ["Kanva Ashram", "Vidur Kuti", "Najibudaulah Fort"],
    famousFood: ["Sugarcane Jaggery", "Pista Burfi", "Bedmi Puri"],
    hotelAreas: ["Civil Lines Bijnor", "Najibabad Circle"],
    hospitals: ["District Hospital Bijnor", "Neelkanth Hospital"],
    quickTip: "Kanva Ashram Emperor Bharat ki janam-sthali ke roop mein jaana jata hai."
  },
  "Budaun": {
    attractions: ["Jama Masjid Shamsi", "Dargah Hazrat Bade Sarkar", "Birua Badi Temple"],
    famousFood: ["Budaun Ka Mashhoor Peda", "Sheermal", "Nihari"],
    hotelAreas: ["Civil Lines Budaun", "Indira Chowk"],
    hospitals: ["Government Medical College Budaun", "District Hospital Budaun"],
    quickTip: "Budaun ke pure khoya peda poore Bharat mein famous hain."
  },
  "Bulandshahr": {
    attractions: ["Khurja Pottery", "Anoopshahr Ganga Ghat", "Karnavas"],
    famousFood: ["Khurja ki Khurchan", "Tandoori Kulche", "Chhole Puri"],
    hotelAreas: ["Delhi Road", "Khurja Bypass", "Civil Lines"],
    hospitals: ["District Hospital Bulandshahr", "Kailash Hospital Khurja"],
    quickTip: "Khurja se hand-painted pottery aur ceramic items wholesale rates par milte hain."
  },
  "Chandauli": {
    attractions: ["Rajdari Falls", "Deodari Falls", "Chandraprabha Wildlife Sanctuary"],
    famousFood: ["Baati Chokha", "Chhena Toast", "Gupchup"],
    hotelAreas: ["Pt Deen Dayal Upadhyay Nagar (Mughalsarai) Junction Area"],
    hospitals: ["District Hospital Chandauli", "Railway Divisional Hospital"],
    quickTip: "Rajdari waterfall monsoon ke mausam mein picnic ke liye best spot hai."
  },
  "Chitrakoot": {
    attractions: ["Ramghat Mandakini", "Kamadgiri", "Gupt Godavari", "Hanuman Dhara"],
    famousFood: ["Chitrakoot Peda", "Mandakini Chaat", "Mahua Ladoo"],
    hotelAreas: ["Ramghat Circle", "Sitapur Road", "Karwi"],
    hospitals: ["Jankikund Chikitsalaya", "Sadguru Netra Chikitsalaya"],
    quickTip: "Gupt Godavari caves explore karne ke liye waterproof footwear pehnein."
  },
  "Deoria": {
    attractions: ["Deoraha Baba Ashram", "Somnath Mandir Deoria"],
    famousFood: ["Deoria Peda", "Litti Chokha", "Taal Makhana"],
    hotelAreas: ["Civil Lines", "Subhash Chowk"],
    hospitals: ["Maharshi Devraha Baba Medical College", "District Hospital Deoria"],
    quickTip: "Deoraha Baba ashram Saryu nadi ke tat par ek shant spiritual sthal hai."
  },
  "Etah": {
    attractions: ["Patna Bird Sanctuary", "Awagarh Fort", "Kailash Mandir"],
    famousFood: ["Jalesar Bell Brass Craft", "Bedai Sabzi", "Ghewar"],
    hotelAreas: ["Shringarnagar", "Agra Road Etah"],
    hospitals: ["Viraangana Avanti Bai Autonomous Medical College", "District Hospital Etah"],
    quickTip: "Jalesar se mandir ke brass ghante poore vishwa ke mandiron mein export hote hain."
  },
  "Etawah": {
    attractions: ["Etawah Safari Park", "National Chambal Sanctuary", "Victoria Memorial Etawah"],
    famousFood: ["Etawah ke Gulab Jamun", "Kachori & Dubki Wale Aloo", "Peda"],
    hotelAreas: ["Safari Road", "Civil Lines Etawah", "Station Road"],
    hospitals: ["Saifai Medical College (U P Medical University)", "District Hospital Etawah"],
    quickTip: "Chambal river safari boat ride mein freshwater dolphin aur ghariyal dekhne ko milte hain."
  },
  "Faizabad": {
    attractions: ["Gulab Bari Faizabad", "Bahu Begum Tomb", "Guptar Ghat"],
    famousFood: ["Faizabadi Biryani", "Kakori Kebab", "Nankhatai"],
    hotelAreas: ["Civil Lines Faizabad", "Guptar Ghat Riverside"],
    hospitals: ["District Hospital Faizabad", "Chiranjeev Hospital"],
    quickTip: "Guptar Ghat par shaam ki sunset boat ride aur river breeze behad soothing hoti hai."
  },
  "Farrukhabad": {
    attractions: ["Sankisa Buddhist Site", "Fatehgarh Cantonment", "Pandav Bagh"],
    famousFood: ["Dalmoth", "Khasta Kachori", "Ganga Kinare ke Tarbooj"],
    hotelAreas: ["Fatehgarh Station Road", "Farrukhabad Chowk"],
    hospitals: ["Dr. Ram Manohar Lohia District Hospital", "Major SD Singh Medical College"],
    quickTip: "Sankisa Bhagwan Buddha se juda pavitra tirth sthal hai."
  },
  "Fatehpur": {
    attractions: ["Bawani Imli", "Bhitaura Ganga Ghat", "Asothar Fort"],
    famousFood: ["Peda of Fatehpur", "Samosa", "Litti Sabzi"],
    hotelAreas: ["GT Road", "Station Area", "Civil Lines"],
    hospitals: ["Amar Shaheed Jodha Singh Medical College", "District Hospital Fatehpur"],
    quickTip: "Bawani Imli 1857 kranti ke 52 amar shaheedon ki yaadgar aitihasik jagah hai."
  },
  "Firozabad": {
    attractions: ["Suhag Nagari Glass Craft", "Jain Glass Temple", "Kotla Fort"],
    famousFood: ["Dal Sew Namkeen", "Bedmi Puri", "Mathura Style Lassi"],
    hotelAreas: ["Agra-Firozabad Highway", "Raja Ka Taal"],
    hospitals: ["Autonomous State Medical College Firozabad", "District Hospital Firozabad"],
    quickTip: "Firozabad se colorful glass bangles aur handicraft lights direct factory se lein."
  },
  "Gorakhpur": {
    attractions: ["Gorakhnath Temple", "Ramgarh Taal Lake", "Gita Press Gorakhpur"],
    famousFood: ["Gorakhpuri Galouti Kebab", "Ramgarhtal Kulhad Pizza", "Kachori Dum Aloo"],
    hotelAreas: ["Golghar", "Ramgarh Taal Road", "Station Area"],
    hospitals: ["AIIMS Gorakhpur", "BRD Medical College"],
    quickTip: "Ramgarh Taal par evening musical fountain show dekhna na bhoolein."
  },
  "Jhansi": {
    attractions: ["Jhansi Fort", "Rani Mahal", "Government Museum Jhansi"],
    famousFood: ["Bundelkhandi Thali", "Laphra", "Petha Dalmoth"],
    hotelAreas: ["Station Road", "Civil Lines", "Elite Crossing"],
    hospitals: ["Maharani Laxmi Bai Medical College", "District Hospital Jhansi"],
    quickTip: "Jhansi Fort ke light and sound show mein Rani Laxmibai ki veer-gatha zaroor dekhein."
  },
  "Kanpur Nagar": {
    attractions: ["Bithoor Brahmavart Ghat", "JK Temple", "Allen Forest Zoo", "Moti Jheel"],
    famousFood: ["Thaggu ke Laddu", "Badnam Kulfi", "Kanpuri Biryani"],
    hotelAreas: ["Civil Lines", "Mall Road", "Swaroop Nagar"],
    hospitals: ["GSVM Medical College", "Regency Hospital", "Hallet Hospital"],
    quickTip: "Bithoor Ganga Ghat par sunset boat ride aur Nana Saheb memorial visit karein."
  },
  "Lucknow": {
    attractions: ["Bara Imambara", "Rumi Darwaza", "Chhota Imambara", "Ambedkar Memorial Park"],
    famousFood: ["Galouti Kebab (Tunday)", "Awadhi Dum Biryani", "Basket Chaat", "Prakash Kulfi"],
    hotelAreas: ["Gomti Nagar", "Hazratganj", "Charbagh"],
    hospitals: ["KGMU Lucknow", "SGPGI", "Medanta Super Speciality Hospital"],
    quickTip: "Hazratganj evening walk aur old city food crawl miss na karein."
  },
  "Mathura": {
    attractions: ["Krishna Janmasthan", "Dwarkadhish Temple Mathura", "Vishram Ghat"],
    famousFood: ["Mathura ke Peda", "Kachori Jalebi", "Makhan Mishri"],
    hotelAreas: ["Near Krishna Janmasthan", "Mathura Cantt", "Vrindavan Bypass"],
    hospitals: ["KD Medical College", "Nayati Multi Speciality Hospital"],
    quickTip: "Govardhan parikrama subah ya shaam ke suhavne mausam mein karein."
  },
  "Meerut": {
    attractions: ["Augarnath Temple", "Sardhana Church", "Hastinapur Temples"],
    famousFood: ["Meerut Gajak & Rewari", "Nan Khatai", "Amritsari Naan"],
    hotelAreas: ["Delhi Road", "Cantonment Area", "Garh Road"],
    hospitals: ["LLRM Medical College", "Nutema Hospital"],
    quickTip: "Sardhana mein Begum Samru dwara banwaya gaya 200 saal purana church dekhein."
  },
  "Mirzapur": {
    attractions: ["Vindhyavasini Devi Mandir", "Chunar Fort", "Wyndham Falls"],
    famousFood: ["Vindhyachal Peda", "Baati Chokha", "Chunar Clay Pottery"],
    hotelAreas: ["Vindhyachal Corridor", "Civil Lines Mirzapur"],
    hospitals: ["Maa Vindhyavasini Autonomous State Medical College", "District Hospital Mirzapur"],
    quickTip: "Vindhyachal Trikon Parikrama (Vindhyavasini, Kali Khoh, Ashtabhuja) zaroor karein."
  },
  "Prayagraj": {
    attractions: ["Triveni Sangam Prayagraj", "Anand Bhawan", "Allahabad Fort"],
    famousFood: ["Allahabadi Surkha Amrud", "Dam Aloo Puri", "Loknath Chaat"],
    hotelAreas: ["Civil Lines", "Near Sangam Daraganj"],
    hospitals: ["Swaroop Rani Nehru Hospital (SRN)", "Kamla Nehru Memorial Hospital"],
    quickTip: "Sangam snan ke liye fixed-rate government boat counters se boat lein."
  },
  "Varanasi": {
    attractions: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Assi Ghat", "Dhamek Stupa Sarnath"],
    famousFood: ["Banarasi Paan", "Tamatar Chaat", "Kachori Jalebi", "Malaiyo"],
    hotelAreas: ["Godowlia Ghats", "Cantonment Luxury Zone", "Assi Ghat"],
    hospitals: ["Sir Sunderlal Hospital (BHU)", "Heritage Hospitals Lanka", "Apex Hospital"],
    quickTip: "Subah 5 baje Assi se Dashashwamedh Ghat tak sunrise boat ride zaroor lein."
  }
});

// =========================================================================
// WIKIMEDIA COMMONS DYNAMIC IMAGE FETCHER (SMART CACHED)
// =========================================================================

window._wikiImageCache = window._wikiImageCache || {};

async function fetchWikiImage(queryName) {
    if (window._wikiImageCache[queryName]) {
        return window._wikiImageCache[queryName];
    }

    try {
        const cleanQuery = encodeURIComponent(queryName.trim());
        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&titles=${cleanQuery}&prop=pageimages&format=json&pithumbsize=600&origin=*`;
        
        const response = await fetch(endpoint);
        const data = await response.json();
        
        if (data && data.query && data.query.pages) {
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0];
            if (pageId && pages[pageId].thumbnail && pages[pageId].thumbnail.source) {
                const imgUrl = pages[pageId].thumbnail.source;
                window._wikiImageCache[queryName] = imgUrl;
                return imgUrl;
            }
        }
    } catch (err) {
        console.warn("Wiki fetch skipped for:", queryName);
    }
    return null;
}

// =========================================================================
// UI CONTROLLERS & BOTTOM DRAWER RENDERER
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Purane modal ko hatayein
    document.querySelectorAll('.state-modal, .modal-backdrop, [id*="stateModal"], [class*="state-popup"]').forEach(el => el.remove());

    // State card tiles par dedicated view attach karein
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

    // Android Hardware / Swipe Back Navigation
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

// DISTRICT BOTTOM DRAWER (WITH WIKIPEDIA DYNAMIC IMAGES)
window.openDistrictDrawer = function(districtName, stateName) {
    const cleanDist = (districtName || '').trim();
    let data = window.DISTRICT_LEVEL_DETAILS && window.DISTRICT_LEVEL_DETAILS[cleanDist];

    if (!data) {
        data = {
            attractions: [`${cleanDist} Pavitra Mandir`, `${cleanDist} Historical Landmark`, `${cleanDist} City Lake`],
            famousFood: ["Local Traditional Thali", "Desi Sweets & Snacks"],
            hotelAreas: ["Station Road Circle", "City Centre Market"],
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

    // Dynamic Photo Cards with Clean Gradient Placeholder
    const attrCardsHtml = data.attractions.map((placeName, idx) => {
        const imgId = `place-img-${cleanDist.replace(/\s+/g, '')}-${idx}`;
        
        // Background Wikipedia Image Fetcher
        setTimeout(async () => {
            const el = document.getElementById(imgId);
            if (el) {
                const liveImg = await fetchWikiImage(placeName);
                if (liveImg) {
                    el.src = liveImg;
                    el.style.display = 'block';
                    const fallbackEl = document.getElementById(`fallback-${imgId}`);
                    if (fallbackEl) fallbackEl.style.display = 'none';
                }
            }
        }, 100 * idx);

        return `
            <div style="background: #060A13; border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; overflow: hidden; display: flex; flex-direction: column;">
                <div style="width: 100%; height: 110px; background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%); position: relative; display: flex; align-items: center; justify-content: center;">
                    <div id="fallback-${imgId}" style="text-align: center; color: #94A3B8; font-size: 0.78rem;">
                        <span style="font-size: 1.6rem; display: block; margin-bottom: 2px;">🏛️</span>
                        Official Heritage
                    </div>
                    <img id="${imgId}" src="" alt="${placeName}" style="display:none; width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div style="padding: 10px 12px; font-size: 0.85rem; font-weight: 700; color: #F1F5F9; line-height: 1.3;">
                    📍 ${placeName}
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
