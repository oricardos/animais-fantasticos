// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => item.classList.add('ativo'))

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
  if (index !== 0){
    item.classList.remove('ativo')
  }
})
// Verifique se as imagens possuem o atributo alt
const allImgs = document.querySelectorAll('img');
allImgs.forEach((img) => {
  console.log(img.hasAttribute('alt'))
})
// Modifique o href do link externo no menu
const externalLink = document.querySelector('a[href^="https://"')
// externalLink.href = "https://www.google.com.br"
externalLink.setAttribute('href', 'https://www.g1.com.br')
console.log(externalLink)
