var game = {
	initialize: function(attempt) {
		for (i = 0; i < guessedLetters.length; i++) {
  			if (guessedLetters[i] == '_') {
				var attempt = prompt('Введите букву');
				var gl = guessLetter(attempt);
				clueLetters.forEach(game.guessLetter,game);
			}
			else {
				console.log('Congrats! You won! Your total prize is', totalPrize,'$.');
			}
		}
	},
	guessLetter: function(attempt) {
	var niceChoice = false;
	var badChoice = false;
	function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

	if (clueLetters[i] == attempt) {
		for (i = 0; i < guessedLetters.length; i++) {
  	   guessedLetters[i] = attempt;
  	   niceChoice = true;}
    }
    else if (clueLetters[i] !== attempt) {
          	badChoice = true;
         };
    
    if (niceChoice) {
   		 var howMany = 0;
   		 for (i = 0; i < guessedLetters.length; i++) {
    	if (guessedLetters[i] == '_') {
	       		howMany = howMany + 1;
    		};
	  }
    totalPrize += getRandomInt(10, 51);
	  console.log('Well done! Your prize is', totalPrize,'$ now. Guess', howMany, 'letters more');
    console.log(guessedLetters.join(''));
    }
else if (badChoice) {
	console.log('Bad choice! Try again!');
}
}
}

var clueLetters = ['В', 'Е', 'Т', 'Е', 'Р'];
var guessedLetters = ['_', '_', '_', '_', '_'];
var i;
var totalPrize = 0;

game.initialize()

