// Crie uma função para verificar se um valor é Truthy
const isValueTruthy = (value) => {
  // if(value){
  //   console.log('is Truthy')
  // } else {
  //   console.log('is not Truthy')
  // }
  return console.log(!!value)
}

const valueIsTrue = 5 / 'oi'
isValueTruthy(valueIsTrue)

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

const calculatePerimeter = (value) => {
  // return value + value + value + value
  return value * 4
}

console.log(calculatePerimeter(128))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
const yourName = (name, lastName) => {
  return console.log(`${name} ${lastName}`)
}
yourName('Luiz Ricardo', 'Silva')

// Crie uma função que verifica se um número é par
const isEven = (value) => {
  if(value % 2 === 0){
    console.log('is pair')
  } else {
    console.log('is not pair')
  }
}
isEven(4)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
const returnType = (value) => {
  return typeof value
}

console.log(returnType(null))
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
  console.log('Luiz Ricardo Silva')
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
