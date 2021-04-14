
//Реализация делегирования на галерее ul.js-gallery и //получение url большого изображения.
//Открытие модального окна по клику на элементе галереи.
//Подмена значения атрибута src элемента img.//lightbox__image.
//Закрытие модального окна по клику на кнопку button//[data-action="close-lightbox"].
//Очистка значения атрибута src элемента img.//lightbox__image. Это необходимо для того, чтобы при //следующем открытии модального окна, пока грузится //изображение, мы не видели предыдущее.



import galleryItems from "./gallery-items.js";
console.log(galleryItems);

//Создание и рендер разметки по массиву данных и //предоставленному шаблону.
const galleryList = document.querySelector('.js-gallery');
const galleryListMarkup = createGalleryListMarkup(galleryItems);
galleryList.insertAdjacentHTML('afterbegin', galleryListMarkup);
galleryList.addEventListener('click', onGalleryListClick(event));

function createGalleryListMarkup(galleryItems) {
  return galleryItems.map(
    ({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
    >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }
  )
  .join('')
}

function onGalleryListClick(event) {
  //проверка куда кликнули
  event.preventDefault();
  const isGallery = event.target.classList.contains('js-gallery');
  if (!isGallery) {
    return;
  }
  const openEl = event.target;
  const openGalleryItem = openEl.querySelector('.gallery__item');
  // openGalleryItem.classList.add('is-open');
  console.log(openGalleryItem + "#");
  }

  
//   const currentOpenImg = document.querySelector('.gallery_item.is-open');
//   if (currentOpenImg) {
//     currentOpenImg.classList.remove('is-open')
//   }

//   const openEl = evt.target;
//   const parentGalleryItem = openEl.closest('.gallery__item')
//   parentGalleryItem.classList.add('is-open');
//   //console.log(evt.target);
// }

