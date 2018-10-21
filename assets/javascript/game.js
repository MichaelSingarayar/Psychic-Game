var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y ", "z"
];

for (var i = 0; i < compChoices.length; i++) {
console.log(compChoices[i]);
}
var win = 0;
var lose = 0;
var guessesLeft = 9;
var guessedLetters = [];

console.log(win);
console.log(lose);
console.log(guessesLeft)
console.log(guessedLetters);




document.onkeyup = function (event) {
var userGuess = event.key;

console.log(userGuess);

var compG = compChoices[Math.floor(Math.random() * compChoices.length)];
console.log(compG);
//do i want useer guess to change every time  the user guesses or stay the same for the 9 guesses?//


if (userGuess === compG) {
    win++;
    guessesLeft = 9;
    guessedLetters = [];
} else {
    guessesLeft--;
    guessedLetters.push(userGuess);
}

if (guessesLeft === 0) {
    lose++;
    guessesLeft = 9;
    //had trouble getting guessed letters back to blank at 0 guesses
    guessedLetters = [];
}
var html = "<p>Guess what letter I'm thinking of</p>" +
    "<p>Wins: " + win + "</p>" +
    "<p>Loses: " + lose + "</p>" +
    "<p>Guesses Remaining: " + guessesLeft + "</p>" +
    "<p>Guessed Letter: " + guessedLetters.join(", ") + "</p>";

document.getElementById("results").innerHTML = html;
}

//maybe reset funtion that resets game?//
//var reset = function(){

//}