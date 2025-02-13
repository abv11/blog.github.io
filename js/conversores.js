// Função principal que realiza a conversão.
function converter() {
    // Obtém o valor inserido no campo "valor" e o converte para um número decimal.
    const valor = parseFloat(document.getElementById('valor').value);

    // Obtém o valor do tipo de conversão selecionado no menu suspenso.
    const tipoConversao = document.getElementById('tipoConversao').value;

    // Declara a variável onde o resultado será armazenado.
    let resultado;

    // Verifica se o valor inserido não é um número válido.
    if (isNaN(valor)) {
        // Se o valor não for um número válido, exibe uma mensagem de erro amigável.
        resultado = 'Por favor, insira um valor numérico válido.';
    } else {
        // Se o valor for válido, realiza a conversão com base no tipo selecionado.
        switch (tipoConversao) {
            case 'temperatura':
                // Conversão de Celsius para Fahrenheit.
                // Aplica a fórmula para converter Celsius para Fahrenheit: (valor * 9 / 5) + 32.
                resultado = (valor * 9 / 5) + 32;
                // Formata o resultado para exibir a temperatura em Celsius e Fahrenheit com duas casas decimais.
                resultado = `${valor}°C equivalem a ${resultado.toFixed(2)}°F.`;
                break;

            case 'comprimento':
                // Conversão de Metros para Centímetros.
                // Multiplica o valor em metros por 100 para obter a conversão em centímetros.
                resultado = valor * 100;
                // Formata o resultado para exibir a distância em metros e centímetros com duas casas decimais.
                resultado = `${valor} metros equivalem a ${resultado.toFixed(2)} centímetros.`;
                break;

            case 'massa':
                // Conversão de Quilos para Libras.
                // Multiplica o valor em quilos por 2,20462 para obter a conversão em libras.
                resultado = valor * 2.20462;
                // Formata o resultado para exibir o peso em quilos e libras com duas casas decimais.
                resultado = `${valor} quilos equivalem a ${resultado.toFixed(2)} libras.`;
                break;

            default:
                // Mensagem para casos em que o tipo de conversão seja inválido.
                resultado = 'Tipo de conversão inválido.';
        }
    }

    // Exibe o resultado no elemento com ID "resultadoConversor".
    document.getElementById('resultadoConversor').textContent = resultado;
}
//Função converter:
//O objetivo principal é realizar a conversão de unidades com base no tipo selecionado.
//O valor inserido é obtido do campo input e convertido para um número com parseFloat.
//O tipo de conversão é capturado do select (tipoConversao).
//Uma variável resultado é declarada para armazenar o resultado da conversão.

//Verificação de Entrada Inválida:
//Se o valor não for numérico (ou seja, isNaN(valor) retorna true), uma mensagem de erro amigável é exibida.

//Conversão de Temperatura:
//Dependendo do valor de tipoConversao, a operação correspondente é realizada:
//Temperatura: A fórmula (valor * 9 / 5) + 32 converte Celsius para Fahrenheit.
//Comprimento: Multiplica metros por 100 para obter centímetros.
// Massa: Multiplica quilos por 2,20462 para obter libras.
//O toFixed(2) limita o resultado a duas casas decimais, para maior clareza.

//Exibição do Resultado:
//O resultado é exibido no elemento com ID "resultadoConversor
//O texto do elemento com ID resultadoConversor é atualizado dinamicamente com o resultado.