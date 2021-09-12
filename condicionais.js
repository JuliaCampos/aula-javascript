//condicionais
//if..else
let hora = 12;

if (hora > 6 && hora < 12) {
  console.log("bom dia");
}
else if (hora => 12 && hora < 18) {
  console.log("boa tarde")
}
else {
  console.log("boa noite");
}

//switch...case
let permissao;

switch (permissao) {
  case 'comum':
    console.log('usuario comum');
    break;
  case 'gerente':
    console.log('usuario gerente');
    break;
  case 'diretor':
    console.log('diretor');
    break;
  default:
    console.log('usuario não reconhecido')
}