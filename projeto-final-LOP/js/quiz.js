// Função que verifica as respostas do quiz
function verificarRespostas() {
    // Objeto que contém as respostas corretas para cada pergunta do quiz.
    // A chave do objeto representa o número da pergunta (q1, q2, etc.) e o valor
    // representa a letra da opção correta.
    const respostasCorretas = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'a',
        q5: 'a'
    };

    // Inicializa a pontuação do usuário como 0.
    let pontuacao = 0;
    // Obtém a div com o ID 'resultadoQuiz', onde o resultado do quiz será exibido.
    const resultadoDiv = document.getElementById('resultadoQuiz');
    // Limpa o conteúdo anterior da div de resultado.
    resultadoDiv.innerHTML = '';

    // Loop que percorre cada pergunta do quiz (de 1 a 5).
    for (let i = 1; i <= 5; i++) {
        // Obtém todos os elementos de entrada (radio buttons) que representam as opções de resposta para a pergunta atual.
        const pergunta = document.getElementsByName('q' + i);
        // Inicializa a variável respostaSelecionada com null, representando que nenhuma opção foi selecionada ainda.
        let respostaSelecionada = null;

        // Loop que percorre cada opção de resposta da pergunta atual.
        for (const opcao of pergunta) {
            // Verifica se a opção atual está marcada (selecionada pelo usuário).
            if (opcao.checked) {
                // Se a opção está marcada, atribui o valor da opção (a, b, c ou d) à variável respostaSelecionada.
                respostaSelecionada = opcao.value;
                // Sai do loop interno, pois apenas uma opção pode ser selecionada por pergunta.
                break;
            }
        }

        // Obtém o contêiner da pergunta atual, que contém as opções de resposta e o enunciado da pergunta.
        const perguntaDiv = pergunta[0].closest('.pergunta');
        // Obtém todos os elementos de label (texto que descreve cada opção de resposta) dentro do contêiner da pergunta.
        const labels = perguntaDiv.getElementsByTagName('label');

        // Loop que percorre cada label da pergunta atual.
        for (const label of labels) {
            // Obtém o elemento de entrada (radio button) associado ao label atual.
            const input = label.getElementsByTagName('input')[0];
            // Adiciona a classe 'correta' ao label se o valor da opção de resposta (input.value) for igual à resposta correta para a pergunta atual.
            if (input.value === respostasCorretas['q' + i]) {
                label.classList.add('correta');
            } else {
                // Remove a classe 'correta' do label se o valor da opção de resposta não for igual à resposta correta.
                label.classList.remove('correta');
            }
            // Adiciona a classe 'incorreta' ao label se a opção de resposta estiver marcada (input.checked) e o valor da opção não for igual à resposta correta.
            if (input.checked && input.value !== respostasCorretas['q' + i]) {
                label.classList.add('incorreta');
            } else {
                // Remove a classe 'incorreta' do label se a opção de resposta não estiver marcada ou se for a resposta correta.
                label.classList.remove('incorreta');
            }
        }

        // Se a resposta selecionada pelo usuário for igual à resposta correta da pergunta atual, incrementa a pontuação em 1.
        if (respostaSelecionada === respostasCorretas['q' + i]) {
            pontuacao++;
        }
    }

    // Exibe o resultado final do quiz na div de resultado, informando quantos acertos o usuário teve.
    resultadoDiv.textContent = `Você acertou ${pontuacao} de 5 perguntas.`;
}