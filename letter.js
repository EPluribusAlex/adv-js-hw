const Letter = function(char) {
	this.char = char;
	this.guessed = false;

	// returns the letter if correctly guessed, or an underscore as a placeholder
	this.returnLetter = function() {
		if(this.guessed) {
			return this.char;
		}
		return "_";
	};

	// checks if the input character matches the letter, and if so changes its state "guessed" to true
	this.checkChar = function(newChar) {
		if(newChar = this.char) {
			this.guessed = true;
		}
	};
};

exports Letter;