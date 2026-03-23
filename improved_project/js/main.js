/* ═══════════════════════════════════════
   DATA + JAVASCRIPT
═══════════════════════════════════════ */
/* ─── Package data ─── */
const PKG = {
  chardham:{title:'Complete Char Dham Yatra',reg:'Uttarakhand — 4 Dhams',img:'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=85',price:'₹28,999',nights:'11',rating:'5.0',rev:'2,100',desc:'The holiest pilgrimage of Hinduism — Yamunotri, Gangotri, Kedarnath & Badrinath. Expert spiritual guides, 3★ stays, helicopter option for Kedarnath, 24/7 medical support.',hl:['✈️ Flight Tickets','🚁 Helicopter Option','🏨 3★ Hotel Stays','🍽️ All Meals','🧭 Spiritual Guide','🚌 Full AC Transport','🆘 Medical Support','🙏 All Darshan']},
  rishikesh:{title:'Rishikesh Adventure Rush',reg:'Rishikesh, Dehradun District',img:'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=900&q=85',price:'₹9,499',nights:'4',rating:'4.9',rev:'1,100',desc:'Grade 4–5 Ganges rapids, 83m bungee jump, river beach camping under stars and sunrise yoga sessions by the holy Ganga — adrenaline meets serenity.',hl:['🛶 Grade 4–5 Rafting','🪂 Bungee Jump 83m','⛺ River Camping','🧘 Sunrise Yoga','🏨 Camp + Hotel','🍽️ All Meals','🎯 Zipline & Swing','🚌 AC Transport']},
  auli:{title:'Auli Ski & Snow Getaway',reg:'Auli, Chamoli District',img:'https://images.unsplash.com/photo-1516692296811-9b28e9eb9a87?w=900&q=85',price:'₹14,999',nights:'5',rating:'4.8',rev:'640',desc:'India\'s premier ski resort at 2,519–3,049m altitude. Asia\'s longest 4km gondola, Nanda Devi views, certified instructors for all levels and cozy mountain resort evenings.',hl:['⛷️ Ski All Levels','🚡 Longest Gondola','🏔️ Nanda Devi View','🏨 Mountain Resort','❄️ Snow Gear Included','🍽️ All Meals','🔥 Bonfire Evenings','🎿 Certified Instructors']},
  corbett:{title:'Jim Corbett Tiger Safari',reg:'Jim Corbett National Park',img:'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=900&q=85',price:'₹12,999',nights:'3',rating:'4.9',rev:'870',desc:'India\'s oldest national park — Bengal tigers, leopards, elephants and 600+ bird species. Expert naturalist guides lead dawn safaris through Dhikala zone.',hl:['🐯 Jeep Safari Dhikala','🐘 Elephant Safari','🦅 Bird Walk 600+','🏨 Jungle Resort','🍽️ All Meals','📸 Photography Guide','🌅 Sunrise Safari','🧭 Naturalist Guide']},
  vof:{title:'Valley of Flowers Trek',reg:'Valley of Flowers, Chamoli',img:'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=900&q=85',price:'₹9,499',nights:'6',rating:'5.0',rev:'530',desc:'UNESCO World Heritage — 500+ wildflower species bloom July–September. Combined with Hemkund Sahib Gurudwara at 4,329m — a once in a lifetime alpine experience.',hl:['🌸 500+ Wildflowers','🛕 Hemkund Sahib','🥾 Alpine Trek 8km','⛺ Camp Ghangaria','🏔️ Snow Peak Views','📸 Photo Guide','🍽️ All Meals','🧭 Trek Guide']},
  nainital:{title:'Nainital Family Fun',reg:'Nainital, Kumaon Division',img:'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=900&q=85',price:'₹7,999',nights:'3',rating:'4.8',rev:'1,500',desc:'The Lake District of India — Naini Lake boating, Snow View cable car panoramas, Mall Road evenings and Naina Devi temple. Perfect for families of all ages.',hl:['⛵ Naini Lake Boating','🚡 Snow View Cable Car','🏔️ Himalayan Sunrise','🐦 Bird Watching','🛍️ Mall Road Walk','🏨 Lake-View Hotel','🍽️ All Meals','🌳 Forest Walk']},
  mussoorie:{title:'Mussoorie Honeymoon Special',reg:'Mussoorie, Dehradun',img:'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=900&q=85',price:'₹11,999',nights:'4',rating:'4.9',rev:'820',desc:'Queen of the Hills — candlelight dinners with Himalayan panoramas, heritage hotel with flower decoration, Kempty Falls and private couples ayurvedic spa.',hl:['🌹 Floral Room Decor','🍷 Candlelight Dinner','💆 Couples Spa','🏨 Heritage Hotel','💧 Kempty Falls','🚡 Gunhill Cable Car','📸 Photoshoot','🎁 Honeymoon Hamper']},
  chopta:{title:'Chopta Tungnath Trek',reg:'Chopta–Tungnath, Rudraprayag',img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',price:'₹5,999',nights:'3',rating:'4.9',rev:'410',desc:'Mini Switzerland at 2,680m — world\'s highest Shiva temple, then Chandrashila peak at 4,130m for 360° panorama of Nanda Devi, Trishul, Kedarnath, Chaukhamba.',hl:['⛪ Tungnath Temple','🏔️ Chandrashila 4130m','🌿 Rhododendron Forest','⛺ Glamping','🔭 Stargazing','🦅 Himalayan Birds','🍽️ All Meals','🧭 Expert Guide']},
  bungee:{title:'Bungee & Zipline Thrill',reg:'Rishikesh — Highest in India',img:'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=900&q=85',price:'₹3,499',nights:'1',rating:'4.8',rev:'920',desc:'India\'s highest bungee at 83m over the Ganges gorge, giant swing, zipline across the river and cliff jumping. Pure adrenaline in Rishikesh.',hl:['🪂 Bungee Jump 83m','🎢 Giant Swing','🏞️ River Zipline','🌊 Cliff Jumping','🎥 GoPro Video','🏨 Hotel Stay','🍽️ Meals','📜 Certificate']},
  kedar:{title:'Kedarnath Yatra & Trek',reg:'Kedarnath, Rudraprayag',img:'https://images.unsplash.com/photo-1605537964076-47cda6c1e20e?w=900&q=85',price:'₹8,499',nights:'5',rating:'5.0',rev:'1,200',desc:'Trek to Lord Shiva\'s abode at 3,583m — one of the 12 Jyotirlingas surrounded by eternal snow peaks. Spiritual guide narrates ancient stories throughout.',hl:['🛕 Kedarnath Darshan','🏔️ Snow Peaks','🚁 Helicopter Option','🏨 Comfortable Stays','🧭 Spiritual Guide','🍽️ Sattvic Meals','🚌 AC Transport','🆘 Medical Support']},
  para:{title:'Paragliding Adventure Camp',reg:'Bir Billing, Kangra Valley',img:'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=900&q=85',price:'₹4,999',nights:'2',rating:'4.7',rev:'560',desc:'Asia\'s top paragliding destination — tandem flights from 2,430m with APPI-certified pilots over stunning Himalayan valleys. Includes GoPro video.',hl:['🪂 Tandem Paragliding','🎥 GoPro Video','⛺ Valley Camping','🏔️ Mountain Views','🧗 Pre-Flight Training','🍽️ All Meals','📜 Certificate','🚌 Transport']},
  haridwar:{title:'Haridwar Ganga Aarti',reg:'Haridwar, Haridwar District',img:'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=900&q=85',price:'₹4,499',nights:'2',rating:'4.9',rev:'1,800',desc:'Legendary Ganga Aarti at Har Ki Pauri, ancient temple walks, holy dip at Brahm Kund and dawn yoga on the river ghats with a spiritual guide.',hl:['🙏 Ganga Aarti','🛕 Temple Walk','🧘 Dawn Yoga','🌊 Holy Dip','🏨 Ganga-View Hotel','🍽️ Sattvic Meals','🧭 Priest Guide','🚌 AC Transport']},
  biking:{title:'Himalayan Mountain Biking',reg:'Rishikesh to Devprayag',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',price:'₹6,999',nights:'4',rating:'4.8',rev:'320',desc:'Epic 5-day downhill trail from Himalayan foothills through forests, riverside paths and ancient villages to the sacred Devprayag confluence.',hl:['🚵 Premium Bikes','🏔️ Himalayan Trail','🌲 Forest Paths','🙏 Devprayag Confluence','⛺ Camp Stays','🍽️ All Meals','🧰 Repair Kit & Helmet','🧭 Local Guide']}
};

/* ─── Gallery images ─── */
const GALIMGS = [
  'https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1665413791165-b25d42542b80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbmdhJTIwYWFydGl8ZW58MHx8MHx8fDA%3D',
  'https://plus.unsplash.com/premium_photo-1661889971049-6f0a39a3476f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cml2ZXIlMjByYWZ0aW5nJTIwcmlzaGlrZXNofGVufDB8fDB8fHww',
  'https://media.istockphoto.com/id/515855602/photo/kedarnath-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=sA9PWiQg2pJCXqLy36bC2MXH05igruwhMHGe5w-LFLk=',
  'https://media.istockphoto.com/id/2196545732/photo/cosmos-blooming-in-a-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=cUwf4sKUDDFI3UCK-lsmJK9jjqFhtuKvuC5PmuEE9eM=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8zokzr3zjK85TWrZN4A6UIA9UzxL83JszA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDU1sgimPSS6TSPBP4yJyhTlRCsTUHOuhzNQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOsrf7cxEFCAqyUAg52Oi6twcfNhP96j3CQ&s',
  'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=900&q=85',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=85',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=900&q=85',
];
let lbIdx = 0;

/* ─── PAGE NAVIGATION ─── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');

  // update nav active state
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');

  // scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── Detail Modal ─── */
function openDetail(key) {
  const d = PKG[key]; if (!d) return;
  document.getElementById('dImg').src = d.img;
  document.getElementById('dTitle').textContent = d.title;
  document.getElementById('dReg').textContent = d.reg;
  document.getElementById('dPrice').innerHTML = d.price + ' <small>/person</small>';
  document.getElementById('dDesc').textContent = d.desc;
  document.getElementById('dStats').innerHTML =
    `<div><div class="d-sv">${d.nights}</div><div class="d-sl">Nights</div></div>
     <div><div class="d-sv">⭐ ${d.rating}</div><div class="d-sl">Rating</div></div>
     <div><div class="d-sv">${d.rev}</div><div class="d-sl">Reviews</div></div>
     <div><div class="d-sv">✅</div><div class="d-sl">Free Cancel</div></div>`;
  document.getElementById('dHl').innerHTML = d.hl.map(h => `<div class="d-hi">${h}</div>`).join('');
  document.getElementById('detailOv').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeDetail() {
  document.getElementById('detailOv').classList.remove('show');
  document.body.style.overflow = '';
}

/* ─── Filter Destinations ─── */
function filterDest(btn, cat) {
  document.querySelectorAll('#destTabs .ftab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const cards = document.querySelectorAll('#destGrid .d-card');
  let visible = 0;
  cards.forEach(c => {
    const match = cat === 'All' || c.dataset.cat === cat;
    c.classList.toggle('hidden', !match);
    if (match) visible++;
  });
  document.getElementById('destCount').textContent = visible + ' destination' + (visible !== 1 ? 's' : '');
}

/* ─── Filter Packages ─── */
function filterPkgs(btn, cat) {
  document.querySelectorAll('#pkgTabs .ftab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const feat = document.getElementById('featPkg');
  const cards = document.querySelectorAll('#pkgGrid .p-card');
  let visible = 0;
  if (cat === 'All' || cat === 'Spiritual') { feat.style.display = ''; visible++; }
  else feat.style.display = 'none';
  cards.forEach(c => {
    const match = cat === 'All' || c.dataset.cat === cat;
    c.classList.toggle('hidden', !match);
    if (match) visible++;
  });
  const noRes = document.getElementById('pkgNoRes');
  if (noRes) noRes.classList.toggle('show', visible === 0);
  document.getElementById('pkgCount').textContent = visible + ' package' + (visible !== 1 ? 's' : '');
}

/* ─── Sort Packages ─── */
function sortPkgs(v) {
  const g = document.getElementById('pkgGrid');
  const cards = [...g.querySelectorAll('.p-card:not(.no-res)')];
  cards.sort((a, b) => {
    if (v === 'price-low') return +a.dataset.price - +b.dataset.price;
    if (v === 'price-high') return +b.dataset.price - +a.dataset.price;
    if (v === 'days') return +a.dataset.days - +b.dataset.days;
    return 0;
  });
  cards.forEach(c => g.appendChild(c));
}

/* ─── Filter Gallery ─── */
function filterGal(btn, cat) {
  document.querySelectorAll('#galTabs .ftab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#galGrid .g-item').forEach(item => {
    const match = cat === 'All' || item.dataset.cat === cat;
    item.style.display = match ? '' : 'none';
  });
}

/* ─── Lightbox ─── */
function openLb(idx) {
  lbIdx = idx;
  document.getElementById('lbImg').src = GALIMGS[lbIdx];
  document.getElementById('lbOv').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeLb() {
  document.getElementById('lbOv').classList.remove('show');
  document.body.style.overflow = '';
}
function lbNav(dir) {
  lbIdx = (lbIdx + dir + GALIMGS.length) % GALIMGS.length;
  document.getElementById('lbImg').src = GALIMGS[lbIdx];
}

/* ─── Contact Form ─── */
function submitContact() {
  const btn = document.getElementById('cfBtn');
  const email = document.getElementById('cf-email').value;
  const name = document.getElementById('cf-fname').value;
  if (!email || !name) { showToast('⚠️ Please fill required fields'); return; }
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✅ Message Sent!';
    btn.classList.add('sent');
    showToast('✅ Thank you! We\'ll contact you within 24 hours.');
    setTimeout(() => {
      btn.textContent = 'Send Message 🏔️';
      btn.disabled = false;
      btn.classList.remove('sent');
    }, 3000);
  }, 1500);
}

/* ─── Wishlist ─── */
function wishToggle(e, btn) {
  e.stopPropagation();
  btn.classList.toggle('liked');
  btn.textContent = btn.classList.contains('liked') ? '❤️' : '🤍';
}

/* ─── Auth ─── */
function openAuth(t) {
  // Pehle drawer band karo
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('hamBtn').classList.remove('active');

  // Phir modal kholo
  document.getElementById(t === 'login' ? 'loginMod' : 'signupMod').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeAuth(id) {
  document.getElementById(id).classList.remove('show');
  document.body.style.overflow = '';
}
function switchAuth(c, o) {
  closeAuth(c);
  setTimeout(() => document.getElementById(o).classList.add('show'), 180);
}
function socialAuth(btn, prov, mode) {
  const orig = btn.innerHTML;
  btn.classList.add('loading');
  btn.innerHTML = '<span>Connecting…</span>';
  setTimeout(() => {
    btn.classList.remove('loading');
    btn.innerHTML = orig;
    closeAuth(mode === 'login' ? 'loginMod' : 'signupMod');
    showToast(`✅ ${mode === 'login' ? 'Logged in' : 'Signed up'} with ${prov === 'google' ? 'Google' : 'Facebook'}!`);
  }, 1800);
}

/* ─── Toast ─── */
let toastT;
function showToast(m) {
  const t = document.getElementById('toast');
  t.textContent = m; t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ─── Nav scroll & progress ─── */
window.addEventListener('scroll', () => {
  const p = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('sp').style.width = p +'%';
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── Loader ─── */
// Force loader off immediately
(function() {
  function hideLdr() {
    var l = document.getElementById('ldr');
    if (!l) return;
    l.style.opacity = '0';
    l.style.pointerEvents = 'none';
    l.style.visibility = 'hidden';
    setTimeout(function(){ l.style.display = 'none'; }, 600);
  }
  // Run at 800ms max — no waiting
  setTimeout(hideLdr, 800);
  document.addEventListener('DOMContentLoaded', function() { setTimeout(hideLdr, 500); });
})();

/* ─── Hamburger / Drawer ─── */
function toggleDrawer() {
  document.getElementById('drawer').classList.toggle('open');
  document.getElementById('hamBtn').classList.toggle('open');
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('hamBtn').classList.remove('open');
}

/* ─── ESC key closes everything ─── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeDetail();
    closeLb();
    closeAuth('loginMod');
    closeAuth('signupMod');
    closeBooking();
    closeCmp();
    closeSearch();
  }
});

/* ══════════════════════════════════════
   FEATURE 1: VIDEO BACKGROUND
══════════════════════════════════════ */
let videoOn = false;
function toggleHeroVideo() {
  const bg = document.getElementById('heroBg');
  const vid = document.getElementById('heroVid');
  const btn = document.getElementById('vidToggleBtn');
  videoOn = !videoOn;
  if (videoOn) {
    bg.style.opacity = '0';
    vid.classList.remove('hidden');
    btn.innerHTML = '🖼️ Switch to Photo';
  } else {
    bg.style.opacity = '1';
    vid.classList.add('hidden');
    btn.innerHTML = '🎥 Switch to Video';
  }
}

/* ══════════════════════════════════════
   FEATURE 2: SEARCH
══════════════════════════════════════ */
const ALL_ITEMS = [
  {key:'chardham',name:'Char Dham Yatra',sub:'Spiritual · 12 days',price:'₹28,999',img:'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=120&q=70',type:'package',cat:'Spiritual'},
  {key:'rishikesh',name:'Rishikesh Adventure Rush',sub:'Adventure · 5 days',price:'₹9,499',img:'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=120&q=70',type:'package',cat:'Adventure'},
  {key:'auli',name:'Auli Ski & Snow Getaway',sub:'Ski · 6 days',price:'₹14,999',img:'https://images.unsplash.com/photo-1516692296811-9b28e9eb9a87?w=120&q=70',type:'package',cat:'Ski'},
  {key:'corbett',name:'Jim Corbett Tiger Safari',sub:'Wildlife · 4 days',price:'₹12,999',img:'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=120&q=70',type:'package',cat:'Wildlife'},
  {key:'vof',name:'Valley of Flowers Trek',sub:'Nature · 7 days',price:'₹9,499',img:'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=120&q=70',type:'package',cat:'Nature'},
  {key:'nainital',name:'Nainital Family Fun',sub:'Family · 4 days',price:'₹7,999',img:'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=120&q=70',type:'package',cat:'Family'},
  {key:'mussoorie',name:'Mussoorie Honeymoon Special',sub:'Honeymoon · 5 days',price:'₹11,999',img:'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=120&q=70',type:'package',cat:'Honeymoon'},
  {key:'chopta',name:'Chopta Tungnath Trek',sub:'Nature · 4 days',price:'₹5,999',img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&q=70',type:'package',cat:'Nature'},
  {key:'kedar',name:'Kedarnath Yatra & Trek',sub:'Spiritual · 6 days',price:'₹8,499',img:'https://images.unsplash.com/photo-1605537964076-47cda6c1e20e?w=120&q=70',type:'package',cat:'Spiritual'},
  {key:'haridwar',name:'Haridwar Ganga Aarti',sub:'Spiritual · 3 days',price:'₹4,499',img:'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=120&q=70',type:'package',cat:'Spiritual'},
  {key:'para',name:'Paragliding Adventure Camp',sub:'Adventure · 3 days',price:'₹4,999',img:'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=120&q=70',type:'package',cat:'Adventure'},
  {key:'biking',name:'Himalayan Mountain Biking',sub:'Adventure · 5 days',price:'₹6,999',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=70',type:'package',cat:'Adventure'},
];

function openSearch() {
  document.getElementById('searchOv').classList.add('show');
  document.getElementById('searchInput').focus();
  document.body.style.overflow = 'hidden';
  renderSearchResults('');
}
function closeSearch() {
  document.getElementById('searchOv').classList.remove('show');
  document.body.style.overflow = '';
}
function renderSearchResults(q) {
  const container = document.getElementById('searchResults');
  const filtered = q.length < 1
    ? ALL_ITEMS
    : ALL_ITEMS.filter(i =>
        i.name.toLowerCase().includes(q.toLowerCase()) ||
        i.cat.toLowerCase().includes(q.toLowerCase()) ||
        i.sub.toLowerCase().includes(q.toLowerCase())
      );
  if (filtered.length === 0) {
    container.innerHTML = '<div class="s-empty">🔍 No results found for "<strong>' + q + '</strong>"</div>';
    return;
  }
  container.innerHTML = filtered.map(i => `
    <div class="s-res-item" onclick="closeSearch();openDetail('${i.key}')">
      <img class="s-res-img" src="${i.img}" alt=""/>
      <div><div class="s-res-name">${i.name}</div><div class="s-res-sub">${i.sub}</div></div>
      <div class="s-res-price">${i.price}</div>
    </div>`).join('');
}




/* ══════════════════════════════════════
   FEATURE 6: REVIEWS — api.js mein handle hota hai (real server call)
══════════════════════════════════════ */

/* ══════════════════════════════════════
   FEATURE 7: TRIP COMPARISON
══════════════════════════════════════ */
let compareList = [];
function addToCompare(key, btn) {
  if (compareList.includes(key)) {
    compareList = compareList.filter(k => k !== key);
    btn.classList.remove('in-cmp');
    btn.innerHTML = '⚖️';
    showToast('Removed from comparison');
  } else if (compareList.length >= 3) {
    showToast('⚠️ Max 3 packages can be compared');
    return;
  } else {
    compareList.push(key);
    btn.classList.add('in-cmp');
    btn.innerHTML = '✓ Added';
    showToast('✅ Added to comparison!');
  }
  updateCmpBar();
}
function updateCmpBar() {
  const bar = document.getElementById('cmpBar');
  const itemsEl = document.getElementById('cmpBarItems');
  if (compareList.length === 0) {
    bar.classList.remove('visible');
    return;
  }
  bar.classList.add('visible');
  let html = '';
  compareList.forEach(k => {
    const p = PKG[k];
    html += `<div class="cmp-bar-item">📦 ${p.title.split(' ').slice(0,2).join(' ')} · ${p.price}<button class="cmp-x" onclick="removeFromCmp('${k}')">✕</button></div>`;
  });
  for (let i = compareList.length; i < 3; i++) {
    html += `<div class="cmp-bar-slot">+ Add package ${i+1}</div>`;
  }
  itemsEl.innerHTML = html;
  document.getElementById('btnDoCmp').disabled = compareList.length < 2;
}
function removeFromCmp(key) {
  compareList = compareList.filter(k => k !== key);
  document.querySelectorAll('.cmp-btn').forEach(btn => {
    if (btn.onclick && btn.onclick.toString().includes(key)) {
      btn.classList.remove('in-cmp');
      btn.innerHTML = '⚖️';
    }
  });
  updateCmpBar();
}
function clearCompare() {
  compareList = [];
  document.querySelectorAll('.cmp-btn').forEach(b => { b.classList.remove('in-cmp'); b.innerHTML = '⚖️'; });
  updateCmpBar();
}
function openCmp() {
  if (compareList.length < 2) { showToast('⚠️ Select at least 2 packages to compare'); return; }
  const items = compareList.map(k => PKG[k]);
  const cols = items.map(p => `<th class="cmp-pkg-head"><img class="cmp-pkg-img" src="${p.img}" alt=""/><div class="cmp-pkg-name">${p.title}</div></th>`).join('');
  const rows = [
    ['💰 Price', items.map(p => `<td class="cmp-price-cell">${p.price}<small>/person</small></td>`).join('')],
    ['🌙 Duration', items.map(p => `<td>${p.nights} nights</td>`).join('')],
    ['⭐ Rating', items.map(p => `<td>⭐ ${p.rating} (${p.rev} reviews)</td>`).join('')],
    ['✅ Free Cancel', items.map(() => `<td class="cmp-tick">✔</td>`).join('')],
    ['🚌 Transport', items.map(() => `<td class="cmp-tick">✔</td>`).join('')],
    ['🍽️ Meals', items.map(() => `<td class="cmp-tick">✔</td>`).join('')],
    ['🧭 Guide', items.map(() => `<td class="cmp-tick">✔</td>`).join('')],
    ['📸 Photography', items.map((p,i) => i===0 ? `<td class="cmp-tick">✔</td>` : `<td class="cmp-cross">–</td>`).join('')],
    ['🚁 Helicopter', items.map((p) => p.hl.some(h=>h.includes('🚁')) ? `<td class="cmp-tick">✔</td>` : `<td class="cmp-cross">–</td>`).join('')],
    ['', items.map(p => `<td><button class="btn-bk" onclick="closeCmp();openBooking('${Object.keys(PKG).find(k=>PKG[k]===p)}')">Book Now →</button></td>`).join('')],
  ].map(([label, cells]) => `<tr><td class="cmp-row-label">${label}</td>${cells}</tr>`).join('');
  document.getElementById('cmpTable').innerHTML = `<table><thead><tr><th>Feature</th>${cols}</tr></thead><tbody>${rows}</tbody></table>`;
  document.getElementById('cmpOv').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeCmp() {
  document.getElementById('cmpOv').classList.remove('show');
  document.body.style.overflow = '';
}

/* ─── WhatsApp ─── */
function openWhatsApp() {
  window.open('https://wa.me/9027591352?text=Namaste! I want to book a trip to Uttarakhand 🏔️', '_blank');
}


/* ══════════ HOTEL PAGE JS ══════════ */
const HOTELS = {
  ananda:{name:'Ananda in the Himalayas',loc:'Narendra Nagar, Rishikesh',stars:5,rating:5.0,ratingLbl:'World-class',price:'₹22,000',desc:'One of Asia\'s top luxury spa resorts perched 1,000 metres above the Ganges. Immerse yourself in personalised Ayurvedic programmes, Yoga & Vedanta sessions, and world-class cuisine sourced from the resort\'s own organic farm.',imgs:['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85','https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80','https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80'],amenities:['♾️ Infinity Pool','🧘 Yoga Pavilion','💆 Ayurvedic Spa','🍽️ Fine Dining','🌅 Himalayan Views','🏋️ Fitness Center','🛎️ Butler Service','🌿 Organic Farm','🎾 Tennis Court','🛁 Private Jacuzzi','📚 Library','🚗 Airport Transfer'],rooms:[{name:'Deluxe Room',price:'₹22,000',feats:['King Bed','Valley View','Free WiFi','Minibar']},{name:'Suite',price:'₹38,000',feats:['Living Room','Balcony','Private Plunge Pool','Butler']},{name:'Palace Suite',price:'₹65,000',feats:['3BHK','Grand Terrace','Private Pool','Personalized Butler']}],reviews:[{name:'Meera Kapoor',date:'Jan 2025',stars:'★★★★★',text:'The most transformative experience of my life. The Ayurvedic doctors are world-class.'},{name:'Rajan Nair',date:'Dec 2024',stars:'★★★★★',text:'Absolute perfection. The infinity pool at sunset with Nanda Devi — worth every rupee.'},{name:'Prerna Sood',date:'Nov 2024',stars:'★★★★★',text:'Perfect anniversary stay. Nothing else comes close in India.'}]},
  glasshouse:{name:'Glasshouse on the Ganges',loc:'Rishikesh, Uttarakhand',stars:5,rating:4.9,ratingLbl:'Exceptional',price:'₹18,000',desc:'A hidden gem where 200-year-old colonial architecture meets the sacred Ganges. Luxury stone cottages in mango and lychee groves with private balconies overlooking the sacred river.',imgs:['https://images.unsplash.com/photo-1501117716987-c8c394bb29df?w=900&q=85','https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80','https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500&q=80'],amenities:['🌊 River View','♾️ Infinity Pool','🧘 Yoga Deck','🍽️ Restaurant','🚁 Helipad','🐘 Elephant Bath','🛶 River Trips','🌿 Nature Walks','🔭 Stargazing','🎣 Fishing','🚗 Transfer','📶 Free WiFi'],rooms:[{name:'Luxury Cottage',price:'₹18,000',feats:['River View','King Bed','Private Balcony','Outdoor Bathtub']},{name:'Garden Room',price:'₹12,000',feats:['Garden View','Queen Bed','Sit-out','Minibar']}],reviews:[{name:'Aryan Shah',date:'Feb 2025',stars:'★★★★★',text:'The most peaceful place in India. Waking to the Ganges and stargazing at night — magical.'},{name:'Ritika Joshi',date:'Jan 2025',stars:'★★★★★',text:'Perfect honeymoon. The outdoor bathtub with river view is unforgettable.'}]},
  savoy:{name:'The Savoy Mussoorie',loc:'Mussoorie, Uttarakhand',stars:5,rating:4.8,ratingLbl:'Exceptional',price:'₹8,500',desc:'Uttarakhand\'s oldest hotel, established in 1902. Grand Victorian architecture, sprawling manicured lawns, antique-furnished rooms and timeless colonial elegance in the Queen of Hills.',imgs:['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85','https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&q=80','https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80'],amenities:['🏛️ Heritage Property','🌿 2-Acre Gardens','🍽️ Fine Dining','♟️ Billiards Room','🎭 Live Music','💆 Spa','🏋️ Gym','🎳 Bowling','📚 Library','🎪 Ballroom','🚗 Vintage Car','📶 WiFi'],rooms:[{name:'Superior Room',price:'₹8,500',feats:['Valley View','Victorian Decor','King Bed','Clawfoot Tub']},{name:'Heritage Suite',price:'₹16,000',feats:['2-Room Suite','Antique Furniture','Fireplace','Private Balcony']}],reviews:[{name:'Suresh Menon',date:'Dec 2024',stars:'★★★★★',text:'Staying at The Savoy is like stepping back in time. Simply superb.'},{name:'Nandita Roy',date:'Nov 2024',stars:'★★★★',text:'Beautiful heritage property. The evening live music was a wonderful touch.'}]},
  corbett_h:{name:'Corbett Jungle Lodge',loc:'Jim Corbett National Park',stars:4,rating:4.9,ratingLbl:'Exceptional',price:'₹12,000',desc:'Award-winning luxury jungle lodge bordering Jim Corbett National Park. Wake up to birdsong and wild elephant sightings from your private deck with expert naturalist guides.',imgs:['https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=85','https://images.unsplash.com/photo-1501117716987-c8c394bb29df?w=500&q=80','https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=500&q=80'],amenities:['🐯 Jeep Safari','🌿 Nature Walk','♾️ Pool','🍽️ Jungle Restaurant','🔭 Observatory','📸 Photography','🐘 Elephant Sightings','🦅 Bird Walks','🔥 Campfire','🧘 Yoga','🚗 Pickup','🎥 Film Screening'],rooms:[{name:'Jungle Chalet',price:'₹12,000',feats:['Forest View','King Bed','Open Deck','Outdoor Shower']},{name:'Tree House Suite',price:'₹20,000',feats:['Canopy Level','360° Forest View','Kitchenette','Plunge Pool']}],reviews:[{name:'Rohit Agarwal',date:'Jan 2025',stars:'★★★★★',text:'Saw 3 tigers in 2 safari days! Best wildlife experience in India.'},{name:'Kavya Iyer',date:'Dec 2024',stars:'★★★★★',text:'The tree house is worth every rupee. Waking in the forest canopy is unforgettable.'}]},
  corbett:{name:'Corbett Riverside Resort',loc:'Ramnagar, Jim Corbett',stars:4,rating:4.9,ratingLbl:'Exceptional',price:'₹12,000',desc:'Luxury resort on the banks of Kosi river adjoining Jim Corbett National Park. Spacious cottages, naturalist-guided safaris, and serene riverside evenings with bonfires.',imgs:['https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=900&q=85','https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500&q=80','https://images.unsplash.com/photo-1501117716987-c8c394bb29df?w=500&q=80'],amenities:['🐯 Tiger Safari','🌊 Riverside','♾️ Pool','🍽️ Multi-cuisine','🔥 Bonfire','🦅 Bird Walks','🌿 Nature Trails','🧘 Yoga','🚗 Airport Transfer','📶 WiFi','🐘 Elephant Safaris','🌅 Sunrise Walks'],rooms:[{name:'River Cottage',price:'₹12,000',feats:['River View','King Bed','Private Sit-out','Minibar']},{name:'Deluxe Room',price:'₹8,500',feats:['Garden View','Queen Bed','Free WiFi','Breakfast']}],reviews:[{name:'Deepak Sharma',date:'Feb 2025',stars:'★★★★★',text:'Stunning riverside location and superb tiger sightings. Staff is exceptional.'},{name:'Pooja Mehta',date:'Jan 2025',stars:'★★★★★',text:'The bonfire evenings by the river were magical. Will definitely return.'}]},
  nainital_h:{name:'The Naini Retreat',loc:'Nainital, Kumaon',stars:4,rating:4.8,ratingLbl:'Excellent',price:'₹7,500',desc:'A colonial boutique retreat perched above Naini Lake with panoramic views of the Himalayan ranges. Elegant rooms, heritage architecture and warm Kumaoni hospitality.',imgs:['https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=900&q=85','https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80','https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&q=80'],amenities:['⛵ Lake View','🏔️ Mountain Views','🍽️ Restaurant','☕ Cafe','🌿 Garden','🛶 Boating','🚡 Cable Car Access','📶 WiFi','🚗 Transfers','🍳 Breakfast','🎣 Fishing','🌸 Nature Walk'],rooms:[{name:'Lake View Room',price:'₹7,500',feats:['Naini Lake View','King Bed','Balcony','WiFi']},{name:'Mountain Suite',price:'₹12,000',feats:['360° Views','Living Room','Fireplace','Butler']}],reviews:[{name:'Sunita Verma',date:'Mar 2025',stars:'★★★★★',text:'The lake view from the room is breathtaking. Perfect romantic getaway.'},{name:'Rahul Gupta',date:'Feb 2025',stars:'★★★★',text:'Charming boutique hotel with great food and outstanding views of Nainital.'}]},
  auli_h:{name:'Auli Resort & Ski Lodge',loc:'Auli, Chamoli District',stars:4,rating:4.7,ratingLbl:'Excellent',price:'₹15,000',desc:'India\'s premier ski resort accommodation at 2,519m altitude. Cozy mountain chalets with panoramic views of Nanda Devi, equipped ski rooms, heated interiors and hearty mountain cuisine.',imgs:['https://images.unsplash.com/photo-1516692296811-9b28e9eb9a87?w=900&q=85','https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80','https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80'],amenities:['⛷️ Ski-in Ski-out','🏔️ Nanda Devi View','🚡 Gondola Access','🍽️ Mountain Cuisine','🔥 Fireplace','❄️ Ski Equipment','🧘 Yoga Room','♨️ Hot Springs','📶 WiFi','🚗 Transfers','🏂 Snowboarding','🌟 Stargazing'],rooms:[{name:'Mountain Chalet',price:'₹15,000',feats:['Snow View','King Bed','Fireplace','Ski Storage']},{name:'Deluxe Room',price:'₹10,000',feats:['Valley View','Twin/King Bed','Heated Floor','Minibar']}],reviews:[{name:'Vikram Singh',date:'Jan 2025',stars:'★★★★★',text:'Best ski accommodation in India. The Nanda Devi view at sunrise is absolutely stunning.'},{name:'Anjali Khanna',date:'Dec 2024',stars:'★★★★★',text:'Cozy chalets, excellent food and right next to the gondola. Perfect ski holiday.'}]},
  chopta_h:{name:'Chopta Meadows Camp',loc:'Chopta, Rudraprayag',stars:3,rating:4.9,ratingLbl:'Exceptional',price:'₹3,500',desc:'Award-winning eco-camp in the pristine rhododendron forests of Chopta at 2,680m. Luxury tents with real beds, warm quilts, attached baths and stargazing decks under unpolluted Himalayan skies.',imgs:['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85','https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80','https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80'],amenities:['⛺ Luxury Tents','🔭 Stargazing','🌿 Forest Walks','🍽️ Camp Meals','🔥 Bonfire','🦅 Bird Watching','🥾 Trekking','🏔️ Peak Views','♨️ Hot Water','🌸 Rhododendron Forest','📷 Photography','🧭 Guide'],rooms:[{name:'Luxury Tent',price:'₹3,500',feats:['Real Bed','Attached Bath','Hot Water','Forest View']},{name:'Premium Tent',price:'₹5,000',feats:['King Bed','Private Deck','Wood Heater','Panoramic View']}],reviews:[{name:'Aditya Kumar',date:'Apr 2025',stars:'★★★★★',text:'The stars from Chopta are unlike anything I have seen. The camp is cozy and the food is delicious.'},{name:'Shreya Nair',date:'Mar 2025',stars:'★★★★★',text:'Best glamping experience in Uttarakhand. The rhododendron forest is magical in bloom.'}]},
  vivanta:{name:'Vivanta Rishikesh',loc:'Rishikesh, Uttarakhand',stars:5,rating:4.8,ratingLbl:'Excellent',price:'₹14,000',desc:'Taj\'s flagship luxury property in Rishikesh — contemporary design with Himalayan aesthetics, spa, infinity pool and gourmet dining with panoramic valley views.',imgs:['https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85','https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=80','https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80'],amenities:['♾️ Infinity Pool','💆 Spa','🍽️ Multi-cuisine','🧘 Yoga Studio','🌅 Valley Views','🏋️ Fitness Center','🛎️ Concierge','🎾 Tennis','🚗 Airport Transfer','📶 WiFi','🛁 Jacuzzi','🌿 Garden'],rooms:[{name:'Deluxe Valley View',price:'₹14,000',feats:['Valley View','King Bed','Balcony','Minibar']},{name:'Premium Suite',price:'₹25,000',feats:['Living Room','Private Pool','Butler','Panoramic View']}],reviews:[{name:'Neha Kapoor',date:'Mar 2025',stars:'★★★★★',text:'Impeccable service, stunning views and the best spa in Rishikesh.'},{name:'Sanjay Mishra',date:'Feb 2025',stars:'★★★★★',text:'Luxury at its finest. The infinity pool view of the Ganges valley is unmatched.'}]},
  zostel:{name:'Zostel Rishikesh',loc:'Tapovan, Rishikesh',stars:2,rating:4.6,ratingLbl:'Very Good',price:'₹1,800',desc:'India\'s favourite backpacker hostel brand in the adventure capital of India. Clean dorms and private rooms, rooftop yoga, cafe, and the best social atmosphere for solo travelers.',imgs:['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=900&q=85','https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80','https://images.unsplash.com/photo-1501117716987-c8c394bb29df?w=500&q=80'],amenities:['🧘 Rooftop Yoga','☕ Cafe','📶 Fast WiFi','🎮 Game Zone','🗺️ Travel Desk','🛶 Rafting Bookings','🔒 Locker','🌿 Eco-Friendly','🎵 Music Room','🤝 Community Events','🏪 Convenience Store','🚿 Hot Showers'],rooms:[{name:'Dormitory Bed',price:'₹1,800',feats:['AC Dorm','Locker','Free WiFi','Breakfast']},{name:'Private Room',price:'₹3,500',feats:['Private Bathroom','Double Bed','AC','Mountain View']}],reviews:[{name:'Riya Pandey',date:'Apr 2025',stars:'★★★★★',text:'Best hostel vibes in India. Met amazing travelers and the staff organized a bonfire night.'},{name:'Kabir Khan',date:'Mar 2025',stars:'★★★★',text:'Super clean, great location for rafting and bungee, and the rooftop yoga is amazing.'}]},
  manor:{name:'The Manor Bhowali',loc:'Bhowali, Nainital',stars:4,rating:4.7,ratingLbl:'Excellent',price:'₹9,500',desc:'A 1930s colonial manor nestled in Kumaon hills with apple orchards, pine forests and sweeping Himalayan panoramas. Authentic heritage rooms, home-cooked meals and peaceful Kumaoni living.',imgs:['https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=85','https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=500&q=80','https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80'],amenities:['🍎 Apple Orchards','🌲 Pine Forest','🏔️ Himalayan Views','🍽️ Home Cooking','🔥 Fireplace','📚 Library','🌿 Nature Walks','🎣 Trout Fishing','🚗 Transfers','📶 WiFi','🧘 Meditation Garden','🌸 Flower Garden'],rooms:[{name:'Heritage Room',price:'₹9,500',feats:['Antique Decor','Mountain View','Fireplace','Breakfast']},{name:'Orchard Suite',price:'₹14,000',feats:['Sitting Room','Orchard View','Four-poster Bed','Private Garden']}],reviews:[{name:'Priya Bhatia',date:'Feb 2025',stars:'★★★★★',text:'Like staying in a family home from the 1930s. The food made by the local cook is outstanding.'},{name:'Sameer Joshi',date:'Jan 2025',stars:'★★★★★',text:'The most authentic Kumaon experience. Woke up to birdsong and picked apples from the garden.'}]},
  bythe:{name:'By The Ganges Camp',loc:'Shivpuri, Rishikesh',stars:3,rating:4.8,ratingLbl:'Excellent',price:'₹4,500',desc:'Premium riverside camping on the banks of the Ganges in Shivpuri — the ultimate adventure base camp. Luxury tents, rafting at your doorstep, bonfires under stars, and fresh mountain air.',imgs:['https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=900&q=85','https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=500&q=80','https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80'],amenities:['🌊 Riverside','🛶 Rafting Access','⛺ Luxury Tents','🔥 Bonfire','🍽️ Camp Dining','🧘 Yoga','🤿 Kayaking','🏊 River Swimming','📶 WiFi','🌅 Sunrise Views','🌿 Nature Walks','📷 Photography'],rooms:[{name:'Deluxe Tent',price:'₹4,500',feats:['River View','Real Bed','Attached Bath','Hot Water']},{name:'Premium Cottage',price:'₹7,000',feats:['AC Room','Private Sit-out','River View','Minibar']}],reviews:[{name:'Tanuj Sharma',date:'Mar 2025',stars:'★★★★★',text:'Waking up to the Ganges right outside your tent is an experience you cannot get anywhere else.'},{name:'Divya Malhotra',date:'Feb 2025',stars:'★★★★★',text:'The rafting from the camp was incredible and the bonfire dinner was perfect.'}]},
  devbhoomi_stay:{name:'DevBhoomi Boutique Stay',loc:'Haridwar, Uttarakhand',stars:3,rating:4.7,ratingLbl:'Excellent',price:'₹6,000',desc:'Our own curated boutique property in the holy city of Haridwar. Spiritual ambiance, Ganga-view rooftop, sattvic meals and guided Aarti experiences at Har Ki Pauri — just 5 minutes walk away.',imgs:['https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=900&q=85','https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80','https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=80'],amenities:['🕉️ Ganga View','🙏 Aarti Access','🧘 Morning Yoga','🍽️ Sattvic Meals','🌿 Rooftop Garden','📶 WiFi','🚗 Transfers','🛕 Temple Walk','♨️ Hot Water','🌅 Sunrise View','📚 Spiritual Library','🤝 Priest Guided Tours'],rooms:[{name:'Ganga View Room',price:'₹6,000',feats:['River View','Double Bed','AC','Breakfast']},{name:'Deluxe Suite',price:'₹9,500',feats:['Rooftop Access','King Bed','Living Area','Sattvic Meals']}],reviews:[{name:'Ramesh Tiwari',date:'Apr 2025',stars:'★★★★★',text:'Staying here was a deeply spiritual experience. The guided Aarti tour was unforgettable.'},{name:'Geeta Sharma',date:'Mar 2025',stars:'★★★★★',text:'Perfect location, sattvic food and the rooftop Ganga view at dawn is pure magic.'}]},
  ganga_inn:{name:'Ganga Inn Budget Stay',loc:'Rishikesh, Uttarakhand',stars:2,rating:4.5,ratingLbl:'Very Good',price:'₹2,200',desc:'Clean, comfortable and affordable rooms steps from the Ganges ghats. Perfect base for budget travelers who want to explore Rishikesh — rafting, yoga, bungee — without breaking the bank.',imgs:['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=900&q=85','https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80','https://images.unsplash.com/photo-1501117716987-c8c394bb29df?w=500&q=80'],amenities:['🌊 Ganga Steps','☕ Cafe','📶 WiFi','🚿 Hot Showers','🗺️ Travel Desk','🛶 Rafting Bookings','🔒 Safe Lockers','🌿 Rooftop','🕉️ Yoga Classes','🏍️ Bike Rentals','🍽️ Restaurant','🚗 Taxi Service'],rooms:[{name:'Standard Room',price:'₹2,200',feats:['AC','Double Bed','WiFi','Hot Water']},{name:'Deluxe Room',price:'₹3,500',feats:['Ganga View','King Bed','AC','Breakfast Included']}],reviews:[{name:'Amit Patel',date:'Apr 2025',stars:'★★★★★',text:'Best budget option in Rishikesh. Clean rooms, helpful staff and perfect location.'},{name:'Siya Kapoor',date:'Mar 2025',stars:'★★★★',text:'Excellent value for money. Steps from the Ganga and all adventure activities.'}]}
};

function openHotelDetail(key) {
  const h = HOTELS[key];
  if (!h) { showToast('Details coming soon!'); return; }
  document.getElementById('hdImg1').src = h.imgs[0];
  document.getElementById('hdImg2').src = h.imgs[1];
  document.getElementById('hdImg3').src = h.imgs[2];
  document.getElementById('hdStars').textContent = '★'.repeat(h.stars);
  document.getElementById('hdName').textContent = h.name;
  document.getElementById('hdLoc').textContent = '📍 ' + h.loc;
  document.getElementById('hdPrice').innerHTML = h.price + ' <small>/night</small>';
  document.getElementById('hdPriceBottom').innerHTML = h.price + ' <small>/night</small>';
  document.getElementById('hdRatingNum').textContent = h.rating;
  document.getElementById('hdRatingLbl').textContent = h.ratingLbl;
  document.getElementById('hdDesc').textContent = h.desc;
  document.getElementById('hdAmenGrid').innerHTML = h.amenities.slice(0,6).map(a=>`<div class="hd-amen-item">${a}</div>`).join('');
  document.getElementById('hdFullAmen').innerHTML = h.amenities.map(a=>`<div class="hd-amen-item">${a}</div>`).join('');
  document.getElementById('hdRoomsList').innerHTML = h.rooms.map(r=>`<div class="hd-room"><div class="hd-room-info"><div class="hd-room-name">${r.name}</div><div class="hd-room-feats">${r.feats.map(f=>`<span class="hd-room-feat">${f}</span>`).join('')}</div></div><div class="hd-room-price">${r.price}<small style="font-family:'Nunito',sans-serif;font-size:.66rem;color:var(--stone);font-weight:400">/night</small></div><button class="btn-hbook" onclick="closeHotelDetail();openBooking(document.getElementById('hdName')?.textContent)">Book</button></div>`).join('');
  document.getElementById('hdRevList').innerHTML = h.reviews.map(r=>`<div class="hd-rev"><div class="hd-rev-top"><div><div class="hd-rev-name">${r.name}</div><div class="hd-rev-date">${r.date}</div></div><div class="hd-rev-stars">${r.stars}</div></div><div class="hd-rev-text">"${r.text}"</div></div>`).join('');
  // Reset tabs
  document.querySelectorAll('.hd-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.hd-tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelector('.hd-tab').classList.add('active');
  document.getElementById('hdOverview').classList.add('active');
  document.getElementById('hdOv').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeHotelDetail() {
  document.getElementById('hdOv').classList.remove('show');
  document.body.style.overflow = '';
}
function switchHotelTab(btn, panelId) {
  document.querySelectorAll('.hd-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.hd-tab-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}
function filterHotels(btn, cat) {
  document.querySelectorAll('#hotelTabs .ftab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const cards = document.querySelectorAll('#hotelGrid .hotel-card');
  let visible = 0;
  cards.forEach(c => {
    const match = cat === 'All' || c.dataset.cat === cat;
    c.classList.toggle('hidden', !match);
    if (match) visible++;
  });
  document.getElementById('hotelCount').textContent = visible + ' hotel' + (visible!==1?'s':'');
}
function hotelSearchFilter(q) {
  const cards = document.querySelectorAll('#hotelGrid .hotel-card');
  let visible = 0;
  cards.forEach(c => {
    const match = !q || c.innerText.toLowerCase().includes(q.toLowerCase());
    c.classList.toggle('hidden', !match);
    if (match) visible++;
  });
  document.getElementById('hotelCount').textContent = visible + ' hotel' + (visible!==1?'s':'');
}
function sortHotels(v) {
  const grid = document.getElementById('hotelGrid');
  const cards = [...grid.querySelectorAll('.hotel-card')];
  cards.sort((a,b) => {
    if (v==='price-low') return +a.dataset.price - +b.dataset.price;
    if (v==='price-high') return +b.dataset.price - +a.dataset.price;
    if (v==='rating') return +b.dataset.rating - +a.dataset.rating;
    return 0;
  });
  cards.forEach(c => grid.appendChild(c));
}
function hotelSearch() {
  const checkin = document.getElementById('hbbCheckin').value;
  const checkout = document.getElementById('hbbCheckout').value;
  if (checkin && checkout && checkin >= checkout) {
    showToast('⚠️ Check-out must be after check-in'); return;
  }
  showToast('🔍 Searching available rooms…');
  setTimeout(() => showToast('✅ 12 hotels available for your dates!'), 1200);
}
// Set today as min for check-in
(function() {
  const today = new Date().toISOString().split('T')[0];
  const ci = document.getElementById('hbbCheckin');
  const co = document.getElementById('hbbCheckout');
  if (ci) { ci.min = today; ci.value = today; }
  if (co) { co.min = today; }
})();

/* ══════════════════════════════════════
   NEW FEATURES v2.0
══════════════════════════════════════ */

/* ── FAQ Accordion ── */
function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── Scroll Reveal ── */
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
})();

/* ── Animated Counter ── */
function animateCounter(el, target, suffix) {
  let start = 0;
  const duration = 1800;
  const step = (target / duration) * 16;
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start) + (suffix || '');
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const nums = e.target.querySelectorAll('.h-snum');
      nums.forEach(n => {
        const txt = n.textContent;
        if (txt.includes('K')) animateCounter(n, parseInt(txt) * 1000, 'K+');
        else if (txt.includes('+')) animateCounter(n, parseInt(txt), '+');
        else if (txt.includes('.')) {
          // rating - just show
        }
      });
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

const statsGrid = document.querySelector('.home-stats-grid');
if (statsGrid) counterObserver.observe(statsGrid);

/* ── Set hero date default ── */
(function() {
  const hd = document.getElementById('heroDate');
  if (hd) {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    hd.value = d.toISOString().split('T')[0];
    hd.min = new Date().toISOString().split('T')[0];
  }
})();

/* ── Fix hero video toggle ── */
function toggleHeroVideo() {
  const bg = document.querySelector('.hero-bg');
  const vid = document.getElementById('heroVid');
  const btn = document.getElementById('vidToggleBtn');
  videoOn = !videoOn;
  if (videoOn) {
    if (bg) bg.style.opacity = '0';
    if (vid) vid.classList.remove('hidden');
    if (btn) btn.innerHTML = '🖼️ Switch to Photo';
  } else {
    if (bg) bg.style.opacity = '1';
    if (vid) vid.classList.add('hidden');
    if (btn) btn.innerHTML = '🎥 Switch to Video';
  }
}

/* ── subscribeNewsletter — api.js mein real server call ke saath hai ── */

/* ── Booking flow ── api.js mein handle hota hai ── */
function closeBooking() {
  document.getElementById('bookOv').classList.remove('show');
  document.body.style.overflow = '';
}
function updateBookSummary(price, persons) {
  price = parseFloat(price);
  if (!price || isNaN(price)) return; // ✅ crash रोकेगा

  const subtotal = price * parseInt(persons);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  document.getElementById('bsSubtotal').textContent = 
    '₹' + subtotal.toLocaleString('en-IN');
  document.getElementById('bsTax').textContent = 
    '₹' + Math.round(tax).toLocaleString('en-IN');
  document.getElementById('bsTotal').textContent = 
    '₹' + Math.round(total).toLocaleString('en-IN');
}

/* ── confirmBooking, doLogin, doSignup, submitReview, subscribeNewsletter
      — ye sab api.js mein real server calls ke saath hain ── */

/* ── Search results rendering ── */
function renderSearchResults(q) {
  const res = document.getElementById('searchResults');
  if (!res) return;
  const filtered = q
    ? ALL_ITEMS.filter(i => i.name.toLowerCase().includes(q.toLowerCase()) || i.cat.toLowerCase().includes(q.toLowerCase()) || i.sub.toLowerCase().includes(q.toLowerCase()))
    : ALL_ITEMS;
  if (filtered.length === 0) {
    res.innerHTML = '<p style="color:var(--stone);padding:1rem 0;font-size:.87rem">No trips found. Try "Rishikesh", "Adventure", or "Spiritual".</p>';
    return;
  }
  res.innerHTML = filtered.map(i => `
    <div class="sr-item" onclick="closeSearch();openDetail('${i.key}')">
      <img class="sr-img" src="${i.img}" alt="${i.name}" loading="lazy"/>
      <div class="sr-info">
        <div class="sr-name">${i.name}</div>
        <div class="sr-sub">${i.sub}</div>
      </div>
      <div class="sr-price">${i.price}</div>
    </div>
  `).join('');
}

/* ── Auth doLogin / doSignup — api.js mein real server calls ke saath hain ── */

/* ── Reveal observer init ── */
document.addEventListener('DOMContentLoaded', () => {
  // Re-run reveal observer for dynamically loaded content
  const newRevObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        newRevObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => newRevObserver.observe(el));
  
  // Render initial search results
  if (document.getElementById('searchResults')) renderSearchResults('');
});
