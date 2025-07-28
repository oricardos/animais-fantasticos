const frutas = ['Morango', 'Banana'];

for (const fruta of frutas) {
  console.log(fruta); //retorna o valor
}

const carro = {
  marca: 'Citroen',
  modelo: 'C3',
};

for (const car in carro) {
  console.log(car, carro[car]); //retorna apenas a key, sendo necessário key: carro[key]
}

// exercícios
// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const li = document.querySelectorAll('li');
for (const item of li) {
  item.classList.add('ativo');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const propertie in window) {
  console.log(`${propertie}: ${window[propertie]}`);
}
