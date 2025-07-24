const carro = {
  marca: 'Fiat',
  ano: 2018,
  portas: 4,
};

const { marca, ano } = carro;

// console.log(marca); // Fiat
// console.log(ano); // 2018

const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML'],
    },
    fisicas: {
      cadernos: ['Caderno 1'],
    },
  },
};

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

const { livros, videos } = cliente.compras.digitais;

// console.log(livros);
// console.log(videos);

// arrays
const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas;
//------------------------------------------------------
//exercícios
// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);
const { backgroundColor, color, margin } = btnStyles;

console.log(backgroundColor, color, margin);

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = ['Java', 'CSS'];
console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo',
};

const { cor } = cachorro;
const { cor: bobCor } = cachorro;

console.log(cor, bobCor);
