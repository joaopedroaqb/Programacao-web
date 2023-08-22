const questions = [
    {
        question: "O que é administração?",
        options: ["Um processo de tomar decisões financeiras", "Um conjunto de atividades que visam atingir objetivos organizacionais", "Um método de gerenciar o tempo eficazmente", "Uma forma de fazer marketing"],
        answer: 1
    },
    {
        question: "Qual é o objetivo principal da administração financeira?",
        options: ["Maximizar o lucro a curto prazo", "Minimizar os custos operacionais", "Aumentar a satisfação dos clientes", "Maximizar o valor para os acionistas"],
        answer: 3
    },
    // Adicione mais perguntas aqui
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");
const resultTextElement = document.getElementById("result-text");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }

    question.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(li);
    });
    nextButton.disabled = true; // Desabilita o botão até que o usuário selecione uma opção.
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

optionsElement.addEventListener('click', () => {
    nextButton.disabled = false; // Habilita o botão quando o usuário seleciona uma opção.
});

nextButton.addEventListener("click", () => {
    if (!nextButton.disabled) { // Verifica se o botão está habilitado antes de avançar para a próxima pergunta.
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
});

function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = `Pontuação: ${score}/${questions.length}`;

    if (score === questions.length) {
        resultTextElement.textContent = "Parabéns! Você acertou todas as perguntas!";
    } else {
        resultTextElement.textContent = "Bom trabalho! Você completou o quiz.";
    }
}

loadQuestion();
