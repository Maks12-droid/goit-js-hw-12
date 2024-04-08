import{S as b,a as L,i}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function g(o){const t=document.querySelector("ul.gallery"),n=o.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");t.insertAdjacentHTML("beforeend",n),new b(".gallery a",{captionsData:"alt"}).refresh()}async function p(o,t=1){const n="https://pixabay.com/api/",l=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}),e=`${n}?${l}`;try{return(await L.get(e)).data}catch(r){throw console.error("Error fetching images:",r),r}}const S=document.querySelector(".gallery-list");let s,a,c=1;const R=15,v=document.querySelector("#searchInput"),P=document.querySelector("form"),d=document.querySelector("#addImg"),y=document.querySelector(".preloader"),m=()=>{y.style.display="flex"},f=()=>{y.style.display="none"},u=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};P.addEventListener("submit",async o=>{if(o.preventDefault(),c=1,s={},a=v.value.trim(),!a.length){i.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),S.innerHTML="";return}m();try{if(s=await p(a,c),!s.hits.length){i.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.style.display="none";return}R<=s.hits.length?d.style.display="block":i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),g(s.hits),w()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{f(),u()}});d.addEventListener("click",async()=>{m();try{if(c++,s=await p(a,c),!s.hits.length){i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d.style.display="none";return}g(s.hits,!0),w()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{f(),u()}});window.onload=u;async function w(){const t=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
