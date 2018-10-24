module.exports = WordLetter = function (wordLetter) {
    this.sThisLetter = wordLetter;
    this.bGuessed = false;

    this.getMyLetter = function () {
        return (this.bGuessed ? this.sThisLetter : '_');
    }

    this.myguess = function () {
        this.bGuessed = true;
    };
}

WordLetter.prototype.guess = function () {
    this.bGuessed = true;
}

WordLetter.prototype.getLetter = function () {
    return (this.bGuessed ? this.sThisLetter : '_');
}