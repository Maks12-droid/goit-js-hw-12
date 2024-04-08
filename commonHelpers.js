import{S as L,a as b,i as n}from"./assets/vendor-6e0bf343.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const S=document.querySelector(".gallery-list"),R=new L(".gallery-list a",{captionsData:"alt"});function g(s){const o=s.map(t=>`<li class="img-blok">
        <a href="${t.largeImageURL}">
    <img  src="${t.webformatURL}"
    data-source="${t.largeImageURL}"
    alt="${t.tags}">
    <ul class="image-descript">
  <li>
    <h3>likes</h3>
    <p>${t.likes}</p>
  </li>
  <li>
    <h3>views</h3>
    <p>${t.views}</p>
  </li>
  <li>
    <h3>comments</h3>
    <p>${t.comments}</p>
  </li>
  <li>
    <h3>downloads</h3>
    <p>${t.downloads}</p>
  </li>
    </ul>
  </a></li>`).join("");S.insertAdjacentHTML("beforeend",o),R.refresh()}async function p(s,o=1){const t="https://pixabay.com/api/",l=new URLSearchParams({key:"22926721-5d20aa08498ffd1ff2f906542",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}),e=`${t}?${l}`;try{return(await b.get(e)).data}catch(r){throw console.error("Error fetching images:",r),r}}const v=document.querySelector(".gallery-list");let i,a,c=1;const P=15,$=document.querySelector("input"),q=document.querySelector("form"),d=document.querySelector("#addImg"),y=document.querySelector(".preloader"),m=()=>{y.style.display="flex"},f=()=>{y.style.display="none"},u=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};q.addEventListener("submit",async s=>{if(s.preventDefault(),c=1,i={},a=$.value.trim(),!a.length){n.error({color:"yellow",message:" Please fill in the field for search images.",position:"topRight"}),v.innerHTML="";return}m();try{if(i=await p(a,c),!i.hits.length){n.error({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.style.display="none";return}P<=i.hits.length?d.style.display="block":n.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),g(i.hits),w()}catch{n.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{f(),u()}});d.addEventListener("click",async()=>{m();try{if(c++,i=await p(a,c),!i.hits.length){n.error({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),d.style.display="none";return}g(i.hits,!0),w()}catch{n.error({color:"red",message:"❌ Sorry, there was an error while fetching images. Please try again!",position:"topRight"})}finally{f(),u()}});window.onload=u;async function w(){const o=document.querySelector(".img-blok").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
