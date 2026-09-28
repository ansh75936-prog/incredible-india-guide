// Dedicated State Page with Staggered District Animations
function renderDedicatedStatePage(stateName) {
    const districts = (window.INDIA_DISTRICTS_DATA && window.INDIA_DISTRICTS_DATA[stateName]) || [];
    
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
        `;
        document.body.appendChild(stateView);
    }

    // Har district par staggered delay animation (50ms gap)
    const distListHtml = districts.length > 0 
        ? districts.map((d, index) => {
            const delay = Math.min(index * 0.03, 1.2); // max 1.2s tak smooth wave
            return `<span class="district-animated-chip" style="animation-delay: ${delay}s; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); padding: 9px 16px; border-radius: 25px; font-size: 0.88rem; color: #E2E8F0; display: inline-block;">📍 ${d}</span>`;
        }).join('')
        : `<p style="color:#94A3B8;">Districts data updating...</p>`;

    stateView.innerHTML = `
        <header style="background: #0B132B; padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.1); position: sticky; top: 0; z-index: 10; display: flex; justify-content: space-between; align-items: center;">
            <button onclick="closeDedicatedStatePage()" style="background: rgba(255,255,255,0.12); color: #FFF; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 700; cursor: pointer;">
                &larr; Wapas Directory
            </button>
            <span style="font-weight: 800; color: #FF5412; font-size: 1rem;">IncredibleIndiaGuide</span>
        </header>

        <main style="max-width: 900px; margin: 0 auto; padding: 20px 16px 80px 16px;">
            <div style="background: linear-gradient(135deg, rgba(255,84,18,0.15) 0%, rgba(12,20,36,0.8) 100%); border: 1px solid rgba(255,84,18,0.3); border-radius: 20px; padding: 24px 20px; margin-bottom: 25px;">
                <span style="background: #FF5412; color: #FFF; font-size: 0.72rem; font-weight: 800; padding: 4px 12px; border-radius: 30px; text-transform: uppercase;">Official Tourism Directory</span>
                <h1 style="font-size: 2rem; margin: 10px 0 6px 0; color: #FFFFFF;">${stateName}</h1>
                <p style="color: #94A3B8; margin: 0; font-size: 0.95rem;">Total Official Districts: <strong style="color: #FF8540;">${districts.length} Verified Districts</strong></p>
            </div>

            <section style="margin-bottom: 30px;">
                <h2 style="font-size: 1.25rem; color: #FF8540; margin-bottom: 15px; border-bottom: 2px solid rgba(255,84,18,0.3); padding-bottom: 8px;">
                    🏛️ Sabhi Districts & Kshetra (${districts.length})
                </h2>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${distListHtml}
                </div>
            </section>

            <section style="background: #0E1726; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 20px; text-align: center;">
                <h3 style="font-size: 1.2rem; margin: 0 0 8px 0;">Kya aap ${stateName} ghumne ki yojana bana rahe hain?</h3>
                <p style="color: #94A3B8; font-size: 0.9rem; margin-bottom: 18px;">Humare verified cabs aur custom itinerary ke sath yatra plan karein.</p>
                <button onclick="bookThisState('${stateName}')" style="background: #FF5412; color: #FFF; border: none; padding: 12px 24px; border-radius: 10px; font-weight: 800; font-size: 0.95rem; cursor: pointer; width: 100%; max-width: 320px;">
                    ${stateName} Ka Free Plan Payein &rarr;
                </button>
            </section>
        </main>
    `;

    stateView.style.display = 'block';
    window.scrollTo(0, 0);
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
