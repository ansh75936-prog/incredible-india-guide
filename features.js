// NEW FEATURES EXTENSION (features.js)
document.addEventListener("DOMContentLoaded", () => {
    const leadForm = document.getElementById('leadInquiryForm');
    
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            const name = (document.getElementById('custLeadName')?.value || '').trim();
            const phone = (document.getElementById('custLeadPhone')?.value || '').trim();
            const dest = (document.getElementById('custLeadDest')?.value || '').trim();

            if (!name || !phone || !dest) return;

            // WhatsApp Message Alert
            const waMsg = encodeURIComponent(
                `Namaste Incredible India Guide!\n\nNew Trip Lead Received:\n👤 Name: ${name}\n📱 Phone: ${phone}\n📍 Destination: ${dest}`
            );
            const waLink = `https://wa.me/?text=${waMsg}`;

            // Show direct button in success banner
            setTimeout(() => {
                const banner = document.getElementById('formSuccessBanner');
                if (banner) {
                    banner.innerHTML = `
                        <div style="display:flex; flex-direction:column; gap:8px;">
                            <span>✅ <strong>Inquiry Register Ho Gayi Hai!</strong></span>
                            <a href="${waLink}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; justify-content:center; gap:8px; background:#25D366; color:#FFF; padding:10px 16px; border-radius:8px; text-decoration:none; font-weight:700; width:fit-content; margin-top:4px;">
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
