import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderImgs } from './js/render-functions';
import { fetchImg } from './js/pixabay-api.js'; 

export const setGallery = document.querySelector('ul.gallery');
export let imgset;
export let searchImgs;

export const perPage = 15;
export let addPage = 1;

const inputfield = document.querySelector('input');
const fillForm = document.querySelector('form');
const preloader = document.querySelector('.preloader');
const gallery = document.querySelector('.gallery');

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

window.onload = handleLoad;

// Ініціалізація SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a');

fillForm.addEventListener('submit', event => {
  event.preventDefault();
  const input = inputfield.value.trim();
  if (input !== '') {
    showLoader(); 
    fetchImg(input)
      .then((photos) => {
        if (photos.hits.length > 0) {
          const galleryHTML = photos.hits.map(photo => `<a href="${photo.largeImageURL}"><img src="${photo.webformatURL}" alt="${photo.tags}" /></a>`).join('');
          gallery.innerHTML = galleryHTML;
          lightbox.refresh();
        } else {
          gallery.innerHTML = '';
          iziToast.show({
            message: 'No images found!',
            theme: 'dark',
            progressBarColor: '#FFFFFF',
            color: '#EF4040',
            position: 'topRight',
          });
        }
        hideLoader(); 
      })
      .catch((error) => {
        console.error(error);
        hideLoader(); 
        iziToast.error({
          message: 'Sorry, an error occurred while loading. Please try again!',
          theme: 'dark',
          progressBarColor: '#FFFFFF',
          color: '#EF4040',
          position: 'topRight',
        });
      });
    fillForm.reset();
  } else {
    iziToast.show({
      message: 'Please complete the field!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
  }
});

export { searchImgs };
    
addImgs.addEventListener('click', async event => {
  event.preventDefault();

  addPage += 1;

  showLoader();
  try {
    imgset = await fetchImg();

    if (perPage > imgset.length) {
      iziToast.error({
        color: 'blue',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
      addImgs.style.display = 'none';
      return;
    }

    renderImgs(imgset);
    scroll();

  } catch (error) {
    iziToast.error({
      color: 'red',
      message: `❌ Sorry, there are no images matching your search query. Please try again!`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    handleLoad();
  }
});
window.onload = handleLoad;
