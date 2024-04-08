import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import { renderImgs } from './js/render-functions';

const setGallery = document.querySelector('.gallery-list');
let currentPage = 1;
const perPage = 15;

const inputfield = document.querySelector('#searchInput');
const fillForm = document.querySelector('form');
const addImgs = document.querySelector('#addImg');

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

fillForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  currentPage = 1;
  const searchImgs = inputfield.value.trim();

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
    const imgset = await fetchImg(searchImgs, currentPage);

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
      addImgs.style.display = 'block';
    } else {
      iziToast.error({
        color: 'blue',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }
    renderImgs(imgset.hits);
    scroll();
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

addImgs.addEventListener('click', async () => {
  showLoader();
  try {
    currentPage++;
    const imgset = await fetchImg(inputfield.value.trim(), currentPage);
    if (!imgset.hits.length) {
      iziToast.error({
        color: 'blue',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
      addImgs.style.display = 'none';
      return;
    }
    renderImgs(imgset.hits, true);
    scroll();
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

window.onload = handleLoad;

async function scroll() {
  const imgSize = document.querySelector('.img-blok');
  const domRect = imgSize.getBoundingClientRect();
  window.scrollBy({
    top: domRect.height * 2,
    behavior: 'smooth',
  });
}



