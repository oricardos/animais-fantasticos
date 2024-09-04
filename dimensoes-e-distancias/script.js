// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelector("img");
// console.log(firstImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function sumImages() {
  const allImgs = document.querySelectorAll("img");
  let i = 0;
  allImgs.forEach((img) => {
    i += img.offsetWidth
  });

  console.log({i});
}

window.onload = function(){
  sumImages()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const getAllLinks = document.querySelectorAll("a");
getAllLinks.forEach((link) => {
  const rect = link.getBoundingClientRect();
  const getHeight = rect.height;
  const getWidth = rect.width;

  if (getHeight >= 48 && getWidth >= 48) {
    console.log(link, "passou no teste");
  } else {
    console.log(link, "não passou no teste");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const small = window.matchMedia("(max-width: 720px").matches;
if (small) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
