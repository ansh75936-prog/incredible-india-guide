// ========================================================
// INCREDIBLE INDIA GUIDE - CORE FEATURES & POPUP FIX
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Purane popup modal ko completely block / hide karna
    const killOldModals = () => {
        document.querySelectorAll('.state-modal, .modal-backdrop, [id*="stateModal"], [class*="state-popup"]').forEach(el => {
            el.style.display = 'none';
            el.remove(); // DOM se hi hata dein taaki pichhe khula na rahe
        });
    };
    killOldModals();

    // 2. State card tiles par naya full-page view attach karna
    document.querySelectorAll('.state-card-tile, .state-card, [data-state]').forEach(tile => {
        // Purane event listeners ko bypass karne ke liye cloned element use karein
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
        const stateView = document.getElementById('dedicatedStateViewContainer');
        if (stateView && stateView.style.display !== 'none') {
            closeDedicatedStatePage(false);
        }
    });

    // 4. Direct URL handler (?state=Punjab)
    const urlParams = new URLSearchParams(window.location.search);
    const stateParam = urlParams.get('state');
    if (stateParam) {
        setTimeout(() => renderDedicatedStatePage(stateParam, false), 250);
    }
});

// Dedicated State Page with Rich Tourism Details & Animated Districts
function renderDedicatedStatePage(stateName, pushHistory = true) {
    // Purana koi bhi popup background mein ho toh use turant hatao
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

    // Districts wave chips
    const distListHtml = districts.length > 0 
        ? districts.map((d, index) => {
            const delay = Math.min(index * 0.03, 1.2);
            return `<span class="district-animated-chip" style="animation-delay: ${delay}s; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); padding: 9px 16px; border-radius: 25px; font-size: 0.88rem; color: #E2E8F0; display: inline-block;">📍 ${d}</span>`;
        }).join('')
        : `<p style="color:#94A3B8;">Districts data updating...</p>`;

    const highlightsHtml = details.topHighlights.map(h => `<li style="margin-bottom:6px; color:#E2E8F0;">✨ ${h}</li>`).join('');
    const foodsHtml = details.famousFoods.map(f => `<span style="background:rgba(255,84,18,0.15); border:1px solid rgba(255,84,18,0.3); color:#FF8540; padding:4px 12px; border-radius:20px; font-size:0.82rem; font-weight:700;">🍲 ${f}</span>`).join('');

    stateView.innerHTML = `
        <header style="background: #0B132B; padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.1); position: sticky; top: 0; z-index: 10; display: flex; justify-content: space-between; align-items: center;">
            <button onclick="handleBackNavigation()" style="background: rgba(255,255,255,0.14); color: #FFF; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px; font-size: 0.95rem;">
                ← Wapas Directory
            </button>
            <span style="font-weight: 800; color: #FF5412; font-size: 1rem;">IncredibleIndiaGuide</span>
        </header>

        <main style="max-width: 900px; margin: 0 auto; padding: 20px 16px 80px 16px;">
            <!-- Hero Header -->
            <div style="background-image: linear-gradient(to top, rgba(6,10,19,0.95), rgba(6,10,19,0.35)), url('${details.heroImage}'); background-size: cover; background-position: center; border-radius: 20px; border: 1px solid rgba(255,255,255,0.15); padding: 32px 20px 22px 20px; margin-bottom: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
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
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom: 26px;">
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

            <!-- All Districts -->
            <section style="margin-bottom: 30px;">
                <h2 style="font-size: 1.25rem; color: #FF8540; margin-bottom: 15px; border-bottom: 2px solid rgba(255,84,18,0.3); padding-bottom: 8px;">
                    🏛️ Sabhi Districts & Kshetra (${districts.length})
                </h2>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${distListHtml}
                </div>
            </section>

            <!-- Direct Booking Action -->
            <section style="background: #0E1726; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 22px; text-align: center;">
                <h3 style="font-size: 1.25rem; margin: 0 0 8px 0;">Kya aap ${stateName} ghumne ki yojana bana rahe hain?</h3>
                <p style="color: #94A3B8; font-size: 0.9rem; margin-bottom: 18px;">Humare verified cabs aur custom itinerary ke sath yatra plan karein.</p>
                <button onclick="bookThisState('${stateName}')" style="background: #FF5412; color: #FFF; border: none; padding: 14px 26px; border-radius: 10px; font-weight: 800; font-size: 1rem; cursor: pointer; width: 100%; max-width: 340px;">
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

// Back Action Handler
window.handleBackNavigation = function() {
    if (window.history.state && window.history.state.modalOpen) {
        window.history.back();
    } else {
        closeDedicatedStatePage(true);
    }
};

window.closeDedicatedStatePage = function(updateUrl = true) {
    const stateView = document.getElementById('dedicatedStateViewContainer');
    if (stateView) {
        stateView.style.display = 'none';
    }
    document.body.style.overflow = '';
    
    // Safety: Purana modal agar bacha ho toh use bhi band karein
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
