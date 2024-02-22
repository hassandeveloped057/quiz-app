var quizData = [
    {
        question: "1. Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<js>", "<scripting>",],
        correctAnswer: "<script>"
    },
    {
        question: "2. Where is the correct place to insert a JavaScript?",
        choices: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct",],
        correctAnswer: "Both the <head> section and the <body> section are correct"
    },
    {
        question: "3. What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>",],
        correctAnswer: "<script src='app.js'>"
    },
    {
        question: "4. How do you write 'Hello World' in an alert box?",
        choices: ["alert('Hello World')", "msg('Hello World')", "alertBox('Hello World')",],
        correctAnswer: "alert('Hello World')"
    },
    {
        question: "5. How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function:myFunction()", "function myFunction()",],
        correctAnswer: "function myFunction()"
    },
    {
        question: "6. How to write an IF statement in JavaScript?",
        choices: ["if i = 5", "if(i == 5)", "if i = 5 then",],
        correctAnswer: "if(i == 5)"
    },
    {
        question: "7. How does a WHILE loop start?",
        choices: ["while i = 1 to 10", "while(i <= 10)", "while(i <= 10; i++)",],
        correctAnswer: "while(i <= 10)"
    },
    {
        question: "8. How do you round the number 7.25, to the nearest integer?",
        choices: ["Math.round(7.25)", "round(7.25)", "rnd(7.25)",],
        correctAnswer: "Math.round(7.25)"
    },
    {
        question: "9. JavaScript is the same as Java.",
        choices: ["True", "False",],
        correctAnswer: "False"
    },
    {
        question: "10. How do you declare a JavaScript variable?",
        choices: ["variable carName;", "var carName;","v carName;",],
        correctAnswer: "var carName;"
    },
    // Add more questions here
];

var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var submitButton = document.getElementById("submit");
var resultElement = document.getElementById("result");

var currentQuestion = 0;
var score = 0;

function loadQuestion() {
    var currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = "";
     resultElement.style.display = "none";
     submitButton.style.display = "block";
    currentQuizData.choices.forEach(choice => {
        var peragraph = document.createElement("p");
        peragraph.innerText = choice;
        peragraph.classList.add("choice");
        peragraph.addEventListener("click", checkAnswer);
        choicesElement.appendChild(peragraph);
        
    });
}

function checkAnswer(event) {
    var selectedChoice = event.target.innerText;
    var currentQuizData = quizData[currentQuestion];

    if (selectedChoice === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.innerText = "";
    choicesElement.innerHTML = "";
    submitButton.style.display = "none";
    var percentage = (score / quizData.length) * 100;
    resultElement.innerText = `You scored ${percentage.toFixed(2)}%`;
    resultElement.style.fontSize = "40px";
    resultElement.style.display = "block";
}

loadQuestion();


function restartQuiz() {

    currentQuestion = 0;
    score = 0;
    loadQuestion();
   
  }  