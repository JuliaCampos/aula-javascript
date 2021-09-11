//mostrar na tela
console.log('hello world')
 
 //variaveis 
 let idade = 15;
 console.log('idade = ' + idade);
 
 //constantes
let valorIngressoAdulto = 20;
valorIngressoAdulto = 30;
console.log('valor ingresso: ' + valorIngressoAdulto);

const valorNaoPodeMudar = 10;
console.log('valor constante: ' + valorNaoPodeMudar); 

//tipos primitivos
//referência
let nome = 'Rafael'; // string
let valor = 10.0; //number
let bolean = true; //boolean
let valorPadrao; // sem definição
let corSelecionada = null; // permite redefinir valor

//tipagem dinâmica
//tipeof verifica o tipo da variavel

//objetos
let pessoa={
  nome: 'Rafael', //chave e valor
  idade: 21,
  bolean: true
};

console.log(pessoa);

//arrays -
//comjunto de dados que pode ser acessado por um indice
//a contagem inicia do zero
let familia = [26, true, 10, 20, 'joao', 17];

console.log(familia.length);
console.log(familia);
console.log(familia[3]);

//funcoes(functions)

