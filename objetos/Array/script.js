const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const removePrimeiroValor = comidas.shift();
const removeUltimoValor = comidas.pop();
const addArroz = comidas.push('Arroz');
const addPeixeEBatata = comidas.unshift('Peixe', 'Batata');

console.log(removeUltimoValor);
console.log(comidas);
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.sort());
console.log(estudantes.reverse());

const isJoanaStudent = estudantes.includes('Joana') ? 'Sim' : 'Não';
console.log('Joana faz parte dos estudantes? ', isJoanaStudent);
const isJulianaStudent = estudantes.includes('Juliana') ? 'Sim' : 'Não';
console.log('Juliana faz parte dos estudantes? ', isJulianaStudent);

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section');
html = html.join('ul');
html = html.split('div');
html = html.join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const copiaCarros = carros.slice();
carros.pop();

console.log(carros);
console.log(copiaCarros);
