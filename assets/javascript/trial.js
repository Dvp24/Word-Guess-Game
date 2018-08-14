// computer selecting a random word
function wordSel(){
  var computerChoice = computerOptionsArr[Math.floor(Math.random()*computerOptionsArr.length)];
  // console.log(computerChoice);
  return computerChoice;
  }
  document.getElementById("demo").innerHTML = wordSel();
  
  // guess left condition check
function guessLeft(){
  guess--;
  if (guess == 0){
    losses++;
    wordSel();
  }
  else
  userGuess();
 }

 // user selects letter how to write all guesses in a row
 document.onkeyup = function (event) {
  var userGuess = event.key;
  console.log(userGuess);
  document.getElementById("demo1").innerHTML = userGuess;
}




//  questions to ask
// what is wron with this snippet????
// function userGuess(){
//   document.onkeyup = function (event) {
//     var userG = event.key;
//     return userG;
//   }
// }
// console.log(userGuess());