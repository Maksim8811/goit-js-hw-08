// Add imports above this line
import SimpleLightbox from "simplelightbox";

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const containerGallery = document.querySelector(`.gallery`);

const addImgMarkup = createElementsMarkup(galleryItems);

containerGallery.insertAdjacentHTML(`beforeend`, addImgMarkup);

containerGallery.addEventListener(`click`, makeUrlClick)

function createElementsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    })
    .join(``)
    
}

function makeUrlClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains(`gallery__image`)) {
        return;
  }

    const image = evt.target.dataset.source;
    console.log(image);
    
}
 
const lightbox = new SimpleLightbox('.gallery a');