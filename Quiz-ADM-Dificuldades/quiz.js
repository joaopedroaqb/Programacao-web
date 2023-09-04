const questions = {
    easy: [
        {
            question: "Pergunta fácil 1?",
            options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
            answer: 0,
        },
        // Adicione mais perguntas fáceis aqui
    ],
    medium: [
        {
            question: "Pergunta média 1?",
            options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
            answer: 1,
        },
        // Adicione mais perguntas médias aqui
    ],
    hard: [
        {
            question: "Pergunta difícil 1?",
            options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
            answer: 2,
        },
        // Adicione mais perguntas difíceis aqui
    ],
};

const difficultySelect = document.getElementById("difficulty");
const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");

let currentDifficulty = "";
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentDifficulty][currentQuestionIndex];
    quizContainer.innerHTML = `
        <h1>Quiz de Administração</h1>
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.options.map((option, index) => `
                <li><input type="radio" name="answer" id="option-${index}" value="${index}"><label for="option-${index}">${option}</label></li>
            `).join("")}
        </ul>
        <button id="next-button">Próxima Pergunta</button>
    `;
    const nextButton = document.getElementById("next-button");
    nextButton.addEventListener("click", checkAnswer);
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        const selectedIndex = parseInt(selectedOption.value);
        const currentQuestion = questions[currentDifficulty][currentQuestionIndex];
        if (selectedIndex === currentQuestion.answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions[currentDifficulty].length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    quizContainer.innerHTML = `
        <h1>Quiz Concluído!</h1>
        <p>Pontuação: ${score} de ${questions[currentDifficulty].length}</p>
    `;
}

startButton.addEventListener("click", () => {
    currentDifficulty = difficultySelect.value;
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
});
