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