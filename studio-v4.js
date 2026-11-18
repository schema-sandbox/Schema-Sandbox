(()=>{
 const root=document.documentElement,language=document.querySelector('#language'),menu=document.querySelector('#menu'),nav=document.querySelector('#navlinks');
 const titles={home:['Schema Sandbox｜原创思想与人物世界','Schema Sandbox | Original Ideas & Character Worlds'],beauty:['美，不可言｜MR.TENG · Schema Sandbox','Beauty, Beyond Words | MR.TENG · Schema Sandbox'],three:['3T STUDIO｜三个女人，六段人生','3T STUDIO | Three Women. Six Lives.']};
 function setLanguage(value){root.lang=value;const english=value==='en';const title=titles[document.body.dataset.page]||titles.home;document.title=title[english?1:0];language.setAttribute('aria-label',english?'切换为中文':'Switch to English');}
 try{const saved=localStorage.getItem('schema-studio-language');setLanguage(saved==='en'||saved==='zh-CN'?saved:(navigator.language.startsWith('zh')?'zh-CN':'en'));}catch{}
 language.addEventListener('click',()=>{const next=root.lang==='en'?'zh-CN':'en';setLanguage(next);try{localStorage.setItem('schema-studio-language',next)}catch{}});
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
 nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}));
 if(document.body.dataset.page==='home'){
  const research=new Set(['methodology','showcase','specifications','license','geo']);
  const local={'company-products':'tools','course-production':'services','course-samples':'courses','business':'stories','learning':'courses','collaboration':'services'};
  const route=()=>{const hash=location.hash.slice(1);if(research.has(hash))location.replace('research.html#'+hash);else if(local[hash])location.replace('#'+local[hash]);};
  route();window.addEventListener('hashchange',route);
 }
})();
