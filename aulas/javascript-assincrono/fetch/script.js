// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const button = document.querySelector('.buscar');
const form = document.getElementById('cep');
let cep;
button.addEventListener('click', buscarCep);
form.addEventListener('change', handleChange);

function handleChange(evt) {
  const value = evt.target.value;
  cep = value;
}

function buscarCep(evt) {
  evt.preventDefault();
  const apiCep = fetch(`https://viacep.com.br/ws/${cep}/json/`);
  apiCep.then((res) => res.json()).then((res) => console.log(res));
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const blockchainDom = document.querySelector('.blockchain');
function fetchBTC() {
  fetch('https://blockchain.info/ticker')
    .then((res) => {
      console.log(res);
      res.json();
    })
    .then((res) => {
      console.log(res);
      const value = res.BRL.buy;
      const BRLValue = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

      blockchainDom.innerText = BRLValue;
    });
}

// setInterval(fetchBTC, 3000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const piada = document.querySelector('.piada');
const proxima = document.querySelector('.proxima');

proxima.addEventListener('click', puxarPiada);

puxarPiada();

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => res.json())
    .then((res) => (piada.innerText = res.value));
}
