import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImage } from './js/pixabay-api';
import { galleryTemplate } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.lightbox a', { captionsData: 'alt' });
lightbox.on('show.simplelightbox', function () {});

searchForm.addEventListener('submit', onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const query = evt.target.elements.search.value.trim();

  if (query !== '') {
    getImage(query)
      .then(data => {
        const markup = galleryTemplate(data.hits);
        gallery.innerHTML = markup;
        lightbox.refresh();
        if (data.hits.length === 0) {
          iziToast.error({
            maxWidth: '432px',
            height: '48px',
            color: 'red',
            position: 'topRight',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => document.querySelector('.loader'));
  }
  evt.target.reset();
}
