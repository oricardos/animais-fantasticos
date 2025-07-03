// const aulas = [30, 20, 30];

// const tempoAulas = aulas.reduce((accum, item, index) => {
//   // console.log(index);
//   return accum + item;
// }, 0); // se não passar esse parâmetro, o acumulador já inicia com o primeiro valor

// // console.log(tempoAulas);

// const numeros = [10, 20, 35, 40, 50, 28, 70, 99, 83, 8437, 84, 93, 288];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   return anterior > atual ? anterior : atual;
// }, 0);

// console.log(maiorNumero);

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const courses = document.querySelectorAll('.curso');
const arrayCourse = Array.from(courses);

const test = arrayCourse.map((course) => {
  const title = course.querySelector('h1').innerText;
  const description = course.querySelector('p').innerText;
  const classes = course.querySelector('.aulas').innerText;
  const hours = course.querySelector('.horas').innerText;

  return {
    title,
    description,
    classes,
    hours,
  };
});

console.log(test);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQ100 = numeros.filter((n) => n > 100);
console.log(maiorQ100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const hasBass = instrumentos.some((inst) => inst === 'Baixo');
console.log(hasBass);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99',
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99',
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49',
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35',
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60',
  },
];

const total = compras.reduce((acumulador, item) => {
  const limpaPreco = +item.preco.replace('R$ ', '').replace(',', '.');

  return acumulador + limpaPreco;
}, 0);

console.log(total);
