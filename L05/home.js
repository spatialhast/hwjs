var wordLetters     = ['Е', 'Л', 'К', 'А'];
var guessedLetters  = ['_', '_', '_', '_'];
var k = 0; // для счетчика количества оставшихся неотгаданных букв
var money = 0;
var mon = 0;

function guessLetter(letter) {
    var goodGuess = false;
    var moreToGuess = false;
	var count = parseInt(wordLetters.length);

	
    for (var i = 0; i < wordLetters.length; i++) {
		
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
			

            function getRandomInt(min, max) {
              return Math.floor(Math.random() * (max - min)) + min;
            }

            mon = getRandomInt(10,50);   

			//mon = mon + randomInteger(10, 50); // случайное число от 10 до 50
			console.log(mon);

        };
		
        if (guessedLetters[i] == '_') {
            moreToGuess = true;
        };
    };
	
    if (goodGuess) {
		
		k++; // увеличиваем количество отгаданых букв
		var d = count - k; // количество оставшихся букв
		
        console.log('Да, ты угадал букву! Осталось угадать: ' + d + ' букв');
        console.log(guessedLetters.join(''));
		//console.log('Вы выиграли ' + mon + '$');
		
		
        if (!moreToGuess) {
            console.log('Вы выиграли!');
        }; 
		
    } else {
        console.log('Нет, не верно!');
    };
	
};

guessLetter('Е');

guessLetter('Д');
guessLetter('Л');
guessLetter('К');
guessLetter('А');



// replace for to forEach

a.forEach(function(element, index) {
  
});























