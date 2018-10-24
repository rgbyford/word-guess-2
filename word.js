const Letter = require('./letter.js');

const aoWordLetters = [];

module.exports = Word = function () {}

Word.prototype.makeWord = function (sWord) {
    for (let i = 0; i < sWord.length; i++) {
        aoWordLetters[i] = new Letter(sWord[i]);
    }
}

// shows the word, with _ where the letter has not been guessed
Word.prototype.showWord = function () {
    let sRetVal = [];
    for (let i = 0; i < aoWordLetters.length; i++) {
        sRetVal[i] = aoWordLetters[i].getLetter();
    }
    return (sRetVal);
}

// called with a letter that the user's typed in
Word.prototype.letterGuess = function (cLetter) {
    let bSuccess = false;
    for (i = 0; i < aoWordLetters.length; i++) {
        if (cLetter === aoWordLetters[i].sThisLetter) {
            // will be _ if it's not been guessed
            // So if we've got here it's been guessed - but it could be one of
            // multiple copies, so keep looking
            aoWordLetters[i].guess();
            bSuccess = true;
        }
    }
    return (bSuccess);
}
