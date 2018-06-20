// -- this is the list of variables// 
var WordBank = ["dalmatian", "corgi", "daschund", "boxer", "poodle", "bulldog",
                "boston terrier", "saint bernard", "greyhound", "husky", "pug"]
 var userGuesses = [];
 var win = 0;
 var wrongLetters = [];
 var guessesLeft = 9 ; 
 var random;
 var underScores = [];
 var winCounter = 0;
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

    wrongLetters = []; 
    guessesLeft = 10;

    document.getElementById("guesses-left").textContent =  guessesLeft;

}
function winLose(){
    if(winCounter === random.length){
    alert("Winner");
    start();
}
    else if(guessesLeft === 0){
        alert("that's ruff! try again");
        start();
    }

}

document.onkeyup = function(event){
    userGuesses = event.key;
// This will check if their guess is correct// 
    if(random.indexof(userGuesses) > -1){
        for(var i = 0; i < random.length; i++){
            if(random[0] === userGuesses){
                underScores[i] =  userGuesses;
                console.log(underScores);
                winCounter++;
                winLose();
            }
        }
    }
    else{
        wrongLetters.push(userGuessesl);
        guessesLeft--; 
        console.log(wrongLetters);
    }
}

startGame();
