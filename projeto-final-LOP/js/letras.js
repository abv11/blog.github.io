// Entrada de dados
let opcao = prompt("Digite uma letra:");
if (opcao.length === 1 && opcao.match(/[a-zA-Z]/)) { // Verifica se a entrada é uma letra
  // `opcao.length` retorna o número de caracteres na string `opcao`.
  // `opcao.match(/[a-zA-Z]/)` verifica se a string `opcao` contém uma letra.
  // Se `opcao` tiver apenas um caractere e for uma letra, o código continua.
  // `opcao.match(/[a-zA-Z]/)` verifica se a string `opcao` contém pelo menos um caractere que seja uma letra (a-z ou A-Z).
  // A expressão regular `/[a-zA-Z]/` é usada para procurar letras no intervalo de a a z (minúsculas) e A a Z (maiúsculas).
  // Se a string `opcao` contiver uma letra, o método `match()` retorna um array com a correspondência encontrada.
  // Um array é uma estrutura de dados que armazena uma coleção de valores.
  // Em JavaScript, os arrays são indexados a partir de zero, ou seja, o primeiro elemento tem índice 0, o segundo elemento tem índice 1, e assim por diante.
  // Os arrays podem conter diferentes tipos de dados, como números, strings, objetos e outros arrays.
  // Caso contrário, `match()` retorna `null`.
  // Se `opcao` não contiver uma letra, o código entra no bloco else.
  // Se a entrada for uma única letra, o código continua.

  switch (opcao.toLowerCase()) { // Converte a entrada para minúsculas
    // O switch compara a letra digitada com as vogais (a, e, i, o, u).
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      // Se a letra for uma vogal, imprime "É uma vogal".
      document.write("É uma vogal");
      break;
    default:
      // Se a letra não for uma vogal, imprime "É uma consoante".
      document.write("É uma consoante");
  }
} else {
  // Se a entrada não for uma única letra, imprime "Por favor, digite apenas letras.".
  document.write("Por favor, digite apenas letras.");
}