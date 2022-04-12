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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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

