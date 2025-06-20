// const comida = 'Pizza';
// const liquido = new String('Água');
// const ano = new String(2025);

// console.log(comida);
// console.log(ano);

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let valorTaxa = 0;
let valorRecebimento = 0;
transacoes.forEach((transacao) => {
  const taxa = transacao.descricao.startsWith('Taxa');
  const trataValor = Number(transacao.valor.split('R$')[1]);
  if (taxa) {
    valorTaxa += trataValor;
  } else {
    valorRecebimento += trataValor;
  }
});

console.log('valor Taxa', valorTaxa);
console.log('valor recebimento', valorRecebimento);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'));

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.split('span').join('a'));

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]);
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoes2 = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];

let taxasTotal = 0;
transacoes2.forEach((transacao) => {
  transacao = transacao.toLocaleLowerCase().trim().startsWith('taxa');
  if (transacao) {
    taxasTotal++;
  }
});

console.log(taxasTotal);
