var questions = [
    {   
    question: "What is the primary purpose of JavaScript in web development?",
    choices: {
        A:"Styling web pages", 
        B:"Adding interactivity and functionality to web pages", 
        C:"Defining web page structure", 
        D:"Storing data on the server",
    },
    correct: "C"
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

// var quizContainer = document.getElementById('quiz-container')


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

function checkAnswer() {
    var selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        var correctAnswer = questions[currentQuestion].correct;
        var userAnswer = selectedChoice.value;

        if (correctAnswer === userAnswer) {
            score++;   
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
}

startButton.addEventListener('click', loadQuestion);

nextButton.addEventListener('click', checkAnswer);