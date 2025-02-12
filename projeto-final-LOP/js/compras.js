alert("SEJA BEM-VINDO(A)!")
// Entrada de dados
let valorUnidade = prompt("Digite o valor da unidade do produto:");
let pedido = parseFloat(prompt("Digite quantas unidades você deseja"));
// parseFloat converte o valor inserido para um número decimal
valorUnidade = parseFloat(valorUnidade);
pedido = parseFloat(pedido);
if (pedido >= 1) {
  // Cálculo do valor total
  let valorTotal = valorUnidade * pedido;
  // Exibição do valor total
  document.write(pedido + " unidades irão custar " + valorTotal + " reais.");
} else {
  alert("Insira um valor válido");
  //Exibe uma caixinha de mensagem de alerta se o usuário não digitar um valor válido
}