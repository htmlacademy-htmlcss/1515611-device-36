const modalOpen = document.querySelector('.modal-container-close');
const order = document.querySelector('.rare-goods');

order.addEventListener('click', () => {
  modalOpen.classList.remove('modal-container-close')
});

const modalClose = document.querySelector('.modal-button');

modalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalOpen.classList.add('modal-container-close');
});
