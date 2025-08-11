function corFavorita(cor) {
  if (!cor) {
    return 'Preencha o nome de uma cor';
  }

  if (cor === 'azul') {
    return 'eu gosto de azul';
  } else {
    return 'não gosto de nenhuma cor';
  }
}

// console.log(corFavorita(''));

////////////////////////////////////////////////////
// Crie uma função para verificar se um valor é Truthy

function isTruthy(value) {
  console.log(!!value);
}

isTruthy(5 * 's');

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return lado * 4;
}

console.log(perimetro(1));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return console.log(`${nome} ${sobrenome}`);
}

nomeCompleto('luiz ricardo', 'silva');

// Crie uma função que verifica se um número é par
function isEven(number) {
  if (number % 2 === 0) {
    console.log('é par');
  } else {
    console.log('é ímpar');
  }
}

isEven(2934792873498237948274);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function returnTypeof(value) {
  return console.log(typeof value);
}

returnTypeof({});

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
  return nomeCompleto('luiz ricardo', 'silva');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
