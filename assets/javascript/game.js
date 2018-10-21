// Word Guess Game Javascript

// List of theme words
var wordList = ["Words", "Guessing", "Games are hard"];

// Randomly generates a word from the wordList
var gameWord = wordList[Math.floor(Math.random() * wordList.length)];
document.getElementById("gameWordTest").innerHTML = gameWord;

var hiddenWord = gameWord.replace(/[a-z]/gi, '_');
document.getElementById("hiddenWord").innerHTML = hiddenWord;

//Number of Guesses
var guessNumber = 12;
document.getElementById("guessNumber").innerHTML = guessNumber;

//User Input - Press a letter key to guess a letter

var userGuess

document.onkeyup = function(event) {

    // sets userGuess to a letter key
    userGuess = event.key;
    document.getElementById('userGuess').innerHTML = userGuess;

    // guessNumber goes down by 1
    guessNumber -= 1;
    document.getElementById("guessNumber").innerHTML = guessNumber;

    // letters in hiddenWord are revealed
    hiddenWord = 

    //Console Logs
    console.log("userGuess: " + userGuess);
    console.log("guessNumber: " + guessNumber);

}



//TEST - gameWord is set
console.log("gameWord: " + gameWord);
console.log("hiddenWord: " + hiddenWord);

