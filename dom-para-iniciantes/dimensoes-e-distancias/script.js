// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector('img');
console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
const allImgs = document.querySelectorAll('img');
let i = 0;
allImgs.forEach((img) => {
  const getProperties = img.getBoundingClientRect();
  i += getProperties.width;
  console.log(getProperties.width);
});

console.log(i);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const menuItens = document.querySelectorAll('.menu a');
menuItens.forEach((item) => {
  console.log(item.offsetHeight, item.offsetWidth);
});
// console.log(menuItens);
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const { matches } = window.matchMedia('(max-width: 720px');
const menu = document.querySelector('.menu');

if (matches) {
  menu.classList.add('menu-mobile');
} else {
  return;
}
