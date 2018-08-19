// tasks to achieve
// 1. set win and losses to zero(N) and other global variable declarations
// 2. set max number of guesses user have(N)
// 3. create a function for computer to choose a random word from an array
// a. need an array of words
// b. need a function that will select random word and itll be stored into the variable
// TOTAL: 1- ARRAY, 1-MATH.FLOOR & 1-MATH.RANDOM, 1- VARIABLE(STR)
// 4. Create a function to display blanks instead of word by using for loop
// a. if word contains blank spaces then concate blank space with the variable word
// b. if word contains letter concate "-" with variable
// c. need a variable to hold the string of blanks
// d. do comparison usng if statement 
// e. call function for word selection and store its value in the variable
// TOTAL: 1-FOR LOOP{IF STATEMENT}, 2-VARABLES(STR)
// 5. let user guess a letter through an eventlistner ONKEY and hold that letter into the variable
// TOTAL: 1- ONKEY EVENTLISTNER, 1-VARIABLE(STR)
// 6. check guess value greater than 0?
// a. yes: decrease count of guess after every guess(N)
// b. no:  display game over and start the game again icrease losses by 1
// 7. check each ltter of word is equal to user guessed letter or no by using for loop
// a.convert word to an array
// b. yes: replace letter by using splice method 
// c. no:  guess the letter again
// TOTAL: 1-SPLICE 1-STR TO ARRAY METHOD
// 8. everytime when letter replaced check if word is exactly equal to blank string
// a. yes: display congratulations!! increase win by 1 and play that song in background
// b. no:  guess the letter again

// 1,2. variables declaration
var win = 0;
var losses = 0;
var guess = 15;
var computerChoice = '';
var word = '';
var hiddenWord = '';
var userGuess = '';
var hiddenWordArr = [];
var guessesTillNow = [];
var vid;
var computerOptArr = ["closer", "roses", "dont let me down", "paris", "somebody", "you owe me"];
printBlank();

document.onkeyup = function (event) {
  userGuess = event.key;
  guessesTillNow.push(userGuess);
  document.getElementById("demo3").innerHTML = "";

  document.getElementById("demo").innerHTML=  guessesTillNow;
  if (guess > 0) {
    guess--;
    document.getElementById("demo1").innerHTML = "Guesses Left: " + guess;
    for (var j = 0; j < word.length; j++) {
      if (word[j] == userGuess) {
        hiddenWordArr = hiddenWord.split("");
        hiddenWordArr[j] = userGuess;
        hiddenWord = hiddenWordArr.join("");
        document.getElementById("demo2").innerHTML = "" + hiddenWord;
        if (hiddenWord === word) {
          document.getElementById("demo3").innerHTML = "Congratulations You Won!!";
          win++;
          document.getElementById("demo8").innerHTML = win;
          //  play music in background for few minutes
            vid = document.getElementById("mySong");
            vid.play();
          newGame();
        }
        else {

        }
      }
      else {
      }
    }
  } else {
    document.getElementById("demo3").innerHTML = "Game Over";
    //function for new game
    losses++;
    document.getElementById("demo9").innerHTML = losses;
    newGame();
  }
}
// listing of all the funcions
// function to start new game from choosing new word
function newGame() {
  guess = 15;
  computerChoice = '';
  word = '';
  hiddenWord = '';
  userGuess = '';
  hiddenWordArr = [];
  guessesTillNow = [];

  document.getElementById("demo").innerHTML = " ";
  printBlank();
  vid = document.getElementById("mySong");
  vid.pause();

  //function to select random word from an array    
}
function wordSelect() {
  computerChoice = computerOptArr[Math.floor(Math.random() * computerOptArr.length)];
  console.log(computerChoice);
  return computerChoice;
}
// function to print blank spaces instead of word 
function printBlank() {
  word = wordSelect();
  for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      hiddenWord = hiddenWord + " ";
    }
    else {
      hiddenWord = hiddenWord + "_";
    }
    document.getElementById("demo2").innerHTML = " " + hiddenWord;

  }
}
