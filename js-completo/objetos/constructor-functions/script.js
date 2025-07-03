function Carro() {
  this.marca = '';
  this.modelo = '';
  this.preco = '';
  this.cor = '';
}

// o new serve para apontar a variável this para o novo objeto, agora a
// referência será o citroen. Ele herda as propriedades, mas na hora de
// atribuir o valor, será para o "citroen", e não mais o Carro
const citroen = new Carro();
citroen.marca = 'Citroen';
citroen.modelo = 'C3';
citroen.preco = 20000;
citroen.cor = 'Cinza';

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.modelo = 'Palio';
fiat.preco = 15000;
fiat.cor = 'Preto';

// existe também a forma de passar os valores via parâmetros
function Motocicleta(marca, modelo, preco, cor) {
  // podemos fazer qqr coisa aqui nesse constructor
  const taxa = 1.2;
  const precoFinal = preco * taxa;
  this.marca = marca;
  this.modelo = modelo;
  this.preco = precoFinal;
  this.cor = cor;
}

const yamaha = new Motocicleta('Yamaha', 'MT-07', 35000, 'Preto');

// Exemplo onde o Dom é sempre o mesmo objeto ou um Objeto literal
// sempre que eu precisar adicionar a classe 'ativo' vou precisar mudar o seletor
// Dom.ativar()
// Dom.seletor = 'ul'
// Dom.ativar()
// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativo');
//   },
// };

// Exemplo com constructor functions | Função Construtora
// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   };
//   this.ativar = function () {
//     this.element().classList.add('ativo');
//   };
// }

// const li = new Dom('li');
// li.ativar();
// console.log(li);

// ----------------------------------------------------------------------------

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return console.log(`${nome} andou`);
  };
}

// Crie 3 pessoas, Pedro - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pedro = new Pessoa('Pedro', 20);
console.log(pedro, pedro.andar());

const maria = new Pessoa('maria', 25);
console.log(maria, maria.andar());

const Bruno = new Pessoa('Bruno', 15);
console.log(Bruno, Bruno.andar());

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(elements) {
  this.elements = document.querySelectorAll(elements);
  this.addClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    this.elements.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

const li = new Dom('li');
console.log(li.elements);
li.addClass('ativo');
// li.removeClass('com_Deus_eu_vou_vencer');
