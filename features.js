// ========================================================
// INCREDIBLE INDIA GUIDE - IN-SITE LEAD DATABASE & CRM
// ========================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. In-Site Leads Storage Engine
    function saveLeadLocally(leadData) {
        const stored = JSON.parse(localStorage.getItem('portal_travel_leads') || '[]');
        stored.unshift({
            id: 'LEAD-' + Math.floor(100000 + Math.random() * 900000),
            date: new Date().toLocaleString(),
            ...leadData
        });
        localStorage.setItem('portal_travel_leads', JSON.stringify(stored));
        updateSiteAdminBadge();
    }

    // 2. Form Submission Handler
    const leadForm = document.getElementById('leadInquiryForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            const name = (document.getElementById('custLeadName')?.value || '').trim();
            const phone = (document.getElementById('custLeadPhone')?.value || '').trim();
            const dest = (document.getElementById('custLeadDest')?.value || '').trim();
            const pax = document.getElementById('custLeadGroup')?.value || 'Not specified';
            const budget = document.getElementById('custLeadBudget')?.value || 'Not specified';

            if (!name || !phone || !dest) return;

            // Site ke andar permanent save
            saveLeadLocally({ name, phone, destination: dest, pax, budget });

            // WhatsApp link (Traveler desk ko direct update bhej sakta hai)
            const waMsg = encodeURIComponent(
                `Namaste Incredible India Guide!\n\nNew Lead:\nName: ${name}\nPhone: ${phone}\nDestination: ${dest}\nPax: ${pax}\nBudget: ${budget}`
            );
            const waLink = `https://wa.me/?text=${waMsg}`;

            setTimeout(() => {
                const banner = document.getElementById('formSuccessBanner');
                if (banner) {
                    banner.innerHTML = `
                        <div style="display:flex; flex-direction:column; gap:8px;">
                            <span>✅ <strong>Inquiry Portal Database Me Safe Ho Gayi!</strong></span>
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

    // 3. Admin View Floating Button Injector
    injectAdminTrigger();
});

// Floating In-Site Leads Viewer & Excel Downloader
function injectAdminTrigger() {
    if (document.getElementById('siteCrmTriggerBtn')) return;

    // Floating Admin Pill
    const btn = document.createElement('button');
    btn.id = 'siteCrmTriggerBtn';
    btn.innerHTML = `📊 Site Database (<span id="crmCount">0</span>)`;
    btn.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        background: #0C1424;
        color: #FFFFFF;
        border: 2px solid #FF5412;
        padding: 12px 20px;
        border-radius: 50px;
        font-weight: 800;
        font-size: 0.9rem;
        cursor: pointer;
        z-index: 99999;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    `;
    btn.onclick = openSiteAdminModal;
    document.body.appendChild(btn);

    updateSiteAdminBadge();
}

function updateSiteAdminBadge() {
    const countEl = document.getElementById('crmCount');
    const stored = JSON.parse(localStorage.getItem('portal_travel_leads') || '[]');
    if (countEl) countEl.textContent = stored.length;
}

function openSiteAdminModal() {
    let modal = document.getElementById('siteAdminModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'siteAdminModal';
        modal.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(6, 10, 19, 0.85);
            backdrop-filter: blur(8px);
            z-index: 100000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
        `;
        document.body.appendChild(modal);
    }

    const stored = JSON.parse(localStorage.getItem('portal_travel_leads') || '[]');
    
    let rowsHtml = stored.length === 0 
        ? `<tr><td colspan="5" style="text-align:center; padding:20px; color:#94A3B8;">Abhi koi inquiries site database mein nahi hain.</td></tr>`
        : stored.map((l, idx) => `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.08);">
                <td style="padding:10px;">${idx + 1}</td>
                <td style="padding:10px;"><strong>${l.name}</strong><br><small style="color:#94A3B8;">${l.phone}</small></td>
                <td style="padding:10px;">${l.destination}</td>
                <td style="padding:10px;">${l.pax}<br><small style="color:#FF8540;">${l.budget}</small></td>
                <td style="padding:10px; font-size:0.75rem; color:#94A3B8;">${l.date}</td>
            </tr>
        `).join('');

    modal.innerHTML = `
        <div style="background:#0E1726; color:#FFF; width:100%; max-width:850px; max-height:85vh; border-radius:18px; border:1px solid rgba(255,255,255,0.1); display:flex; flex-direction:column; overflow:hidden; box-shadow:0 20px 50px rgba(0,0,0,0.5);">
            <div style="padding:18px 24px; border-bottom:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h3 style="font-size:1.3rem; margin:0;">📁 Site Inquiry Manager (CRM)</h3>
                    <small style="color:#94A3B8;">Gmail par koi mail nahi jayega, saara data yahan secure rahega.</small>
                </div>
                <button onclick="document.getElementById('siteAdminModal').style.display='none'" style="background:none; border:none; color:#FFF; font-size:1.8rem; cursor:pointer;">&times;</button>
            </div>
            
            <div style="padding:20px; overflow-y:auto; flex:1;">
                <table style="width:100%; border-collapse:collapse; font-size:0.88rem; text-align:left;">
                    <thead>
                        <tr style="background:rgba(255,255,255,0.05); color:#FF8540;">
                            <th style="padding:10px;">#</th>
                            <th style="padding:10px;">Customer</th>
                            <th style="padding:10px;">Destination</th>
                            <th style="padding:10px;">Details</th>
                            <th style="padding:10px;">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>${rowsHtml}</tbody>
                </table>
            </div>

            <div style="padding:16px 24px; border-top:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center; background:#070C16;">
                <button onclick="downloadLeadsAsCSV()" style="background:#0D7A68; color:#FFF; border:none; padding:10px 18px; border-radius:8px; font-weight:700; cursor:pointer;">
                    📥 Export as Excel / CSV
                </button>
                <button onclick="clearSiteLeads()" style="background:#DC2626; color:#FFF; border:none; padding:10px 18px; border-radius:8px; font-weight:700; cursor:pointer;">
                    🗑️ Clear All Leads
                </button>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

// 4. Export Data to Excel/CSV
window.downloadLeadsAsCSV = function() {
    const stored = JSON.parse(localStorage.getItem('portal_travel_leads') || '[]');
    if (stored.length === 0) {
        alert("Export karne ke liye koi leads nahi hain.");
        return;
    }
    let csv = "ID,Timestamp,Name,Phone,Destination,Group Size,Budget\n";
    stored.forEach(l => {
        csv += `"${l.id}","${l.date}","${l.name}","${l.phone}","${l.destination}","${l.pax}","${l.budget}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Travel_Leads_${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
};

window.clearSiteLeads = function() {
    if (confirm("Kya aap saari saved inquiries delete karna chahte hain?")) {
        localStorage.removeItem('portal_travel_leads');
        openSiteAdminModal();
        updateSiteAdminBadge();
    }
};
