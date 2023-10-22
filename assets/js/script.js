var questions = [
    {   
    question: "What is the primary purpose of JavaScript in web development?",
    choices: {
        A:"Styling web pages", 
        B:"Adding interactivity and functionality to web pages", 
        C:"Defining web page structure", 
        D:"Storing data on the server",
    },
    correct: "B"
},   
    {
    question: "Which keyword is used to declare a variable in JavaScript?",
    choices: {
        A: "var", 
        B: "let", 
        C: "variable",
        D: "vartype",
    },
    correct: "C"
},  
    {
    question: 'What does the "DOM" stand for in the context of JavaScript?',
    choices: {
        A: "Document Object Model", 
        B: "Data Object Model", 
        C: "Document Orientation Module",
        D: "Digital Object Manipulation",
    },
    correct: "A",
},
    {
    question: "Which JavaScript function is used to output text or data to the browser console for debugging purposes?",
    choices: {
        A: "alert()", 
        B: "log()", 
        C: "print()",
        D: "display()",
    },
    correct: "B",
},
]

var questionElement = document.getElementById('question');
var choicesElement = document.getElementById('choices');
var startButton = document.getElementById('start');
var nextButton = document.getElementById('next');
var finishButton = document.getElementById('finish');
var formElement = document.getElementById('form');
var initials = document.getElementById('initials');
var initialsText = document.getElementById('initials-text');
var finalScoreElement = document.getElementById('score-percentage');
var saveButton = document.getElementById('save');
var timerElement = document.getElementById('timer');
var quizDuration = 60;
var timeLeft = quizDuration;
var timerInterval;


startButton.addEventListener('click', loadQuestion);
startButton.addEventListener('click', function () {
    timerInterval = setInterval(updateTimer, 1000);
});
nextButton.addEventListener('click', checkAnswer);
saveButton.addEventListener('click', saveResults);
let currentQuestion = 0
let score = 0

function loadQuestion () {
    var question = questions[currentQuestion];
    questionElement.textContent = question.question;
    for (var choice in question.choices) {
        document.getElementById('choice' + choice).textContent = question.choices[choice];
    }  

    startButton.style.display = "none";
    formElement.style.display = "block";
    nextButton.style.display = "block";
    questionElement.style.display = "block";
}
function updateTimer () {
    timerElement.textContent = `Time Left: ${timeLeft} seconds`;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        showResult ();
    }
    timeLeft--;
}

function checkAnswer() {
    var selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        var correctAnswer = questions[currentQuestion].correct;
        var userAnswer = selectedChoice.value;
        if (correctAnswer === userAnswer) {
            score++;   
        } else {
            timeLeft -=10;
        }
    
        currentQuestion++;

        if (currentQuestion < questions.length) {
        loadQuestion ();
        } else {
        showResult ();
        }
    }
}


function showResult () {
    questionElement.textContent = ("Quiz Complete");
    choicesElement.textContent = (`You got ${score} out of ${questions.length} correct!`);
    nextButton.style.display = "none";
    initials.style.display = "block";
    initialsText.style.display = "block";
    saveButton.style.display = "block";

    finalScore = ((score / questions.length) * 100);
    finalScore = `${finalScore}%`;
    finalScoreElement.textContent = `Your Score: ${finalScore}`;
}

function saveResults () {
    var userInitials = initials.value;
    var userScore = `${finalScore}`;
    localStorage.setItem('userInitials', userInitials);
    localStorage.setItem('userScore', userScore);
}