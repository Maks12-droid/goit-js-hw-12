import{S as w,i as s}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function u(t){const r=document.querySelector("ul.gallery");r.innerHTML="";const i=t.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");r.insertAdjacentHTML("beforeend",i),new w(".gallery a",{captionsData:"alt"}).refresh()}function h(t){const r="https://pixabay.com/api/",i=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${r}?${i}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const L=document.querySelector("ul.gallery");let l,a;const b=15,S=document.querySelector("input"),R=document.querySelector("form"),d=document.querySelector("#addImg"),f=document.querySelector(".preloader"),m=()=>{f.style.display="flex"},g=()=>{f.style.display="none"},y=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};R.addEventListener("submit",async t=>{if(t.preventDefault(),l={},a=S.value.trim(),!a.length){s.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),L.innerHTML="";return}m();try{if(l=await h(a),!l.hits.length){s.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.style.display="none";return}b<=l.hits.length?d.style.display="flex":s.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u(l.hits),p()}catch{s.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{g(),y()}});d.addEventListener("click",async()=>{m();try{const t=await h(a);if(t.hits.length===0){s.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}u(t.hits),p()}catch{s.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{g()}});window.onload=y;async function p(){const r=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
