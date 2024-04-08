import{S as p,i}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(o){const r=document.querySelector("ul.gallery"),s=o.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");r.insertAdjacentHTML("beforeend",s),new p(".gallery a",{captionsData:"alt"}).refresh()}const b=document.querySelector(".gallery-list");let l=1;const w=15,h=document.querySelector("#searchInput"),L=document.querySelector("form"),n=document.querySelector("#addImg"),g=document.querySelector(".preloader"),m=()=>{g.style.display="flex"},y=()=>{g.style.display="none"},d=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};L.addEventListener("submit",async o=>{o.preventDefault(),l=1;const r=h.value.trim();if(!r.length){i.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),b.innerHTML="";return}m();try{const s=await fetchImg(r,l);if(!s.hits.length){i.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.style.display="none";return}w<=s.hits.length?n.style.display="block":i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u(s.hits),f()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{y(),d()}});n.addEventListener("click",async()=>{m();try{l++;const o=await fetchImg(h.value.trim(),l);if(!o.hits.length){i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),n.style.display="none";return}u(o.hits,!0),f()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{y(),d()}});window.onload=d;async function f(){const r=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
