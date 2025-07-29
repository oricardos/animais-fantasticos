export default class Modal {
  constructor(open, close, container) {
    this.open = document.querySelector(open);
    this.close = document.querySelector(close);
    this.container = document.querySelector(container);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
  }

  toggleModal() {
    this.container.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  addModalEvent() {
    this.open.addEventListener('click', this.eventToggleModal);
    this.close.addEventListener('click', this.eventToggleModal);
    this.container.addEventListener('click', this.clickOutside);
  }

  init() {
    if (this.open && this.close && this.container) {
      this.addModalEvent();
    }
  }

  clickOutside(evt) {
    if (evt.target === this.container) {
      this.toggleModal(evt);
    }
  }
}
