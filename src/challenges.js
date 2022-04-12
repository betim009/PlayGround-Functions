// Alberto é o bala!!


// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if(a === true && b === true){
    console.log(true);
    return true;
  }
  else {
    console.log(false)
    return false;
  }
}
compareTrue(false, true);




// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  areaTriangle = (base * height) / 2;
  console.log(areaTriangle);
  return areaTriangle;
}
calcArea(51, 1);






// Desafio 3

function splitSentence(string) {
  // seu código aqui
  var splits = string.split(' ');
  return splits;

}
console.log(splitSentence('go Trybe'))





// Desafio 4
function concatName(array) {
  // seu código aqui
  let first = array[0];
  let last = array[array.length-1];
  return (last +", " + first);
  }

console.log(concatName(['foguete', 'não', 'tem', 'ré']));




// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  ties = ties * 1;
  return wins + ties;
}
console.log(footballPoints(0, 0))




/*
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
*/