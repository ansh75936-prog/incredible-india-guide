// ========================================================
// MOBILE NAVIGATION, 3-DOT MENU & FOOTER RELOCATION
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile & Header CSS Fixes
    const style = document.createElement('style');
    style.innerHTML = `
        /* Purani cramped top strip ko hide karein */
        header > div:first-child:not(.main-header),
        .top-nav-utility,
        .utility-strip {
            display: none !important;
        }
        @media screen and (max-width: 768px) {
            header {
                padding-left: 60px !important;
            }
            .state-card-tile {
                width: 100% !important;
            }
            input, select, textarea {
                font-size: 16px !important;
            }
        }
    `;
    document.head.appendChild(style);

    // 2. Top-left 3-Dot (⋮) Menu Button
    const threeDotBtn = document.createElement('button');
    threeDotBtn.id = 'navThreeDotBtn';
    threeDotBtn.innerHTML = `&#8942;`;
    threeDotBtn.setAttribute('aria-label', 'Open Menu');
    threeDotBtn.style.cssText = `
        position: fixed;
        top: 12px;
        left: 14px;
        background: #0E1726;
        color: #FFFFFF;
        border: 1px solid rgba(255,255,255,0.2);
        width: 40px;
        height: 40px;
        border-radius: 10px;
        font-size: 1.5rem;
        font-weight: 900;
        cursor: pointer;
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    `;
    document.body.appendChild(threeDotBtn);

    // 3. Slide-out Side Drawer Menu
    const drawer = document.createElement('div');
    drawer.id = 'sideNavDrawer';
    drawer.style.cssText = `
        position: fixed;
        top: 0;
        left: -280px;
        width: 270px;
        height: 100vh;
        background: #090F1C;
        border-right: 1px solid rgba(255,255,255,0.1);
        z-index: 1000000;
        transition: left 0.3s ease;
        padding: 60px 20px 20px 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 18px;
        box-shadow: 10px 0 30px rgba(0,0,0,0.5);
    `;

    drawer.innerHTML = `
        <button id="closeDrawerBtn" style="position:absolute; top:15px; right:15px; background:none; border:none; color:#FFF; font-size:1.6rem; cursor:pointer;">&times;</button>
        <span style="color:#FF5412; font-weight:800; font-size:1.1rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">🇮🇳 Incredible India</span>
        <a href="#explore" class="drawer-link" style="color:#FFF; text-decoration:none; font-size:0.95rem; font-weight:600;">📍 All 36 States & UTs</a>
        <a href="#plan" class="drawer-link" style="color:#FFF; text-decoration:none; font-size:0.95rem; font-weight:600;">📝 Plan Trip / Get Quote</a>
        <a href="tel:1363" class="drawer-link" style="color:#FFF; text-decoration:none; font-size:0.95rem; font-weight:600;">📞 Helpline: 1363</a>
        <div style="margin-top:auto; font-size:0.75rem; color:#64748B;">Official Tourism Directory of Bharat</div>
    `;
    document.body.appendChild(drawer);

    threeDotBtn.onclick = () => { drawer.style.left = '0'; };
    drawer.querySelector('#closeDrawerBtn').onclick = () => { drawer.style.left = '-280px'; };
    drawer.querySelectorAll('.drawer-link').forEach(link => {
        link.onclick = () => { drawer.style.left = '-280px'; };
    });

    // 4. Content ko Bottom (Footer ke paas) shift karna
    const bottomBox = document.createElement('div');
    bottomBox.id = 'bottomQuickBar';
    bottomBox.style.cssText = `
        background: #060B14;
        border-top: 1px solid rgba(255,255,255,0.1);
        padding: 24px 20px;
        color: #94A3B8;
        font-size: 0.85rem;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: space-around;
        text-align: center;
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
});
