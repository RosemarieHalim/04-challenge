// Start button to begin countdown and 4/5 sets of questions with true false buttons, will output when wrong/right
// end of timer will show highscore and will ask to submit initials
// go to highscores that show list of scores and initials along with two buttons, 'go back' and 'clear high scores'

// ANSWERS
var body = document.body;
var h1El = document.createElement("h1");
var answersEl = document.createElement("div");
// ordered list element
var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

body.appendChild(h1El);
body.appendChild(answersEl);
answersEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
answersEl.setAttribute("style", "display: flex; justify-content: center;")
listEl.setAttribute("style", "padding:20px; list-style: none; width:50%;")
li1.setAttribute("style", "padding:15px; color: white; margin:10px; background-color:rgb(132, 0, 255); border-radius: 12px;")
li2.setAttribute("style", "padding:15px; color: white; margin:10px; background-color:rgb(132, 0, 255); border-radius: 12px;")
li3.setAttribute("style", "padding:15px; color: white; margin:10px; background-color:rgb(132, 0, 255); border-radius: 12px;")
li4.setAttribute("style", "padding:15px; color: white; margin:10px; background-color:rgb(132, 0, 255); border-radius: 12px;")

h1El.textContent = "Question";
li1.textContent = "1. Answer";
li2.textContent = "2. Answer";
li3.textContent = "3. Answer";
li4.textContent = "4. Answer";

// NOTE: Create function to show questions with answers, if true = correct, else false = wrong and decrement 5s from timer, for loop to go to next question and answers

// LOCAL STORAGE CODE
// notes: make pop up to request name to input into local storage to store name and high score
var firstNameInput = document.querySelector("#first-name");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  var user = {
    firstName: firstNameInput.value.trim(),
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.getItem('user');
  JSON.parse('{"firstName": "ali"}')
}); 


// DECREMENT FOR ANSWERS FUNCTION
var count = 0;

// locating the call for items in selector from html
// querySelector is API that allows us to specify how we want to target elements
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// listening for click on decrement btn to run function and input data into countertext function to decrease in value
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});


// COUNTER FUNCTION
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

function countdown() {
  var timeLeft = 120;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(() => {

    if (timerEl > 0){
      timerEl.textContent = timeLeft + ' seconds remaining';
      // 2.0 string interpolation, template literal
      // timerEl.textContent = `${timeLeft} seconds remaining`
      timeLeft--;
    }
    else if (timerLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
    }
    else if (timeLeft === 0) {
      timerEl.textContent = ''
      clearInterval(timeInterval);
      displayMessage();
    }
  },
  1000); 
  }

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function() {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();