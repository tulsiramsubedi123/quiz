const quizData = [
    {
        question: "What is the best way to manage study time?",
        options: ["Procrastination", "Time Management", "Cramming", "Ignoring deadlines"],
        correct: 1
    },
    {
        question: "Which of these is a healthy habit for students?",
        options: ["Pulling all-nighters", "Eating junk food", "Regular exercise", "Skipping meals"],
        correct: 2
    },
    {
        question: "What should students do to stay organized?",
        options: ["Ignore assignments", "Keep a planner", "Rely on memory", "Skip classes"],
        correct: 1
    },
    {
        question: "Which is an effective way to deal with stress?",
        options: ["Avoiding friends", "Talking to someone", "Ignoring it", "Overworking"],
        correct: 1
    },
    {
        question: "What is important for a student's mental health?",
        options: ["Social isolation", "Regular breaks", "Constant studying", "Ignoring problems"],
        correct: 1
    }
];

const quizContainer = document.getElementById('quiz');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    options.forEach((option, index) => {
        option.nextElementSibling.innerText = currentQuizData.options[index];
        option.checked = false;
    });
}

function getSelected() {
    let answer;
    options.forEach(option => {
        if (option.checked) {
            answer = option.value;
        }
    });
    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer !== undefined) {
        if (answer == quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    }
});

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.innerText = `${score} out of ${quizData.length}`;
}

restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    loadQuiz();
});
