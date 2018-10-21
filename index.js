var inquirer = require('inquirer');
var Word = require('./word.js');

var guessWords = [
    "traveler",
    "guess",
    "boondocks",
    "galveston",
    "arbitration"
];

const wThisWord = new Word();

wThisWord.makeWord(guessWords[Math.floor(Math.random() * 5)]);
console.log("Hangman!");

console.log(wThisWord.showWord().join(' '));

playRound();

async function playRound() {
    let bAllGuessed = false;
    let iGuesses = 0;
    while ((iGuesses < 9) && !bAllGuessed) {
        const guess = await inquirer.prompt([{
            type: "prompt",
            name: "userGuess",
            message: "Guess a letter"
        }]);
        if (guess.userGuess.length > 1) {
            console.log("Just guess one letter!");
        } else {
            if (!wThisWord.letterGuess(guess.userGuess.toLowerCase())) {
                iGuesses++;
            }
            acWordNow = wThisWord.showWord();
            console.log(acWordNow.join(' '));
            if (acWordNow.indexOf('_') < 0) {
                bAllGuessed = true;
            }
        }
    }
    if (bAllGuessed) {
        console.log("You got it!");
    } else {
        console.log("Sorry.  Out of guesses. :-(")
    }
}