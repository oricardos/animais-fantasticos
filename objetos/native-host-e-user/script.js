// Liste 5 objetos nativos
console.log(Array);
console.log(Object);
console.log(Number);
console.log(String);
console.log(Function);

// Liste 5 objetos do browser
console.log(Window);
console.log(Screen);
console.log(Location);
console.log(Document);
console.log(History);

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitVisibilityState !== 'undefined') {
  console.log('Existe');
} else {
  console.log('Não existe');
}
