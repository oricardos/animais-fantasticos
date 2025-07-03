// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
const me = {
  name: 'fulano',
  lastname: 'ciclano',
};
// Crie um método no objeto anterior, que mostre o seu nome completo
me.fullName = function () {
  console.log(this);
  return `${this.name} ${this.lastname}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 300;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(verHomem) {
    if (verHomem) {
      console.log('Latir');
    } else {
      console.log('dormir');
    }
  },
};
