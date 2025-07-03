// Mostre no console cada parágrado do site
const allP = document.querySelectorAll('p');
// allP.forEach((p) => console.log(p));

// Mostre o texto dos parágrafos no console
// allP.forEach((p) => console.log(p.innerText));

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
