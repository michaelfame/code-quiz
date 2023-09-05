// variables to capture all states in the quiz sectionjjj
let currentQuestionIndex = 0;
let time = questions.length * 20;
// let timeid; 

//defining elements found in the index html file

let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedbackelement = document.getElementById("feedback");


// variable playing sound when done
let sfxRight = new Audio("assets/sfx/correct.wav");

// declaring the functions needed to make the code-qi pick a question and scroll through the choices
 function getQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let titleElement = document.getElementById( "question-title");
    titleElement.textContent = currentQuestion.title;
    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index){
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index + 1}. ${choice}`
        choiceButton.addEventListener("click", questionClick);
        choicesElement.append(choiceButton);
        
    })

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


