// Start button to begin countdown and 4/5 sets of questions with true false buttons, will output when wrong/right





// ANSWERS
var body = document.body;
var h1El = document.createElement("h1");
var favoriteEl = document.createElement("div");
// ordered list element
var listEl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
li1.textContent = "1. Sushi";
li2.textContent = "2. Pizza";
li3.textContent = "3. Chocolate";
li4.textContent = "4. Pasta";

body.appendChild(h1El);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
favoriteEl.setAttribute("style", "display: flex; justify-content: center;")
listEl.setAttribute("style", "padding:20px; list-style: none; width:50%;")
li1.setAttribute("style", "padding:15px; color: white; margin:10px; background-color:rgb(132, 0, 255);")
li2.setAttribute("style", "padding:15px; color: white; margin:10px; background-color:rgb(132, 0, 255)")
li3.setAttribute("style", "padding:15px; color: white; margin:10px; background-color:rgb(132, 0, 255)")
li4.setAttribute("style", "padding:15px; color: white; margin:10px; background-color:rgb(132, 0, 255)")


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


// INCREMENT/DECREMENT FOR ANSWERS FUNCTION
var count = 0;

// locating the call for items in selector from html
// querySelector is API that allows us to specify how we want to target elements
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// inputs content from countEl and assigning value of count variant
function setCounterText() {
  countEl.textContent = count;
}
// listening for a click on increment btn to run function and input data into countertext function to increase in value
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// listening for click on decrement btn to run function and input data into countertext function to decrease in value
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});


// COUNTER FUNCTION
// regular countdown and -5 sec when wrong answer
var timerEl = document.getElementById('countdown');

function countdown() {
  var timeLeft = 120;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(() => {

    if (timerEl > 0){
      timerEl.textContent = timeLeft;
      // 2.0 string interpolation, template literal
      // timerEl.textContent = `${timeLeft} seconds remaining`
      timeLeft--;
    }
    else if (timeLeft === 0) {
      timerEl.textContent = ''
      clearInterval(timeInterval);
    }
  },
  1000); 
  }

countdown();