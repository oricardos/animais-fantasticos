// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
const eu = {
  nome: 'Luiz Ricardo',
  sobrenome: 'Silva',
}
// Crie um método no objeto anterior, que mostre o seu nome completo
eu.completo = function(){
  return `${this.nome} ${this.sobrenome}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(genero){
    if(genero === 'homem'){
      return 'latiu'
    } else {
      return;
    }
  }
}
