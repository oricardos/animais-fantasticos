// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
const minhaIdade = 32;
const idadeParente = 32;

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;
console.log({ expressao });

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = !!'Andre'; // Truthy
var idade = !!28; // Truthy
var possuiDoutorado = !!false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = !!0; //Falsy

console.table(nome, idade, possuiDoutorado, !!empregoFuturo, dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

if (minhaIdade < idadeParente) {
  console.log('É menor');
} else if (minhaIdade > idadeParente) {
  console.log('É maior');
} else {
  console.log('É igual');
}
console.log();
