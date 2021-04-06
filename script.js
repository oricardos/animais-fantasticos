function initTabNav(){
    const activeClass = 'ativo';
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add(activeClass);
    if(tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });
            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((img, index) =>{
            img.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion() {
    const activeClass = 'ativo';
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
   
}
initAccordion();


function initScroll() {
    const linkIntern = document.querySelectorAll('a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }

    linkIntern.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
initScroll();

function initAnimate() {
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        const windowMetade = window.innerHeight * 0.6;

        function animeScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) <= 0;
                if(isSectionVisible)
                    section.classList.add('ativo');
                else
                    section.classList.remove('ativo');
                
            })
        }
        animeScroll();

        window.addEventListener('scroll', animeScroll);
    }
}
initAnimate();  


