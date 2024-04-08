import{S as b,i}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function g(s){const r=document.querySelector("ul.gallery"),c=s.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");r.insertAdjacentHTML("beforeend",c),new b(".gallery a",{captionsData:"alt"}).refresh()}const w=document.querySelector(".gallery-list");let o,l,n=1;const L=15,S=document.querySelector("#searchInput"),v=document.querySelector("form"),a=document.querySelector("#addImg"),m=document.querySelector(".preloader"),y=()=>{m.style.display="flex"},f=()=>{m.style.display="none"},h=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};v.addEventListener("submit",async s=>{if(s.preventDefault(),n=1,o={},l=S.value.trim(),!l.length){i.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),w.innerHTML="";return}y();try{if(o=await fetchImg(l,n),!o.hits.length){i.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.style.display="none";return}L<=o.hits.length?a.style.display="block":i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),g(o.hits),p()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{f(),h()}});a.addEventListener("click",async()=>{y();try{if(n++,o=await fetchImg(l,n),!o.hits.length){i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.style.display="none";return}g(o.hits,!0),p()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{f(),h()}});window.onload=h;async function p(){const r=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
