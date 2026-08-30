
(function(){
 const fallbackTheme={backgrounds:{main:'#F7F2EB',card:'#FFFAF2',accent:'#3B3027'},texts:{main:'#3B3027',secondary:'#3B3027',contrast:'#FFFFFF'},logo:'#3B3027',border:'#D9CFBF'};
 const applyTheme=theme=>{
   const source=theme&&typeof theme==='object'?theme:fallbackTheme;
   const value=(candidate,fallback)=>/^#[0-9a-f]{6}$/i.test(String(candidate||''))?candidate:fallback;
   const colors={'--background-main':value(source.backgrounds?.main,fallbackTheme.backgrounds.main),'--background-card':value(source.backgrounds?.card,fallbackTheme.backgrounds.card),'--background-accent':value(source.backgrounds?.accent,fallbackTheme.backgrounds.accent),'--text-main':value(source.texts?.main,fallbackTheme.texts.main),'--text-secondary':value(source.texts?.secondary,fallbackTheme.texts.secondary),'--text-contrast':value(source.texts?.contrast,fallbackTheme.texts.contrast),'--logo-color':value(source.logo,fallbackTheme.logo),'--border-color':value(source.border,fallbackTheme.border)};
   Object.entries(colors).forEach(([name,color])=>document.documentElement.style.setProperty(name,color));
 };
 fetch(`config/theme.json?v=${Date.now()}`,{cache:'no-store'}).then(response=>response.ok?response.json():fallbackTheme).then(applyTheme).catch(()=>applyTheme(fallbackTheme));
 const buttons=document.querySelectorAll('.legal-language-switch button');
 const blocks=document.querySelectorAll('.legal-content');
 function setLang(lang){
   document.documentElement.lang=lang;
   blocks.forEach(b=>b.hidden=b.dataset.lang!==lang);
   buttons.forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
   localStorage.setItem('fsl_legal_lang',lang);
 }
 buttons.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
 setLang(localStorage.getItem('fsl_legal_lang')||localStorage.getItem('fsl_lang')||'de');
})();
