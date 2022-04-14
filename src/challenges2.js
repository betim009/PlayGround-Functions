// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let number = '(xx) xxxxx-xxxx';

  const newNumber = (element => {
    number = number.replace('x', element);
  });
  array.forEach(newNumber);
  //console.log(number);

  if(array.length !== 11){
    return 'Array com tamanho incorreto.';
  } else{
    for (const element of array) {
      let contador = 0;
      for (const element2 of array) {
        if(element === element2){
          contador = contador + 1;
        }
      }
      if (element < 0 || element > 9 || contador >=3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return number;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  valorAbsoluto = lineB - lineC;
  let vA = Math.abs(valorAbsoluto);

  if (lineA < lineB + lineC && lineA > vA){
    return true;
  } else {
    return false;
  }
}
// Desafio 13
function hydrate(string) {
  // seu código aqui
  let captura = /\d+/g;
  let resultado = string.match(captura);
  let toNumber;
  let soma = 0;

  console.log(resultado.length);
  if (resultado.length === 1){
    //console.log('1 copo de água'); 
    return '1 copo de água'
  } else if(resultado.length > 1){
    for(let index in resultado){
      toNumber = parseInt(resultado[index]);
      soma = soma + toNumber;
    }
    //console.log(soma);
    return soma + ' copos de água';
  }
}



module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
