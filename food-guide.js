// =========================================================================
// INCREDIBLE INDIA - CULINARY TRAIL & DIRECT ONLINE FOOD ORDER ENGINE
// =========================================================================

(function () {
  const foodDatabase = [
    {
      region: "North India (Swad-e-Shahi)",
      tag: "Rich Gravies & Tandoori Treats",
      color: "#f59e0b",
      items: [
        {
          name: "Amritsari Kulcha & Chole",
          query: "Amritsari Kulcha",
          state: "Punjab",
          badge: "Must-Try Breakfast",
          desc: "Crispy layered butter-dripping bread baked inside tandoor, served with spicy tangy chickpeas and tamarind chutney.",
          famousSpot: "Bhai Kulwant Singh Kulchian Wale, Amritsar"
        },
        {
          name: "Old Delhi Murgh Makhani & Kebabs",
          query: "Butter Chicken Kebabs",
          state: "Delhi",
          badge: "Mughlai Heritage",
          desc: "Silky tomato-butter gravy simmered chicken alongside succulent seekh and galouti kebabs over charcoal grills.",
          famousSpot: "Karim's & Aslam Butter Chicken, Jama Masjid"
        },
        {
          name: "Dal Baati Churma",
          query: "Dal Baati Churma",
          state: "Rajasthan",
          badge: "Royal Rajasthani Thali",
          desc: "Hard wheat baked baatis crushed in desi ghee, spicy panchmel dal, alongside sweet cardamom churma laddu.",
          famousSpot: "Chokhi Dhani & LMB, Jaipur"
        },
        {
          name: "Kashmiri Wazwan & Rogan Josh",
          query: "Rogan Josh Kashmiri",
          state: "Jammu & Kashmir",
          badge: "Royal Banquet",
          desc: "Aromatic Rogan Josh, delicate Gushtaba meatballs in yogurt gravy, paired with saffron-almond brewed green tea.",
          famousSpot: "Ahdoos & Mughal Darbar, Srinagar"
        }
      ]
    },
    {
      region: "South India (Coastal & Spice Aromas)",
      tag: "Fermented Crepes & Coconut Curries",
      color: "#10b981",
      items: [
        {
          name: "Kerala Karimeen Pollichathu & Sadya",
          query: "Kerala Fish Pollichathu",
          state: "Kerala",
          badge: "Backwater Feast",
          desc: "Pearl spot fish marinated in fiery spices, slow-cooked in banana leaves, served alongside 24-item traditional Sadya feast.",
          famousSpot: "Grand Pavilion, Kochi & Alleppey Kitchens"
        },
        {
          name: "Hyderabadi Dum Biryani",
          query: "Hyderabadi Biryani",
          state: "Telangana",
          badge: "Nizami Heritage",
          desc: "Long-grain fragrant basmati rice and marinated meat sealed with dough and slow-cooked over wood embers in handi.",
          famousSpot: "Bawarchi & Shadab, Hyderabad"
        },
        {
          name: "Mysore Masala Dosa & Filter Coffee",
          query: "Masala Dosa",
          state: "Karnataka",
          badge: "Iconic South Tiffin",
          desc: "Crispy fermented crepe smeared with red garlic-chilli chutney, spiced potato mash, and frothy chicory kaapi.",
          famousSpot: "MTR & Vidyarthi Bhavan, Bengaluru"
        },
        {
          name: "Chettinad Pepper Chicken",
          query: "Chettinad Chicken",
          state: "Tamil Nadu",
          badge: "Heritage Spice Route",
          desc: "Fiery dry-roasted black pepper, star anise, and freshly ground coconut spice melange cooked with tender country chicken.",
          famousSpot: "Karaikudi Heritage Kitchens, Chennai"
        }
      ]
    },
    {
      region: "West India (Spicy, Tangy & Coastal)",
      tag: "Street Chaats & Coastal Catch",
      color: "#ec4899",
      items: [
        {
          name: "Mumbai Vada Pav & Pav Bhaji",
          query: "Pav Bhaji Vada Pav",
          state: "Maharashtra",
          badge: "Street Icon",
          desc: "Batter-fried spiced potato dumpling tucked inside soft pav with garlic chutney, alongside buttery mashed vegetable bhaji.",
          famousSpot: "Sardar Refreshments & Ashok Vada Pav, Mumbai"
        },
        {
          name: "Goan Fish Curry & Rice",
          query: "Goan Fish Curry",
          state: "Goa",
          badge: "Konkan-Portuguese Blend",
          desc: "Fresh catch simmered in tangy kokum and coconut milk gravy, concluded by multi-layered Indo-Portuguese warm pudding.",
          famousSpot: "Fisherman's Wharf & Martin's Corner, Goa"
        },
        {
          name: "Gujarati Kathiyawadi Thali",
          query: "Gujarati Thali",
          state: "Gujarat",
          badge: "Sweet-Savory Balance",
          desc: "Sev Tameta, spicy Ringan Bharta, piping hot Bajra Roti topped with white butter (makkhan), jaggery, and sweet Kadhi.",
          famousSpot: "Vishalla & Sasumaa Thali, Ahmedabad"
        }
      ]
    },
    {
      region: "East & North-East India (Pristine Flavors)",
      tag: "Mustard Seafood, Momos & Smoked Delicacies",
      color: "#38bdf8",
      items: [
        {
          name: "Kolkata Kosha Mangsho & Rosogolla",
          query: "Kosha Mangsho Kolkata",
          state: "West Bengal",
          badge: "City of Joy Specials",
          desc: "Slow-caramelized rich mutton curry paired with fluffy Lucchis, accompanied by spongy syrupy chhena balls.",
          famousSpot: "Golbari & KC Das, Kolkata"
        },
        {
          name: "Darjeeling Steamed Momos & Thukpa",
          query: "Steamed Momos Thukpa",
          state: "Sikkim / North Bengal",
          badge: "Himalayan Comfort",
          desc: "Handmade dough envelopes packed with spiced local fillings, served with fire-roasted Dalle Khursani chili sauce.",
          famousSpot: "Keventer's & Glenary's, Darjeeling"
        },
        {
          name: "Meghalaya Jadoh & Pork Delicacies",
          query: "Khasi Food Jadoh",
          state: "Meghalaya",
          badge: "Khasi Tribal Cuisine",
          desc: "Aromatic indigenous short-grain rice cooked with selective herbs, complemented by bamboo shoot infused meat.",
          famousSpot: "Trattoria & Police Bazar, Shillong"
        }
      ]
    }
  ];

  let foodPage = document.getElementById('foodTrailDedicatedPage');
  if (!foodPage) {
    foodPage = document.createElement('div');
    foodPage.id = 'foodTrailDedicatedPage';
    foodPage.style.cssText = `
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
      padding: 18px 16px 85px 16px;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
    `;
    document.body.appendChild(foodPage);
  }

  window.closeFoodPage = function () {
    foodPage.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  window.openFoodPage = function () {
    const drawer = document.getElementById('unifiedDrawer');
    const overlay = document.getElementById('unifiedDrawerOverlay');
    if (drawer) drawer.style.left = '-330px';
    if (overlay) overlay.style.display = 'none';

    document.body.style.overflow = 'hidden';
    foodPage.style.display = 'block';
    foodPage.scrollTop = 0;

    const sectionsHTML = foodDatabase.map(sec => {
      const dishes = sec.items.map(dish => {
        const encodedQuery = encodeURIComponent(dish.query);
        const zomatoUrl = `https://www.zomato.com/search?q=${encodedQuery}`;
        const swiggyUrl = `https://www.swiggy.com/search?query=${encodedQuery}`;

        return `
          <div style="background:#0f172a; border-radius:14px; padding:16px; border:1px solid rgba(255,255,255,0.07); box-shadow:0 4px 14px rgba(0,0,0,0.25);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px; gap:8px;">
              <div>
                <b style="color:#fff; font-size:1.02rem; display:block;">${dish.name}</b>
                <span style="color:#38bdf8; font-size:0.75rem; font-weight:600;">📍 ${dish.state}</span>
              </div>
              <span style="background:rgba(251,191,36,0.15); color:#fbbf24; font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:10px; white-space:nowrap;">
                ${dish.badge}
              </span>
            </div>

            <p style="color:#cbd5e1; font-size:0.83rem; line-height:1.5; margin:8px 0 10px 0;">
              ${dish.desc}
            </p>

            <div style="background:rgba(255,255,255,0.03); border-left:3px solid ${sec.color}; padding:6px 10px; border-radius:4px; font-size:0.76rem; color:#94a3b8; margin-bottom:12px;">
              🥣 <b style="color:#e2e8f0;">Famous Joint:</b> ${dish.famousSpot}
            </div>

            <!-- Online Order Row for each dish -->
            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; gap:8px; flex-wrap:wrap;">
              <span style="font-size:0.75rem; color:#94a3b8; font-weight:600;">🛵 Order This Dish:</span>
              <div style="display:flex; gap:8px;">
                <a href="${zomatoUrl}" target="_blank" rel="noopener noreferrer" style="background:#cb202d; color:#fff; text-decoration:none; padding:6px 12px; border-radius:6px; font-size:0.75rem; font-weight:800; display:inline-flex; align-items:center; gap:4px; box-shadow:0 2px 6px rgba(203,32,45,0.3);">
                  🔴 Zomato ↗
                </a>
                <a href="${swiggyUrl}" target="_blank" rel="noopener noreferrer" style="background:#fc8019; color:#fff; text-decoration:none; padding:6px 12px; border-radius:6px; font-size:0.75rem; font-weight:800; display:inline-flex; align-items:center; gap:4px; box-shadow:0 2px 6px rgba(252,128,25,0.3);">
                  🟠 Swiggy ↗
                </a>
              </div>
            </div>

          </div>
        `;
      }).join('');

      return `
        <div style="margin-bottom:24px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
            <div style="width:4px; height:20px; background:${sec.color}; border-radius:2px;"></div>
            <div>
              <h2 style="margin:0; font-size:1.15rem; color:#fff; font-weight:800;">${sec.region}</h2>
              <span style="color:#94a3b8; font-size:0.75rem;">${sec.tag}</span>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${dishes}
          </div>
        </div>
      `;
    }).join('');

    foodPage.innerHTML = `
      <div style="max-width:540px; margin:0 auto; text-align:left;">
        <!-- Header -->
        <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:18px;">
          <button onclick="closeFoodPage()" style="background:#1e293b; border:1px solid rgba(255,255,255,0.15); color:#fff; padding:8px 18px; border-radius:8px; font-weight:700; cursor:pointer; font-size:0.9rem; display:flex; align-items:center; gap:6px;">
            ← Back
          </button>
          <span style="font-weight:800; color:#fbbf24; font-size:0.9rem;">Taste of Bharat</span>
        </div>

        <h1 style="margin:0 0 6px 0; font-size:1.45rem; color:#fff; font-weight:800;">
          🍛 Incredible India Food & Culinary Guide
        </h1>
        <p style="margin:0 0 16px 0; font-size:0.85rem; color:#94a3b8; line-height:1.5;">
          Authentic state cuisines with instant direct ordering links to Swiggy, Zomato, and IRCTC Train Food.
        </p>

        <!-- General Delivery Quick Bar -->
        <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:14px; margin-bottom:20px;">
          <b style="color:#fff; font-size:0.88rem; display:block; margin-bottom:4px;">⚡ Quick Online Delivery Apps</b>
          <span style="color:#94a3b8; font-size:0.75rem; display:block; margin-bottom:10px;">Direct hotel delivery ya live train seat meal:</span>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" style="background:#cb202d; color:#fff; text-decoration:none; padding:7px 14px; border-radius:8px; font-size:0.78rem; font-weight:800;">
              Zomato Delivery ↗
            </a>
            <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" style="background:#fc8019; color:#fff; text-decoration:none; padding:7px 14px; border-radius:8px; font-size:0.78rem; font-weight:800;">
              Swiggy Delivery ↗
            </a>
            <a href="https://www.ecatering.irctc.co.in" target="_blank" rel="noopener noreferrer" style="background:#0284c7; color:#fff; text-decoration:none; padding:7px 14px; border-radius:8px; font-size:0.78rem; font-weight:800;">
              🚆 IRCTC eCatering (Train) ↗
            </a>
          </div>
        </div>

        ${sectionsHTML}
      </div>
    `;
  };

  function injectFoodButtonInDrawer() {
    const drawer = document.getElementById('unifiedDrawer');
    if (!drawer || document.getElementById('drawerFoodBtn')) return;

    const travelBtn = document.getElementById('drawerTravelBtn') || drawer.querySelector('[data-page="circuits"]');

    const foodBtn = document.createElement('button');
    foodBtn.id = 'drawerFoodBtn';
    foodBtn.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      padding: 12px 14px;
      border-radius: 8px;
      color: #fbbf24;
      font-weight: 600;
      font-size: 0.88rem;
      cursor: pointer;
      text-align: left;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 8px;
    `;
    foodBtn.innerHTML = `
      <span>🍛 Famous Food & Cuisines</span>
      <span style="color:#64748b; font-size:0.8rem;">›</span>
    `;

    foodBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.openFoodPage();
    });

    if (travelBtn && travelBtn.parentNode) {
      travelBtn.parentNode.insertBefore(foodBtn, travelBtn.nextSibling);
    } else {
      drawer.appendChild(foodBtn);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFoodButtonInDrawer);
  } else {
    injectFoodButtonInDrawer();
  }
  setInterval(injectFoodButtonInDrawer, 1000);
})();
