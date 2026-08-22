const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let frequency='once', donorType='indian', step=1, amount=0;
const currencySymbols={INR:'₹',USD:'$',GBP:'£',AED:'د.إ',CAD:'C$',AUD:'A$'};
$('#menuBtn').onclick=()=>$('#navLinks').classList.toggle('open');
$$('.navlinks a').forEach(a=>a.onclick=()=>$('#navLinks').classList.remove('open'));
$$('.tab').forEach(b=>b.onclick=()=>{ $$('.tab').forEach(x=>x.classList.remove('active')); b.classList.add('active'); donorType=b.dataset.donor; $('#country').value=donorType==='indian'?'India':donorType==='nri'?'United Arab Emirates':'United States'; $('#detailsCountry').value=$('#country').value; });
$$('.give').forEach(b=>b.onclick=()=>{ $$('.give').forEach(x=>x.classList.remove('active')); b.classList.add('active'); frequency=b.dataset.frequency; updateSummary(); });
$$('.amounts button').forEach(b=>b.onclick=()=>{ $$('.amounts button').forEach(x=>x.classList.remove('active')); b.classList.add('active'); amount=Number(b.dataset.amount); $('#amount').value=amount; updateSummary(); });
$('#amount').oninput=e=>{amount=Number(e.target.value||0); $$('.amounts button').forEach(x=>x.classList.toggle('active',Number(x.dataset.amount)===amount)); updateSummary()};
$('#currency').onchange=e=>{const c=e.target.value; $('#currencyLabel').textContent=c; $('#moneySymbol').textContent=currencySymbols[c]||c; updateSummary()};
$('#country').onchange=e=>$('#detailsCountry').value=e.target.value;
function money(){return `${$('#currency').value} ${Number(amount||0).toLocaleString('en-IN')}`}
function updateSummary(){ $('#summaryAmount').textContent=money(); $('#summaryFrequency').textContent=frequency==='monthly'?'Monthly':'One-time'; $('#summaryPurpose').textContent=$('#purpose').value==='general'?'Where needed most':$('#purpose').value; $('#paymentAmount').textContent=money(); }
function show(n){step=n; $$('.stepPane').forEach(p=>p.classList.toggle('hidden',Number(p.dataset.pane)!==n)); $$('[data-step-dot]').forEach(d=>{const s=Number(d.dataset.stepDot); d.classList.toggle('active',s===n); d.classList.toggle('done',s<n)}); updateSummary(); window.scrollTo({top:document.querySelector('#donate').offsetTop-90,behavior:'smooth'});}
function err(t){$('#error').textContent=t;}
$('#toDetails').onclick=()=>{err(''); if(amount<1){err('Please select or enter a donation amount.');return} show(2)};
$('#back1').onclick=()=>show(1);
$('#toPayment').onclick=()=>{err(''); const ids=['name','phone','email','address','city','state','zip','detailsCountry']; for(const id of ids){const el=$('#'+id); if(!el.value.trim()){err('Please complete all required donor details.');el.focus();return}} if(!$('#consent').checked){err('Please confirm the donation and privacy consent.');return} show(3)};
$$('.pay').forEach(b=>b.onclick=()=>{$$('.pay').forEach(x=>x.classList.remove('active'));b.classList.add('active'); const bank=b.textContent.includes('Bank'); $('#gatewayPanel').classList.toggle('hidden',bank); $('#bankPanel').classList.toggle('hidden',!bank)});
$('#back2').onclick=()=>show(2);
$('#finish').onclick=()=>{ $('#error').textContent=''; $('.stepPane[data-pane="3"]').classList.add('hidden'); $('#success').classList.remove('hidden'); $$('.step').forEach(d=>d.classList.add('done')); };
$('#restart').onclick=()=>{ $('#success').classList.add('hidden'); $('#donationForm').reset(); frequency='once'; amount=0; $$('.give').forEach(x=>x.classList.remove('active')); $$('.give')[0].classList.add('active'); $$('.amounts button').forEach(x=>x.classList.remove('active')); show(1); };
updateSummary();

