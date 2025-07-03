// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.fullName = function () {
  console.log(this.nome + ' ' + this.sobrenome);
};

const ricardo = new Pessoas('Luiz Ricardo', 'Silva', 31);
ricardo.fullName();

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
// apenas digitar o constructor.prototype

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

console.log(li.constructor.name); //HTMLLIElement
console.log(li.click.constructor.name); //Function
console.log(li.innerText.constructor.name); //String
console.log(li.value.constructor.name); //Number
console.log(li.hidden.constructor.name); //Boolean
console.log(li.offsetLeft.constructor.name); //Number
console.log(li.click.constructor.name); //Function

// Qual o construtor do dado abaixo: // string?
console.log(li.hidden.constructor.name); //String
