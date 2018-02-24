const inquirer = require("inquirer");
const Word = require('./word.js');

// randomly select word and pass into 'new Word' constructor
const wordArr = ["testing", "working", "luck"];
const gameWord = new Word(wordArr[Math.floor(Math.random() * wordArr.length)]);

let guesses = 5;

// uses inquirer to prompt user for each guess, and keeps track of guesses remaining
inquirer.prompt([
	{
		name: "guess",
		message: "Please guess a letter."
	}
]).then(function(guess) {
	if(gameWord.letterArr.indexOf(guess)) {
		gameWord.makeGuess(guess);
		}
	}
	else guesses--;
});