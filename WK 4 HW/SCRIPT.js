var questions = [
{
    questions: "What is the color of the sky?",
    options: ["Red", "Blue", "Green", "Pink"],
    correct:"Red",
},
{
    questions: "What cannot travel in space?",
    options: ["Light", "Ultraviolet Rays", "Sound", "Self-esteem"],
    correct:"Sound",
}, 
{
    questions: "Who created the Walt Disney Company?",
    options: ["Walt Disney", "Bob Chapek", "Bob Iger", "My neighbor Bob"],
    correct:"Walt Disney",
},
{
    questions: "What gives me the will to live?",
    options: ["Nothing", "Nothing", "Nothing", "Compliments"],
    correct:"Red",
}];

var questionNum = 0;
var secondsLeft = "60";
var divanswers = document.querySelector("#showOptions");
var options = document.querySelector("#showAnwers");
const questionsEl = document.getElementById("questions");
const optionsEl = document.getElementById("showOptions");
const op1 = document.querySelector("option1");
const op2 = document.querySelector("option2");
const op3 = document.querySelector("option3");
const op4 = document.querySelector("option4");

divStart = document.querySelector("#start");
divStartButton = document.querySelector("#startbtn");

divStartButton.addEventListener("click", function() {
    var instructions = document.getElementById("startbtn");
    divStart.style.display = "none";
    document.getElementById("questions").style.display = "block";
    quizTimer();
    nextQuestion();
})

function nextQuestion () {
    if(questionNum < question.lenght) {
    var newQuestion =  document.querySelector ("#question-text");
    newQuestion.textContent = questions[questionNum].question;
    console.log(Answer1);
   answer1.textContent = questions[questionsNum].answer1;
   answer2.textContent = questions[questionsNum].answer2;
   answer3.textContent = questions[questionsNum].answer3;
   answer4.textContent = questions[questionsNum].answer4;
} else {
        //hide answer divs and show results = final div
}}

divanswers.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    var clickedAnswer = event.target.textContent;
    if (clickedAnswer === questions[questionNum].correct) {
        alert ("Correct")
    } else {
        alert ("wrong")
        ;
    }

})

function SetQuestion (){
 showQuestion(questions)
}
function showQuestion(questions) {
    questionsEl.innerText= questions.questions;
}

function quizTimer() {
    var timerTime = setInterval(function() {
        secondsLeft--;
        time.textContent=secondsLeft + "seconds";
       if(secondsLeft === 0) {
            clearInterval(timerTime);
        }
    }, 1000);
}
divStartButton
//html sould have a start quiz buttom
//for every answer, there's buttons, so you will need an onclick for the buttons - give each button it's own class