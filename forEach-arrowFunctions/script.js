// Mostre no console cada parágrado do site
const getAllParagraphs = document.querySelectorAll('p')

const allP = getAllParagraphs.forEach((item, array) => {
    console.log(item)
})


// Mostre o texto dos parágrafos no console
const allContent = getAllParagraphs.forEach((item, array) => {
    console.log(item.textContent)
})
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

