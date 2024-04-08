import{S as p,a as y}from"./assets/vendor-16453b54.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(s){const r=document.querySelector("ul.gallery"),i=s.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");r.insertAdjacentHTML("beforeend",i),new p(".gallery a",{captionsData:"alt"}).refresh()}const L=document.querySelector(".gallery");let o,a,l=1;const u=15,S=document.querySelector("input"),v=document.querySelector("form"),n=document.querySelector("#addImg"),m=document.querySelector(".preloader"),g=()=>{m.style.display="flex"},b=()=>{m.style.display="none"},h=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};new p(".gallery a",{captionsData:"alt"});v.addEventListener("submit",async s=>{if(s.preventDefault(),l=1,o={},a=S.value.trim(),!a.length){alert("Please fill in the field for search images."),L.innerHTML="";return}g();try{if(o=(await y.get("https://pixabay.com/api/",{params:{key:"22926721-5d20aa08498ffd1ff2f906542",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:l}})).data,!o.hits.length){alert("Sorry, there are no images matching your search query. Please try again!"),n.style.display="none";return}u<=o.hits.length?n.style.display="block":alert("We're sorry, but you've reached the end of search results."),f(o.hits),w()}catch{alert("Sorry, there was an error while fetching images. Please try again!")}finally{b(),h()}});n.addEventListener("click",async()=>{g();try{if(l++,o=(await y.get("https://pixabay.com/api/",{params:{key:"22926721-5d20aa08498ffd1ff2f906542",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:l}})).data,!o.hits.length){alert("We're sorry, but you've reached the end of search results."),n.style.display="none";return}f(o.hits,!0),w()}catch{alert("Sorry, there was an error while fetching images. Please try again!")}finally{b(),h()}});window.onload=h;async function w(){const r=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
