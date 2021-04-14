// const refs = {
//       openModalBtn: document.querySelector('[data-modal-open]'),
//       closeModalBtn: document.querySelector('[data-modal-close]'),
//       modal: document.querySelector('[data-modal]'),
//     };
  
//     refs.openModalBtn.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle('is-hidden');
//     }



    const refs = {
      lightbox: document.querySelector('js-lightbox'),
      lightboxImage: document.querySelector('lightbox__image'),
      lightboxOverlay: document.querySelector('lightbox__overlay'),
      lightboxCloseButton: document.querySelector('button[data-action="close-lightbox"]'),
    };
  
    refs.lightboxImage.addEventListener('click', toggleModal);
    refs.lightboxCloseButton.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-open');
    }

// const currentOpenImg = document.querySelector('.gallery_item.is-open');
//   if (currentOpenImg) {
//     currentOpenImg.classList.remove('is-open')
//   }

//   const openEl = evt.target;
//   const parentGalleryItem = openEl.closest('.gallery__item')
//   parentGalleryItem.classList.add('is-open');
//   //console.log(evt.target);
