// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// setInterval(() => {
//   const body = document.querySelector('body');

//   if (body.style.background === 'blue') {
//     body.style.background = 'red';
//   } else {
//     body.style.background = 'blue';
//   }
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.getElementById('btn-iniciar');
const pausar = document.getElementById('btn-pausar');
const cronometro = document.getElementById('cronometro');
// console.log(iniciar);
iniciar.addEventListener('click', iniciarCronometro);
pausar.addEventListener('click', pausarCronometro);
pausar.addEventListener('dblclick', resetarCronometro);

let i = 0;
let timer;

function iniciarCronometro() {
  if (iniciar.innerText === 'Resumir') {
    iniciar.innerText = 'Iniciar';
  }

  iniciar.setAttribute('disabled', '');

  timer = setInterval(() => {
    cronometro.innerText = i++;
  }, 1000);
}

function pausarCronometro() {
  clearInterval(timer);
  iniciar.innerText = 'Resumir';
  iniciar.removeAttribute('disabled');
}

function resetarCronometro() {
  i = 0;
  cronometro.innerText = i;
}
