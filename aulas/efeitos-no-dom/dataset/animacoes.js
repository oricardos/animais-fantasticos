function initTabNav() {
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

function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

// não é necessário, pois o css já faz isso, fiz apenas para aprender como seria
// function initSmoothScroll() {
//   const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
//   if (linksInternos.length) {
//     function scrollToSection(event) {
//       event.preventDefault();
//       const href = event.currentTarget.getAttribute('href');
//       const section = document.querySelector(href);

//       section.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });

//       // forma alternativa
//       // const topSection = section.offsetTop;
//       // window.scrollTo({
//       //   top: topSection,
//       //   behavior: 'smooth',
//       // });
//     }

//     linksInternos.forEach((link) => {
//       link.addEventListener('click', scrollToSection);
//     });
//   }
// }
// initSmoothScroll();

function initiAnimateScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const halfScreen = window.innerHeight * 0.5;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < halfScreen) {
          section.classList.add('ativo');
        }
      });
    }

    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}

initTabNav();
initAccordion();
initiAnimateScroll();
