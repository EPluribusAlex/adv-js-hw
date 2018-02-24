const Letter = require('./letter.js');

const Word = function(gameWord) {
	// array containing letter objects
	this.letterArr = [];

	// calls letter object display method
	this.displayLetters = function() {
		let tempArr = [];
		this.letterArr.forEach(function(char) {
			tempArr.push(char.returnLetter());
		});
		return tempArr.join("");
	};

	this.makeGuess = function(guess) {
		this.letterArr.forEach(function(char) {
			char.checkChar(guess);
		});
	}
};