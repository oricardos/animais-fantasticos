// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu a');
menuItens.forEach((item) => item.classList.add('ativo'));

console.log(menuItens);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((item, index) => {
  if (index !== 0) item.classList.remove('ativo');
});

// Verifique se as imagens possuem o atributo alt
const allImages = document.querySelectorAll('img');
allImages.forEach((img) => console.log(img.hasAttribute('alt')));

// Modifique o href do link externo no menu
const externalLink = document.querySelector('.menu [href^="https://"]');
externalLink.setAttribute('href', 'https://google.com');
// externalLink.href = 'https://google.com';
console.log(externalLink.href);
