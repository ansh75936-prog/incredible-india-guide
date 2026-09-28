// ========================================================
// 100% ANDROID RESPONSIVE & MOBILE-FIRST LAYOUT ENGINE
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Android Viewport & Global Responsive CSS Injection
    applyAndroidResponsiveFixes();

    // 2. Header Cleanup & Relocate Clutter to Bottom
    cleanHeaderAndMoveToBottom();

    // 3. Top-Left 3-Dot (⋮) Drawer Menu Setup
    setupThreeDotMenu();
});

function applyAndroidResponsiveFixes() {
    // Ensure Meta Viewport exists
    let meta = document.querySelector('meta[name="viewport"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
        document.head.appendChild(meta);
    } else {
        meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    }

    // Android Master Responsive Styles
    const style = document.createElement('style');
    style.innerHTML = `
        /* Global Mobile Overflow Fix */
        *, *::before, *::after {
            box-sizing: border-box !important;
        }

        html, body {
            width: 100% !important;
            max-width: 100% !important;
            overflow-x: hidden !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-text-size-adjust: 100% !important;
        }

        /* Responsive Grid & Containers */
        .container, main, section, .hero-section, .directory-section {
            width: 100% !important;
            max-width: 100% !important;
            padding-left: 14px !important;
            padding-right: 14px !important;
            box-sizing: border-box !important;
        }

        /* State Cards & Grid Items on Mobile */
        .state-card-tile, .state-grid > div, [class*="state-card"] {
            width: 100% !important;
            min-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            margin-bottom: 12px !important;
            box-sizing: border-box !important;
        }

        /* Lead Form Responsive Inputs */
        form, input, select, textarea, button {
            max-width: 100% !important;
            width: 100% !important;
            font-size: 16px !important; /* Prevents iOS/Android auto-zoom */
            box-sizing: border-box !important;
        }

        /* Fix Hero Banner Typography */
        h1 {
            font-size: 1.8rem !important;
            line-height: 1.25 !important;
            word-wrap: break-word !important;
        }

        /* Hide Legacy Modals that glitch on mobile */
        #stateDetailModal, .modal-backdrop {
            display: none !important;
        }

        /* Header Cleanup - Keep ONLY Brand & 3-Dot */
        header {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            position: relative !important;
            padding: 12px 16px 12px 55px !important;
            min-height: 52px !important;
            background: #090F1C !important;
            width: 100% !important;
        }

        header > *:not(.logo):not(.brand):not(h1):not(#navThreeDotBtn):not(a[href="/"]) {
            display: none !important;
        }

        header a, header .badge, header [class*="chip"], header [class*="stat"] {
            display: none !important;
        }

        /* Smooth District Chip Animations */
        @keyframes districtEntrance {
            0% { opacity: 0; transform: translateY(10px) scale(0.96); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .district-animated-chip {
            opacity: 0;
            animation: districtEntrance 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            transition: transform 0.2s ease, background 0.2s ease;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
        }

        .district-animated-chip:active {
            transform: scale(0.97) !important;
            background: rgba(255, 84, 18, 0.25) !important;
        }
    `;
    document.head.appendChild(style);
}

function cleanHeaderAndMoveToBottom() {
    if (document.getElementById('cleanBottomRegistryFooter')) return;

    const bottomBox = document.createElement('div');
    bottomBox.id = 'cleanBottomRegistryFooter';
    bottomBox.style.cssText = `
        background: #060B14;
        border-top: 1px solid rgba(255,255,255,0.12);
        padding: 24px 16px;
        color: #94A3B8;
        font-size: 0.88rem;
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
        text-align: center;
        margin-top: 40px;
    `;
    bottomBox.innerHTML = `
        <div>🇮🇳 <strong style="color:#FFF;">Coverage:</strong> 36 States & UTs (780+ Districts)</div>
        <div>📞 <strong style="color:#FFF;">Helpline:</strong> <a href="tel:1363" style="color:#FF5412; text-decoration:none; font-weight:700;">1363 (24x7 Toll Free)</a></div>
        <div>🛡️ <strong style="color:#FFF;">Official Registry:</strong> Verified Stays & Cabs</div>
        <div>🗺️ <a href="#explore" style="color:#FF5412; text-decoration:none; font-weight:700;">Live Interactive Map &rarr;</a></div>
    `;

    const footer = document.querySelector('footer');
    if (footer) {
        footer.parentNode.insertBefore(bottomBox, footer);
    } else {
        document.body.appendChild(bottomBox);
    }
}

