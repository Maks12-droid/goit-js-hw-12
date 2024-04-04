import{S as b,i}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function h(o){const r=document.querySelector("ul.gallery");r.innerHTML="";const n=o.map(e=>`<li class="img-blok">
        <a href="${e.largeImageURL}">     
    <img  src="${e.webformatURL}"
    data-source="${e.largeImageURL}"
    alt="${e.tags}">
   
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${e.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${e.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${e.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${e.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");r.insertAdjacentHTML("beforeend",n),new b(".gallery a",{captionsData:"alt"}).refresh()}function y(o){const r="https://pixabay.com/api/",n=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),l=`${r}?${n}`;return fetch(l).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const w=document.querySelector("ul.gallery");let s,u;const m=15,S=document.querySelector("input"),v=document.querySelector("form"),a=document.querySelector("#addImg"),f=document.querySelector(".preloader"),g=()=>{f.style.display="flex"},p=()=>{f.style.display="none"},d=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};v.addEventListener("submit",async o=>{if(o.preventDefault(),s={},u=S.value.trim(),!u.length){i.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),w.innerHTML="";return}g();try{if(s=await y(),!s.length){i.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.style.display="none";return}m<=s.length?a.style.display="flex":i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),h(s),L()}catch{i.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{p(),d()}});a.addEventListener("click",async o=>{o.preventDefault(),g();try{if(s=await y(),m>s.length){i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.style.display="none";return}h(s),L()}catch{i.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}finally{p(),d()}});window.onload=d;async function L(){const r=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
