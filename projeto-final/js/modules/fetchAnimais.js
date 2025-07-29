import numeros from './numeros.js';
export default function fetchAnimais() {
  async function fetchAnimals(url) {
    try {
      const animals = await fetch(url);
      const animalsJSON = await animals.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      numeros();
    } catch (erro) {
      console.error(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `
    <h3>${animal.specie}</h3>
    <span data-numero>${animal.total}</span>
  `;

    return div;
  }

  fetchAnimals('./animaisapi.json');
}