function setupThreeDotMenu() {
    if (document.getElementById('navThreeDotBtn')) return;

    // Top-Left Floating 3-Dot Button
    const threeDotBtn = document.createElement('button');
    threeDotBtn.id = 'navThreeDotBtn';
    threeDotBtn.innerHTML = `&#8942;`;
    threeDotBtn.setAttribute('aria-label', 'Open Menu');
    threeDotBtn.style.cssText = `
        position: fixed;
        top: 8px;
        left: 10px;
        background: #0E1726;
        color: #FF5412;
        border: 1px solid rgba(255,84,18,0.4);
        width: 38px;
        height: 38px;
        border-radius: 8px;
        font-size: 1.4rem;
        font-weight: 900;
        cursor: pointer;
        z-index: 9999999;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    `;
    document.body.appendChild(threeDotBtn);

    // Slide Drawer
    const drawer = document.createElement('div');
    drawer.id = 'sideNavDrawer';
    drawer.style.cssText = `
        position: fixed;
        top: 0;
        left: -290px;
        width: 275px;
        height: 100vh;
        background: #090F1C;
        border-right: 1px solid rgba(255,255,255,0.1);
        z-index: 10000000;
        transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 50px 20px 20px 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 16px;
        box-shadow: 15px 0 35px rgba(0,0,0,0.7);
    `;

    drawer.innerHTML = `
        <button id="closeDrawerBtn" style="position:absolute; top:12px; right:12px; background:none; border:none; color:#FFF; font-size:1.8rem; cursor:pointer;">&times;</button>
        <div style="font-weight:800; font-size:1.2rem; color:#FF5412; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">🇮🇳 Incredible India</div>
        
        <a href="#explore" class="drawer-link" style="color:#FFF; text-decoration:none; font-weight:600; padding:8px 0;">📍 All 36 States & UTs</a>
        
        <a href="#calculator" id="drawerCostEstimatorLink" class="drawer-link" style="color:#FF8540; text-decoration:none; font-weight:700; padding:8px 0; display:flex; align-items:center; gap:8px;">
            🧮 Tour Cost Estimator
        </a>
        
        <a href="#plan" class="drawer-link" style="color:#FFF; text-decoration:none; font-weight:600; padding:8px 0;">📝 Tour Quote / Plan</a>
        <a href="tel:1363" class="drawer-link" style="color:#38BDF8; text-decoration:none; font-weight:600; padding:8px 0;">📞 Helpline: 1363 (24x7)</a>
        
        <div style="margin-top:auto; font-size:0.75rem; color:#64748B;">Official Tourism Guide Directory of Bharat</div>
    `;
    document.body.appendChild(drawer);

    threeDotBtn.onclick = () => { drawer.style.left = '0'; };
    drawer.querySelector('#closeDrawerBtn').onclick = () => { drawer.style.left = '-290px'; };
    
    const costLink = drawer.querySelector('#drawerCostEstimatorLink');
    if (costLink) {
        costLink.onclick = (e) => {
            e.preventDefault();
            drawer.style.left = '-290px';
            const calcSection = document.getElementById('calculator') || document.querySelector('.cost-calculator-section') || document.querySelector('[id*="calc"]');
            if (calcSection) {
                calcSection.scrollIntoView({ behavior: 'smooth' });
            }
        };
    }

    drawer.querySelectorAll('.drawer-link:not(#drawerCostEstimatorLink)').forEach(link => {
        link.onclick = () => { drawer.style.left = '-290px'; };
    });
}
