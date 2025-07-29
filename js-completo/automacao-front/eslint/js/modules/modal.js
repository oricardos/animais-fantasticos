export default function initModal() {
  const openModalBtn = document.querySelector('[data-modal="open"]');
  const closeModalBtn = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(evt) {
    evt.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickOutside(evt) {
    if (evt.target === this) {
      toggleModal(evt);
    }
  }

  if (openModalBtn && closeModalBtn && containerModal) {
    openModalBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutside);
  }
}
