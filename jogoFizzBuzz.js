








// //fizzBuzz
// divisivel por 3 -> fizz
// divisivel por 5 -> Buzz
// divisivel por 3 e 5 -> fizzBuzz
// nao divisivel por 3 ou 5 -> entrada
// não é um numero ->'não é um numero'

//const resultado = fizzBuzz(true);
// const resultado = fizzBuzz(6);
// const resultado = fizzBuzz(20);
// const resultado = fizzBuzz(15);
// const resultado = fizzBuzz(11);

console.log(resultado);

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number') {
    return 'não é um numero';
  }
  if ((entrada % 3 === 0) && (entrada % 5 === 0)) {
    return 'FizzBuzz';
  }
  if (entrada % 3 === 0) {
    return 'FIZZ';
  }
  if (entrada % 5 === 0) {
    return 'BUZZ';
  }

  return entrada;
}