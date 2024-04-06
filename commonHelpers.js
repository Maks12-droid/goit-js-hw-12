import{S as m,i}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function g(o){const r=document.querySelector("ul.gallery"),l=o.map(e=>`<li class="img-blok">
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
  </a></li>`).join("");r.insertAdjacentHTML("beforeend",l),new m(".gallery a",{captionsData:"alt"}).refresh()}async function w(o,r=1){const l="https://pixabay.com/api/",n=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r}),e=`${l}?${n}`;return await(await fetch(e)).json()}const R=document.querySelector("ul.gallery");let s,c;const h=15;let d=1,f;const y=document.querySelector("input"),P=document.querySelector("form"),u=document.querySelector("#addImg");document.querySelector("#loadMoreBtn");const L=document.querySelector(".preloader"),b=()=>{L.style.display="flex"},S=()=>{L.style.display="none"},p=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};f=new m(".gallery a",{captionsData:"alt"});P.addEventListener("submit",async o=>{if(o.preventDefault(),d=1,s={},c=y.value.trim(),!c.length){i.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),R.innerHTML="";return}b();try{if(s=await w(c,h,d),!s.hits.length){i.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.style.display="none";return}h<=s.hits.length?u.style.display="flex":i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),g(s.hits),f.refresh(),v(),y.value=""}catch{i.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{S(),p()}});u.addEventListener("click",async o=>{o.preventDefault(),b();try{if(d++,s=await w(c,h,d),!s.hits.length){i.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u.style.display="none";return}g(s.hits,!0),f.refresh(),v()}catch{i.error({color:"red",message:":x: Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{S(),p()}});window.onload=p;async function v(){const r=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
