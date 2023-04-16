const arrayNumerico = require("./array");

function find(array, valor) {
  console.time();
  const result = array.find((v) => v === valor);
  console.timeEnd();
  return result;
}

function findFor(array, valor) {
  console.time();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === valor) {
      console.timeEnd();
      return element;
    }
  }
  const result = busca(array, valor);
  console.timeEnd();
  return result;
}

function findOtimized(array, valor) {
  console.time();
  let esquerda = 0;
  let direita = array.length - 1;

  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);
    if (array[meio] === valor) {
      console.timeEnd();
      return meio;
    } else if (array[meio] < valor) {
      esquerda = meio + 1;
    } else {
      direita = meio - 1;
    }
  }
  console.timeEnd();
  return -1;
}

function busca(array, valor) {
  const de = 0;
  const ate = array.length > 1 ? array.length - 1 : 0;
  if (de === ate) {
    return de;
  }
  const meio = Math.floor((de + ate) / 2);
  const igual = array[meio] === valor;
  if (igual) {
    return array[meio];
  }

  const maior = array[meio] < valor;
  if (maior) {
    return busca(array.slice(meio, ate + 1), valor);
  } else {
    return busca(array.slice(de, meio + 1), valor);
  }
}

console.log(arrayNumerico.length); // 44002 itens

// find usando biblioteca find
console.log(find(arrayNumerico, 982)); // tempo estimado : 1.500ms ate 3.000ms

// find usando for
console.log(findFor(arrayNumerico, 982)); // tempo estimado: 2.500ms ate 7.000ms

// find otimizado usando while
console.log(findOtimized(arrayNumerico, 982)); // tempo estimado: 0.004ms ate 0.300ms
