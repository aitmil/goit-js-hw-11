import{S as u,i as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function h(o){const r="https://pixabay.com/api/",i="42982989-b171e2f7a41a03eb4f5866708",s=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function f(o){return o.map(({largeImageURL:r,webformatURL:i,tags:s,likes:e,views:t,comments:a,downloads:c,...d})=>` <li class="gallery-item">
      <div class="lightbox">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${i}" alt="${s}"
        /></a>
      </div>
      <ul class="gallery-data-list">
        <li class="gallery-data-item">
          <h2>Likes</h2>
          <p>${e}</p>
        </li>
        <li class="gallery-data-item">
          <h2>Views</h2>
          <p>${t}</p>
        </li>
        <li class="gallery-data-item">
          <h2>Comment</h2>
          <p>${a}</p>
        </li>
        <li class="gallery-data-item">
          <h2>Downloads</h2>
          <p>${c}</p>
        </li>
      </ul>
    </li>
`).join("")}const p=document.querySelector(".search-form"),l=document.querySelector(".image-list");let n=new u(".lightbox a",{captionsData:"alt"});n.on("show.simplelightbox",function(){});p.addEventListener("submit",g);function g(o){o.preventDefault();const r=o.target.elements.search.value.trim();l.innerHTML='<div class="loader"></div>',r!==""&&h(r).then(i=>{const s=f(i.hits);l.innerHTML=s,n.refresh(),i.hits.length===0&&m.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(i=>{console.log(i)}),o.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
