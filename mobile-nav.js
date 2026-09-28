// ========================================================
// MOBILE RESPONSIVE ENGINE & DISTRICT ANIMATIONS
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Force Clean Mobile Viewport & CSS Animations
    injectGlobalMobileAndAnimationStyles();

    // 2. Hide Messy Top Utility Strips Direct Via DOM
    cleanMessyTopBars();

    // 3. Setup Floating Top-Left 3-Dot Menu & Drawer
    setupThreeDotMenu();

    // 4. Move Essential Info To Footer
    relocateInfoToFooter();
});

// Purani messy top strips ko DOM se clean karna
function cleanMessyTopBars() {
    // Top strip items (helpline, submissions counter etc) dhund kar chupana
    document.querySelectorAll('*').forEach(el => {
        if (el.textContent && (el.textContent.includes('24x7 Tourism Helpline') || el.textContent.includes('View Submissions')) && el.tagName !== 'BODY' && el.tagName !== 'HTML') {
            if (el.children.length > 2) {
                el.style.display = 'none';
            }
        }
    });
}

// 3-Dot Menu & Side Drawer Setup
function setupThreeDotMenu() {
    if (document.getElementById('navThreeDotBtn')) return;

    const threeDotBtn = document.createElement('button');
    threeDotBtn.id = 'navThreeDotBtn';
    threeDotBtn.innerHTML = `&#8942;`;
    threeDotBtn.setAttribute('aria-label', 'Open Menu');
    threeDotBtn.style.cssText = `
        position: fixed;
        top: 10px;
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
        box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    `;
    document.body.appendChild(threeDotBtn);

    const drawer = document.createElement('div');
    drawer.id = 'sideNavDrawer';
    drawer.style.cssText = `
        position: fixed;
        top: 0;
        left: -290px;
        width: 280px;
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
        box-shadow: 15px 0 35px rgba(0,0,0,0.6);
    `;

    drawer.innerHTML = `
        <button id="closeDrawerBtn" style="position:absolute; top:12px; right:12px; background:none; border:none; color:#FFF; font-size:1.8rem; cursor:pointer;">&times;</button>
        <div style="font-weight:800; font-size:1.2rem; color:#FF5412; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">🇮🇳 Incredible India</div>
        <a href="#explore" class="drawer-link" style="color:#FFF; text-decoration:none; font-weight:600; padding:8px 0;">📍 All 36 States & UTs</a>
        <a href="#plan" class="drawer-link" style="color:#FFF; text-decoration:none; font-weight:600; padding:8px 0;">📝 Tour Quote / Plan</a>
        <a href="tel:1363" class="drawer-link" style="color:#FF8540; text-decoration:none; font-weight:600; padding:8px 0;">📞 Helpline: 1363 (24x7)</a>
        <div style="margin-top:auto; font-size:0.75rem; color:#64748B;">Official Tourism Guide Directory of Bharat</div>
    `;
    document.body.appendChild(drawer);

    threeDotBtn.onclick = () => { drawer.style.left = '0'; };
    drawer.querySelector('#closeDrawerBtn').onclick = () => { drawer.style.left = '-290px'; };
    drawer.querySelectorAll('.drawer-link').forEach(link => {
        link.onclick = () => { drawer.style.left = '-290px'; };
    });
}

// Relocate Quick Links To Bottom
function relocateInfoToFooter() {
    if (document.getElementById('bottomQuickBar')) return;

    const bottomBox = document.createElement('div');
    bottomBox.id = 'bottomQuickBar';
    bottomBox.style.cssText = `
        background: #060B14;
        border-top: 1px solid rgba(255,255,255,0.1);
        padding: 24px 16px;
        color: #94A3B8;
        font-size: 0.85rem;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: space-around;
        text-align: center;
        margin-top: 30px;
    `;
    bottomBox.innerHTML = `
        <div>📞 <strong>Tourism Helpline:</strong> 1363 (Toll Free)</div>
        <div>🛡️ <strong>Official Registry:</strong> Verified Stays & Cabs</div>
        <div>🇮🇳 <strong>Coverage:</strong> 36 States & UTs (780+ Districts)</div>
        <div>🗺️ <a href="#explore" style="color:#FF5412; text-decoration:none; font-weight:700;">Live Interactive Map</a></div>
    `;

    const footer = document.querySelector('footer');
    if (footer) {
        footer.parentNode.insertBefore(bottomBox, footer);
    } else {
        document.body.appendChild(bottomBox);
    }
}

// Global CSS Fixes + Smooth Staggered Animations for Districts
function injectGlobalMobileAndAnimationStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Mobile Layout Guard */
        html, body {
            overflow-x: hidden !important;
            max-width: 100vw !important;
        }

        /* Hide conflicting default modal */
        #stateDetailModal, .modal-backdrop {
            display: none !important;
        }

        /* District Chip Staggered Keyframe Animation */
        @keyframes districtEntrance {
            0% {
                opacity: 0;
                transform: translateY(12px) scale(0.95);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .district-animated-chip {
            opacity: 0;
            animation: districtEntrance 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
        }

        .district-animated-chip:hover,
        .district-animated-chip:active {
            transform: translateY(-2px) scale(1.04) !important;
            background: rgba(255, 84, 18, 0.2) !important;
            border-color: #FF5412 !important;
            color: #FFFFFF !important;
        }
    `;
    document.head.appendChild(style);
}
