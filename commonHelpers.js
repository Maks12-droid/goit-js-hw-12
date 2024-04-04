import{S as L,i}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function f(o){const r=document.querySelector("ul.gallery"),n=o.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");r.insertAdjacentHTML("beforeend",n),new L(".gallery a",{captionsData:"alt"}).refresh()}async function p(o,r=1){const n="https://pixabay.com/api/",l=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r}),e=`${n}?${l}`;return await(await fetch(e)).json()}const b=document.querySelector("ul.gallery");let s,c;const S=15;let u=1;const v=document.querySelector("input"),R=document.querySelector("form"),d=document.querySelector("#addImg"),y=document.querySelector(".preloader"),m=()=>{y.style.display="flex"},g=()=>{y.style.display="none"},h=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};R.addEventListener("submit",async o=>{if(o.preventDefault(),u=1,s={},c=v.value.trim(),!c.length){i.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),b.innerHTML="";return}m();try{if(s=await p(c),!s.hits.length){i.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.style.display="none";return}S<=s.hits.length?d.style.display="flex":i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),f(s.hits),w()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{g(),h()}});d.addEventListener("click",async o=>{o.preventDefault(),m();try{if(u++,s=await p(c,u),!s.hits.length){i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d.style.display="none";return}f(s.hits,!0),w()}catch{i.error({color:"red",message:":x: Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{g(),h()}});window.onload=h;async function w(){const r=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
