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
let corSite = "azul";
let novaCorSite = "vermelho";
//verbo + substantivo - sem parametro
function resetaCor(){
  corSite = "";
};

console.log("corSite: " + corSite);
resetaCor();
console.log("corSite: " + corSite);

//verbo + substantivo - com parametro
function resetaCorParametro(cor, tonalidade){
  novaCorSite = cor + tonalidade;
};

console.log("novaCorSite: " + novaCorSite);
resetaCorParametro("rosa", " claro");
console.log("novaCorSite: " + novaCorSite);

//tipos de funçoes
//1- realiza uma tarefa e não devolve nada
function dizerNome(){
  console.log('jhonatan');
} 

dizerNome();

//2- retorna resultado
function multiplicarPorDois(valor){
  return valor * 2;
}

console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5);

console.log("resultado: " + resultado);