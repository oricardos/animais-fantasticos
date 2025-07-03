var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(10 / 2 + 30);

// Crie duas expressões que retornem NaN
const isNan1 = +'28s' + 3;
const isNan2 = '28s' * 5;

// Somar a string '200' com o número 50 e retornar 250
const somaString = +'200' + 50;

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
++x;

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)

console.table(total, isNan1, isNan2, somaString, x, pesoPorDois);
