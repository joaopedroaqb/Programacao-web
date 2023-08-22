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
	{
		question: "Qual é o objetivo principal da administração financeira?",
		options: ["Maximizar o lucro a curto prazo", "Minimizar os custos operacionais", "Aumentar a satisfação dos clientes", "Maximizar o valor para os acionistas"],
		answer: 3
	},
		
	{
		question: "O que é gestão de recursos humanos?",
		options: ["Gerenciamento de máquinas e equipamentos", "Gerenciamento de pessoas dentro de uma organização", "Gestão de fornecedores externos", "Gerenciamento de projetos de TI"],
		answer: 1
	},
		
	{
		question: "Qual é o objetivo da análise SWOT em administração?",
		options: ["Avaliar o desempenho financeiro da empresa", "Identificar oportunidades de mercado e ameaças internas", "Definir metas de curto prazo", "Melhorar a eficiência da produção"],
		answer: 2
	},
		
	{
		question: "O que é liderança transformacional?",
		options: ["Um estilo de liderança que se concentra em tarefas e resultados", "Um estilo de liderança que enfatiza a autoridade centralizada", "Um estilo de liderança que inspira e motiva os seguidores a alcançar objetivos comuns", "Um estilo de liderança que ignora os funcionários"],
		answer: 3
	},
		
	{
		question: "O que é benchmarking em administração?",
		options: ["Uma técnica para avaliar o desempenho financeiro de uma empresa", "Uma abordagem para criar novos produtos", "Um processo de comparação com outras organizações para identificar melhores práticas", "Uma estratégia de redução de custos"],
		answer: 2
	},
		
	{
		question: "O que é gestão da cadeia de suprimentos?",
		options: ["A gestão das vendas de uma empresa", "O gerenciamento de ativos financeiros", "A gestão das relações com os clientes", "O gerenciamento de todas as etapas envolvidas na produção e entrega de um produto ou serviço"],
		answer: 4
	},
		
	{
		question: "O que é o método PDCA (Plan-Do-Check-Act) na administração?",
		options: ["Um método de contabilidade", "Um ciclo de melhoria contínua que envolve planejamento, execução, verificação e ação corretiva", "Um modelo de estrutura organizacional", "Um sistema de gerenciamento de projetos"],
		answer: 2
	},
		
	{
		question: "O que significa ROI (Return on Investment) em administração?",
		options: ["Recuperação de investimentos", "Retorno sobre o investimento", "Redução de obrigações inesperadas", "Registro de oportunidades de inovação"],
		answer: 2
	},
	{
		question: "O que é gestão da qualidade total?",
		options: ["Um sistema de gerenciamento de recursos humanos", "Uma abordagem que visa melhorar continuamente a qualidade dos produtos e serviços", "Um método de redução de custos", "Um sistema de avaliação de desempenho"],
		answer: 2
	},
	{
		question: "Qual é a principal função do planejamento estratégico?",
		options: ["Gerenciar o dia a dia das operações da empresa", "Definir objetivos e diretrizes de longo prazo para a organização", "Monitorar os processos de produção", "Realizar análises financeiras detalhadas"],
		answer: 2
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
