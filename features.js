// =========================================================================
// INCREDIBLE INDIA GUIDE - CORE FEATURES & DISTRICT DRAWER ENGINE
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Purane popup modal ko completely block / hide karna
    const killOldModals = () => {
        document.querySelectorAll('.state-modal, .modal-backdrop, [id*="stateModal"], [class*="state-popup"]').forEach(el => {
            el.style.display = 'none';
            el.remove();
        });
    };
    killOldModals();

    // 2. State card tiles par naya full-page view attach karna
    document.querySelectorAll('.state-card-tile, .state-card, [data-state]').forEach(tile => {
        const newTile = tile.cloneNode(true);
        tile.parentNode.replaceChild(newTile, tile);

        newTile.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            killOldModals();

            const rawName = newTile.getAttribute('data-state') || newTile.querySelector('h3, h4')?.innerText || '';
            const cleanState = rawName.replace(' (UT)', '').replace(' (NCT)', '').replace('State Guide', '').trim();
            
            if (cleanState) {
                renderDedicatedStatePage(cleanState);
            }
        });
    });

    // 3. Android Hardware / Swipe Back Navigation Listener
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

    // 4. Direct URL handler (?state=Uttar Pradesh)
    const urlParams = new URLSearchParams(window.location.search);
    const stateParam = urlParams.get('state');
    if (stateParam) {
        setTimeout(() => renderDedicatedStatePage(stateParam, false), 250);
    }
});

