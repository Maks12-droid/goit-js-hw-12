import{S as L,i}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function h(o){const t=document.querySelector("ul.gallery");t.innerHTML="";const l=o.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");t.insertAdjacentHTML("beforeend",l),new L(".gallery a",{captionsData:"alt"}).refresh()}function f(o){const t="https://pixabay.com/api/",l=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${t}?${l}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const b=document.querySelector("ul.gallery");let s,a;const m=15,S=document.querySelector("input"),v=document.querySelector("form"),c=document.querySelector("#addImg"),y=document.querySelector(".preloader"),g=()=>{y.style.display="flex"},p=()=>{y.style.display="none"},u=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};v.addEventListener("submit",async o=>{if(o.preventDefault(),s={},a=S.value.trim(),!a.length){i.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),b.innerHTML="";return}g();try{if(s=await f(a),!s.hits.length){i.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.style.display="none";return}m<=s.hits.length?c.style.display="flex":i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),h(s.hits),w()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{p(),u()}});c.addEventListener("click",async o=>{o.preventDefault(),g();try{if(s=await f(a),m>s.hits.length){i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c.style.display="none";return}h(s.hits),w()}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{p(),u()}});window.onload=u;async function w(){const t=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map