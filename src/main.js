import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderImgs } from './js/render-functions';

const setGallery = document.querySelector('.gallery');
let imgset;
let searchImgs;
let currentPage = 1;
const perPage = 15;

const inputfield = document.querySelector('input');
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

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

fillForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  currentPage = 1;
  imgset = {};
  searchImgs = inputfield.value.trim();

  if (!searchImgs.length) {
    alert('Please fill in the field for search images.');
    setGallery.innerHTML = '';
    return;
  }

  showLoader();

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '22926721-5d20aa08498ffd1ff2f906542',
        q: searchImgs,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: currentPage,
      },
    });
    imgset = response.data;

    if (!imgset.hits.length) {
      alert('Sorry, there are no images matching your search query. Please try again!');
      addImgs.style.display = 'none';
      return;
    }

    if (perPage <= imgset.hits.length) {
      addImgs.style.display = 'block';
    } else {
      alert("We're sorry, but you've reached the end of search results.");
    }

    renderImgs(imgset.hits);
    scroll();
  } catch (error) {
    alert('Sorry, there was an error while fetching images. Please try again!');
  } finally {
    hideLoader();
    handleLoad();
  }
});

addImgs.addEventListener('click', async () => {
  showLoader();
  try {
    currentPage++;
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '22926721-5d20aa08498ffd1ff2f906542',
        q: searchImgs,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: currentPage,
      },
    });
    imgset = response.data;
    if (!imgset.hits.length) {
      alert("We're sorry, but you've reached the end of search results.");
      addImgs.style.display = 'none';
      return;
    }
    renderImgs(imgset.hits, true);
    scroll();
  } catch (error) {
    alert('Sorry, there was an error while fetching images. Please try again!');
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



