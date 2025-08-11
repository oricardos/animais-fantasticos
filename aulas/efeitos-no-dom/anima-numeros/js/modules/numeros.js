export default function numeros() {
  function animateNumbers() {
    const numbers = document.querySelectorAll('[data-numero]');

    numbers.forEach((number) => {
      const value = Number(number.innerText);
      const incremento = Math.floor(value / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        number.innerText = start;
        if (start > value) {
          number.innerText = value;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animateNumbers();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
