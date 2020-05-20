var questionsArray = [
    {
        questions: "What did Luke say to his sister's bully?",
        optionA: "Stop",
        optionB: "I'm calling the police",
        optionC: "Yeet",
        optionC: "Don't you Leia hand on her",
        correct: "Don't you Leia hand on her",
    },
    {
        questions: "What cannot travel in space?",
        optionA: "Light",
        optionB: "Ultraviolet Rays",
        optionC: "Sound",
        optionD: "Self-esteem",
        correct: "Sound",
    },
    {
        questions: "Who created the Walt Disney Company?",
        optionA: "Walt Disney",
        optionB: "Bob Chapek",
        optionC: "Bob Iger",
        optionD: "My neighbor Bob",
        correct: "Walt Disney",
    },
    {
        questions: "What a Sith Lord's favorite place to shop?",
        optionA: "Mall of Millenia",
        optionB: "Publix",
        optionC: "The Darth Mall",
        optionD: "Target",
        correct: "The Darth Mall",
    },
    {
        questions: "What is a bounty hunters favorite companion?",
        optionA: "His Boba Pet!",
        optionB: "Crippling depression",
        optionC: "Paternal issues",
        optionD: "The overwhelming concept of having over hundreds of clone siblings",
        correct: "His Boba Pet!",
    }];

//variables
var questionNum = 0;
var lastQuestion = questions.lenght - 1;
var secondsLeft = "60";

var divanswers = document.querySelector("#showOptions");
var options = document.querySelector("#showAnwers");
//div elements vars
const questionsEl = document.getElementById("questions");
const optionsEl = document.getElementById("showOptions");
const nextEl = document.getElementById("nextBtn");
//options el vars
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");

divStart = document.querySelector("#start");
divStartButton = document.querySelector("#startbtn");

//click event, start button block display questions
divStartButton.addEventListener("click", function () {
    var instructions = document.getElementById("startbtn");
    divStart.style.display = "none";
    document.getElementById("questions").style.display = "block";
    quizTimer(); 
    nextQuestion();
});

//Timer
UIkit.util.ready(function quizTimer() {

    var bar = document.getElementById('js-progressbar');

    var animate = setInterval(function () {

        bar.value += 1;

        if (bar.value >= bar.max) {
            clearInterval(animate);
        }
        console.log(bar.value);
    }, 1000);

});

function nextQuestion() {

    let q = questionsArray[questionNum];

    question.innerHTML = "<p>" + q.question + "</p>";

    optionA.innerHTML = q.optionA;

    optionB.innerHTML = q.optionB;

    optionC.innerHTML = q.optionC;

    optionC.innerHTML = q.optionC;

}
// remove?
// function nextQuestion () {
//     if(questionNum < question.lenght) {
//     var newQuestion =  document.querySelector ("#question-text");
//     newQuestion.textContent = questions[questionNum].question;
//     console.log(Answer1);
//    answer1.textContent = questions[questionsNum].answer1;
//    answer2.textContent = questions[questionsNum].answer2;
//    answer3.textContent = questions[questionsNum].answer3;
//    answer4.textContent = questions[questionsNum].answer4;
// } else {
//         //hide answer divs and show results = final div
// }}

divanswers.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    var clickedAnswer = event.target.textContent;
    if (clickedAnswer === questions[questionNum].correct) {
        alert("Correct")
    } else {
        alert("wrong")
            ;
    }

})

function SetQuestion() {
    showQuestion(questions)
}
function showQuestion(questions) {
    questionsEl.innerText = questions.questions;
}

// function quizTimer() {
//     var timerTime = setInterval(function () {
//         secondsLeft--;
//         time.textContent = secondsLeft + "seconds";
//         if (secondsLeft === 0) {
//             clearInterval(timerTime);
//         }
//     }, 1000);
// }
divStartButton
//html sould have a start quiz buttom
//for every answer, there's buttons, so you will need an onclick for the buttons - give each button it's own class