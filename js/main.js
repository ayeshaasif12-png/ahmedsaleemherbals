(function(){
  'use strict';
  const WA_NUMBER='923054160828';
  const $=(s,c=document)=>c.querySelector(s);
  const $$=(s,c=document)=>Array.from(c.querySelectorAll(s));
  const waLink=(message)=>`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  const navbar=$('#navbar');
  const menuBtn=$('#menuBtn');
  const mobileMenu=$('#mobileMenu');
  const onScroll=()=>navbar.classList.toggle('scrolled',window.scrollY>12);
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  menuBtn.addEventListener('click',()=>{
    const open=mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',String(open));
    mobileMenu.setAttribute('aria-hidden',String(!open));
  });
  $$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');mobileMenu.setAttribute('aria-hidden','true')}));

  const sections=$$('main section[id]');
  const navAnchors=$$('.nav-links a');
  const setActive=()=>{
    let id='home';
    sections.forEach(s=>{if(scrollY>=s.offsetTop-150) id=s.id});
    navAnchors.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${id}`));
  };
  addEventListener('scroll',setActive,{passive:true});setActive();

  const slides=$$('.hero-slide');
  const dotsWrap=$('#heroDots');
  let slide=0,timer;
  slides.forEach((_,i)=>{const b=document.createElement('button');b.className='hero-dot'+(i===0?' active':'');b.setAttribute('aria-label',`Go to slide ${i+1}`);b.addEventListener('click',()=>go(i));dotsWrap.appendChild(b)});
  const dots=()=>$$('.hero-dot',dotsWrap);
  function go(i){slide=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===slide));dots().forEach((d,n)=>d.classList.toggle('active',n===slide));restart()}
  function restart(){clearInterval(timer);timer=setInterval(()=>go(slide+1),6500)}
  $('#prevSlide').addEventListener('click',()=>go(slide-1));$('#nextSlide').addEventListener('click',()=>go(slide+1));restart();

  const filterBar=$('#filterBar'),grid=$('#productGrid'),viewAllBtn=$('#viewAllBtn'),viewAllLabel=$('#viewAllLabel'),search=$('#productSearch');
  let activeCategory='all',showAll=true,term='';
  const categoryLabel=id=>CATEGORIES.find(c=>c.id===id)?.label||id;
  function buildFilters(){
    const tabs=[{id:'all',label:'All Products'},...CATEGORIES];
    filterBar.innerHTML=tabs.map(t=>`<button class="filter-btn${t.id===activeCategory?' active':''}" data-cat="${t.id}">${t.label}</button>`).join('');
    $$('.filter-btn',filterBar).forEach(btn=>btn.addEventListener('click',()=>{activeCategory=btn.dataset.cat;buildFilters();renderProducts()}));
  }
  function badgeFor(p,i){if(p.featured)return 'Featured';if(i%11===0)return 'Popular';if(i%13===0)return 'Best Seller';return ''}
  function productCard(p,i){const badge=badgeFor(p,i);const msg=`Assalamualaikum, I would like to ask about ${p.en} (${p.name}). Please share price and availability.`;const media=p.image?`<div class="product-image"><img src="${p.image}" alt="${p.en} - ${p.name}" loading="lazy"></div>`:`<div class="product-image product-image-missing" role="img" aria-label="Product image not supplied"><span>Product image not supplied</span></div>`;return `<article class="product-card reveal in">${badge?`<span class="product-badge">${badge}</span>`:''}${media}<div class="product-body"><div class="product-meta"><div><div class="product-name-ur">${p.name}</div><div class="product-name-en">${p.en}</div></div><span class="cat-chip">${categoryLabel(p.category)}</span></div><a class="product-ask" href="${waLink(msg)}" target="_blank" rel="noopener">Ask about this product</a></div></article>`}
  function renderProducts(){
    let list=PRODUCTS.filter(p=>(activeCategory==='all'||p.category===activeCategory)&&(`${p.en} ${p.name}`.toLowerCase().includes(term)));
    const total=list.length;
    if(!showAll&&!term) list=list.filter(p=>p.featured).length?list.filter(p=>p.featured):list.slice(0,8);
    grid.innerHTML=list.length?list.map(productCard).join(''):`<div class="empty-state">No products matched your search. Try another product name or category.</div>`;
    viewAllBtn.style.display=term||total<=list.length?'none':'inline-flex';
    viewAllLabel.textContent=showAll?'Show Featured Only':'View All Products';
  }
  search.addEventListener('input',e=>{term=e.target.value.trim().toLowerCase();renderProducts()});
  viewAllBtn.addEventListener('click',()=>{showAll=!showAll;renderProducts();if(!showAll)$('#products').scrollIntoView({behavior:'smooth'})});
  buildFilters();renderProducts();

  const revealEls=$$('.reveal');
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver'in window)){revealEls.forEach(el=>el.classList.add('in'))}else{const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px -30px'});revealEls.forEach(el=>io.observe(el))}
  $('#year').textContent=new Date().getFullYear();
})();
