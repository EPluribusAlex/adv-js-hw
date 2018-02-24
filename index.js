const inquirer = require("inquirer");

// randomly select word and pass into 'new Word' constructor
const wordArr = ["testing", "working", "luck"];

// uses inquirer to prompt user for each guess, and keeps track of guesses remaining
inquirer.prompt([
	{
		name: "guess",
		message: "Please guess a letter."
	}
]).then(function(guess) {

});