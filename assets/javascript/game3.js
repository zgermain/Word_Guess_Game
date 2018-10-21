//Create Initial Variables and Functions

var wins = 0;
var losses = 0;
var guesses = 12;
var letterGuesses = ["Press Any Key to Start"];
var letterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wordList = ['Stuff', 'Test', 'String of Words', 'Zack']
var randomWord = "";
var hiddenWord = ["Guess Me."];
var userInput = "";
var winStatus = true;

function letterCheck(inputtxt){
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
        return true;
    }
    else {
        return false;
    };
};

function pickRandomWord(){
    randomWord = wordList[Math.floor(Math.random()*wordList.length)];
};

function hideWord(){
    //create function that hides randomWord with underscores
    for (i = 0; i < randomWord.length; i++){

        if (randomWord[i] === ' '){
           hiddenWord[i] = ' '
        } else {
            hiddenWord[i] = '_'
        };

    };
};

function revealLetter(){
    for (i = 0; i < randomWord.length; i++){

        if (userInput.toLowerCase() === randomWord[i].toLowerCase()) {
            hiddenWord[i] = randomWord[i];
        };
    };
};

function display(){
    document.getElementById("wins-div").textContent = wins;

    document.getElementById("losses-div").textContent = losses;

    document.getElementById("guesses-div").textContent = guesses;

    document.getElementById("hiddenWord-div").textContent = hiddenWord.join('');

    document.getElementById("letterGuesses-div").textContent = letterGuesses;
};

function resetGame(){

    guesses = 12;
    letterGuesses = [];
    hiddenWord = [];
    document.getElementById("youWin").textContent = "";
    document.getElementById("youLose").textContent = "";


    pickRandomWord();
    hideWord();
    display();
    

    
    console.log("randomWord: " + randomWord);
    console.log("hiddenWord: " + hiddenWord);
};

function winGame(){
    wins++;
    //write a message about winning
};

function loseGame(){
    losses++;
    //write a message about losing
};

function checkLose(){
    if (guesses === 0){

        loseGame();

        document.getElementById("youLose").textContent = "Loser";
        winStatus = true;
        letterGuesses = ["Press Any Key to Start"]
        display();
    };
};

function checkWin(){
    if (String(hiddenWord.join('')) == randomWord){

        winGame();

        letterGuesses = ["Press Any Key to Start"]
        document.getElementById("youWin").textContent = "Winner";
        display();
        winStatus = true;
    };
};

function continueGame(){
    winStatus = false;
    resetGame();
}




//Game Cycle
// resetGame();
display();


function playgame(){
    //What happens when the user inputs a keypress?
        //Right = Win Game!
    if (randomWord.toLowerCase().includes(userInput)){
        revealLetter();
        display();
        checkWin();
    } else {
        //Wrong = guesses decrements and input is added to array
        letterGuesses.push(userInput);
        guesses--;
        checkLose();
        display();
        
        // windowColor(guesses);
        
    };
    
}



document.onkeyup = function (event) {

    var letter = event.key.toLowerCase();
    
    //don't count letter if it has been guessed
    if (winStatus === true){
        continueGame();
    }
    else if (letterGuesses.includes(letter)){
        userInput = letter;
        console.log('userInput: ' + userInput);
    } 
    //check if input is made of letters
        //and is only a single letter
    else if(letterCheck(letter) === true && letter.length === 1){

        userInput = letter;
        console.log('userInput: ' + userInput);
        playgame();

    };
};



//Mobile keyboard bonus project

function mobileKeyboard(){
    

    for (i=0; i < letterArray.length; i++){
        var btn = document.createElement("BUTTON");   
            btn.className = "mobile-button";
            btn.id = letterArray[i];     
        var t = document.createTextNode(letterArray[i]);
        btn.appendChild(t); 
        document.body.appendChild(btn);  
    }
}


//Console Variable Test Function
function consoleVariables(){
    // console.log("wins: " + wins);
    // console.log("losses: " + losses);
    // console.log("guesses: " + guesses);
    console.log("letterGuesses: " + letterGuesses);
    console.log("hiddenWord: "+ hiddenWord);
    console.log("randomWord: " + randomWord);
    console.log(String(hiddenWord.join('')));
    
};