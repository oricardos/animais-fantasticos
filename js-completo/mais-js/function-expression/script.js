// Function Declaration
function multiplicar(a, b) {
  return a * b;
}

// somar(4,2); // 6

// Function expression
const dividir = function (a, b) {
  return a / b;
};

// somar(4,2); // 6

// Function expression com arrow function
const somar = (a, b) => {
  return a + b;
};

// EXERCÍCIOS

// Remova o erro
const priceNumber = (n) => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function () {
  return console.log('funcionou');
})();

const isActive = () => {
  return console.log('is active');
};

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();
active(isActive);
