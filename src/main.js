import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox'; // Додано імпорт бібліотеки SimpleLightbox
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImg } from './js/pixabay-api.js'; 

let searchImgs = '';

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
