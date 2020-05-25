var questionsArray = [
    {
        questions: "What did Luke say to his sister's bully?",
        optionA: "Stop",
        optionB: "I'm calling the police",
        optionC: "Yeet",
        optionD: "Don't you Leia hand on her",
        correct: "D",
    },
    {
        questions: "What cannot travel in space?",
        optionA: "Light",
        optionB: "Ultraviolet Rays",
        optionC: "Sound",
        optionD: "Self-esteem",
        correct: "C",
    },
    {
        questions: "Who created the Walt Disney Company?",
        optionA: "Walt Disney",
        optionB: "Bob Chapek",
        optionC: "Bob Iger",
        optionD: "My neighbor Bob",
        correct: "A",
    },
    {
        questions: "What a Sith Lord's favorite place to shop?",
        optionA: "Mall of Millenia",
        optionB: "Publix",
        optionC: "The Darth Mall",
        optionD: "Target",
        correct: "C",
    },
    {
        questions: "What is a bounty hunters favorite companion?",
        optionA: "His Boba Pet!",
        optionB: "Crippling depression",
        optionC: "Paternal issues",
        optionD: "The overwhelming concept of having over hundreds of clone siblings",
        correct: "A",
    }];

//variables
var questionNum = 0;
var lastQuestion = questionsArray.lenght - 1;
var secondsLeft = "60";
var score = 0;

var divanswers = document.querySelector("#showOptions");
var options = document.querySelector("#showAnwers");
var checkOnclick = document.getElementsByClassName("uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom uk-text-capitalize")
//div elements vars
const questionsEl = document.getElementById("questions");
const optionsEl = document.getElementById("showOptions");
const scoreEl = document.getElementById("score");
//options el vars
var question = document.getElementById("showQuestion");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");

divStart = document.querySelector("#start");
divStartButton = document.querySelector("#startbtn");

function appendQuestion() {

    let q = questionsArray[questionNum];

    question.textContent = q.questions;
    A.textContent = q.optionA;
    B.textContent = q.optionB;
    C.textContent = q.optionC;
    D.textContent = q.optionD;
    //increase questionNum by 1 to loop through questions and options
    
   checkOnclick.addEventListener("click", checkAnswer);
}

//click event, start button block display questions
divStartButton.addEventListener("click", function () {
    divStart.style.display = "none";
    document.getElementById("questions").style.display = "block";
    //Timer
    UIkit.util.ready(function quizTimer() {

        var bar = document.getElementById("timer");

        var animate = setInterval(function () {

            bar.value += 1;

            if (bar.value >= bar.max) {
                clearInterval(animate);
            }
            console.log(bar.value);
        }, 1000);

    });
    //Functions to start at onclick event
    appendQuestion();
    keepScore();
    checkAnswer(); //  

});



//score

// function keepScore(){
//     for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
//         scoreEl.innerHTML += 
// correctAnswer()
// wrongAnswer()
//     }
// }

//Check answer, add score
function checkAnswer(answer) {
    if(questionsArray[questionNum].correct == answer){ //
        score ++;
        correctAnswer();
        //change button bckg to green
    }else{
        wrongAnswer();
        //change button bckg to red
    }
    
    count = 0;

    if(questionNum < lastQuestion){
        questionNum++;
        appendQuestion();
    }
}
function correctAnswer(){
      document.getElementById("score").style.backgroundColor = "#0f0";
  }

function wrongAnswer(){
    document.getElementById("score").style.backgroundColor = "#f00";
}
//last div
function showScore() {
    document.getElementById("results").style.display = "block";
   
    var scorePercentage = Math.round(100 * score / questionsArray.length);
    
    var show = document.getElementById("showResults");

    show.textContent = scorePercentage;

    };

// divanswers.addEventListener("click", function (event) {
//     console.log(event.target.textContent);
//     var clickedAnswer = event.target.textContent;
//     if (clickedAnswer === questions[questionNum].correct) {
//         alert("Correct")
//     } else {
//         alert("wrong")
//             ;
//     }

// })

// function SetQuestion() {
//     showQuestion(questions)
// }
// function showQuestion(questions) {
//     questionsEl.innerText = questions.questions;
// }

// divStartButton
//html sould have a start quiz buttom
//for every answer, there's buttons, so you will need an onclick for the buttons - give each button it's own class