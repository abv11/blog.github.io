let idade = parseInt(prompt("Digite sua idade:"));
let contribuicao = parseInt(
  prompt("Digite quanto tempo de contribução você tem:")
);

if (idade >= 65 && contribuicao >= 30) {
  // O símbolo ">=" significa "maior ou igual a".
  // O símbolo "&&" significa "e" (operador lógico "e").
  // Portanto, a condição "idade >= 65 && contribuicao >= 30"
  // verifica se a idade é maior ou igual a 65 e se o tempo de contribuição é maior ou igual a 30.
  document.write("Parabéns! Você finalmente pode ser aposentar!");
} else {
  document.write("Lamento... Você não poderá se aposentar...");
}