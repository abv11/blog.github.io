/* JavaScript responsável pelo funcionamento da calculadora. */

function calcular() {
    // Declaração da função que realiza o cálculo.

    const num1 = parseFloat(document.getElementById('num1').value);
    // Captura o valor inserido no campo "Número 1" (através do ID 'num1')
    // e o converte para um número decimal (float) usando parseFloat().

    const num2 = parseFloat(document.getElementById('num2').value);
    // Captura o valor inserido no campo "Número 2" (através do ID 'num2')
    // e o converte para um número decimal (float) usando parseFloat().

    const operacao = document.getElementById('operacao').value;
    // Captura o valor selecionado no menu suspenso (através do ID 'operacao')
    // que representa a operação a ser realizada.

    let resultado;
    // Declara a variável onde o resultado do cálculo será armazenado.

    if (isNaN(num1) || isNaN(num2)) {
        // Verifica se algum dos valores inseridos (num1 ou num2)
        // não é um número válido (NaN - Not a Number).
        resultado = 'Por favor, insira números válidos.';
        // Se algum dos valores não for um número, exibe uma mensagem de erro.
    } else {
        // Se os valores forem válidos (números), realiza a operação selecionada.
        switch (operacao) {
            case 'adicao':
                // Caso a operação selecionada seja 'adicao'.
                resultado = num1 + num2;
                // Realiza a adição dos números e armazena o resultado.
                break;

            case 'subtracao':
                // Caso a operação selecionada seja 'subtracao'.
                resultado = num1 - num2;
                // Realiza a subtração dos números e armazena o resultado.
                break;

            case 'multiplicacao':
                // Caso a operação selecionada seja 'multiplicacao'.
                resultado = num1 * num2;
                // Realiza a multiplicação dos números e armazena o resultado.
                break;

            case 'divisao':
                // Caso a operação selecionada seja 'divisao'.
                if (num2 !== 0) {
                    // Verifica se o divisor (num2) não é zero para evitar erros.
                    resultado = num1 / num2;
                    // Realiza a divisão dos números e armazena o resultado.
                    if (num2 === 1) {
                        // Caso o divisor seja 1, a divisão resulta no dividendo.
                        resultado = 'O resultado de um número dividido por 1 é igual quem fica com você no final.';
                        // Exibe uma mensagem especial para a divisão por 1.
                    } else {
                        // Caso o divisor seja diferente de 1, a divisão é realizada normalmente.
                        resultado = num1 / num2;
                        // Calcula a divisão e exibe o resultado.
                    }
                } else {
                    // Mensagem de erro amigável para divisão por zero.
                    resultado = 'Divisão por zero é igual amor recíproco.';
                }
                break;

            default:
                // Caso a operação selecionada não seja válida (não coincida com nenhuma das opções).
                resultado = 'Operação inválida.';
                // Exibe uma mensagem de erro para operação inválida.
        }
    }

    // Exibe o resultado no parágrafo com o ID "resultadoCalculadora".
    document.getElementById('resultadoCalculadora').textContent = `Resultado: ${resultado}`;
    // A propriedade textContent do elemento parágrafo é atualizada com o resultado.
}