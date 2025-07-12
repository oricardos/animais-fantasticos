// não é necessário, pois o css já faz isso, fiz apenas para aprender como seria
// export default function initSmoothScroll() {
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