// KTR Photo Gallery: local browser gallery for adding beneficiary stories until a backend/CMS is connected.
const defaultGallery = [
  {id:'sample-1',cause:'Education',title:'Free Education support for Intermediate 1st Year',location:'ZPH School, Akkupalli',date:'15th-August-2026',donor:'KTR donor',support:'For Intermediate Education',caption:'Achieved the Highest Marks in the 2025 Class 10th Batch.',image:'Gallery/2_15082026.jpeg',sample:true},
  {id:'sample-1',cause:'Education',title:'Free Education support for Intermediate 2nd Year',location:'ZPH School, Akkupalli',date:'15th-August-2026',donor:'KTR donor',support:'For Intermediate Education',caption:'Achieved the Highest Marks in the 2024 Class 10th Batch.',image:'Gallery/1_15082026.jpeg',sample:true},
  {id:'sample-1',cause:'Education',title:'Free Education support for Intermediate 2nd Year',location:'ZPH School, Akkupalli',date:'15th-August-2025',donor:'KTR donor',support:'For Intermediate Education',caption:'Achieved the Highest Marks in the 2023 Class 10th Batch.',image:'Gallery/1_15082025.jpeg',sample:true},
  {id:'sample-1',cause:'Education',title:'Free Education support for Intermediate 1st Year',location:'ZPH School, Akkupalli',date:'15th-August-2025',donor:'KTR donor',support:'For Intermediate Education',caption:'Achieved the Highest Marks in the 2024 Class 10th Batch.',image:'Gallery/2_15082025.jpeg',sample:true},
  {id:'sample-1',cause:'Education',title:'Free Education support for Intermediate 1st Year',location:'ZPH School, Akkupalli',date:'15th-August-2024',donor:'KTR donor',support:'For Intermediate Education',caption:'Achieved the Highest Marks in the 2023 Class 10th Batch.',image:'Gallery/1_15082024.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2024',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/0_15082024.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2024',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/00_15082024.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2024',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/000_15082024.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2024',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/0000_15082024.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2024',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/00000_15082024.jpeg',sample:true},
  
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2022',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/1_15082022.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2022',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/2_15082022.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2022',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/3_15082022.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2022',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/4_15082022.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2022',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/5_15082022.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2022',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/6_15082022.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2022',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/7_all_15082022.jpeg',sample:true},
  
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/0_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/1_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/2_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/3_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/4_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/5_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/6_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/7_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/8_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/9_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/10_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/11_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/12_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/13_15082011.jpeg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2011',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/14_15082011.jpeg',sample:true},
  
    {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2010',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/1_15082010.jpg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2010',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/2_15082010.jpg',sample:true},
  {id:'sample-2',cause:'Education',title:'Photo Gallery assistance',location:'ZPH School, Akkupalli',date:'15th-August-2010',donor:'KTR donor',support:'Educational support',caption:'KTR beneficiary photos and approved story.',image:'Gallery/3_15082010.jpg',sample:true},
  {id:'sample-3',cause:'Community Welfare',title:'Community support',location:'Add location',date:'',donor:'KTR donor',support:'Essential supplies',caption:'',image:'logo.png',sample:true}
];
const galleryGrid=document.getElementById('galleryGrid'), galleryEmpty=document.getElementById('galleryEmpty'), gallerySearch=document.getElementById('gallerySearch');
let galleryItems=[];
try { galleryItems=JSON.parse(localStorage.getItem('ktrGallery')||'[]'); } catch(e) { galleryItems=[]; }
if(!galleryItems.length) galleryItems=defaultGallery;
let galleryFilter='all';
function escapeHtml(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function renderGallery(){
  const q=(gallerySearch?.value||'').toLowerCase().trim();
  const items=galleryItems.filter(x=>(galleryFilter==='all'||x.cause===galleryFilter) && (!q||[x.title,x.location,x.donor,x.caption,x.support].join(' ').toLowerCase().includes(q)));
  galleryGrid.innerHTML='';
  galleryEmpty.classList.toggle('hidden',items.length>0);
  items.forEach(x=>{
    const card=document.createElement('article'); card.className='galleryCard'+(x.sample?'':' added');
    card.innerHTML=`<div class="galleryImage" data-lightbox="${escapeHtml(x.id)}"><img src="${x.image}" alt="${escapeHtml(x.title)}"><span class="galleryBadge">${escapeHtml(x.cause)}</span></div><div class="galleryBody"><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.caption||'KTR beneficiary story')}</p><div class="galleryMeta">${x.location?`<span>📍 ${escapeHtml(x.location)}</span>`:''}${x.date?`<span>📅 ${escapeHtml(x.date)}</span>`:''}${x.donor?`<span>♥ ${escapeHtml(x.donor)}</span>`:''}${x.support?`<span>✓ ${escapeHtml(x.support)}</span>`:''}</div>${x.sample?'':'<button class="galleryDelete" data-delete="'+escapeHtml(x.id)+'">Remove this photo</button>'}</div>`;
    galleryGrid.appendChild(card);
  });
}
renderGallery();
gallerySearch?.addEventListener('input',renderGallery);
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');galleryFilter=btn.dataset.filter;renderGallery();}));
const photoModal=document.getElementById('photoModal'), lightboxModal=document.getElementById('lightboxModal');
function openModal(el){el.classList.remove('hidden');document.body.style.overflow='hidden'}
function closeModal(el){el.classList.add('hidden');if(document.querySelectorAll('.modal:not(.hidden)').length===0)document.body.style.overflow=''}
document.getElementById('openAddPhoto')?.addEventListener('click',()=>openModal(photoModal));
document.getElementById('emptyAddPhoto')?.addEventListener('click',()=>openModal(photoModal));
document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',()=>closeModal(x.closest('.modal'))));
document.querySelectorAll('[data-close-lightbox]').forEach(x=>x.addEventListener('click',()=>closeModal(lightboxModal)));
galleryGrid.addEventListener('click',e=>{
  const del=e.target.closest('[data-delete]'); if(del){galleryItems=galleryItems.filter(x=>x.id!==del.dataset.delete);localStorage.setItem('ktrGallery',JSON.stringify(galleryItems));renderGallery();return;}
  const image=e.target.closest('[data-lightbox]'); if(!image)return; const item=galleryItems.find(x=>x.id===image.dataset.lightbox); if(!item)return;
  document.getElementById('lightboxImage').src=item.image;document.getElementById('lightboxImage').alt=item.title;document.getElementById('lightboxCause').textContent=item.cause;document.getElementById('lightboxTitle').textContent=item.title;document.getElementById('lightboxCaption').textContent=item.caption||'';document.getElementById('lightboxMeta').innerHTML=[item.location&&`<span>📍 ${escapeHtml(item.location)}</span>`,item.date&&`<span>📅 ${escapeHtml(item.date)}</span>`,item.donor&&`<span>♥ ${escapeHtml(item.donor)}</span>`,item.support&&`<span>✓ ${escapeHtml(item.support)}</span>`].filter(Boolean).join('');openModal(lightboxModal);
});
document.getElementById('photoForm')?.addEventListener('submit',e=>{
  e.preventDefault(); const file=document.getElementById('photoFile').files[0]; if(!file)return;
  const reader=new FileReader(); reader.onload=()=>{
    const item={id:'photo-'+Date.now(),cause:document.getElementById('photoCause').value,title:document.getElementById('photoBeneficiary').value.trim(),location:document.getElementById('photoLocation').value.trim(),date:document.getElementById('photoDate').value,donor:document.getElementById('photoDonor').value.trim(),support:document.getElementById('photoSupport').value.trim(),caption:document.getElementById('photoCaption').value.trim(),image:reader.result,sample:false};
    galleryItems.push(item);try{localStorage.setItem('ktrGallery',JSON.stringify(galleryItems));}catch(err){alert('The image is too large for this browser demo. Please use a smaller image or connect the gallery to a server/CMS.');return;}
    e.target.reset();closeModal(photoModal);renderGallery();document.getElementById('gallery').scrollIntoView({behavior:'smooth'});
  }; reader.readAsDataURL(file);
});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal:not(.hidden)').forEach(closeModal);}});

// KTR Leadership: local browser list of trustees (Chairman, Vice-Chairman, Members) until a backend/CMS is connected.
const defaultTrustees = [
  {id:'trustee-sample-1',name:'Rambabunaidu Koda',role:'Chairman',bio:'',photo:'',sample:true},
  {id:'trustee-sample-1',name:'Seetharamaraju Koda',role:'Vice-Chairman',bio:'',photo:'',sample:true},
  {id:'trustee-sample-3',name:'Vaikuntarao Patnana',role:'Advisory Member',bio:'',photo:'',sample:true},
  {id:'trustee-sample-3',name:'Dhillirao Koda',role:'Advisory Member',bio:'',photo:'',sample:true},
  {id:'trustee-sample-3',name:'Satya A',role:'Advisory Member',bio:'',photo:'',sample:true},
  {id:'trustee-sample-3',name:'Sagarnaidu Cheegati',role:'Advisory Member',bio:'',photo:'',sample:true},
  {id:'trustee-sample-3',name:'Prem Kumar Singupalli',role:'Advisory Member',bio:'',photo:'',sample:true}
];
const trusteeModal=document.getElementById('trusteeModal');
const trusteeGrids={Chairman:document.getElementById('trusteeGridChairman'),'Vice-Chairman':document.getElementById('trusteeGridViceChairman'),Member:document.getElementById('trusteeGridMember')};
let trusteeItems=[];
try{ trusteeItems=JSON.parse(localStorage.getItem('ktrTrustees')||'[]'); }catch(e){ trusteeItems=[]; }
if(!trusteeItems.length) trusteeItems=defaultTrustees;
function initials(name){ return (name||'?').trim().split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase(); }
function renderTrustees(){
  Object.values(trusteeGrids).forEach(g=>g.innerHTML='');
  trusteeItems.forEach(t=>{
    const grid=trusteeGrids[t.role]||trusteeGrids.Member;
    const card=document.createElement('article'); card.className='trusteeCard'+(t.sample?' sample':'');
    card.innerHTML=`<div class="trusteePhoto">${t.photo?`<img src="${t.photo}" alt="${escapeHtml(t.name)}">`:initials(t.name)}</div><h4>${escapeHtml(t.name)}</h4><span class="trusteeRole">${escapeHtml(t.role)}</span><p>${escapeHtml(t.bio||'')}</p>${t.sample?'':`<button class="trusteeDelete" data-delete-trustee="${t.id}">Remove</button>`}`;
    grid.appendChild(card);
  });
}
document.getElementById('openAddTrustee')?.addEventListener('click',()=>openModal(trusteeModal));
document.getElementById('trusteeForm')?.addEventListener('submit',e=>{
  e.preventDefault(); const file=document.getElementById('trusteePhoto').files[0]; if(!file)return;
  const reader=new FileReader(); reader.onload=()=>{
    const item={id:'trustee-'+Date.now(),name:document.getElementById('trusteeName').value.trim(),role:document.getElementById('trusteeRole').value,bio:document.getElementById('trusteeBio').value.trim(),photo:reader.result,sample:false};
    trusteeItems.push(item);
    try{ localStorage.setItem('ktrTrustees',JSON.stringify(trusteeItems)); }catch(err){ alert('The image is too large for this browser demo. Please use a smaller photo.'); return; }
    e.target.reset(); closeModal(trusteeModal); renderTrustees(); document.getElementById('leadership').scrollIntoView({behavior:'smooth'});
  }; reader.readAsDataURL(file);
});
Object.values(trusteeGrids).forEach(grid=>grid.addEventListener('click',e=>{
  const del=e.target.closest('[data-delete-trustee]'); if(!del)return;
  trusteeItems=trusteeItems.filter(x=>x.id!==del.dataset.deleteTrustee);
  localStorage.setItem('ktrTrustees',JSON.stringify(trusteeItems)); renderTrustees();
}));
renderTrustees();

// KTR Donations List: local browser public log of donation records until a backend/payment system is connected.
const defaultDonations = [
  {id:'donation-sample-1',donor:'FirstDonar',amount:500,cause:'Education',date:'',note:'Our first donor, with a generous heart, contributed ₹500 to support the KTR Charitable Trust’s mission.',sample:true},
  {id:'donation-sample-2',donor:'Vasu Singupalli',amount:10000,cause:'Education',date:'',note:'Vasu Anna, with a generous heart, celebrated his son’s birthday by making a meaningful contribution to the KTR Charitable Trust.',sample:true}
];
const donationModal=document.getElementById('donationModal');
const donationsListEl=document.getElementById('donationsList'), donationsEmpty=document.getElementById('donationsEmpty');
let donationItems=[];
try{ donationItems=JSON.parse(localStorage.getItem('ktrDonations')||'[]'); }catch(e){ donationItems=[]; }
if(!donationItems.length) donationItems=defaultDonations;
function formatINR(n){ return '₹'+Number(n||0).toLocaleString('en-IN'); }
function formatDonationDate(iso){ if(!iso)return 'Date not on record'; const d=new Date(iso+'T00:00:00'); if(isNaN(d))return 'Date not on record'; return d.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}); }
function renderDonations(){
  const sorted=[...donationItems].sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  donationsListEl.innerHTML='';
  donationsEmpty.classList.toggle('hidden',sorted.length>0);
  document.getElementById('donationCount').textContent=sorted.length;
  document.getElementById('donationTotal').textContent=formatINR(sorted.reduce((sum,d)=>sum+Number(d.amount||0),0));
  sorted.forEach(d=>{
    const name=d.donor||'Anonymous';
    const row=document.createElement('div'); row.className='donationRow';
    row.innerHTML=`<div class="donorInitial">${initials(name)}</div><div><div class="donorName">${escapeHtml(name)}</div><div class="donationMeta">${formatDonationDate(d.date)}${d.note?' · '+escapeHtml(d.note):''}</div></div><span class="donationCauseTag">${escapeHtml(d.cause)}</span><span class="donationAmount">${formatINR(d.amount)}</span>${d.sample?'':`<button class="donationDelete" data-delete-donation="${d.id}">Remove</button>`}`;
    donationsListEl.appendChild(row);
  });
}
document.getElementById('openAddDonation')?.addEventListener('click',()=>openModal(donationModal));
document.getElementById('emptyAddDonation')?.addEventListener('click',()=>openModal(donationModal));
document.getElementById('donationRecordForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const amt=Number(document.getElementById('donationAmount').value||0);
  if(amt<1){ return; }
  const item={id:'donation-'+Date.now(),donor:document.getElementById('donationDonor').value.trim(),amount:amt,cause:document.getElementById('donationCause').value,date:document.getElementById('donationDate').value,note:document.getElementById('donationNote').value.trim(),sample:false};
  donationItems.push(item);
  localStorage.setItem('ktrDonations',JSON.stringify(donationItems));
  e.target.reset(); closeModal(donationModal); renderDonations(); document.getElementById('donationslist').scrollIntoView({behavior:'smooth'});
});
donationsListEl.addEventListener('click',e=>{
  const del=e.target.closest('[data-delete-donation]'); if(!del)return;
  donationItems=donationItems.filter(x=>x.id!==del.dataset.deleteDonation);
  localStorage.setItem('ktrDonations',JSON.stringify(donationItems)); renderDonations();
});
renderDonations();

