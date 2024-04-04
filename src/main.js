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
let addPage = 1;

const inputfield = document.querySelector('input');
const fillForm = document.querySelector('form');
const addImgBtn = document.querySelector('#addImg');

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

fillForm.addEventListener('submit', async event => {
  event.preventDefault();
  addPage = 1;
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
    imgset = await fetchImg(searchImgs);

    if (!imgset.hits.length) {
      iziToast.error({
        color: 'red',
        message: `❌ Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
      addImgBtn.style.display = 'none';
      return;
    }

    if (perPage <= imgset.hits.length) {
      addImgBtn.style.display = 'flex';
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

addImgBtn.addEventListener('click', async () => {
  addPage++;
  showLoader();

  try {
    const newImgSet = await fetchImg(searchImgs);

    if (newImgSet.hits.length === 0) {
      iziToast.error({
        color: 'blue',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
      return;
    }

    renderImgs(newImgSet.hits);
    scroll();

  } catch (error) {
    iziToast.error({
      color: 'red',
      message: `❌ Sorry, there was an error while fetching images. Please try again!`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
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


