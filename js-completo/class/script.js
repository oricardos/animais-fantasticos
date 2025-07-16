// class Button {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//   }

//   element() {
//     const button = document.createElement('button');
//     button.innerText = this.text;
//     button.style.backgroundColor = this.background;
//     button.style.color = this.color;
//     return button;
//   }

//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//   }

//   // Você pode utilizar um método static para retornar a própria classe com
//   // propriedades já pré definidas.
//   static greenButton(text) {
//     return new Button(text, 'green', 'blue');
//   }
// }

// const blueBtn = new Button('Funcionou', 'blue', 'white');
// console.log(Button.greenButton('Clique'));
// blueBtn.appendTo('body');

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }

  get element() {
    const type = this._elementType || 'button';
    const button = document.createElement(type);
    button.innerText = this.text;
    button.style.backgroundColor = this.background;
    button.style.color = this.color;
    return button;
  }

  set element(type) {
    this._elementType = type;
  }
}

const blueBtn = new Button('Funcionou', 'blue', 'white');

// -----------------------------------------------------------------

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }

  acelerar(type) {
    return `${type} acelerou`;
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log(`${this.acelerar('moto')} e empinou com ${this.rodas} rodas`);
  }
}

const honda = new Moto(1);
honda.empinar();
console.log(honda.acelerar('moto'));