// Dedicated State Page with Clickable District Chips
function renderDedicatedStatePage(stateName, pushHistory = true) {
    document.querySelectorAll('.state-modal, .modal-backdrop, [id*="stateModal"]').forEach(el => el.remove());

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
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        `;
        document.body.appendChild(stateView);
    }

    // Har district chip par DIRECT CLICK HANDLER
    const safeState = stateName.replace(/'/g, "\\'");
    const distListHtml = districts.length > 0 
        ? districts.map((d, index) => {
            const delay = Math.min(index * 0.02, 1.0);
            const safeDist = d.replace(/'/g, "\\'");
            return `<button type="button" onclick="openDistrictDrawer('${safeDist}', '${safeState}')" class="district-animated-chip" style="animation-delay: ${delay}s; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.18); padding: 10px 16px; border-radius: 25px; font-size: 0.9rem; color: #FFFFFF; display: inline-flex; align-items:center; gap:6px; cursor: pointer; text-align: left; font-family: inherit; -webkit-tap-highlight-color: transparent;">
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
            <!-- Hero Header -->
            <div style="background-image: linear-gradient(to top, rgba(6,10,19,0.95), rgba(6,10,19,0.35)), url('${details.heroImage}'); background-size: cover; background-position: center; border-radius: 20px; border: 1px solid rgba(255,255,255,0.15); padding: 30px 20px 22px 20px; margin-bottom: 22px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <span style="background: #FF5412; color: #FFF; font-size: 0.72rem; font-weight: 800; padding: 4px 12px; border-radius: 30px; text-transform: uppercase;">Official Tourism Circuit</span>
                <h1 style="font-size: 2.2rem; margin: 12px 0 6px 0; color: #FFFFFF; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">${stateName}</h1>
                <p style="color: #F8FAFC; margin: 0 0 14px 0; font-size: 1rem; font-style: italic;">"${details.tagline}"</p>
                <div style="display:flex; flex-wrap:wrap; gap:12px; font-size:0.85rem; color:#CBD5E1;">
                    <span>🏛️ <strong>Capital:</strong> ${details.capital}</span>
                    <span>🌤️ <strong>Best Time:</strong> ${details.bestSeason}</span>
                    <span>📍 <strong>Total Districts:</strong> ${districts.length}</span>
                </div>
            </div>

            <!-- Highlights & Foods Grid -->
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom: 24px;">
                <div style="background: #0E1726; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 18px;">
                    <h3 style="color:#FF8540; font-size:1.1rem; margin-top:0; margin-bottom:10px;">⭐ Pramukh Aakarshan (Highlights)</h3>
                    <ul style="padding-left:18px; margin:0; line-height:1.6;">
                        ${highlightsHtml}
                    </ul>
                </div>
                <div style="background: #0E1726; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 18px; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h3 style="color:#FF8540; font-size:1.1rem; margin-top:0; margin-bottom:10px;">🍽️ Prasiddh Vyanjan (Local Cuisine)</h3>
                        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:14px;">
                            ${foodsHtml}
                        </div>
                    </div>
                    <div style="background:rgba(255,255,255,0.04); border-left:3px solid #FF5412; padding:8px 12px; font-size:0.82rem; color:#94A3B8; margin-top:12px;">
                        💡 <strong>Tour Tip:</strong> ${details.itineraryHint}
                    </div>
                </div>
            </div>

            <!-- All Districts Section -->
            <section style="margin-bottom: 30px;">
                <h2 style="font-size: 1.25rem; color: #FF8540; margin-bottom: 6px; border-bottom: 2px solid rgba(255,84,18,0.3); padding-bottom: 8px;">
                    🏛️ Sabhi Districts & Kshetra (${districts.length})
                </h2>
                <p style="color:#94A3B8; font-size:0.85rem; margin-bottom:14px;">Kisi bhi district par tap karein hotel, hospital, photo places aur food details dekhne ke liye:</p>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${distListHtml}
                </div>
            </section>

            <!-- Direct Booking Action -->
            <section style="background: #0E1726; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 22px; text-align: center;">
                <h3 style="font-size: 1.25rem; margin: 0 0 8px 0;">Kya aap ${stateName} ghumne ki yojana bana rahe hain?</h3>
                <p style="color: #94A3B8; font-size: 0.9rem; margin-bottom: 18px;">Humare verified cabs aur custom itinerary ke sath yatra plan karein.</p>
                <button onclick="bookThisState('${safeState}')" style="background: #FF5412; color: #FFF; border: none; padding: 14px 26px; border-radius: 10px; font-weight: 800; font-size: 1rem; cursor: pointer; width: 100%; max-width: 340px;">
                    ${stateName} Ka Free Plan Payein →
                </button>
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

// =========================================================================
// DISTRICT BOTTOM DRAWER (WITH IMAGE CARDS, FOOD, STAYS & HOSPITALS)
// =========================================================================

window.openDistrictDrawer = function(districtName, stateName) {
    const data = (window.DISTRICT_LEVEL_DETAILS && window.DISTRICT_LEVEL_DETAILS[districtName]) || {
        attractions: [
            { name: "Pramukh Mandir & Darshan Sthal", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80" },
            { name: "Heritage Landmark & Fort", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80" },
            { name: "Local Traditional Bazaar", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80" }
        ],
        famousFood: ["Traditional Thali", "Local Special Sweets & Snacks"],
        hotelAreas: ["Main Railway Station Circle", "City Centre", "Civil Lines"],
        hospitals: ["District Civil Hospital", "Government Medical College"],
        quickTip: "Local sightseeing ke liye auto-rickshaw aur cab suvidha aaram se uplabdh hai."
    };

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

    // Photo Card Grid for Attractions
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

    const safeDist = districtName.replace(/'/g, "\\'");
    const safeSt = stateName.replace(/'/g, "\\'");

    drawer.innerHTML = `
        <div style="padding: 20px 20px 90px 20px; max-width: 720px; margin: 0 auto; position: relative;">
            <!-- Pull Handle -->
            <div style="width: 46px; height: 5px; background: rgba(255,255,255,0.3); border-radius: 10px; margin: 0 auto 16px auto;"></div>
            
            <!-- Drawer Title Bar -->
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <div>
                    <span style="color:#FF8540; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">District Guide • ${stateName}</span>
                    <h2 style="font-size: 1.85rem; margin: 4px 0 0 0; color: #FFF;">📍 ${districtName}</h2>
                </div>
                <button onclick="closeDistrictDrawer()" style="background: rgba(255,255,255,0.14); color:#FFF; border:none; border-radius:50%; width:38px; height:38px; font-size:1.3rem; cursor:pointer; font-weight:bold; display:flex; align-items:center; justify-content:center;">&times;</button>
            </div>

            <!-- Attractions Gallery Grid -->
            <div style="margin-bottom:18px;">
                <h4 style="margin:0 0 10px 0; color:#FF8540; font-size:1rem;">⭐ Pramukh Paryatan Sthal (Famous Places)</h4>
                <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px;">
                    ${attrCardsHtml}
                </div>
            </div>

            <!-- Famous Food -->
            <div style="background:#060A13; border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:16px; margin-bottom:16px;">
                <h4 style="margin:0 0 10px 0; color:#FF8540; font-size:0.95rem;">🍽️ Prasiddh Khana & Street Flavors</h4>
                <div style="display:flex; flex-wrap:wrap; gap:8px;">
                    ${foodHtml}
                </div>
            </div>

            <!-- Stays & Hospitals 2-Column Grid -->
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap:12px; margin-bottom:16px;">
                <div style="background:#060A13; border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:16px;">
                    <h4 style="margin:0 0 8px 0; color:#E2E8F0; font-size:0.95rem;">🛌 Kahan Rukein? (Best Hotel Zones)</h4>
                    <ul style="padding-left:18px; margin:0; font-size:0.85rem; line-height:1.6;">
                        ${stayHtml}
                    </ul>
                </div>

                <div style="background:#060A13; border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:16px;">
                    <h4 style="margin:0 0 8px 0; color:#E2E8F0; font-size:0.95rem;">🚑 Emergency & Big Hospitals</h4>
                    <ul style="padding-left:18px; margin:0; font-size:0.85rem; line-height:1.6;">
                        ${hospHtml}
                    </ul>
                </div>
            </div>

            <!-- Quick Travel Tip -->
            <div style="background:rgba(255,84,18,0.08); border-left:3px solid #FF5412; padding:12px 16px; font-size:0.86rem; color:#CBD5E1; margin-bottom:20px; border-radius:0 10px 10px 0;">
                💡 <strong>Yatri Salah:</strong> ${data.quickTip}
            </div>

            <!-- Direct Book District Action -->
            <button onclick="bookThisDistrict('${safeDist}', '${safeSt}')" style="background:#FF5412; color:#FFF; border:none; width:100%; padding:15px; border-radius:12px; font-weight:800; font-size:1rem; cursor:pointer;">
                ${districtName} Ke Liye Cab / Tour Plan Mangein →
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
    const nameInput = document.getElementById('custLeadName') || document.querySelector('input[name*="name"]');
    if (nameInput) nameInput.focus();
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
    if (stateView) {
        stateView.style.display = 'none';
    }
    document.body.style.overflow = '';
    document.querySelectorAll('.state-modal, .modal-backdrop').forEach(el => el.remove());

    if (updateUrl && window.location.search.includes('state=')) {
        window.history.pushState({}, "", window.location.pathname);
    }
};

window.bookThisState = function(stateName) {
    closeDedicatedStatePage(true);
    const destInput = document.getElementById('custLeadDest') || document.querySelector('input[name*="dest"]');
    if (destInput) destInput.value = stateName;
    const plan = document.getElementById('plan') || document.querySelector('form');
    if (plan) plan.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('custLeadName') || document.querySelector('input[name*="name"]');
    if (nameInput) nameInput.focus();
};
