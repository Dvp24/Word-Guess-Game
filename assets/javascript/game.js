win = 0;
losses = 0;
guess = 15;
computerOptionsArr = ["closer","dont let me down","roses","paris"];

function wordSel(){
  var computerChoice = computerOptionsArr[Math.floor(Math.random()*computerOptionsArr.length)];
  // console.log(computerChoice);
  return computerChoice;
  }
  document.getElementById("demo").innerHTML = wordSel();

// why mot taking command properly?????
var wordLetter = wordSel().charAt(0);
document.getElementById("demo2").innerHTML = wordLetter;

// condition check for equal letters

if(wordLetter === userguess){
  // replace - by that letter
}