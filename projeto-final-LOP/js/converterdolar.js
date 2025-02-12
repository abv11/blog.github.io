// Entrada de dados
let valorDolares = parseFloat(prompt("Digite o valor em dólares:"));

// Processamento de dados
let taxaCambio = 6.15;

// Calcula o valor em reais
let valorReais = valorDolares * taxaCambio;

// Saída de dados
document.write("O valor em reais é: R$" + valorReais.toFixed(2));
// 
// toFixed(2) formata o valor em reais para ter duas casas decimais após o ponto.
// É importante notar que a função toFixed() retorna uma string, então você precisa converter a string.
// Isso garante que o valor seja apresentado como uma moeda, com centavos.