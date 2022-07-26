import initAnimaNumero from './anima-numero.js';

export default function fetchAnimais(){
    async function getData(url){
        try {
            const response = await fetch(url);
            const data = await response.json();
            const numerosGrid = document.querySelector('.numeros-grid');
        
            data.forEach(animal => {
                const divAnimal = createAnimal(animal);
                numerosGrid.appendChild(divAnimal);
            });
        
            initAnimaNumero();
        }catch(error) {
            console.error(error);
        }
    }
    
    function createAnimal(animal){
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.specie}</h3>
        <span data-numero>${animal.total}</span>`;
    
        return div;
    }
    
    getData('./animaisapi.json');    
}
