let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag)
campo.innerHTML = texto ;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

  exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO');
  exibirTextoNaTela('p', 'ESCOLHA UM NÚMERO DE 1 A 100');


  
function verificarChute(){
  let chute = document.querySelector('input').value;

if (chute == numeroSecreto) {
  exibirTextoNaTela('h1', 'ACERTOU!!');
  let palavraTentativa = tentativas > 1 ? 'TENTATIVAS' : 'TENTATIVA';
  let mensagemTentativas = `VOCÊ DESCOBRIU O NÚMERO SECRETO COM ${tentativas} ${palavraTentativa}`;
  exibirTextoNaTela('p',mensagemTentativas);
  document.getElementById('reiniciar').removeAttribute('disabled');
} else {
  if (chute > numeroSecreto){
    exibirTextoNaTela('p', 'O NÚMERO SECRETO É MENOR');
  } else {
    exibirTextoNaTela('p', 'O NÚMERO SECRETO É MAIOR!');
  }
  tentativas++;
  limparCampo();
}
}

function gerarNumeroAleatorio(){
  return parseInt(Math.random() * 100 + 1);
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirTextoNaTela('h1', 'JOGO DO NÚMERO SECRETO');
  exibirTextoNaTela('p', 'ESCOLHA UM NÚMERO DE 1 A 100');
  document.getElementById('reiniciar').setAttribute('disabled', 
  true);
 }