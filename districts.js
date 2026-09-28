// ========================================================
// INCREDIBLE INDIA GUIDE - 780+ DISTRICTS & IN-SITE CRM
// ========================================================

// 1. All 36 States & UTs Complete Districts Directory (780+ Districts)
const INDIA_DISTRICTS_DATA = {
  "Andhra Pradesh": ["Alluri Sitharama Raju", "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur", "Kakinada", "Krishna", "Kurnool", "Nandyal", "NTR", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Srikakulam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
  "Arunachal Pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang", "Bichom", "Keyi Panyor"],
  "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong", "Bajali", "Tamulpur"],
  "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
  "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Manendragarh-Chirmiri-Bharatpur", "Mohla-Manpur-Ambagarh Chowki", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sarangarh-Bilaigarh", "Sakti", "Sukma", "Surajpur", "Surguja", "Khairagarh-Chhuikhadan-Gandai"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhumi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
  "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
  "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
  "Karnataka": ["Bagalkote", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagara", "Chikkaballapura", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayanagara", "Vijayapura", "Yadgir"],
  "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
  "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Niwari", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha", "Mauganj", "Maihar", "Pandhurna"],
  "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Chhatrapati Sambhajinagar", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Dharashiv", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
  "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
  "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "Eastern West Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
  "Mizoram": ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saitual", "Serchhip", "Siaha"],
  "Nagaland": ["Chumoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Niuland", "Noklak", "Peren", "Phek", "Shamator", "Tseminyu", "Tuensang", "Wokha", "Zunheboto"],
  "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
  "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Malerkotla", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Sri Muktsar Sahib", "Tarn Taran"],
  "Rajasthan": ["Ajmer", "Alwar", "Anupgarh", "Balotra", "Banswara", "Baran", "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Deeg", "Dholpur", "Didwana-Kuchaman", "Dudu", "Dungarpur", "Ganganagar", "Gangapur City", "Hanumangarh", "Jaipur", "Jaipur Rural", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Jodhpur Rural", "Karauli", "Kekri", "Khairthal-Tijara", "Kota", "Kotputli-Behror", "Nagaur", "Neem Ka Thana", "Pali", "Phalodi", "Pratapgarh", "Rajsamand", "Salumbar", "Sanchore", "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi", "Tonk", "Udaipur"],
  "Sikkim": ["Gangtok", "Gyalshing", "Mangan", "Namchi", "Pakyong", "Soreng"],
  "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
  "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hanamkonda", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri"],
  "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
  "Uttar Pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
  "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
  "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"],
  "Andaman & Nicobar Islands": ["Nicobar", "North and Middle Andaman", "South Andaman"],
  "Chandigarh": ["Chandigarh"],
  "Dadra & Nagar Haveli and Daman & Diu": ["Daman", "Diu", "Dadra and Nagar Haveli"],
  "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
  "Jammu & Kashmir": ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
  "Ladakh": ["Kargil", "Leh"],
  "Lakshadweep": ["Lakshadweep"],
  "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"]
};

document.addEventListener("DOMContentLoaded", () => {
    // 2. Attach District Viewer to State Cards
    document.querySelectorAll('.state-card-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const rawName = tile.getAttribute('data-state') || '';
            const cleanState = rawName.replace(' (UT)', '').replace(' (NCT)', '').trim();
            showStateDistrictDetails(cleanState);
        });
    });

    // 3. Lead Form Submission
    const leadForm = document.getElementById('leadInquiryForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            const name = (document.getElementById('custLeadName')?.value || '').trim();
            const phone = (document.getElementById('custLeadPhone')?.value || '').trim();
            const dest = (document.getElementById('custLeadDest')?.value || '').trim();
            const pax = document.getElementById('custLeadGroup')?.value || 'Not specified';
            const budget = document.getElementById('custLeadBudget')?.value || 'Not specified';

            if (!name || !phone || !dest) return;

            // Save in site database
            const stored = JSON.parse(localStorage.getItem('portal_travel_leads') || '[]');
            stored.unshift({
                id: 'LEAD-' + Math.floor(100000 + Math.random() * 900000),
                date: new Date().toLocaleString(),
                name, phone, destination: dest, pax, budget
            });
            localStorage.setItem('portal_travel_leads', JSON.stringify(stored));
            updateSiteAdminBadge();

            // WhatsApp Dispatch
            const waMsg = encodeURIComponent(
                `Namaste Incredible India Guide!\n\nNew Inquiry:\nName: ${name}\nPhone: ${phone}\nDestination/District: ${dest}\nPax: ${pax}\nBudget: ${budget}`
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

    injectAdminTrigger();
});

// 4. District Popup Modal Function
function showStateDistrictDetails(stateName) {
    const districts = INDIA_DISTRICTS_DATA[stateName] || [];
    let modal = document.getElementById('districtsExplorerModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'districtsExplorerModal';
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
        ? districts.map(d => `<span style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); padding:6px 14px; border-radius:30px; font-size:0.85rem; color:#F1F5F9; font-weight:600;">${d}</span>`).join('')
        : `<p style="color:#94A3B8;">Districts data loading...</p>`;

    modal.innerHTML = `
        <div style="background:#0E1726; color:#FFF; width:100%; max-width:680px; max-height:85vh; border-radius:20px; border:1px solid rgba(255,255,255,0.12); display:flex; flex-direction:column; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.6);">
            <div style="padding:20px 24px; border-bottom:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h3 style="font-size:1.4rem; margin:0; color:#FF8540;">📍 ${stateName}</h3>
                    <small style="color:#94A3B8; font-size:0.9rem;">Total Official Districts: <strong>${districts.length}</strong></small>
                </div>
                <button onclick="document.getElementById('districtsExplorerModal').style.display='none'" style="background:none; border:none; color:#FFF; font-size:1.8rem; cursor:pointer;">&times;</button>
            </div>
            
            <div style="padding:22px; overflow-y:auto; flex:1;">
                <p style="font-size:0.88rem; color:#94A3B8; margin-bottom:14px;">Sabhi official districts ki verified soochi:</p>
                <div style="display:flex; flex-wrap:wrap; gap:8px;">
                    ${distChips}
                </div>
            </div>

            <div style="padding:16px 24px; border-top:1px solid rgba(255,255,255,0.1); background:#070C16; text-align:right;">
                <button onclick="planForState('${stateName}')" style="background:#FF5412; color:#FFF; border:none; padding:10px 22px; border-radius:50px; font-weight:700; cursor:pointer;">
                    Is Rajya Ka Tour Plan Karein &rarr;
                </button>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

function planForState(stateName) {
    const modal = document.getElementById('districtsExplorerModal');
    if (modal) modal.style.display = 'none';
    const destInput = document.getElementById('custLeadDest');
    if (destInput) destInput.value = stateName;
    const plan = document.getElementById('plan');
    if (plan) plan.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('custLeadName');
    if (nameInput) nameInput.focus();
}

// 5. Floating CRM Manager Button & Modal
function injectAdminTrigger() {
    if (document.getElementById('siteCrmTriggerBtn')) return;

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
                    <small style="color:#94A3B8;">Saara data aapke portal me surakshit hai.</small>
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
