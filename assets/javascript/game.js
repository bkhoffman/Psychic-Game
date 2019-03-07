var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var loses = 0;
var guessesLeft = 9;
var guessedLetters = [];

var winCount = document.getElementById("numberOfWins");
var loseCount = document.getElementById("numberOfLoses");
var remainGuesses = document.getElementById("numberOfGuessesLeft");
var guesses = document.getElementById("guessedLetters");

  
function reset(){
  guessesLeft = 9;
  guessedLetters = [];
};

document.onkeyup = function(event){
  var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  var userGuess = event.key.toLocaleLowerCase();

  if (event.keyCode >= 65 && event.keyCode <= 90){
    if (userGuess === randomLetter){
      wins++
      reset();
      } else if (guessesLeft <= 1) {
        loses++
        reset();
        } else {
          guessesLeft--
          guessedLetters.push(userGuess)
        }
  
  winCount.textContent = "Wins: " + wins;
  loseCount.textContent = "Loses: " + loses;
  remainGuesses.textContent = "Your Guesses Left: " + guessesLeft;
  guesses.textContent = "Your Guesses so Far: " + guessedLetters;
  }
  
};
  


