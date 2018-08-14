// setting variables
win = 0;
losses = 0;
guess = 15;
// Input 1: computer selecting a random word from an array
computerOptionsArr = ["closer", "dont let me down", "roses", "paris"];
function wordSel() {
  var computerChoice = computerOptionsArr[Math.floor(Math.random() * computerOptionsArr.length)];
  // console.log(computerChoice);
  return computerChoice;
}
var word = wordSel();
console.log(word);
document.getElementById("demo").innerHTML = wordSel();

//condition1 : guess left condition check
function guessLeft() {
  guess--;
  if (guess == 0) {
    losses++;
    wordSel();
  }
  else
    // userGuess();
    // user selects letter ////how to write all guesses in a row?????????
    document.onkeyup = function (event) {
      var userGuess = event.key;
      console.log(userGuess);
      document.getElementById("demo1").innerHTML = userGuess;
    }
}

