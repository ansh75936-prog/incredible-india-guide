// =========================================================================
// INCREDIBLE INDIA - CATEGORY SHOWCASE (STRICT PILLS ONLY - NO CARD CONFLICT)
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
          tag: "Skiing & Gondola",
          desc: "Renowned globally for world-class powder snow, alpine meadows, pine forests, and views of Mount Nanga Parbat.",
          highlights: "Kongdori Gondola Phase 2, Apharwat Snow Peak, Alpather Lake Trek"
        },
        {
          name: "Manali & Solang Valley",
          state: "Himachal Pradesh",
          season: "Winter Snow: Dec – Feb | Pleasant: Apr – Jun",
          tag: "Mountain Passes",
          desc: "The adventure hub of Himachal featuring cedar woods, swift river streams, hot springs, and scenic mountain corridors.",
          highlights: "Atal Tunnel Highway, Solang Valley Snow Park, Rohtang Pass"
        },
        {
          name: "Auli High Altitude Slopes",
          state: "Uttarakhand",
          season: "Snow Season: Jan – Mar",
          tag: "Premier Ski Resort",
          desc: "Surrounded by 180-degree panoramas of sacred Himalayan summits including Nanda Devi, Kamet, and Mana Parvat.",
          highlights: "Nanda Devi Vista, Joshimath Cable Car, Gorson Bugyal Trek"
        },
        {
          name: "Munnar Tea Gardens",
          state: "Kerala",
          season: "Cool & Serene: Sep – Mar",
          tag: "Emerald Valleys",
          desc: "Sprawling carpet of endless emerald tea plantations, cloud-wrapped mountain gorges, and the rare Nilgiri Tahr.",
          highlights: "Eravikulam National Park, Mattupetty Lake Dam, Top Station Viewpoint"
        },
        {
          name: "Darjeeling & Tiger Hill",
          state: "West Bengal",
          season: "Crisp Sunrises: Oct – Dec & Mar – May",
          tag: "Queen of the Hills",
          desc: "World-famous sunrise vistas across Mount Kanchenjunga combined with century-old UNESCO steam trains.",
          highlights: "Tiger Hill Sunrise, Toy Train (UNESCO), Batasia Loop"
        },
        {
          name: "Leh & Khardung La Pass",
          state: "Ladakh",
          season: "Open Highway: May – Sep | Frozen: Jan – Feb",
          tag: "Cold Desert",
          desc: "Dramatic lunar mountain terrain, sacred ancient Tibetan monasteries, surreal turquoise glacial lakes, and motorable passes.",
          highlights: "Pangong Tso Crystal Lake, Nubra Valley Dunes, Khardung La Pass"
        }
      ]
    },

    forts: {
      title: "🏰 Royal Forts & Historic Palaces",
      subtitle: "Relive centuries of legendary dynasties, mountain fortresses, and royal opulence.",
      themeColor: "#f59e0b",
      items: [
        {
          name: "Amer Fort & Sheesh Mahal",
          state: "Jaipur, Rajasthan",
          season: "Ideal Season: Oct – Mar",
          tag: "UNESCO Citadel",
          desc: "Perched majestically atop the Cheel ka Teela hill, famous for mirrored royal courtyards and ornate Rajput design.",
          highlights: "Sheesh Mahal (Hall of Mirrors), Ganesh Pol Entrance, Maota Lake Reflection"
        },
        {
          name: "Mehrangarh Fortress",
          state: "Jodhpur, Rajasthan",
          season: "Ideal Season: Oct – Mar",
          tag: "Blue City Citadel",
          desc: "Rising 400 feet above the city skyline, this colossal citadel boasts burnished cannon battlements and pearl halls.",
          highlights: "Moti Mahal, Phool Mahal, Chamunda Devi Sanctum, Flying Fox Zipline"
        },
        {
          name: "Taj Mahal & Agra Fort",
          state: "Uttar Pradesh",
          season: "Ideal Season: Oct – Mar",
          tag: "Monument to Love",
          desc: "One of the Seven Wonders of the World crafted from pure white Makrana marble, flanked by the red sandstone Mughal seat.",
          highlights: "Sunrise View of Taj Mahal, Diwan-i-Khas, Jahangiri Mahal, Mehtab Bagh"
        },
        {
          name: "Mysore Palace (Amba Vilas)",
          state: "Karnataka",
          season: "Pleasant: Sep – Mar | Grand Dasara: Oct",
          tag: "Architectural Jewel",
          desc: "The official royal residence of the Wadiyar dynasty, illuminated every weekend by nearly 100,000 golden incandescent lamps.",
          highlights: "Grand Durbar Hall, Kalyana Mantapa Stained Glass Ceiling, Golden Elephant Throne"
        },
        {
          name: "Gwalior Fort Complex",
          state: "Madhya Pradesh",
          season: "Ideal Season: Oct – Mar",
          tag: "Pearl of Fortresses",
          desc: "Described as the pearl among Indian citadels, featuring brilliant turquoise blue tilework and rock-cut sculptures.",
          highlights: "Man Singh Palace, Gujari Mahal Museum, Sas-Bahu Temples"
        },
        {
          name: "Golconda Fort & Acoustic Vaults",
          state: "Hyderabad, Telangana",
          season: "Pleasant: Nov – Feb",
          tag: "Acoustic Engineering",
          desc: "Renowned for acoustic engineering where a handclap at the entry gates echoes clearly a kilometer away at the citadel summit.",
          highlights: "Bala Hissar Whispering Arches, Fateh Darwaza, Historic Diamond Vaults"
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
          tag: "Asia's Best Shoreline",
          desc: "Turquoise coastal waters, powdery white sand strips, lush virgin rain forests, and pristine coral reefs.",
          highlights: "PADI Scuba Diving, Night Kayaking in Bioluminescence, Snorkeling"
        },
        {
          name: "Alleppey & Kumarakom Backwaters",
          state: "Kerala",
          season: "Ideal Season: Sep – Mar",
          tag: "Venice of the East",
          desc: "Sail effortlessly through palm-fringed labyrinthine canals, tranquil mangrove lagoons, and serene coastal villages.",
          highlights: "Overnight Luxury Houseboat Cruise, Vembanad Lake, Marari Beach Sunset"
        },
        {
          name: "Palolem & Butterfly Bay",
          state: "South Goa",
          season: "Peak Holiday: Nov – Apr",
          tag: "Golden Crescent Bay",
          desc: "A breathtaking crescent-shaped bay sheltered by coconut palms, safe swimming waters, and dolphin boat cruises.",
          highlights: "Sea Kayaking to Butterfly Island, Sunset Boat Safaris, Silent Headphone Parties"
        },
        {
          name: "Bangaram & Agatti Atolls",
          state: "Lakshadweep Archipelago",
          season: "Crystal Clear: Oct – Apr",
          tag: "Coral Reef Sanctuary",
          desc: "Teardrop-shaped coral atolls bordered by turquoise lagoons, thriving stingrays, sea turtles, and white sandbanks.",
          highlights: "Deep Sea Scuba Excursions, Lagoon Swimming, Live Coral Snorkeling"
        },
        {
          name: "Gokarna (Om & Kudle Beach)",
          state: "Karnataka",
          season: "Ideal Season: Oct – Mar",
          tag: "Rocky Ocean Cliffs",
          desc: "Where the cliffs of the Western Ghats dive directly into the Arabian Sea, featuring five scenic beaches linked by cliff trails.",
          highlights: "Panoramic Beach Hike, Om-shaped Rock Formations, Mahabaleshwar Coastal Temple"
        },
        {
          name: "Dhanushkodi & Rameswaram Coast",
          state: "Tamil Nadu",
          season: "Mild Climate: Oct – Apr",
          tag: "Meeting of Two Oceans",
          desc: "The southernmost coastal tip where the Bay of Bengal merges with the Indian Ocean, famous for shallow crystal shoals.",
          highlights: "Arichal Munai Ocean Border, Ram Setu Bridge Viewpoint, Pamban Sea Bridge"
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
          tag: "Eternal Sacred City",
          desc: "One of the oldest living cities. Experience soulful sunrise boat journeys and grand evening fire ceremonies along the holy Ganga.",
          highlights: "Maha Ganga Aarti at Dashashwamedh, Vishwanath Temple Corridor, Sarnath"
        },
        {
          name: "Char Dham Himalayan Shrines",
          state: "Uttarakhand",
          season: "Pilgrimage: May – Nov",
          tag: "Himalayan Sanctuaries",
          desc: "The sacred mountain pilgrimage encompassing Yamunotri, Gangotri, Kedarnath, and Badrinath nestled deep within snowy peaks.",
          highlights: "Kedarnath Jyotirlinga Heli/Trek, Badrinath Alaknanda Aarti, Mana Border Village"
        },
        {
          name: "Sri Harmandir Sahib (Golden Temple)",
          state: "Amritsar, Punjab",
          season: "Pleasant Season: Oct – Mar",
          tag: "Universal Sanctuary",
          desc: "A pure gold-leaf sanctuary standing serenely in the sacred Amrit Sarovar, hosting the world's largest community kitchen.",
          highlights: "Parikrama of Amrit Sarovar, Continuous Divine Kirtan, 24/7 Mega Community Langar"
        },
        {
          name: "Tirumala Venkateswara Temple",
          state: "Tirupati, Andhra Pradesh",
          season: "Open Year-Round | Pleasant: Nov – Feb",
          tag: "Seven Sacred Peaks",
          desc: "Dravidian temple architecture perched high upon seven holy hills, dedicated to Lord Sri Venkateswara.",
          highlights: "Vaikuntam Complex, Traditional Tirupati Laddu Prasadam, Kapila Theertham"
        },
        {
          name: "Jagannath Temple & Konark Sun Temple",
          state: "Puri & Konark, Odisha",
          season: "Ideal Season: Oct – Mar",
          tag: "Eastern Dham & Sun Temple",
          desc: "The ancient seaside temple of Lord Jagannath, paired with the 13th-century stone chariot architecture of Konark.",
          highlights: "Fifty-Six Offering Mahaprasad Feast, Golden Beach Sunrise, Architectural Wheels of Konark"
        },
        {
          name: "Rishikesh & Haridwar Gateway",
          state: "Uttarakhand",
          season: "Ideal Season: Sep – Apr",
          tag: "Yoga Capital of the World",
          desc: "Where the pristine waters of the holy Ganga flow out from Himalayan foothills, world-renowned for riverside ashrams.",
          highlights: "Har Ki Pauri Evening Aarti, Triveni Ghat, Beatles Ashram Heritage, River Rafting"
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

        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:10px 12px; border-radius:8px; margin-bottom:14px; font-size:0.78rem; display:flex; flex-direction:column; gap:5px;">
          <div><b style="color:#94a3b8;">✨ Highlights:</b> <span style="color:#f1f5f9;">${place.highlights}</span></div>
          <div><b style="color:#94a3b8;">🗓️ Best Season:</b> <span style="color:#4ade80; font-weight:600;">${place.season}</span></div>
        </div>

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

  // STRICT PILL BINDING - NEVER TOUCH DESTINATION CARDS OR SECTIONS!
  function linkPills() {
    document.querySelectorAll('button, a, div').forEach(el => {
      // Sirf single pill button ko target karein, kisi container ya card ko nahi
      if (el.closest('#unifiedDrawer') || el.closest('#dedicatedAppContainer') || el.closest('#categoryDedicatedPage') || el.closest('section')) return;

      // Sirf short direct text wale pills ko check karein
      const rawText = (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' ');
      if (rawText.length > 35) return; // Ignore any big card or paragraph!

      let targetCat = null;
      if (/^all india$/i.test(rawText)) targetCat = 'all';
      else if (/^hill stations & snow$/i.test(rawText)) targetCat = 'hills';
      else if (/^royal forts & palaces$/i.test(rawText)) targetCat = 'forts';
      else if (/^coastal & islands$/i.test(rawText)) targetCat = 'coastal';
      else if (/^spiritual circuits$/i.test(rawText)) targetCat = 'spiritual';

      if (targetCat && !el.dataset.strictPillBound) {
        el.dataset.strictPillBound = targetCat;
        el.style.cursor = 'pointer';
        el.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          window.openCategoryPage(this.dataset.strictPillBound);
        };
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', linkPills);
  } else {
    linkPills();
  }
  setTimeout(linkPills, 500);
  setTimeout(linkPills, 1200);
})();
