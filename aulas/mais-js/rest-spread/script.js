// rest
/*
Usa-se o rest quando queremos juntar múltiplos argumentos em um único array.

Onde é usado:
Em parâmetros de função.

Em destruturação de objetos ou arrays.
*/
function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach((ganhador) => {
    // console.log(ganhador + ' ganhou.');
  });
}

anunciarGanhadores('Pedro', 'Marta', 'Maria');

//spread
/**
 * . Spread (...) — espalha valores
Usa-se o spread quando queremos espalhar (desempacotar) os elementos de um array ou objeto.

Onde é usado:
Em chamadas de função.

Em criação/cópia de arrays e objetos.
 */
const fruits = ['Banana', 'Uva', 'Morango'];
const vegetables = ['Cenoura', 'Batata'];

const foods = [...fruits, 'Pizza', ...vegetables];

//exercícios
// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
}

const redButton = createButton('green', 'yellow');

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas);

console.log(comidas);
