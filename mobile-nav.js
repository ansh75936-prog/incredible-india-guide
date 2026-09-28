// ========================================================
// 100% ANDROID RESPONSIVE, TOP-LEFT 3-DOT & COMPLETE DRAWER MENU
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Android Screen & Responsive Viewport Rules
    applyAndroidResponsiveFixes();

    // 2. Messy Top Strip ko screen se poori tarah hide karna
    hideMessyTopHeaderElements();

    // 3. Top-Left 3-Dot Button aur Drawer ke andar Helpline + Registry + Submissions pack karna
    setupThreeDotMenuAndDrawer();
});

function hideMessyTopHeaderElements() {
    // Screen se purani black bar aur uske saare badges hide karein
    const styleHide = document.createElement('style');
    styleHide.innerHTML = `
        /* Top black strip ko screen se gayab karein */
        header > div:first-child:not(.main-header),
        .top-nav-utility,
        .utility-strip,
        .header-stats,
        .header-badges {
            display: none !important;
        }

        /* Upar header sirf logo aur 3-dot ke liye space rakhega */
        header {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            position: relative !important;
            padding: 12px 16px 12px 60px !important;
            min-height: 54px !important;
            background: #090F1C !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }

        /* Incredible India logo ke alawa koi extra chip upar na dikhe */
        header a:not(.brand):not(.logo),
        header span:not(.logo-text),
        header .badge,
        header [class*="chip"] {
            display: none !important;
        }
    `;
    document.head.appendChild(styleHide);

    // DOM se text ke zariye bhi dhund kar hide karein taaki kuch bache na
    document.querySelectorAll('*').forEach(el => {
        if (el.textContent && (el.textContent.includes('24x7 Tourism Helpline') || el.textContent.includes('View Submissions')) && el.tagName !== 'BODY' && el.tagName !== 'HTML') {
            if (el.children.length >= 2) {
                el.style.display = 'none';
            }
        }
    });
}

function setupThreeDotMenuAndDrawer() {
    // Purana button agar ho toh hata dein
    const oldBtn = document.getElementById('navThreeDotBtn');
    if (oldBtn) oldBtn.remove();
    const oldDrawer = document.getElementById('sideNavDrawer');
    if (oldDrawer) oldDrawer.remove();

    // Top-Left Floating 3-Dot (⋮) Button
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
        box-shadow: 0 4px 14px rgba(0,0,0,0.6);
    `;
    document.body.appendChild(threeDotBtn);

    // Slide-out Side Drawer Menu (Jisme 24/7 Helpline, Registry, Submissions, Cost Estimator sab shamil hai)
    const drawer = document.createElement('div');
    drawer.id = 'sideNavDrawer';
    drawer.style.cssText = `
        position: fixed;
        top: 0;
        left: -310px;
        width: 295px;
        height: 100vh;
        background: #090F1C;
        border-right: 1px solid rgba(255,255,255,0.12);
        z-index: 10000000;
        transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 50px 20px 24px 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 14px;
        box-shadow: 18px 0 40px rgba(0,0,0,0.75);
        overflow-y: auto;
    `;

    drawer.innerHTML = `
        <button id="closeDrawerBtn" style="position:absolute; top:12px; right:12px; background:none; border:none; color:#FFF; font-size:1.8rem; cursor:pointer;">&times;</button>
        
        <div style="font-weight:800; font-size:1.15rem; color:#FF5412; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
            🇮🇳 Incredible India
        </div>

        <a href="tel:1363" class="drawer-link" style="display:flex; align-items:center; gap:10px; background:rgba(255,84,18,0.1); border:1px solid rgba(255,84,18,0.3); padding:10px 14px; border-radius:10px; color:#FFF; text-decoration:none; font-weight:700; font-size:0.92rem;">
            📞 <span>Helpline: <strong>1363</strong> (24x7)</span>
        </a>

        <div style="display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.05); padding:9px 12px; border-radius:8px; color:#94A3B8; font-size:0.85rem;">
            🛡️ <span>Official State & UT Registry</span>
        </div>

        <a href="#explore" class="drawer-link" style="color:#FFF; text-decoration:none; font-weight:600; padding:8px 6px; display:flex; align-items:center; gap:8px;">
            📍 All 36 States & UTs (780+ Districts)
        </a>

        <a href="#explore" class="drawer-link" style="color:#FFF; text-decoration:none; font-weight:600; padding:8px 6px; display:flex; align-items:center; gap:8px;">
            🗺️ Live Interactive Map
        </a>

        <a href="#calculator" id="drawerCostEstimatorLink" class="drawer-link" style="color:#FF8540; text-decoration:none; font-weight:700; padding:8px 6px; display:flex; align-items:center; gap:8px;">
            🧮 Tour Cost Estimator
        </a>

        <a href="#plan" class="drawer-link" style="color:#FFF; text-decoration:none; font-weight:600; padding:8px 6px; display:flex; align-items:center; gap:8px;">
            📝 Plan Trip / Get Free Quote
        </a>

        <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:12px; margin-top:8px;">
            <a href="#plan" class="drawer-link" style="color:#38BDF8; text-decoration:none; font-size:0.88rem; font-weight:600; display:flex; align-items:center; gap:6px;">
                📋 View Submissions / Bookings
            </a>
        </div>

        <div style="margin-top:auto; font-size:0.75rem; color:#64748B; padding-top:16px;">
            Official Tourism Guide Directory of Bharat
        </div>
    `;
    document.body.appendChild(drawer);

    // Open/Close Handlers
    threeDotBtn.onclick = () => { drawer.style.left = '0'; };
    drawer.querySelector('#closeDrawerBtn').onclick = () => { drawer.style.left = '-310px'; };

    // Cost Estimator Smooth Scroll
    const costLink = drawer.querySelector('#drawerCostEstimatorLink');
    if (costLink) {
        costLink.onclick = (e) => {
            e.preventDefault();
            drawer.style.left = '-310px';
            const calcSection = document.getElementById('calculator') || document.querySelector('.cost-calculator-section') || document.querySelector('[id*="calc"]');
            if (calcSection) {
                calcSection.scrollIntoView({ behavior: 'smooth' });
            }
        };
    }

    drawer.querySelectorAll('.drawer-link:not(#drawerCostEstimatorLink)').forEach(link => {
        link.onclick = () => { drawer.style.left = '-310px'; };
    });
}

function applyAndroidResponsiveFixes() {
    let meta = document.querySelector('meta[name="viewport"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
        document.head.appendChild(meta);
    } else {
        meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    }

    const style = document.createElement('style');
    style.innerHTML = `
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

        .container, main, section {
            width: 100% !important;
            max-width: 100% !important;
            padding-left: 14px !important;
            padding-right: 14px !important;
        }

        .state-card-tile, .state-grid > div {
            width: 100% !important;
            min-width: 100% !important;
            margin: 0 0 12px 0 !important;
        }

        input, select, textarea, button {
            font-size: 16px !important;
        }

        #stateDetailModal, .modal-backdrop {
            display: none !important;
        }

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
