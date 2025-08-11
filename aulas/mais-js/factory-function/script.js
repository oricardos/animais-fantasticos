// function createButton(text) {
//   function element() {
//     const button = document.createElement('button');
//     button.innerText = text;
//     return button;
//   }
//   return {
//     element,
//     text,
//   };
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// console.log(btnComprar, btnVender);

// function createPerson(firstName, lastName) {
//   const cpf = '123.456.789-10';

//   const fullName = () => {
//     return `${firstName} ${lastName}`;
//   };

//   const andar = () => {
//     return console.log(`${fullName(firstName, lastName)} andou!`);
//   };

//   const correr = () => {
//     return console.log(`${fullName(firstName, lastName)} correu!`);
//   };

//   return {
//     firstName,
//     lastName,
//     andar,
//     correr,
//   };
// }

// // console.log(createPerson);
// console.log();
// createPerson('Luiz Ricardo', 'Silva').andar();
// createPerson('Luiz Ricardo', 'Silva').correr();

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((element) => {
      element.style.display = 'none';
    });

    return this;
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = 'initial';
    });

    return this;
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
  }

  return {
    elements,
    hide,
    show,
    on,
  };
}

const buttons = $$('button');
buttons.hide().show();
buttons.on('click', handleClick);

function handleClick(event) {
  console.log(event.target);
}
// console.log(buttons);
