// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img');
console.log(allImages);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const startsWithImg = document.querySelectorAll('img[src^="img/imagem"]');
console.log(startsWithImg);
// Selecione todos os links internos (onde o href começa com #)
const startsWithHash = document.querySelectorAll('[href^="#"]');
console.log(startsWithHash);

// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

// Selecione o último p do site
const allP = document.querySelectorAll('p');
const lastP = allP[allP.length - 1];
console.log(lastP);
