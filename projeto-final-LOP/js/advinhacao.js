// Jogador 1 insere o número a ser adivinhado
let numeroASerAdivinhado = prompt("Jogador 1, digite um número de 1 a 100:");
// Confirma que o jogo começou
document.write("O jogo começou!<p> Jogador 2 tem 10 tentativas para adivinhar o número.<br><br>" + "O numero escolhido pelo Jogador 1 foi: " + numeroASerAdivinhado + "<p>");
// Define o número de tentativas restantes
let tentativasRestantes = 10;
// Define se o jogador acertou ou não
let acertou = false;
// Laço de repetição para as tentativas
while (tentativasRestantes > 0 && !acertou) {
  // Pede ao jogador 2 para digitar um chute e exibe o número de tentativas restantes
  let chute = prompt("Digite seu chute (Tentativas restantes: " + tentativasRestantes + "):");
  // Verifica se o chute é igual ao número a ser adivinhado
  if (chute == numeroASerAdivinhado) {
    // Se acertou, exibe a mensagem de parabéns e define a variável 'acertou' como verdadeira
    document.write("<br>Parabéns! Você acertou o número!<br>");
    acertou = true;
  } else if (chute < numeroASerAdivinhado) {
    // Se o chute foi menor que o número a ser adivinhado, exibe a mensagem de que o chute foi baixo
    document.write(chute + "... Maior, foi um chute alto!<br>");
  } else {
    // Se o chute foi maior que o número a ser adivinhado, exibe a mensagem de que o chute foi alto
    document.write(chute + "... Menor, foi um chute baixo!<br>");
  }
  // Diminui o número de tentativas restantes em 1
  tentativasRestantes = tentativasRestantes - 1;
}
// Se o jogador não acertou após todas as tentativas, exibe a mensagem de que ele perdeu e revela o número
if (!acertou) {
  document.write("Que pena! Você não conseguiu acertar. O número era " + numeroASerAdivinhado + ".<br>");
}