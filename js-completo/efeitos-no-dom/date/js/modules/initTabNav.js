export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');

  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((secion) => {
        secion.classList.remove('ativo');
      });
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direction);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index));
    });
  }
}
