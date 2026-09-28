// =========================================================================
// DEDICATED TOUR CIRCUITS & PLAN TRIP PAGES VIA 3-DOT DRAWER
// =========================================================================

(function () {
  // 1. Popup styling aur home page se clutter hide karna
  const styleEl = document.createElement('style');
  styleEl.id = 'tour-pages-style';
  styleEl.innerHTML = `
    @media (max-width: 768px) {
      /* Home page scroll se lambe circuits aur inquiry form ko hide karein */
      #tour-circuits, .tour-circuits-section, #booking-form-section, .support-desk-section,
      section[id*="circuit"], section[class*="circuit"] {
        display: none !important;
      }
    }

    /* Dedicated Overlay Page */
    .tour-modal-page {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #0b1120;
      color: #ffffff;
      z-index: 999999;
      overflow-y: auto;
      padding: 20px 16px 60px 16px;
      box-sizing: border-box;
    }
    .tour-modal-page.active {
      display: block !important;
    }
    .tour-modal-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      margin-bottom: 20px;
      position: sticky;
      top: 0;
      background: #0b1120;
      z-index: 10;
    }
    .tour-modal-close {
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      font-size: 1.2rem;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  `;
  if (!document.getElementById('tour-pages-style')) {
    document.head.appendChild(styleEl);
  }

  // 2. Do Dedicated Overlay Pages create karein
  function initModals() {
    if (document.getElementById('circuitsOverlayModal')) return;

    // Circuits Page
    const circuitsModal = document.createElement('div');
    circuitsModal.id = 'circuitsOverlayModal';
    circuitsModal.className = 'tour-modal-page';
    circuitsModal.innerHTML = `
      <div class="tour-modal-head">
        <h2 style="font-size:1.2rem; margin:0; font-weight:700;">🗺️ Tour Circuits & Packages</h2>
        <button class="tour-modal-close" onclick="document.getElementById('circuitsOverlayModal').classList.remove('active');">✕</button>
      </div>
      <div id="circuitsModalBody"></div>
    `;
    document.body.appendChild(circuitsModal);

    // Trip Plan / Quote Page
    const quoteModal = document.createElement('div');
    quoteModal.id = 'quoteOverlayModal';
    quoteModal.className = 'tour-modal-page';
    quoteModal.innerHTML = `
      <div class="tour-modal-head">
        <h2 style="font-size:1.2rem; margin:0; font-weight:700;">📝 Plan Trip & Get Free Quote</h2>
        <button class="tour-modal-close" onclick="document.getElementById('quoteOverlayModal').classList.remove('active');">✕</button>
      </div>
      <div id="quoteModalBody"></div>
    `;
    document.body.appendChild(quoteModal);

    // Original cards aur form ka content copy karein
    setTimeout(() => {
      const circuitsOrig = document.querySelector('#tour-circuits, .tour-circuits-section, section[class*="circuit"]');
      if (circuitsOrig && !document.getElementById('circuitsModalBody').hasChildNodes()) {
        const clonedCircuits = circuitsOrig.cloneNode(true);
        clonedCircuits.style.display = 'block';
        document.getElementById('circuitsModalBody').appendChild(clonedCircuits);
      }

      const formOrig = document.querySelector('#support-desk, .support-desk, form');
      if (formOrig && !document.getElementById('quoteModalBody').hasChildNodes()) {
        const clonedForm = formOrig.cloneNode(true);
        clonedForm.style.display = 'block';
        document.getElementById('quoteModalBody').appendChild(clonedForm);
      }
    }, 600);
  }

  // 3. 3-Dot Drawer ke andar Buttons jodna
  function addButtonsInsideDrawer() {
    const drawer = document.querySelector('.admin-leads-drawer, #adminLeadsDrawer, #mobileDrawer, .nav-drawer, aside');
    if (!drawer || drawer.querySelector('#customPageNavBlock')) return;

    const navBlock = document.createElement('div');
    navBlock.id = 'customPageNavBlock';
    navBlock.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 12px 14px;
    `;

    navBlock.innerHTML = `
      <button id="openCircuitsModalBtn" type="button" style="display:flex; align-items:center; justify-content:space-between; width:100%; padding:12px 14px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:10px; color:#fff; font-weight:700; font-size:0.9rem; cursor:pointer;">
        <span>🗺️ Tour Circuits</span>
        <span style="opacity:0.6;">➔</span>
      </button>

      <button id="openQuoteModalBtn" type="button" style="display:flex; align-items:center; justify-content:space-between; width:100%; padding:12px 14px; background:rgba(255,84,18,0.18); border:1px solid #FF5412; border-radius:10px; color:#fff; font-weight:700; font-size:0.9rem; cursor:pointer;">
        <span>📝 Plan Your Trip (Quote)</span>
        <span style="color:#FF5412; font-weight:bold;">➔</span>
      </button>
    `;

    const title = Array.from(drawer.querySelectorAll('h1, h2, h3, span, div')).find(
      el => el.textContent && el.textContent.includes('Incredible India')
    );

    if (title && title.parentElement) {
      title.parentElement.insertAdjacentElement('afterend', navBlock);
    } else {
      drawer.prepend(navBlock);
    }

    // Modal open actions
    navBlock.querySelector('#openCircuitsModalBtn').onclick = () => {
      document.getElementById('circuitsOverlayModal').classList.add('active');
    };
    navBlock.querySelector('#openQuoteModalBtn').onclick = () => {
      document.getElementById('quoteOverlayModal').classList.add('active');
    };
  }

  // 4. Form aur labels ko English mein convert karna
  function convertLabelsEnglish() {
    const dict = {
      "Aapka Naam": "Your Full Name",
      "WhatsApp Number": "WhatsApp Phone Number",
      "Destination / State": "Destination / State",
      "Kitne Yatri Hain?": "Number of Travelers",
      "Anumanit Budget (Per Person)": "Estimated Budget (Per Person)",
      "Koi Khas Zarurat ya Sawal?": "Special Requests / Inquiries",
      "Free Travel Plan & Quote Payein": "Get Free Travel Plan & Quote"
    };

    document.querySelectorAll('label, span, button, p').forEach(el => {
      const txt = el.innerText ? el.innerText.trim() : '';
      if (dict[txt]) el.innerText = dict[txt];
    });
  }

  function run() {
    initModals();
    addButtonsInsideDrawer();
    convertLabelsEnglish();
  }

  document.addEventListener("DOMContentLoaded", run);
  window.addEventListener("load", run);
  document.addEventListener("click", () => setTimeout(run, 100));
  setInterval(run, 600);
})();
