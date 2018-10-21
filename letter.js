module.exports = function (wordLetter) {
    this.sThisLetter = wordLetter;
    this.bGuessed = false;

    this.getLetter = function () {
        return (this.bGuessed ? this.sThisLetter : '_');
    }

    this.guess = function () {
        this.bGuessed = true;
    };
}