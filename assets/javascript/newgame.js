// setting variables
var win = 0;
var losses = 0;
var guess = 15;
var hiddenWord = '';
var guessesTillNow = [];
var replaced = '';
var userGuess = '';
var lettr = '';
var newString = '';
var hiddenWord = '';
// Input 1: computer selecting a random word from an array
computerOptionsArr = ["closer", "dont let me down", "roses", "paris"];
var word = '';
function wordSel() {
  var computerChoice = computerOptionsArr[Math.floor(Math.random() * computerOptionsArr.length)];
  return computerChoice;
}
// printing --------- instead of word
function printBlank() {
  word = wordSel();
  document.getElementById("demo3").innerHTML = "selected word: " + word;
  document.getElementById("demo").innerHTML = "length : " + word.length;
  // create blanks this way...
  for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      hiddenWord = hiddenWord + " ";
    } else {
      hiddenWord = hiddenWord + "_";
    }
  }
  document.getElementById("demo1").innerHTML = "blank word : " + hiddenWord;
}
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
printBlank();
// The initial if statement only runs once, on load and that's it, move this logic to the inside of the onkeyup event i.e. if (guess > 0) {run with the logic} else {let user know the game is up or restart the game}
document.onkeyup = function (event) {
  userGuess = event.key;
  document
    .getElementById("demo2")
    .innerHTML = "guessed letter " + userGuess
  console.log("letter " + userGuess);
  // guesses go down every time or only when it's an incorrect guess?
  guess--;
  console.log("guess left " + guess);
  document.getElementById("demo5").innerHTML = "guesses left " + guess;
  guessesTillNow.push(userGuess);
  console.log(guessesTillNow);
  document.getElementById("demo4").innerHTML = "till now " + guessesTillNow.join();
  for (var i = 0; i < word.length; i++) {
    if (word[i] == userGuess) {
      console.log("hi")
      document
        .getElementById("demo6")
        .innerHTML = "right ";
      // split word into array
      var hiddenWordArr = hiddenWord.split("");
      // replace letter at index
      hiddenWordArr[i] = userGuess;
      // join word back into a string from array
      hiddenWord = hiddenWordArr.join("");
      console.log(hiddenWord);
      document
        .getElementById("demo1")
        .innerHTML = "new string " + hiddenWord;

    } else {
      document
        .getElementById("demo6")
        .innerHTML = "wrong ";
    }

  }

}
