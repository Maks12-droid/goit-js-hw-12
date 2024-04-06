import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderImgs } from './js/render-functions';
import { fetchImg } from './js/pixabay-api';

const setGallery = document.querySelector('ul.gallery');
let imgset;
let searchImgs;

const perPage = 15;
let currentPage = 1;
let simpleLightboxInstance; 

const inputfield = document.querySelector('input');
const fillForm = document.querySelector('form');
const addImgs = document.querySelector('#addImg');
const loadMoreBtn = document.querySelector('#loadMoreBtn'); 
loadMoreBtn.style.display = 'none'; 

const preloader = document.querySelector('.preloader');

const showLoader = () => {
  preloader.style.display = 'flex';
};

const hideLoader = () => {
  preloader.style.display = 'none';
};

const handleLoad = () => {
  document.body.classList.add('loaded');
  document.body.classList.remove('loaded_hiding');
};

simpleLightboxInstance = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

fillForm.addEventListener('submit', async event => {
  event.preventDefault();
  currentPage = 1;
  imgset = {};
  searchImgs = inputfield.value.trim();

  if (!searchImgs.length) {
    iziToast.error({
      color: 'yellow',
      message: ` Please fill in the field for search images.`,
      position: 'topRight',
    });
    setGallery.innerHTML = '';
    return;
  }

  showLoader();

  try {
    imgset = await fetchImg(searchImgs, perPage, currentPage);

    if (!imgset.hits.length) {
      iziToast.error({
        color: 'red',
        message: `❌ Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
      addImgs.style.display = 'none';
      return;
    }

    if (perPage <= imgset.hits.length) {
      loadMoreBtn.style.display = 'flex'; 
    } else {
      iziToast.error({
        color: 'blue',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }
    renderImgs(imgset.hits);
    simpleLightboxInstance.refresh(); 
    scroll();

    inputfield.value = '';
  } catch (error) {
    iziToast.error({
      color: 'red',
      message: `❌ Sorry, there was an error while fetching images. Please try again!`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    handleLoad();
  }
});

addImgs.addEventListener('click', async event => {
  event.preventDefault();
  showLoader();
  try {
    currentPage++;
    imgset = await fetchImg(searchImgs, perPage, currentPage);
    if (!imgset.hits.length) {
      iziToast.error({
        color: 'blue',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
      loadMoreBtn.style.display = 'none'; 
      return;
    }
    renderImgs(imgset.hits, true);
    simpleLightboxInstance.refresh(); 
    scroll();
  } catch (error) {
    iziToast.error({
      color: 'red',
      message: `:x: Sorry, there was an error while fetching images. Please try again!`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    handleLoad();
  }
});

window.onload = handleLoad;

async function scroll() {
  const imgSize = document.querySelector('.img-blok');
  const domRect = imgSize.getBoundingClientRect();
  window.scrollBy({
    top: domRect.height * 2,
    behavior: 'smooth',
  });
}





