// setting variables
win = 0;
losses = 0;
guess = 15;
// Input 1: computer selecting a random word from an array
computerOptionsArr = ["closer", "down", "roses", "paris"];
function wordSel() {
  var computerChoice = computerOptionsArr[Math.floor(Math.random() * computerOptionsArr.length)];
  // console.log(computerChoice);
  return computerChoice;
}

//condition1 : guess left condition check
function guessLeft() {
  guess--;
  if (guess == 0) {
    losses++;
    wordSel();
  }
}
//input 2: user selects letter ////how to write all guesses in a row?????????
document.onkeyup = function (event) {
  var userGuess = event.key;
  console.log(userGuess);
  document.getElementById("demo1").innerHTML = userGuess;
  var check = wordSel().includes("userguess");
  console.log(check);
  
// condition2 : checking letter in a word returns true if word has letter else false
  if (check === "true") {
    var n = wordSel().indexOf("useguess");
    console.log("index = " + n);

  }
}

