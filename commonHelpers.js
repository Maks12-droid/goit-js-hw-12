import{S as b,i}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function y(o){const r=document.querySelector("ul.gallery"),l=o.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");r.insertAdjacentHTML("beforeend",l),new b(".gallery a",{captionsData:"alt"}).refresh()}async function p(o,r=1){const l="https://pixabay.com/api/",n=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r}),e=`${l}?${n}`;return await(await fetch(e)).json()}const L=document.querySelector(".gallery-list");let s,d,u=1;const S=15,R=document.querySelector("#searchInput"),v=document.querySelector("form");let a=document.querySelector("#addImg");const m=document.querySelector(".preloader"),f=()=>{m.style.display="flex"},g=()=>{m.style.display="none"},h=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};v.addEventListener("submit",async o=>{if(o.preventDefault(),u=1,s={},d=R.value.trim(),!d.length){i.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),L.innerHTML="";return}f();try{if(s=await p(d,u),!s.hits.length){i.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.style.display="none";return}S<=s.hits.length?a.style.display="block":i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),y(s.hits),w()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{g(),h()}});a.addEventListener("click",async()=>{f();try{if(u++,s=await p(d,u),!s.hits.length){i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.style.display="none";return}y(s.hits,!0),w()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{g(),h()}});window.onload=h;async function w(){const r=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}a.style.display="none";
//# sourceMappingURL=commonHelpers.js.map
