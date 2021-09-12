//funcoes(functions)
let corSite = "azul";
let novaCorSite = "vermelho";
//verbo + substantivo - sem parametro
function resetaCor() {
  corSite = "";
};

console.log("corSite: " + corSite);
resetaCor();
console.log("corSite: " + corSite);
*/
//verbo + substantivo - com parametro
/*function resetaCorParametro(cor, tonalidade) {
  novaCorSite = cor + tonalidade;
};

console.log("novaCorSite: " + novaCorSite);
resetaCorParametro("rosa", " claro");
console.log("novaCorSite: " + novaCorSite);

//tipos de funçoes
//1- realiza uma tarefa e não devolve nada
function dizerNome() {
  console.log('jhonatan');
}

dizerNome();

//2- retorna resultado
function multiplicarPorDois(valor) {
  return valor * 2;
}

console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5);

console.log("resultado: " + resultado);
