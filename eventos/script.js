// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

const toggleActive = (e) => {
  e.preventDefault();
  const target = e.currentTarget;
  linksInternos.forEach((link) => {
    link.classList.remove('active')
  })

  target.classList.add("active")
}

linksInternos.forEach((link) => {
  link.addEventListener('click', toggleActive)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allElements = document.querySelector("*");
const handleClick = (e) => {
  // e.target.remove()
  console.log(e.target)
}
allElements.addEventListener('click', handleClick)

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const getKey = document.querySelector("body")

const handleKeydown = (e) => {
  if(e.key === 't'){
    getKey.style.fontSize = '5rem'
  }
}

getKey.addEventListener('keydown', handleKeydown)