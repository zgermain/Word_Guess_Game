// Initialize game
    //Wins = 0 -- Losses = 0
    let wins = 0;
    let losses = 0;
    let wordList = ['Test', 'Number', 'Zack', 'String of Words', 'Stufffff'];

    //Set up DOMS to display text/letters
    //DOMS
    var winsDiv = document.getElementById("wins-div");
    var guessDiv = document.getElementById("guess-div");
    var wrongDiv = document.getElementById("wrong-div");
    var hiddenDiv = document.getElementById("hidden-div");

    

// below must be used for reset game function
    //Array of Words
    

    let gameWord = wordList[Math.floor(Math.random() * wordList.length)];

    let hiddenWord = [];

    for (i = 0; i < gameWord.length; i++){

        if (gameWord[i] === ' '){
           hiddenWord[i] = ' '
        } else {
            hiddenWord[i] = '_'
        };

    };

    // hiddenWord = hiddenWord.join('');

    //Number of Guesses - userGuess = 12
    let userGuess = 12;

    //Number of Wrong Guesses
    let wrongGuessCount = 0;

    //Array of Wrong Letter Guesses

    let wrongGuessLetters = [];

    

    //DOM TEST
    hiddenDiv.textContent = hiddenWord.join('');
    guessDiv.textContent = userGuess;



// Start Game



    document.onkeyup = function(event) {

        var userInput = event.key;
        var letterTest = gameWord.toLowerCase().includes(userInput);

        if (letterTest = true){

            for (i = 0; i < gameWord.length; i++){

                if (userInput.toLowerCase() === gameWord[i].toLowerCase()) {
                    hiddenWord[i] = gameWord[i];
                };
            };

        } else {
            wrongGuessLetters = wrongGuessLetters + userInput;
            userGuess--;
        };
        
        
        hiddenDiv.textContent = hiddenWord.join('');

        //CONSOLE TESTING
        
        console.log("userInput: " + userInput);
        console.log("wrongGuessLetters" + wrongGuessLetters);
        console.log("userGuess: " + userGuess);
        console.log("letterTest: " + letterTest);
        console.log("hiddenWord: " + hiddenWord);
    }

    //User presses key - Alpha Only
    //Get key-pressed character and compare to random guess word
        //IF Wrong (letter not in gameWord, key pressed is a letter)
            //Wrong Guessed letter will display
            //userGuesses decrements 
            //Only unique guesses count (hitting P twice is only one guess)
        //IF Right (letter in gameWord)
            //Correct letter will appear on "Current Word"
            //userGuesses does not change
            //Wrong Letter Guesses does not change
        //WHEN userGuess = 0 then Loss += 1
        //WHEN guessWord = secretWord then Win += 1
    //RESET GAME - 


    //Console
    console.log('wordList: ' + wordList);
    console.log('gameWord: ' + gameWord);
    console.log('hiddenWord: ' + hiddenWord);
