// ========================================================
// INCREDIBLE INDIA GUIDE - DEDICATED STATE PAGES & MOBILE RESPONSIVE ENGINE
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Display & Responsive Fix Injector
    injectMobileFixStyles();

    // 2. State Tile Click Handler - Open Full Dedicated Page View
    document.querySelectorAll('.state-card-tile').forEach(tile => {
        tile.addEventListener('click', (e) => {
            e.preventDefault();
            const rawName = tile.getAttribute('data-state') || '';
            const cleanState = rawName.replace(' (UT)', '').replace(' (NCT)', '').trim();
            if (cleanState) {
                renderDedicatedStatePage(cleanState);
            }
        });
    });

    // URL me agar direct state parameter ho (?state=Rajasthan) toh seedha state page khole
    const urlParams = new URLSearchParams(window.location.search);
    const stateParam = urlParams.get('state');
    if (stateParam) {
        setTimeout(() => renderDedicatedStatePage(stateParam), 200);
    }

    // 3. Lead Form submission & WhatsApp Alert
    const leadForm = document.getElementById('leadInquiryForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            const name = (document.getElementById('custLeadName')?.value || '').trim();
            const phone = (document.getElementById('custLeadPhone')?.value || '').trim();
            const dest = (document.getElementById('custLeadDest')?.value || '').trim();
            const pax = document.getElementById('custLeadGroup')?.value || 'Not specified';
            const budget = document.getElementById('custLeadBudget')?.value || 'Not specified';

            if (!name || !phone || !dest) return;

            const waMsg = encodeURIComponent(
                `Namaste Incredible India Guide!\n\nNew Trip Inquiry:\nName: ${name}\nPhone: ${phone}\nDestination: ${dest}\nTravelers: ${pax}\nBudget: ${budget}`
            );
            const waLink = `https://wa.me/?text=${waMsg}`;

            setTimeout(() => {
                const banner = document.getElementById('formSuccessBanner');
                if (banner) {
                    banner.innerHTML = `
                        <div style="display:flex; flex-direction:column; gap:8px;">
                            <span>✅ <strong>Inquiry Safely Registered!</strong></span>
                            <a href="${waLink}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; justify-content:center; gap:8px; background:#25D366; color:#FFF; padding:12px 18px; border-radius:10px; text-decoration:none; font-weight:700; width:100%; box-sizing:border-box;">
                                💬 WhatsApp Par Lead Bhejein &rarr;
                            </a>
                        </div>
                    `;
                    banner.style.display = 'block';
                }
            }, 300);
        }, true);
    }
});

// Fullscreen Dedicated State Page Engine
function renderDedicatedStatePage(stateName) {
    const districts = (window.INDIA_DISTRICTS_DATA && window.INDIA_DISTRICTS_DATA[stateName]) || [];
    
    // Page container create ya select karein
    let stateView = document.getElementById('dedicatedStateViewContainer');
    if (!stateView) {
        stateView = document.createElement('div');
        stateView.id = 'dedicatedStateViewContainer';
        stateView.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: #060A13;
            color: #FFFFFF;
            z-index: 999999;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            padding: 0;
            margin: 0;
            font-family: inherit;
        `;
        document.body.appendChild(stateView);
    }

    const distListHtml = districts.length > 0 
        ? districts.map(d => `<span style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); padding: 8px 16px; border-radius: 25px; font-size: 0.88rem; color: #E2E8F0; display: inline-block;">📍 ${d}</span>`).join('')
        : `<p style="color:#94A3B8;">Districts data updating...</p>`;

    stateView.innerHTML = `
        <header style="background: #0B132B; padding: 15px 20px; border-bottom: 1px solid rgba(255,255,255,0.1); position: sticky; top: 0; z-index: 10; display: flex; justify-content: space-between; align-items: center;">
            <button onclick="closeDedicatedStatePage()" style="background: rgba(255,255,255,0.1); color: #FFF; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                &larr; Wapas Directory
            </button>
            <span style="font-weight: 800; color: #FF5412; font-size: 1.05rem;">IncredibleIndiaGuide.in</span>
        </header>

        <main style="max-width: 900px; margin: 0 auto; padding: 25px 20px 80px 20px;">
            <div style="background: linear-gradient(135deg, rgba(255,84,18,0.15) 0%, rgba(12,20,36,0.8) 100%); border: 1px solid rgba(255,84,18,0.3); border-radius: 20px; padding: 30px 24px; margin-bottom: 30px;">
                <span style="background: #FF5412; color: #FFF; font-size: 0.75rem; font-weight: 800; padding: 4px 12px; border-radius: 30px; text-transform: uppercase;">Official Tourism Directory</span>
                <h1 style="font-size: 2.2rem; margin: 12px 0 6px 0; color: #FFFFFF;">${stateName}</h1>
                <p style="color: #94A3B8; margin: 0; font-size: 1rem;">Total Official Districts: <strong style="color: #FF8540;">${districts.length} Verified Districts</strong></p>
            </div>

            <section style="margin-bottom: 35px;">
                <h2 style="font-size: 1.35rem; color: #FF8540; margin-bottom: 15px; border-bottom: 2px solid rgba(255,84,18,0.3); padding-bottom: 8px;">
                    🏛️ Sabhi Districts & Kshetra (${districts.length})
                </h2>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    ${distListHtml}
                </div>
            </section>

            <section style="background: #0E1726; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 24px; text-align: center;">
                <h3 style="font-size: 1.3rem; margin: 0 0 10px 0;">Kya aap ${stateName} ghumne ki yojana bana rahe hain?</h3>
                <p style="color: #94A3B8; font-size: 0.95rem; margin-bottom: 20px;">Humare local drivers aur verified cabs ke sath customized itinerary banwayein.</p>
                <button onclick="bookThisState('${stateName}')" style="background: #FF5412; color: #FFF; border: none; padding: 14px 28px; border-radius: 10px; font-weight: 800; font-size: 1rem; cursor: pointer; width: 100%; max-width: 350px;">
                    ${stateName} Ka Free Plan Payein &rarr;
                </button>
            </section>
        </main>
    `;

    stateView.style.display = 'block';
    window.scrollTo(0, 0);
    // Browser history update karein taaki back button se wapas home page aaye
    window.history.pushState({ state: stateName }, "", `?state=${encodeURIComponent(stateName)}`);
}

window.closeDedicatedStatePage = function() {
    const stateView = document.getElementById('dedicatedStateViewContainer');
    if (stateView) stateView.style.display = 'none';
    window.history.pushState({}, "", window.location.pathname);
};

window.bookThisState = function(stateName) {
    closeDedicatedStatePage();
    const destInput = document.getElementById('custLeadDest');
    if (destInput) destInput.value = stateName;
    const plan = document.getElementById('plan');
    if (plan) plan.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('custLeadName');
    if (nameInput) nameInput.focus();
};

window.addEventListener('popstate', (e) => {
    const stateView = document.getElementById('dedicatedStateViewContainer');
    if (stateView && stateView.style.display === 'block') {
        stateView.style.display = 'none';
    }
});

// Mobile Layout CSS Fixer
function injectMobileFixStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        @media screen and (max-width: 768px) {
            body, html {
                overflow-x: hidden !important;
                width: 100% !important;
            }
            .state-card-tile {
                width: 100% !important;
                box-sizing: border-box !important;
            }
            input, select, textarea, button {
                font-size: 16px !important; /* Mobile zoom issue fix */
            }
            #formSuccessBanner a {
                display: flex !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }
        }
    `;
    document.head.appendChild(style);
}
