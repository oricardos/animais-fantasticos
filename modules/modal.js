export default function initModal() {
    const openModalButton = document.querySelector('[data-modal="abrir"]');
    const closeModalButton = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');


    if( openModalButton && closeModalButton && containerModal ){
        function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
        }

        function outsideClickModal(event) {
            if(event.target === this)
                toggleModal(event);
        }

    openModalButton.addEventListener('click', toggleModal);
    closeModalButton.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', outsideClickModal)
    }
}