// KTR Needy People List: local browser list of people the trust supports, filterable by status (All / Needs Help / Donated).
const defaultNeedy = [
  {id:'needy-sample-1',name:'Sample: Add a real name',category:'Education',location:'Sample village',status:'Needs Help',story:'Replace this sample with a real person KTR is supporting — their name, photo and story.',photo:'',amount:0,sample:true},
  {id:'needy-sample-3',name:'Education support for the Intermediate 2nd year - 2026',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:10000,sample:true},
  {id:'needy-sample-3',name:'Education support for the Intermediate 1st year - 2026',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:10000,sample:true},
  {id:'needy-sample-3',name:'10 year Boy(Cancer patient) for Medical support - 2026',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:5000,sample:true},
  {id:'needy-sample-3',name:'Kishore  for Medical support - 2026',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:5000,sample:true},
  {id:'needy-sample-3',name:'DhilliRao  for Medical support - 2026',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:10000,sample:true},
  {id:'needy-sample-3',name:'Deepu Hyderabad for Medical support - 2025',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:5000,sample:true},
  {id:'needy-sample-3',name:'Education support for the Intermediate 2nd year - 2025',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:10000,sample:true},
  {id:'needy-sample-3',name:'Education support for the Intermediate 1st year - 2025',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:10000,sample:true},
  {id:'needy-sample-3',name:'Education support for the Intermediate 1st year - 2024',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:10000,sample:true},
  {id:'needy-sample-3',name:'Panda Ravi  for Medical support - 2023',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:5000,sample:true},
  {id:'needy-sample-3',name:'Chokkara Bharathi  for Medical support - 2024',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:10000,sample:true},
  {id:'needy-sample-3',name:'Shishu Mangal Orphanage - 2022',category:'Community Welfare',location:'Nallagandla, Hyderabad',status:'Donated',story:'To Shishu Mangal Orphanage Donated Amount.',photo:'',amount:2000,sample:true},
  {id:'needy-sample-3',name:'Bhagavan Sri Satya Baba for Annadanam - 2021',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:5000,sample:true},
  {id:'needy-sample-3',name:'K Gopal for Covid time support - 2020',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:10000,sample:true},
  {id:'needy-sample-3',name:'Jogi Dhanalaxmi Daughter for Medical support - 2019',category:'Community Welfare',location:'Akkupalli',status:'Donated',story:'For medical support Donated Amount.',photo:'',amount:10000,sample:true}
];
const needyModal=document.getElementById('needyModal');
const needyGrid=document.getElementById('needyGrid'), needyEmpty=document.getElementById('needyEmpty'), needyFilters=document.getElementById('needyFilters'), needySearch=document.getElementById('needySearch');
let needyItems=[], needyActiveFilter='all';
try{ needyItems=JSON.parse(localStorage.getItem('ktrNeedyPeople')||'[]'); }catch(e){ needyItems=[]; }
if(!needyItems.length) needyItems=defaultNeedy;

