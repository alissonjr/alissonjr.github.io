(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();function k(e="/"){return`
<header class="nav" id="nav">
  <div class="container nav-row">
    <a href="${e}index.html" class="brand">Alisson<em>.</em></a>

    <nav class="nav-links" id="navLinks" aria-label="Menu principal">
      <a href="${e}index.html#publico">Para quem</a>
      <a href="${e}index.html#processo">Como funciona</a>
      <a href="${e}index.html#precos">Planos</a>
      <a href="${e}index.html#faq">FAQ</a>
      <a href="${e}index.html#probono" class="nav-probono">Pró-Bono</a>
    </nav>

    <div class="nav-actions">
      <a href="#" class="btn-nav btn-nav-dark wa-trigger">Sessão gratuita</a>
    </div>

    <button class="hamburger" id="navToggle" aria-label="Abrir menu" aria-expanded="false">
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>
</header>

<!-- Mobile fullscreen menu — outside <header> so position:fixed covers full viewport on iOS/Android -->
<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <div class="mobile-menu-header">
    <a href="${e}index.html" class="brand">Alisson<em>.</em></a>
    <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Fechar menu">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
  <nav class="mobile-menu-links">
    <a href="${e}index.html#publico">Para quem</a>
    <a href="${e}index.html#processo">Como funciona</a>
    <a href="${e}index.html#precos">Planos</a>
    <a href="${e}index.html#faq">FAQ</a>
    <a href="${e}index.html#probono" class="nav-probono">Pró-Bono</a>
  </nav>
  <div class="mobile-menu-footer">
    <a href="#" class="btn-nav btn-nav-dark wa-trigger">Sessão gratuita</a>
  </div>
</div>

<div class="nav-overlay" id="navOverlay"></div>
`}function M(){const e=document.getElementById("nav"),r=document.getElementById("navToggle"),n=document.getElementById("mobileMenu"),s=document.getElementById("mobileMenuClose"),o=document.getElementById("navOverlay");window.addEventListener("scroll",()=>{e.classList.toggle("scrolled",window.scrollY>50)},{passive:!0});function t(){n.classList.add("open"),n.setAttribute("aria-hidden","false"),o.classList.add("open"),document.body.style.overflow="hidden",r.setAttribute("aria-expanded","true")}function l(){n.classList.remove("open"),n.setAttribute("aria-hidden","true"),o.classList.remove("open"),document.body.style.overflow="",r.setAttribute("aria-expanded","false")}r.addEventListener("click",()=>{n.classList.contains("open")?l():t()}),s&&s.addEventListener("click",l),o.addEventListener("click",l),n&&n.querySelectorAll("a").forEach(m=>m.addEventListener("click",l))}function E(e="/"){return`
<footer class="footer">
  <div class="container footer-inner">

    <div class="footer-brand">
      <a href="${e}index.html" class="brand brand-inv">Alisson<em>.</em></a>
      <p>Mentoria e consultoria de carreira<br>em tecnologia e software.</p>
    </div>

    <div class="footer-col">
      <h5>Para quem</h5>
      <a href="${e}estudante.html">Estudantes</a>
      <a href="${e}junior.html">Profissionais Juniores</a>
      <a href="${e}lideranca.html">Rumo à Liderança</a>
      <a href="${e}transicao.html">Transição para Tech</a>
    </div>

    <div class="footer-col">
      <h5>Links</h5>
      <a href="${e}index.html#processo">Como funciona</a>
      <a href="${e}index.html#precos">Planos</a>
      <a href="${e}index.html#faq">FAQ</a>
      <a href="${e}index.html#contato">Contato</a>
    </div>

    <div class="footer-col">
      <h5>Contato</h5>
      <a href="#" class="wa-trigger"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
      <a href="mailto:alisson.coj@hotmail.com"><i class="fa-solid fa-envelope"></i> E-mail</a>
      <a href="https://www.linkedin.com/in/alissonjunior" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
    </div>

  </div>
  <div class="container footer-bottom">
    <p>© 2026 Alisson Júnior · Todos os direitos reservados</p>
    <div class="footer-credit">
      <span>Feito por:</span>
      <a href="https://landinglab.com.br" target="_blank" rel="noopener noreferrer" class="footer-credit-link">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"/></svg>
        <span>Landing Lab</span>
      </a>
    </div>
  </div>
</footer>
`}function A(){return`
<!-- WA CONTACT MODAL -->
<div class="wa-modal-overlay" id="waModalOverlay" aria-hidden="true">
  <div class="wa-modal" role="dialog" aria-modal="true" aria-labelledby="waModalTitle">
    <button class="wa-modal-close" id="waModalClose" aria-label="Fechar">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="wa-modal-icon"><i class="fa-brands fa-whatsapp"></i></div>
    <h3 id="waModalTitle">Antes de começar...</h3>
    <p class="wa-modal-sub">Só 2 dados rápidos para eu já entender o seu momento.</p>
    <form id="waModalForm" novalidate>
      <div class="wa-field">
        <label for="waName">Seu nome</label>
        <input type="text" id="waName" name="name" placeholder="ex: Maria Silva" autocomplete="given-name" required>
      </div>
      <div class="wa-field">
        <label>Momento de carreira</label>
        <div class="wa-stages">
          <label class="wa-stage">
            <input type="radio" name="stage" value="estudante">
            <span><i class="fa-solid fa-graduation-cap"></i> Estudante</span>
          </label>
          <label class="wa-stage">
            <input type="radio" name="stage" value="junior">
            <span><i class="fa-solid fa-seedling"></i> Dev Júnior</span>
          </label>
          <label class="wa-stage">
            <input type="radio" name="stage" value="lideranca">
            <span><i class="fa-solid fa-people-group"></i> Rumo à Liderança</span>
          </label>
          <label class="wa-stage">
            <input type="radio" name="stage" value="transicao">
            <span><i class="fa-solid fa-right-left"></i> Transição para Tech</span>
          </label>
        </div>
      </div>
      <button type="submit" class="wa-modal-btn">
        <i class="fa-brands fa-whatsapp"></i>
        Continuar no WhatsApp
      </button>
    </form>
  </div>
</div>

<!-- PRÓ-BONO MODAL -->
<div class="wa-modal-overlay" id="probonoModalOverlay" aria-hidden="true">
  <div class="wa-modal" role="dialog" aria-modal="true" aria-labelledby="probonoModalTitle">
    <button class="wa-modal-close" id="probonoModalClose" aria-label="Fechar">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="wa-modal-icon probono-modal-icon"><i class="fa-solid fa-hand-holding-heart"></i></div>
    <h3 id="probonoModalTitle">Candidatura pró-bono</h3>
    <p class="wa-modal-sub">Conte um pouco sobre você e por que esta vaga faz sentido no seu momento atual.</p>
    <form id="probonoModalForm" novalidate>
      <div class="wa-field">
        <label for="probonoName">Seu nome</label>
        <input type="text" id="probonoName" name="name" placeholder="ex: Carlos Lima" autocomplete="given-name" required>
      </div>
      <div class="wa-field">
        <label>Momento de carreira</label>
        <div class="wa-stages" id="probonoStages">
          <label class="wa-stage">
            <input type="radio" name="probonoStage" value="estudante">
            <span><i class="fa-solid fa-graduation-cap"></i> Estudante</span>
          </label>
          <label class="wa-stage">
            <input type="radio" name="probonoStage" value="junior">
            <span><i class="fa-solid fa-seedling"></i> Dev Júnior</span>
          </label>
          <label class="wa-stage">
            <input type="radio" name="probonoStage" value="lideranca">
            <span><i class="fa-solid fa-people-group"></i> Rumo à Liderança</span>
          </label>
          <label class="wa-stage">
            <input type="radio" name="probonoStage" value="transicao">
            <span><i class="fa-solid fa-right-left"></i> Transição para Tech</span>
          </label>
        </div>
      </div>
      <div class="wa-field">
        <label for="probonoMotivation">Por que você se candidata?</label>
        <textarea id="probonoMotivation" name="motivation" rows="3" placeholder="Conte brevemente seu momento atual e por que a mentoria gratuita seria importante para você agora..." required></textarea>
      </div>
      <button type="submit" class="wa-modal-btn">
        <i class="fa-brands fa-whatsapp"></i>
        Enviar candidatura
      </button>
    </form>
  </div>
</div>

<!-- FLOATING WA -->
<a href="#" class="wa-float wa-trigger" aria-label="Falar no WhatsApp">
  <i class="fa-brands fa-whatsapp"></i>
</a>
`}function x(){return`
<!-- COOKIE BANNER -->
<div class="cookie-banner" id="cookieBanner" role="region" aria-label="Aviso de cookies" hidden>
  <div class="cookie-inner">
    <div class="cookie-text">
      <i class="fa-solid fa-cookie-bite cookie-icon"></i>
      <p>Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa
      <a href="/privacidade.html" class="cookie-link">Política de Privacidade</a>.</p>
    </div>
    <div class="cookie-actions">
      <button class="cookie-btn cookie-btn-accept" id="cookieAccept">Aceitar</button>
      <button class="cookie-btn cookie-btn-dismiss" id="cookieDismiss">Fechar</button>
    </div>
  </div>
</div>
`}function $(){const e="5527996240994",r={estudante:"estudante",junior:"desenvolvedor júnior",lideranca:"dev sênior em busca de liderança",transicao:"profissional em transição para tech"},n=document.getElementById("waModalOverlay"),s=document.getElementById("waModalForm"),o=document.getElementById("waModalClose"),t=document.getElementById("waName");function l(a){if(a){const i=s.querySelector(`[name="stage"][value="${a}"]`);i&&(i.checked=!0)}n.classList.add("open"),n.removeAttribute("aria-hidden"),document.body.style.overflow="hidden",setTimeout(()=>t.focus(),150)}function m(){var a;n.classList.remove("open"),n.setAttribute("aria-hidden","true"),document.body.style.overflow="",s.reset(),t.classList.remove("error"),(a=s.querySelector(".wa-stages"))==null||a.classList.remove("error")}document.querySelectorAll(".wa-trigger").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault(),l(a.dataset.stage||null)})}),o.addEventListener("click",m),n.addEventListener("click",a=>{a.target===n&&m()}),s.addEventListener("submit",a=>{var f;a.preventDefault();const i=t.value.trim(),d=(f=s.querySelector('[name="stage"]:checked'))==null?void 0:f.value;if(t.classList.toggle("error",!i),s.querySelector(".wa-stages").classList.toggle("error",!d),!i||!d)return;const u=r[d]||d,h=`Olá! Vim pelo site. Meu nome é ${i} e sou ${u}. Gostaria de saber mais sobre a mentoria de carreira.`;window.open(`https://wa.me/${e}?text=${encodeURIComponent(h)}`,"_blank","noopener,noreferrer"),m()});const c=document.getElementById("probonoModalOverlay"),b=document.getElementById("probonoModalForm"),y=document.getElementById("probonoModalClose"),p=document.getElementById("probonoName"),g=document.getElementById("probonoMotivation");function L(){c.classList.add("open"),c.removeAttribute("aria-hidden"),document.body.style.overflow="hidden",setTimeout(()=>p.focus(),150)}function v(){var a;c.classList.remove("open"),c.setAttribute("aria-hidden","true"),document.body.style.overflow="",b.reset(),p.classList.remove("error"),(a=document.getElementById("probonoStages"))==null||a.classList.remove("error"),g.classList.remove("error")}document.querySelectorAll(".probono-trigger").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault(),L()})}),y.addEventListener("click",v),c.addEventListener("click",a=>{a.target===c&&v()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(n.classList.contains("open")&&m(),c.classList.contains("open")&&v())}),b.addEventListener("submit",a=>{var w;a.preventDefault();const i=p.value.trim(),d=(w=b.querySelector('[name="probonoStage"]:checked'))==null?void 0:w.value,u=g.value.trim();if(p.classList.toggle("error",!i),document.getElementById("probonoStages").classList.toggle("error",!d),g.classList.toggle("error",!u),!i||!d||!u)return;const h=r[d]||d,f=`Olá! Me candidato à vaga de mentoria pró-bono deste mês.

Nome: ${i}
Momento: ${h}

Por que me candidato:
${u}`;window.open(`https://wa.me/${e}?text=${encodeURIComponent(f)}`,"_blank","noopener,noreferrer"),v()})}function B(){const e=document.getElementById("cookieBanner"),r=document.getElementById("cookieAccept"),n=document.getElementById("cookieDismiss");if(!e)return;localStorage.getItem("cookie_consent")||setTimeout(()=>{e.hidden=!1,requestAnimationFrame(()=>e.classList.add("cookie-visible"))},1200);function s(){e.classList.remove("cookie-visible"),e.addEventListener("transitionend",()=>{e.hidden=!0},{once:!0})}r.addEventListener("click",()=>{localStorage.setItem("cookie_consent","accepted"),s()}),n.addEventListener("click",s)}export{$ as a,B as b,x as c,E as f,M as i,A as m,k as n};
