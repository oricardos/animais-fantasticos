export default function initModal() {
  const openModalBtn = document.querySelector('[data-modal="open"]');
  const closeModalBtn = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (openModalBtn && closeModalBtn && containerModal) {
    function toggleModal(evt) {
      evt.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function clickOutside(evt) {
      if (evt.target === this) {
        toggleModal(evt);
      }
    }

    openModalBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutside);
  }
}
