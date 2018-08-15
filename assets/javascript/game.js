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

  var blank = "- ";
  var hiddenWord = blank.repeat(word.length);
  document.getElementById("demo1").innerHTML = "blank word : " + hiddenWord;

}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
printBlank();
if (guess > 0) {
  document.onkeyup = function (event) {
    userGuess = event.key;
    document.getElementById("demo2").innerHTML = "guessed letter " + userGuess
    console.log("letter " + userGuess);
    guess--;
    console.log("guess left " + guess);
    document.getElementById("demo5").innerHTML = "guesses left " + guess;

    guessesTillNow.push(userGuess);
    document.getElementById("demo4").innerHTML = "till now " + guessesTillNow;
    
    for(var i=0; i < word.length; i++){
      if ( word[i]==userGuess ){
      document.getElementById("demo6").innerHTML = "right ";
       newString = hiddenWord.replace(hiddenWord[i], userGuess);
       document.getElementById("demo4").innerHTML = "nw string " + newString;

      }
      else 
      document.getElementById("demo6").innerHTML = "wrong ";

    }
    
  }

}





