// Retorne no console todas as imagens do site
const getAllImages = document.querySelectorAll("img");

// Retorne no console apenas as imagens que começaram com a palavra imagem
const getSpecificImage = document.querySelectorAll("img[src^='img/imagem']");

// Selecione todos os links internos (onde o href começa com #)
const getAllLinks = document.querySelectorAll("a[href^='#']")

// Selecione o primeiro h2 dentro de .animais-descricao
const getFirstH2 = document.querySelector(".animais-descricao h2")

// Selecione o último p do site
const getAllP = document.getElementsByTagName("p")
const transformAllP = Array.from(getAllP);
const lastP = transformAllP.pop()
console.log(lastP);
