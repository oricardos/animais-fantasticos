export default class AnimaNumeros {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementNumber(number) {
    const value = Number(number.innerText);
    const incremento = Math.floor(value / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      number.innerText = start;
      if (start > value) {
        number.innerText = value;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animateNumbers() {
    this.numbers.forEach((number) => {
      this.constructor.incrementNumber(number);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
