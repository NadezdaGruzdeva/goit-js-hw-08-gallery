
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

galleryList.addEventListener('click', function(event) {
  //проверка куда кликнули
   event.preventDefault();
  // const isGallery = event.target.classList.contains('ul.js-gallery');
  if (event.target.nodeName !== "IMG") return;
  
  const imgSource = event.target.getAttribute('data-source');
  document.querySelector('.lightbox__image').src = imgSource;
  document.querySelector('.js-lightbox').classList.add('is-open');
}
);

document.querySelector('.lightbox__button').addEventListener('click', closeModal);
document.querySelector('.lightbox__overlay').addEventListener('click', closeModal);
// window.addEventListener('onkeypress', function (event) {
//   if (event.key === "Escape") {
//     closeModal;
//   }
//   console.log('5')
// });


function closeModal() {
  document.querySelector('.js-lightbox').classList.remove('is-open');
}

  


