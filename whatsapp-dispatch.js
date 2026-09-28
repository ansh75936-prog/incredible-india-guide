// ========================================================
// INSTANT WHATSAPP DISPATCH & LEAD CAPTURE ENGINE
// ========================================================

// APNA WHATSAPP NUMBER YAHAN ENTER KAREIN (Country code 91 ke sath)
const AGENT_WHATSAPP_NUMBER = "91XXXXXXXXXX"; 

document.addEventListener("DOMContentLoaded", () => {
    // Form target karein chahe id leadInquiryForm ho ya koi bhi <form>
    const leadForm = document.getElementById('leadInquiryForm') || document.querySelector('form');
    
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Field inputs fetch karna
            const name = (document.getElementById('custLeadName')?.value || document.querySelector('input[name*="name"], input[placeholder*="Naam"], input[placeholder*="Name"]')?.value || '').trim();
            const phone = (document.getElementById('custLeadPhone')?.value || document.querySelector('input[type="tel"], input[placeholder*="mobile"], input[placeholder*="Phone"]')?.value || '').trim();
            const dest = (document.getElementById('custLeadDest')?.value || document.querySelector('input[name*="dest"], select[name*="state"]')?.value || 'Bharat Tourism').trim();
            const pax = document.getElementById('custLeadGroup')?.value || document.querySelector('select')?.value || 'Not specified';
            const budget = document.getElementById('custLeadBudget')?.value || 'Standard';
            const notes = document.querySelector('textarea')?.value || 'None';

            if (!name || !phone) {
                alert("Kripya apna naam aur phone number bharein.");
                return;
            }

            // In-site Local Storage Lead Record
            const stored = JSON.parse(localStorage.getItem('portal_travel_leads') || '[]');
            stored.unshift({
                id: 'LEAD-' + Math.floor(100000 + Math.random() * 900000),
                date: new Date().toLocaleString(),
                name, phone, destination: dest, pax, budget, notes
            });
            localStorage.setItem('portal_travel_leads', JSON.stringify(stored));

            // WhatsApp Pre-filled message format
            const waText = 
`*🇮🇳 NAYI TOUR INQUIRY - Incredible India Guide*
----------------------------------------
👤 *Naam:* ${name}
📱 *Phone:* ${phone}
📍 *Destination:* ${dest}
👥 *Travelers:* ${pax}
💰 *Budget:* ${budget}
📝 *Requirements:* ${notes}
----------------------------------------
_Inquiry website lead portal se aayi hai._`;

            const waUrl = `https://wa.me/${AGENT_WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

            // Form ke theek niche green WhatsApp direct action button dikhana
            const existingBanner = document.getElementById('formSuccessBanner') || document.querySelector('.form-success, .success-msg');
            const successCard = `
                <div id="instantWaBanner" style="margin-top: 18px; background: #081220; border: 1.5px solid #25D366; border-radius: 14px; padding: 18px; text-align: center; box-shadow: 0 10px 25px rgba(37,211,102,0.2);">
                    <div style="font-size: 1.1rem; font-weight: 800; color: #25D366; margin-bottom: 6px;">
                        ✅ Inquiry Ready Ho Gayi!
                    </div>
                    <p style="color: #E2E8F0; font-size: 0.88rem; margin: 0 0 14px 0;">
                        WhatsApp par turant details bhejne ke liye niche tap karein:
                    </p>
                    <a href="${waUrl}" target="_blank" rel="noopener" style="display: flex; align-items: center; justify-content: center; gap: 10px; background: #25D366; color: #FFFFFF; font-weight: 800; font-size: 1rem; padding: 14px 20px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 15px rgba(37,211,102,0.4);">
                        💬 WhatsApp Par Inquiry Bhejein &rarr;
                    </a>
                </div>
            `;

            if (existingBanner) {
                existingBanner.innerHTML = successCard;
                existingBanner.style.display = 'block';
            } else {
                leadForm.insertAdjacentHTML('afterend', successCard);
            }

            // Direct WhatsApp App/Web Redirect
            setTimeout(() => {
                window.location.href = waUrl;
            }, 600);
        });
    }
});
