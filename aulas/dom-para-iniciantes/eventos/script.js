// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const menuItens = document.querySelectorAll('.menu a');

function handleLink(e) {
  e.preventDefault();

  menuItens.forEach((link) => {
    link.classList.remove('ativo');
  });

  this.classList.add('ativo');
}
menuItens.forEach((item) => {
  item.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const allEl = document.querySelector('body *');
const showEl = (e) => {
  // e.target.remove();
  // console.log(e.target);
};

allEl.addEventListener('click', showEl);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
const body = document.querySelector('body');

const handleKeyboard = (e) => {
  if (e.key !== 't') return;

  body.classList.add('t');
};

body.addEventListener('keydown', handleKeyboard);
