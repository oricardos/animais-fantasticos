import AnimaNumeros from './numeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `
    <h3>${animal.specie}</h3>
    <span data-numero>${animal.total}</span>
  `;

    return div;
  }
  const numerosGrid = document.querySelector(target);
  function preencherAnimal(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  async function fetchAnimals() {
    try {
      const animals = await fetch(url);
      const animalsJSON = await animals.json();

      animalsJSON.forEach((animal) => preencherAnimal(animal));

      const animaNumeros = new AnimaNumeros(
        '[data-numero]',
        '.numeros',
        'ativo'
      );
      animaNumeros.init();
    } catch (erro) {
      console.error(erro);
    }
  }

  return fetchAnimals();
}
