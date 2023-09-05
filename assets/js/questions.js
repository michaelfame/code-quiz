// creating a variable that defines the questions to be asked
let questions = [ 
    {
        "title" : "which Data type is found in definig a variable",
        "choices" : ["plus", "minus", "boolean", "nouns"],
        "answer": "boolean"
    },
    {
        "title" : "which language is used for developing website",
        "choices" : ["english", "chinese", "arabic", "html"],
        "answer": "html"


    },

    {
        "title" : " which of these is a valid conditonal statement in javascript",
        "choices" : ["if", "unless", "show", "statement"],                       
        "answer": "if"


    }
]

// variables to capture all states in the quiz sectionjjj
let currentQuestionIndex = 0;
let time = questions.length * 20;
let timeid; 

//defining elemts found in the index html file

let questionsElement = documnet.getElementByid("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initails");
let feedbackelement = document.getElementById("feedback");


// variable playing sound when done
let sfxRight = new Audio("assets/sfx/correct.wav");

// declaring the functions needed to make the code-quiz work
 function getQuestion(){


 }

 function questionClick(){

 }

 function quizEnd(){
    clearInterval(timerID);

    let endSAcreenElement = document.getElementById("end-screen");
    endSAcreenElement.removeAttribute("class")


 }


 function startQuiz(){ 
    let startScreenElement = document.getElementByid("start-screen");
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");
    
    timerID = setInterval(clocktick, 1000);
    timerElement.textContent = time;
    getQuestion();




 }

 function quizEnd(){
    clearInterval(timerID);

    let endSAcreenElement = document.getElementById("end-screen");
    endSAcreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;
    
    questionsElement.setAttribute("class", "hide");



 }
// variable for the timer section

 function clocktick(){
    time--;
    timerElement.textContent = time;


    if (time<=0){

        quizEnd();
    }

 }

 function saveHighScore(){

 }
 function checkForEnter(event){

 }

 startButton.addEventListener("Click", startQuiz);

 submitButton.addEventListener("Click", saveHighScore);

 initialElement.addEventListener("keyup", checkForEnter);
