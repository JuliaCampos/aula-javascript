//operadores aritméticos
let salario = 4;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

let numero = 18;
console.log(numero++);
console.log("numero: " + numero);
console.log(numero--);
console.log("numero: " + numero);

//operadores de atribuição
let atribuicao = 18;
atribuicao += atribuicao

//operadores de comparação
//igualdade estrita
console.log(1 === 1); //compara o valor e o tipo
console.log('1' === 1); //compara o valor e o tipo

//igualdade solta
console.log(1 == 1); //compara apenas valores
console.log('1' == 1);

//operador ternario
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);