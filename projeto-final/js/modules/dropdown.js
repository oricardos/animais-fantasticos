import outsideClick from './outsideClick.js';

export default function dropdown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach((dropdown) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      dropdown.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(evt) {
    evt.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
}
