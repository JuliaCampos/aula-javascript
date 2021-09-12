//medidor de velocidade
//velocidade maxima = 70
// velocidade até 70
// a cada 5km ganha 1 ponto
//maior que 12 a carteira é supensa

verificarVelocidade(281);

function verificarVelocidade(velocidade){
  const velocidadeMaxima = 70;
  const kmPonto = 5;
  const maxPontos = 12

  if(velocidade <= velocidadeMaxima){
    console.log('ok');
  }else{
    //console.log(velocidade - 70);
    const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPonto);

    if(pontos >= maxPontos){
      console.log('carteira suspensa: ', pontos);
    }else{
      console.log('pontos: ', pontos);
    }
  }
}