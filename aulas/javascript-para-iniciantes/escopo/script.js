// Por qual motivo o código abaixo retorna com erros?
/* 1º dando console.log no var
   2º const mantém escopo de bloco, não podendo ser acessada fora do mesmo
   podemos corrigir, mudando o console.log para dentro do bloco, uma vez que não
   é recomendado o uso do var.

   Mas para manter o console.log fora do bloco, todas as variáveis deveriam ser
   transformadas em var.
   */
{
  const cor = 'preto';
  const marca = 'Fiat';
  const portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