function renderNeedyList(){
  const donatedOnly=needyItems.filter(p=>p.status==='Donated');
  document.getElementById('needyDonatedCount').textContent=donatedOnly.length;
  document.getElementById('needyDonatedTotal').textContent='₹'+donatedOnly.reduce((sum,p)=>sum+Number(p.amount||0),0).toLocaleString('en-IN');

  const term=(needySearch?.value||'').trim().toLowerCase();
  const filtered=needyItems.filter(p=>{
    const matchesStatus=needyActiveFilter==='all'||p.status===needyActiveFilter;
    const matchesTerm=!term||[p.name,p.location,p.category].some(v=>(v||'').toLowerCase().includes(term));
    return matchesStatus&&matchesTerm;
  });
  needyGrid.innerHTML='';
  needyEmpty.classList.toggle('hidden',filtered.length>0);
  filtered.forEach(p=>{
    const row=document.createElement('div'); row.className='donationRow'+(p.sample?' ':'');
    const statusClass=p.status==='Donated'?'donated':'needs';
    const metaBits=[p.location||'Location not on record',p.story||''].filter(Boolean);
    const amountText=(p.status==='Donated'&&Number(p.amount||0)>0)?'₹'+Number(p.amount).toLocaleString('en-IN'):'';
    row.innerHTML=`<div class="donorInitial">${p.photo?`<img src="${p.photo}" alt="${escapeHtml(p.name)}">`:initials(p.name)}</div><div><div class="donorName">${escapeHtml(p.name)}</div><div class="donationMeta">${escapeHtml(metaBits.join(' · '))}</div></div><span class="donationCauseTag">${escapeHtml(p.category)}</span><span class="needyStatusTag ${statusClass}">${escapeHtml(p.status)}</span><span class="donationAmount">${amountText}</span>${p.sample?'':`<button class="donationDelete" data-delete-needy="${p.id}">Remove</button>`}`;
    needyGrid.appendChild(row);
  });
}
needyFilters?.addEventListener('click',e=>{
  const btn=e.target.closest('.filter'); if(!btn)return;
  needyFilters.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); needyActiveFilter=btn.dataset.filter; renderNeedyList();
});
needySearch?.addEventListener('input',renderNeedyList);
document.getElementById('openAddNeedy')?.addEventListener('click',()=>openModal(needyModal));
document.getElementById('emptyAddNeedy')?.addEventListener('click',()=>openModal(needyModal));
document.getElementById('needyForm')?.addEventListener('submit',e=>{
  e.preventDefault(); const file=document.getElementById('needyPhoto').files[0]; if(!file)return;
  const reader=new FileReader(); reader.onload=()=>{
    const item={id:'needy-'+Date.now(),name:document.getElementById('needyName').value.trim(),category:document.getElementById('needyCategory').value,location:document.getElementById('needyLocation').value.trim(),status:document.getElementById('needyStatus').value,story:document.getElementById('needyStory').value.trim(),amount:Number(document.getElementById('needyAmount').value||0),photo:reader.result,sample:false};
    needyItems.push(item);
    try{ localStorage.setItem('ktrNeedyPeople',JSON.stringify(needyItems)); }catch(err){ alert('The image is too large for this browser demo. Please use a smaller photo.'); return; }
    e.target.reset(); closeModal(needyModal); renderNeedyList(); document.getElementById('needylist').scrollIntoView({behavior:'smooth'});
  }; reader.readAsDataURL(file);
});
needyGrid.addEventListener('click',e=>{
  const del=e.target.closest('[data-delete-needy]'); if(!del)return;
  needyItems=needyItems.filter(x=>x.id!==del.dataset.deleteNeedy);
  localStorage.setItem('ktrNeedyPeople',JSON.stringify(needyItems)); renderNeedyList();
});
renderNeedyList();
