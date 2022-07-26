export default function fetchAnimais(){
    async function getData(){
        const response = await fetch('../animaisapi.json');
        const data = await response.json();
        const numerosGrid = document.querySelector('.numeros-grid');

        data.forEach(animal => {
            const divAnimal = createAnimal(animal);
            numerosGrid.appendChild(divAnimal);
        })
    }

    function createAnimal(animal){
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.specie}</h3>
        <span data-numero>${animal.total}</span>`;

        return div;
    }

    getData()
}