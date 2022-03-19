// Start button to begin countdown and 4/5 sets of questions with true false buttons, will output when wrong/right
// end of timer will show highscore and will ask to submit initials
// go to highscores that show list of scores and initials along with two buttons, 'go back' and 'clear high scores'

// ELEMENTS
var body = document.body;
var h1El = document.createElement("h1");
var answersEl = document.createElement("div");
var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
// correct answer
var correctAnswer = ["answer1.1", "answer2.4", "answer3.1", "answer4.3"];
var questionList = ["question1", "question2", "question3", "question4"];
var answerList1 = ["answer1.1", "answer2.1", "answer3.1", "answer4.1"];
var answerList2 = ["answer1.2", "answer2.2", "answer3.2", "answer4.2"];
var answerList3 = ["answer1.3", "answer2.3", "answer2.3", "answer4.3"];
var answerList4 = ["answer1.4", "answer2.4", "answer3.4", "answer4.4"];

var questionNumber = 0;

body.appendChild(h1El);
body.appendChild(answersEl);
answersEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
li1.appendChild(btn1);
li2.appendChild(btn2);
li3.appendChild(btn3);
li4.appendChild(btn4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
answersEl.setAttribute("style", "display: flex; justify-content: center;")
listEl.setAttribute("style", "padding:20px; list-style: none; width:50%;")
btn1.setAttribute("style", "padding:15px 25px; color: white; margin:10px; background-color:rgb(132, 0, 255); border-radius: 12px; width: 100%; text-align: left;")
btn2.setAttribute("style", "padding:15px 25px; color: white; margin:10px; background-color:rgb(132, 0, 255); border-radius: 12px; width: 100%; text-align: left;", "id", "btn2")
btn3.setAttribute("style", "padding:15px 25px; color: white; margin:10px; background-color:rgb(132, 0, 255); border-radius: 12px; width: 100%; text-align: left;", "id", "btn3")
btn4.setAttribute("style", "padding:15px 25px; color: white; margin:10px; background-color:rgb(132, 0, 255); border-radius: 12px; width: 100%; text-align: left;", "id", "btn4")
btn1.setAttribute("id", "btn1")
btn2.setAttribute("id", "btn2")
btn3.setAttribute("id", "btn3")
btn4.setAttribute("id", "btn4")

// INTRO

// NOTE: Create function to show questions with answers, if true = correct, else false = wrong and decrement 5s from timer, for loop to go to next question and answers
// QUIZ FUNCTION
function quiz(q, a1, a2, a3, a4) {
  h1El.textContent = q;
  btn1.textContent = a1;
  btn2.textContent = a2;
  btn3.textContent = a3;
  btn4.textContent = a4;
}

// shows first question
quiz(questionList[questionNumber], answerList1[questionNumber], answerList2[questionNumber], answerList3[questionNumber], answerList4[questionNumber]);
var currentCorrectAnswer = correctAnswer[questionNumber];

// EVENT LISTENER
btn1.addEventListener("click", function(event) {
  // gets button text
  var checkAnswer = document.getElementById("btn1");
  var checkAnswerText = checkAnswer.textContent;
  console.log(checkAnswerText)

  // check answer
  if (checkAnswerText == currentCorrectAnswer){
    console.log("correct");
  }

  else {
    console.log("wrong");
    // call to lose time function
  }

  nextQuestion();
}); 

btn2.addEventListener("click", function(event) {
  // gets button text
  var checkAnswer = document.getElementById("btn2");
  var checkAnswerText = checkAnswer.textContent;
  console.log(checkAnswerText)

  // check answer
  if (checkAnswerText == currentCorrectAnswer){
    console.log("correct");
  }

  else {
    console.log("wrong");
    // call to lose time function
  }

  nextQuestion();
});

btn3.addEventListener("click", function(event) {
  // gets button text
  var checkAnswer = document.getElementById("btn3");
  var checkAnswerText = checkAnswer.textContent;
  console.log(checkAnswerText)

  // check answer
  if (checkAnswerText == currentCorrectAnswer){
    console.log("correct");
  }

  else {
    console.log("wrong");
    // call to lose time function
  }

  nextQuestion();
});

btn4.addEventListener("click", function(event) {
  // gets button text
  var checkAnswer = document.getElementById("btn4");
  var checkAnswerText = checkAnswer.textContent;
  console.log(checkAnswerText)

  // check answer
  if (checkAnswerText == currentCorrectAnswer){
    console.log("correct");
  }

  else {
    console.log("wrong");
    // call to lose time function
  }

nextQuestion();
});

// LOSE TIME, take current time -5s

function nextQuestion() {
  questionNumber++;

  if(questionNumber + 1 == questionList.length) { //checks if we hit last question
    endQuiz();
  }
  quiz(questionList[questionNumber], answerList1[questionNumber], answerList2[questionNumber], answerList3[questionNumber], answerList4[questionNumber]);
  currentCorrectAnswer = correctAnswer[questionNumber];
};

function endQuiz() {
  // score submission, h1 all done, p you score is '', fill out initials form, submit button, goes to highscore pg
  
}