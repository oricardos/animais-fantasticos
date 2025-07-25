// Retorne um número aleatório
// entre 1050 e 2000
const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const maiorNumero = Math.max(...arrayNumeros);
console.log(maiorNumero);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function clearPrice(price) {
  price = Number(
    price.toUpperCase().replace('R$', '').replace(',', '.').trim()
  );

  price = Number(price.toFixed(2));

  return price;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += clearPrice(preco);
});

console.log(
  soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
);
