
(function(){
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
