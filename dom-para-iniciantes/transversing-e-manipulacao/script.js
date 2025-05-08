// Duplique o menu e adicione ele em copy
const copy = document.querySelector('.copy');
const menu = document.querySelector('.menu');
const menuClone = menu.cloneNode(true);

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
// const dt = document.querySelector('.faq dt');
const faqList = document.querySelector('.faq-lista');
console.log(faqList.children[0]);

// Selecione o DD referente ao primeiro DT
console.log(faqList.children[0].nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const body = document.querySelector('body');
const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');

faq.innerHTML = animais.innerHTML;
