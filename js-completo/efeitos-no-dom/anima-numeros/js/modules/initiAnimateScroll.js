export default function initiAnimateScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const halfScreen = window.innerHeight * 0.5;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfScreen < 0;

        if (isSectionVisible) {
          section.classList.add('ativo');
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    }

    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}
