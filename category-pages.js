// =========================================================================
// INCREDIBLE INDIA - COMPLETE ENGLISH CATEGORY SHOWCASE
// =========================================================================

(function () {
  const destinationsDB = {
    hills: {
      title: "🏔️ Hill Stations & Snow Wonderlands",
      subtitle: "From snow-draped Himalayan peaks to the mist-covered green slopes of the Nilgiris.",
      themeColor: "#38bdf8",
      items: [
        {
          name: "Gulmarg & Apharwat Peak",
          state: "Jammu & Kashmir",
          season: "Snow Sports: Dec – Mar | Alpine Blooms: May – Sep",
          tag: "Skiing & World's Highest Gondola",
          desc: "Renowned globally for world-class powder snow, pristine alpine meadows, pine forests, and magnificent panoramas of Mount Nanga Parbat.",
          highlights: "Kongdori Gondola Phase 2, Apharwat Snow Peak, Alpather Lake Trek, Snowboarding Courses"
        },
        {
          name: "Manali & Solang Valley",
          state: "Himachal Pradesh",
          season: "Winter Snow: Dec – Feb | Pleasant Climate: Apr – Jun",
          tag: "Mountain Passes & High Altitude",
          desc: "The adventure hub of Himachal featuring ancient cedar woods, swift river streams, hot sulfur springs, and scenic mountain corridors.",
          highlights: "Atal Tunnel Highway, Solang Valley Snow Park, Rohtang Pass, Old Manali Heritage Cafes"
        },
        {
          name: "Auli High Altitude Slopes",
          state: "Uttarakhand",
          season: "Championship Snow: Jan – Mar",
          tag: "Premier Ski Resort of India",
          desc: "Surrounded by magnificent 180-degree panoramas of sacred Himalayan summits including Nanda Devi, Kamet, and Mana Parvat.",
          highlights: "Nanda Devi National Park Vista, Joshimath to Auli Cable Car, Gorson Bugyal Trek"
        },
        {
          name: "Munnar Tea Gardens",
          state: "Kerala",
          season: "Cool & Serene: Sep – Mar",
          tag: "Emerald Valleys & Western Ghats",
          desc: "Sprawling carpet of endless emerald tea plantations, cloud-wrapped mountain gorges, and the habitat of the endangered Nilgiri Tahr.",
          highlights: "Eravikulam National Park, Mattupetty Lake Dam, Top Station Panoramic Viewpoint, Tea Museum"
        },
        {
          name: "Darjeeling & Tiger Hill",
          state: "West Bengal",
          season: "Crisp Sunrises: Oct – Dec & Mar – May",
          tag: "Queen of the Hills",
          desc: "World-famous sunrise vistas across Mount Kanchenjunga (the world's 3rd highest peak) combined with century-old UNESCO steam trains.",
          highlights: "Tiger Hill Sunrise Point, UNESCO Himalayan Toy Train, Batasia Loop, Happy Valley Tea Estate"
        },
        {
          name: "Leh & Khardung La Pass",
          state: "Ladakh",
          season: "Open Highway: May – Sep | Frozen Wonder: Jan – Feb",
          tag: "High-Altitude Cold Desert",
          desc: "Dramatic lunar mountain terrain, sacred ancient Tibetan monasteries, surreal turquoise glacial lakes, and legendary high motorable passes.",
          highlights: "Pangong Tso Crystal Lake, Nubra Valley Sand Dunes, Khardung La, Thiksey Monastery"
        }
      ]
    },

    forts: {
      title: "🏰 Royal Forts & Historic Palaces",
      subtitle: "Relive centuries of legendary dynasties, invincible mountain fortresses, and royal opulence.",
      themeColor: "#f59e0b",
      items: [
        {
          name: "Amer Fort & Sheesh Mahal",
          state: "Jaipur, Rajasthan",
          season: "Ideal Season: Oct – Mar",
          tag: "UNESCO World Heritage Citadel",
          desc: "Perched majestically atop the Cheel ka Teela hill, famous for mirrored royal courtyards, subterranean passages, and ornate Rajput design.",
          highlights: "Sheesh Mahal (Hall of Mirrors), Ganesh Pol Royal Entrance, Maota Lake Reflection, Light & Sound Show"
        },
        {
          name: "Mehrangarh Fortress",
          state: "Jodhpur, Rajasthan",
          season: "Ideal Season: Oct – Mar",
          tag: "Guardian of the Blue City",
          desc: "Rising 400 feet above the city skyline, this colossal citadel boasts burnished cannon battlements, royal palanquins, and pearl halls.",
          highlights: "Moti Mahal, Phool Mahal, Chamunda Devi Sanctum, Flying Fox Zipline Tour"
        },
        {
          name: "Taj Mahal & Agra Fort",
          state: "Uttar Pradesh",
          season: "Ideal Season: Oct – Mar",
          tag: "Monument to Eternal Love",
          desc: "One of the Seven Wonders of the World crafted from pure white Makrana marble, flanked by the formidable red sandstone Mughal seat.",
          highlights: "Sunrise View of Taj Mahal, Diwan-i-Khas, Jahangiri Mahal, Mehtab Bagh Sunset Point"
        },
        {
          name: "Mysore Palace (Amba Vilas)",
          state: "Karnataka",
          season: "Pleasant: Sep – Mar | Grand Dasara: Oct",
          tag: "Indo-Saracenic Architectural Jewel",
          desc: "The official royal residence of the Wadiyar dynasty, illuminated every weekend by nearly 100,000 incandescent golden lamps.",
          highlights: "Grand Durbar Hall, Kalyana Mantapa Stained Glass Ceiling, Golden Howdah Elephant Throne"
        },
        {
          name: "Gwalior Fort Complex",
          state: "Madhya Pradesh",
          season: "Ideal Season: Oct – Mar",
          tag: "Pearl Amongst Indian Fortresses",
          desc: "Described as the pearl among Indian citadels, featuring brilliant turquoise blue tilework, rock-cut Tirthankara sculptures, and palaces.",
          highlights: "Man Singh Palace, Gujari Mahal Archaeological Museum, Sas-Bahu Temples, Teli Ka Mandir"
        },
        {
          name: "Golconda Fort & Acoustic Vaults",
          state: "Hyderabad, Telangana",
          season: "Pleasant: Nov – Feb",
          tag: "Kakatiya & Qutb Shahi Citadel",
          desc: "Renowned for its ingenious acoustic engineering where a handclap at the entry gates echoes clearly a kilometer away at the citadel summit.",
          highlights: "Bala Hissar Whispering Arches, Fateh Darwaza, Historic Diamond Vaults, Royal Pavilions"
        }
      ]
    },

    coastal: {
      title: "🏖️ Coastal Escapes & Tropical Islands",
      subtitle: "White sandy shorelines, azure coral lagoons, swaying coconut groves, and tranquil backwaters.",
      themeColor: "#06b6d4",
      items: [
        {
          name: "Radhanagar & Elephant Beach",
          state: "Havelock Island, Andaman & Nicobar",
          season: "Ideal Weather: Oct – May",
          tag: "Ranked Among Asia's Best Shores",
          desc: "World-class turquoise coastal waters, powdery white sand strips, lush virgin rain forests, and pristine coral reefs with exotic marine life.",
          highlights: "PADI Certified Scuba Diving, Night Kayaking in Bioluminescence, Snorkeling, Glass-bottom Boats"
        },
        {
          name: "Alleppey & Kumarakom Backwaters",
          state: "Kerala",
          season: "Ideal Season: Sep – Mar",
          tag: "Venice of the East",
          desc: "Sail effortlessly through palm-fringed labyrinthine canals, tranquil mangrove lagoons, and serene coastal villages on traditional houseboats.",
          highlights: "Overnight Luxury Houseboat Cruise, Vembanad Lake Bird Sanctuary, Marari Beach Sunset"
        },
        {
          name: "Palolem & Butterfly Bay",
          state: "South Goa",
          season: "Peak Holiday: Nov – Apr",
          tag: "Golden Crescent Shoreline",
          desc: "A breathtaking crescent-shaped bay sheltered by coconut palms, safe swimming waters, lively beachside shacks, and dolphin sightings.",
          highlights: "Sea Kayaking to Butterfly Island, Sunset Boat Safaris, Silent Headphone Parties, Seafood Dining"
        },
        {
          name: "Bangaram & Agatti Atolls",
          state: "Lakshadweep Archipelago",
          season: "Crystal Clear: Oct – Apr",
          tag: "Untouched Coral Reef Paradise",
          desc: "Teardrop-shaped coral atolls bordered by turquoise lagoons, thriving stingrays, sea turtles, and untouched white sandbanks.",
          highlights: "Deep Sea Scuba Excursions, Lagoon Swimming, Windsurfing, Live Coral Snorkeling"
        },
        {
          name: "Gokarna (Om & Kudle Beach)",
          state: "Karnataka",
          season: "Ideal Season: Oct – Mar",
          tag: "Rocky Ocean Cliffs & Tranquility",
          desc: "Where the mountain cliffs of the Western Ghats dive directly into the Arabian Sea, featuring five scenic beaches linked by cliff trails.",
          highlights: "Panoramic Five Beach Hike, Om-shaped Rock Formations, Mahabaleshwar Ancient Coastal Temple"
        },
        {
          name: "Dhanushkodi & Rameswaram Coast",
          state: "Tamil Nadu",
          season: "Mild Climate: Oct – Apr",
          tag: "Meeting of Two Great Oceans",
          desc: "The southernmost coastal tip where the Bay of Bengal merges with the Indian Ocean, famous for shallow turquoise shoals and legends of Ram Setu.",
          highlights: "Arichal Munai Ocean Border, Ram Setu Bridge Viewpoint, Pamban Sea Bridge, Ghost Town Relics"
        }
      ]
    },

    spiritual: {
      title: "🕉️ Sacred Pilgrimages & Spiritual Sanctuaries",
      subtitle: "Centuries of living spiritual traditions, timeless river ghats, and monumental sacred architecture.",
      themeColor: "#f97316",
      items: [
        {
          name: "Kashi Vishwanath & River Ghats",
          state: "Varanasi, Uttar Pradesh",
          season: "Ideal Climate: Oct – Mar",
          tag: "Eternal City of Light",
          desc: "One of the oldest continuously inhabited cities on earth. Experience soulful sunrise boat journeys and grand evening fire ceremonies along the Ganga.",
          highlights: "Maha Ganga Aarti at Dashashwamedh Ghat, Vishwanath Temple Corridor, Sacred Boat Rides, Sarnath"
        },
        {
          name: "Char Dham Himalayan Shrines",
          state: "Uttarakhand",
          season: "Pilgrimage Window: May – Nov",
          tag: "Himalayan High Altitude Sanctuaries",
          desc: "The sacred mountain pilgrimage encompassing Yamunotri, Gangotri, Kedarnath, and Badrinath nestled deep within snow-capped peaks.",
          highlights: "Kedarnath Jyotirlinga Helicopter & Trek, Badrinath Alaknanda Aarti, Mana India's First Village"
        },
        {
          name: "Sri Harmandir Sahib (Golden Temple)",
          state: "Amritsar, Punjab",
          season: "Pleasant Season: Oct – Mar",
          tag: "Universal Sanctuary of Peace & Equality",
          desc: "A pure gold-leaf sanctuary standing serenely in the center of the holy Amrit Sarovar, hosting the world's largest community kitchen (Langar).",
          highlights: "Parikrama of the Sacred Pool, Continuous Divine Kirtan, 24/7 Mega Community Langar, Akal Takht"
        },
        {
          name: "Tirumala Venkateswara Temple",
          state: "Tirupati, Andhra Pradesh",
          season: "Open Year-Round | Pleasant: Nov – Feb",
          tag: "The Seven Sacred Peaks of Seshachalam",
          desc: "Dravidian temple architecture perched high upon seven holy hills, dedicated to Lord Sri Venkateswara and celebrated for grand rituals.",
          highlights: "Vaikuntam Sacred Complex, Traditional Tirupati Laddu Prasadam, Kapila Theertham Waterfalls"
        },
        {
          name: "Jagannath Temple & Konark Sun Temple",
          state: "Puri & Konark, Odisha",
          season: "Ideal Season: Oct – Mar",
          tag: "Sacred Eastern Dham & Sun Monument",
          desc: "The ancient seaside fortress temple of Lord Jagannath, paired with the 13th-century stone chariot architecture of the Konark Sun Temple.",
          highlights: "Fifty-Six Offering Mahaprasad Feast, Golden Beach Sunrise, Architectural Wheels of Konark"
        },
        {
          name: "Rishikesh & Haridwar Gateway",
          state: "Uttarakhand",
          season: "Ideal Season: Sep – Apr",
          tag: "World Yoga Capital & Gateway of Gods",
          desc: "Where the pristine waters of the holy Ganga flow out from the Himalayan foothills, world-renowned for riverside ashrams and meditation.",
          highlights: "Har Ki Pauri Evening Chants, Triveni Ghat Aarti, Beatles Ashram Heritage, River Rafting"
        }
      ]
    }
  };

  // Dedicated Page Container
  let pageContainer = document.getElementById('categoryDedicatedPage');
  if (!pageContainer) {
    pageContainer = document.createElement('div');
    pageContainer.id = 'categoryDedicatedPage';
    pageContainer.style.cssText = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #060b17;
      color: #f8fafc;
      z-index: 2147483648;
      overflow-y: auto;
      padding: 18px 16px 80px 16px;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
    `;
    document.body.appendChild(pageContainer);
  }

  window.closeCategoryPage = function () {
    pageContainer.style.display = 'none';
    pageContainer.innerHTML = '';
    document.body.style.overflow = 'auto';
  };

  window.openCategoryPage = function (categoryKey) {
    document.body.style.overflow = 'hidden';
    pageContainer.style.display = 'block';
    pageContainer.scrollTop = 0;

    let catData;
    let combinedItems = [];

    if (categoryKey === 'all') {
      catData = {
        title: "🇮🇳 Incredible India — All Premier Circuits",
        subtitle: "Experience the complete spectrum of India: snow-clad peaks, royal citadels, serene beaches, and sacred pilgrimage routes.",
        themeColor: "#FF5412"
      };
      Object.keys(destinationsDB).forEach(k => {
        combinedItems = combinedItems.concat(destinationsDB[k].items.slice(0, 3));
      });
      catData.items = combinedItems;
    } else {
      catData = destinationsDB[categoryKey];
    }

    if (!catData) return;

    const headerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:18px;">
        <button onclick="closeCategoryPage()" style="background:#1e293b; border:1px solid rgba(255,255,255,0.15); color:#fff; padding:8px 18px; border-radius:8px; font-weight:700; cursor:pointer; font-size:0.9rem; display:flex; align-items:center; gap:6px;">
          ← Back
        </button>
        <span style="font-weight:800; color:#FF5412; font-size:0.9rem;">Incredible India</span>
      </div>

      <div style="margin-bottom:22px; text-align:left;">
        <h1 style="margin:0 0 6px 0; font-size:1.45rem; color:#fff; font-weight:800; line-height:1.3;">
          ${catData.title}
        </h1>
        <p style="margin:0; font-size:0.85rem; color:#94a3b8; line-height:1.5;">
          ${catData.subtitle}
        </p>
      </div>
    `;

    const cardsHTML = catData.items.map(place => `
      <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:18px; margin-bottom:16px; box-shadow:0 8px 24px rgba(0,0,0,0.4); text-align:left; position:relative; overflow:hidden;">
        
        <div style="position:absolute; top:0; left:0; width:4px; height:100%; background:${catData.themeColor};"></div>

        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:8px;">
          <div>
            <h3 style="margin:0; font-size:1.15rem; color:#fff; font-weight:700;">${place.name}</h3>
            <span style="font-size:0.75rem; color:#38bdf8; font-weight:600; display:inline-block; margin-top:3px;">📍 ${place.state}</span>
          </div>
          <span style="font-size:0.7rem; background:rgba(255,84,18,0.15); color:#FF5412; padding:3px 8px; border-radius:12px; font-weight:700; white-space:nowrap; border:1px solid rgba(255,84,18,0.25);">
            ${place.tag}
          </span>
        </div>

        <p style="font-size:0.85rem; color:#cbd5e1; line-height:1.5; margin:10px 0;">
          ${place.desc}
        </p>

        <!-- Highlights & Season Box -->
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:10px 12px; border-radius:8px; margin-bottom:14px; font-size:0.78rem; display:flex; flex-direction:column; gap:5px;">
          <div><b style="color:#94a3b8;">✨ Highlights:</b> <span style="color:#f1f5f9;">${place.highlights}</span></div>
          <div><b style="color:#94a3b8;">🗓️ Best Season:</b> <span style="color:#4ade80; font-weight:600;">${place.season}</span></div>
        </div>

        <!-- Action Button -->
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <button onclick="bookThisDestination('${place.name.replace(/'/g, "\\'")}', '${place.state}')" style="background:#FF5412; border:none; color:#fff; padding:10px 16px; border-radius:8px; font-size:0.85rem; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px;">
            📝 Plan Trip to ${place.name.split(' ')[0]} ›
          </button>
          <span style="font-size:0.75rem; color:#64748b;">Official Directory</span>
        </div>

      </div>
    `).join('');

    pageContainer.innerHTML = headerHTML + `<div style="max-width:540px; margin:0 auto;">${cardsHTML}</div>`;
  };

  // Connect Plan Trip Button with auto-filled destination
  window.bookThisDestination = function (destName, stateName) {
    window.closeCategoryPage();
    if (window.openAppPage) {
      window.openAppPage('quote');
      setTimeout(() => {
        const destInput = document.getElementById('tripDest') || document.getElementById('quoteDest');
        if (destInput) {
          destInput.value = `${destName}, ${stateName}`;
          destInput.style.borderColor = '#FF5412';
        }
      }, 100);
    }
  };

  // Connect Home Page Category Pills
  function linkPills() {
    document.querySelectorAll('button, div, a').forEach(el => {
      if (el.closest('#unifiedDrawer') || el.closest('#dedicatedAppContainer') || el.closest('#categoryDedicatedPage')) return;

      const txt = (el.textContent || '').trim().toLowerCase();

      let targetCat = null;
      if (txt.includes('all india')) targetCat = 'all';
      else if (txt.includes('hill stations') || txt.includes('snow')) targetCat = 'hills';
      else if (txt.includes('royal forts') || txt.includes('palaces')) targetCat = 'forts';
      else if (txt.includes('coastal') || txt.includes('islands')) targetCat = 'coastal';
      else if (txt.includes('spiritual')) targetCat = 'spiritual';

      if (targetCat) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          window.openCategoryPage(targetCat);
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', linkPills);
  } else {
    linkPills();
  }
  setTimeout(linkPills, 800);
})();
