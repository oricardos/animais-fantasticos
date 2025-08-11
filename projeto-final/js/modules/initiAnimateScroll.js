export default class AnimateScroll {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.halfScreen = window.innerHeight * 0.5;

    this.animateScroll = this.animateScroll.bind(this);
  }

  animateScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.halfScreen < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init(){
    this.animateScroll();
    window.addEventListener('scroll', this.animateScroll);
  };
}
