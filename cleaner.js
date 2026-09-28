// =========================================================================
// SITE CODE CLEANER: DESTROY REDUNDANT CONTROLS & CLEAN MOBILE UI
// =========================================================================

(function () {
  function purgeUnwantedElements() {
    // 1. Home page / Header se Currency aur Theme toggle button ko seedha DELETE karein
    const elementsToRemove = document.querySelectorAll(
      '.header-actions, .currency-select-box, .theme-toggle-btn, ' +
      'header select, .topbar-right, #hamburgerBtn, .hamburger-btn, #workingLeftHamburger'
    );

    elementsToRemove.forEach(el => {
      // Sirf bahar ke elements ko delete karein, drawer ke andar ke nahi
      if (!el.closest('aside, [role="dialog"], [class*="drawer"], [id*="drawer"]')) {
        el.remove();
      }
    });

    // 2. Extra inline duplicate text 'Destinations Destinations' ko safai se theek karein
    const headings = document.querySelectorAll('h1, h2, h3, button, span');
    headings.forEach(el => {
      if (el.innerText && el.innerText.includes('Destinations Destinations')) {
        el.innerText = el.innerText.replace(/Destinations\s+Destinations(\s+Destinations)*/gi, 'Destinations');
      }
    });

    // 3. Poora Bharat button text ko clean English karein
    document.querySelectorAll('button, a, span').forEach(el => {
      if (el.innerText && el.innerText.trim() === 'Poora Bharat') {
        el.innerText = 'All India';
      }
    });
  }

  // Fast-execution hooks: DOM load hone se pehle aur baad mein run karein
  purgeUnwantedElements();
  document.addEventListener('DOMContentLoaded', purgeUnwantedElements);
  window.addEventListener('load', purgeUnwantedElements);
  
  // Continuous sweep (koi dynamic script agar dubara banaye toh turant mita de)
  const cleanerInterval = setInterval(purgeUnwantedElements, 200);
  setTimeout(() => clearInterval(cleanerInterval), 10000); // 10 second baad stop taaki battery bache
})();
