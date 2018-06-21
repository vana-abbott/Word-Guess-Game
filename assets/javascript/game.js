// -- this is the list of variables// 
var WordBank = ["dalmatian", "corgi", "daschund", "boxer", "poodle", "bulldog",
                "boston terrier", "saint bernard", "greyhound", "husky", "pug"]
 var userGuesses = [];
 var win = 0;
 var wrongLetters = [];
 var guessesLeft = 10; 
 var random;
 var underScores = [];
 var winCounter = 0;
 var alphabet = 'abcdefghijklmnopqrstuv';
// Funtion //

function startGame (){
    random = WordBank[Math.floor(Math.random() * WordBank.length)];
    console.log(random);
    for (var i = 0; i < random.length; i++){
       underScores.push('_');
    }
    console.log(underScores);

    document.getElementById('word-blanks').innerHTML = underScores.join(" ");
    console.log(underScores)

    document.getElementById("guesses-left").textContent =  guessesLeft;

}
function winLose(){
    if(winCounter === random.length){
        console.log('u win');
        alert("Winner");
    }
    else if(guessesLeft === 0){
        alert("that's ruff! try again");
    }

}

document.onkeyup = function(event){
    userGuesses = event.key.toLowerCase();

    if (alphabet.indexOf(userGuesses) >= 0) {
        // This will check if their guess is correct// 
        if(random.indexOf(userGuesses) > -1){
            for(var i = 0; i < random.length; i++){
                if(random[i] === userGuesses){
                    underScores[i] =  userGuesses;
                    console.log(underScores);
                    winCounter++;
                }
            }
        }
        else{
            wrongLetters.push(userGuesses);
            guessesLeft--; 
            console.log(wrongLetters);
        }
        winLose();
    }
}

startGame();
