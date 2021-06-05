export default function initScroll() {
    const linkIntern = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

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