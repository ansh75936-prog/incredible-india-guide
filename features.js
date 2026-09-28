document.addEventListener("DOMContentLoaded", () => {
    // 1. State tile par click karne par Districts popup kholna
    document.querySelectorAll('.state-card-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const rawName = tile.getAttribute('data-state') || '';
            const cleanState = rawName.replace(' (UT)', '').replace(' (NCT)', '').trim();
            openDistrictModal(cleanState);
        });
    });

    // 2. Lead Form capture & WhatsApp Alert (Bina kisi floating button ke)
    const leadForm = document.getElementById('leadInquiryForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            const name = (document.getElementById('custLeadName')?.value || '').trim();
            const phone = (document.getElementById('custLeadPhone')?.value || '').trim();
            const dest = (document.getElementById('custLeadDest')?.value || '').trim();
            const pax = document.getElementById('custLeadGroup')?.value || 'Not specified';
            const budget = document.getElementById('custLeadBudget')?.value || 'Not specified';

            if (!name || !phone || !dest) return;

            // Direct WhatsApp message link for Traveler
            const waMsg = encodeURIComponent(
                `Namaste Incredible India Guide!\n\nNew Inquiry:\nName: ${name}\nPhone: ${phone}\nDestination: ${dest}\nPax: ${pax}\nBudget: ${budget}`
            );
            const waLink = `https://wa.me/?text=${waMsg}`;

            setTimeout(() => {
                const banner = document.getElementById('formSuccessBanner');
                if (banner) {
                    banner.innerHTML = `
                        <div style="display:flex; flex-direction:column; gap:8px;">
                            <span>✅ <strong>Inquiry Safely Registered!</strong></span>
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

// District Explorer Modal Engine
function openDistrictModal(stateName) {
    const districts = (window.INDIA_DISTRICTS_DATA && window.INDIA_DISTRICTS_DATA[stateName]) || [];
    let modal = document.getElementById('districtsModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'districtsModal';
        modal.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(6, 10, 19, 0.85);
            backdrop-filter: blur(8px);
            z-index: 100000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
        `;
        document.body.appendChild(modal);
    }

    const distChips = districts.length > 0 
        ? districts.map(d => `<span style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); padding:6px 14px; border-radius:30px; font-size:0.85rem; color:#FFF; font-weight:600;">${d}</span>`).join('')
        : `<p style="color:#94A3B8;">Districts data available nahi hai.</p>`;

    modal.innerHTML = `
        <div style="background:#0E1726; color:#FFF; width:100%; max-width:680px; max-height:85vh; border-radius:20px; border:1px solid rgba(255,255,255,0.12); display:flex; flex-direction:column; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.6);">
            <div style="padding:20px 24px; border-bottom:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h3 style="font-size:1.4rem; margin:0; color:#FF8540;">📍 ${stateName}</h3>
                    <small style="color:#94A3B8; font-size:0.9rem;">Total Official Districts: <strong>${districts.length}</strong></small>
                </div>
                <button onclick="document.getElementById('districtsModal').style.display='none'" style="background:none; border:none; color:#FFF; font-size:1.8rem; cursor:pointer;">&times;</button>
            </div>
            
            <div style="padding:22px; overflow-y:auto; flex:1;">
                <div style="display:flex; flex-wrap:wrap; gap:8px;">${distChips}</div>
            </div>

            <div style="padding:16px 24px; border-top:1px solid rgba(255,255,255,0.1); background:#070C16; text-align:right;">
                <button onclick="document.getElementById('districtsModal').style.display='none'; document.getElementById('custLeadDest').value='${stateName}'; document.getElementById('plan').scrollIntoView({behavior:'smooth'});" style="background:#FF5412; color:#FFF; border:none; padding:10px 22px; border-radius:50px; font-weight:700; cursor:pointer;">
                    Is Rajya Ka Tour Plan Karein &rarr;
                </button>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}
