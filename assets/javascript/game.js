// setting variables
var win = 0;
var losses = 0;
var guess = 15;
var hiddenWord = '';
var guessesTillNow = [];
var replaced = '';
var userGuess;
var lettr = '';
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
  console.log("word : " + word);
  console.log("length : " + word.length);
  var blank = "-";
  console.log(blank.repeat(word.length));
  var hiddenWord = blank.repeat(word.length);
  console.log(hiddenWord);
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
printBlank();
if (guess > 0) {
  document.onkeyup = function (event) {
    userGuess = event.key;
    document.getElementById("demo").innerHTML = "letter " + userGuess
    console.log("letter " + userGuess);
    guess--;
    console.log("guess left " + guess);
    guessesTillNow.push(userGuess);
    console.log("till now " + guessesTillNow);
    for (var i = 0; i < word.length; i++) {
      var first = word.charAt(i);
      if (first == userGuess) {
        console.log("true");
        lettr = hiddenWord[i];
        replaced = hiddenWord.replace(lettr, userGuess);
        console.log("new " + replaced);
      }
      else {
        console.log("false try again");

      }
    }
  }

}






