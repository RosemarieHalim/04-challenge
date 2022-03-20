// ELEMENTS for questions
var h1El = document.getElementById("question");
var h2El = document.getElementById("wrong");
var answersEl = document.getElementById("quiz");
var scoreEl = document.getElementById("totalScore");
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var questionNumber = 0;

// ELEMENTS for highscores
var listEl = document.getElementById('names')
var backBtn = document.getElementById('back');
var clearBtn = document.getElementById('clear');
var scoreNumber = 1;

// ELEMENT For timer
var timerEl = document.getElementById('countdown');
var timeInterval;
var timeLeft = 60;
var finalScore;

// ARRAYs
var correctAnswer = ["answer1.1", "answer2.4", "answer3.2", "answer4.3"];
var questionList = ["question1", "question2", "question3", "question4","All Done!"];
var answerList1 = ["answer1.1", "answer2.1", "answer3.1", "answer4.1"];
var answerList2 = ["answer1.2", "answer2.2", "answer3.2", "answer4.2"];
var answerList3 = ["answer1.3", "answer2.3", "answer2.3", "answer4.3"];
var answerList4 = ["answer1.4", "answer2.4", "answer3.4", "answer4.4"];
var currentCorrectAnswer = correctAnswer[questionNumber];

// INTRO
function showWelcome() {
  document.getElementById('welcome').style.display = "block";
  document.getElementById('quiz').style.display = "none";
  document.getElementById('score').style.display = "none";
  document.getElementById('highscore').style.display = "none";
  document.getElementById('highscoreLink').style.display = "block";
}

function showQuiz() {
  document.getElementById('welcome').style.display = "none";
  document.getElementById('score').style.display = "none";
  document.getElementById('quiz').style.display = "block";
  document.getElementById('highscore').style.display = "none";
  document.getElementById('countdown').style.display = "block";
  
  startTimer();

  // shows first question
  quiz(questionList[questionNumber], answerList1[questionNumber], answerList2[questionNumber], answerList3[questionNumber], answerList4[questionNumber]);
}

function showScore() {
  document.getElementById('welcome').style.display = "none";
  document.getElementById('score').style.display = "block";
  document.getElementById('quiz').style.display = "none";
  document.getElementById('highscore').style.display = "none";
  document.getElementById('countdown').style.display = "none";

  finalScore = timeLeft;
  timeLeft = 60;

  scoreEl.textContent = "Your total score is " + finalScore;
}

function highscore() {
  document.getElementById('welcome').style.display = "none";
  document.getElementById('score').style.display = "none";
  document.getElementById('quiz').style.display = "none";
  document.getElementById('highscore').style.display = "block";
  document.getElementById('countdown').style.display = "none";
  document.getElementById('highscoreLink').style.display = "none";

  getAllScores();
}

// QUIZ FUNCTION
function quiz(q, a1, a2, a3, a4) {
  h1El.textContent = q;
  btn1.textContent = a1;
  btn2.textContent = a2;
  btn3.textContent = a3;
  btn4.textContent = a4;
}

// EVENT LISTENER SECTION
btn1.addEventListener("click", function(event) {
  checkQuestion("btn1")
}); 

btn2.addEventListener("click", function(event) {
  checkQuestion("btn2")
});

btn3.addEventListener("click", function(event) {
  checkQuestion("btn3")
});

btn4.addEventListener("click", function(event) {
  checkQuestion("btn4")
});

// CHECK ANSWER/QUESTION FUNCTION
function checkQuestion(buttonName) {
    // gets button text
    var checkAnswer = document.getElementById(buttonName);
    var checkAnswerText = checkAnswer.textContent;
    console.log(checkAnswerText)
  
    // check answer
    if (checkAnswerText == currentCorrectAnswer){
      h2El.textContent = "Correct!"
      console.log("correct");
    }
  
    else {
      console.log("wrong");
      h2El.textContent = "Wrong!"

      loseTime();
    }
  
    nextQuestion();
}

// MOVE TO NEXT QUESTION FUNCTION
function nextQuestion() {
  questionNumber++;

  if(questionNumber + 1 == questionList.length) { //checks if we hit last question
    stopTime();
    showScore();
  }

  quiz(questionList[questionNumber], answerList1[questionNumber], answerList2[questionNumber], answerList3[questionNumber], answerList4[questionNumber]);
  currentCorrectAnswer = correctAnswer[questionNumber];
};

// YOUR SCORE FUNCTION
function addScore() {
  var initials = document.getElementById("initials").value;

  // checks for a previous score and if greater than previous
  if(localStorage.getItem(initials) && localStorage.getItem(initials) > finalScore) {
    localStorage.setItem(initials, finalScore);
  }
  // for first time submitting score
  else if (!localStorage.getItem(initials)){
    localStorage.setItem(initials, finalScore);
  }
  scoreNumber++;
  highscore();
}

// HIGHSCORES FUNCTION
function getAllScores() {
  var nameList = document.getElementById('names');

  var keys = Object.keys(localStorage);
  var keyLength = keys.length;
  while(keyLength--) {
    var nameEl = document.createElement('li');
    var name = document.createElement('p');
    var score = document.createElement('p');

    name.textContent = keys[keyLength]
    score.textContent = localStorage.getItem(keys[keyLength]); //gets name and score
    nameEl.appendChild(name);
    nameEl.appendChild(score);
    nameList.appendChild(nameEl);
  }
}

function goBack() {
  showWelcome();
  questionNumber = 0;
}

function clearScores() {
  localStorage.clear();
}

// TIMER FUNCTION
function startTimer() {
  // the `setInterval()` method to call a function to be executed every 1000 milliseconds
 timeInterval = setInterval(() => {

    if (timeLeft > 0){
      timerEl.textContent = timeLeft;
      timeLeft--;
    }
    else if (timeLeft === 0) {
      clearInterval(timeInterval);
      timeLeft = 60;
      addScore();
    }
  },
  1000);
  }

function loseTime() {
    timeLeft -= 5;
  }

function stopTime() {
  clearInterval(timeInterval);
}