// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  areaTriangle = (base * height) / 2;
  console.log(areaTriangle);
  return areaTriangle;
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  var splits = string.split(' ');
  return splits;
}
// Desafio 4
function concatName(array) {
  // seu código aqui
  let first = array[0];
  let last = array[array.length - 1];
  return last + ', ' + first;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  ties = ties * 1;
  return wins + ties;
}
// Desafio 6
function highestCount(array) {
  // seu código aqui
  let contador = 0;
  let maxNumber = -9990;

  for (const element of array) {
    if (element >= maxNumber) {
      maxNumber = element;
    }
  }

  for (const element of array) {
    if (maxNumber === element) {
      contador = contador + 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (mouse < cat1) {
    cat1 = cat1 - mouse;
  } else {
    mouse = mouse - cat1;
  }
  if (mouse < cat2) {
    cat2 = cat2 - mouse;
  } else {
    mouse = mouse - cat2;
  }
  if (cat1 === 0) {
    cat1 = cat1 + 1;
  }
  if (cat2 === 0) {
    cat1 = cat1 + 1;
  }

  if (cat1 > cat2) {
    return 'cat2';
    //console.log('cat2')
  } else if (cat2 > cat1) {
    return 'cat1';
    //console.log('cat1');
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
