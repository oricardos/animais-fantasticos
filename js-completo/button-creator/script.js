const controls = document.getElementById('controls');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controls.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'px';
  },
};

function handleChange(event) {
  const { name, value } = event.target;
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function showCss() {
  cssText.innerHTML =
    '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    handleStyle[propertie](localStorage[propertie]);
    controls.elements[propertie].value = localStorage[propertie];
  });

  showCss();
}

setValues();
