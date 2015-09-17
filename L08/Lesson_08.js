
Function.prototype.bind = function () {
	
	var oThis = this;
	var args = Array.prototype.slice.call(arguments);
	
	return oThis.apply(oThis, args)
	
}

//------------------------------------------------------
var func = function() {
	console.log(arguments);
};

var func1 = func.bind(func, 1);
var func2 = func.bind(func);
func1(2,3); // return [1, 2, 3]
func2(2,3); // return [2, 3]

//------------------------------------------------------



function formBook = document.createElement('form');

function createInput(name, conteiner) {
	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('maxlength', '20');
	input.setAttribute('name', name);
	input.setAttribute('placeholder', name);
	conteiner.appendChild(input);
	return input;
};

var nameInput = creteInput('name', formBook);
var authorInput = creteInput('author', formBook);
var pagesInput = creteInput('page', formBook);

var newBookButton = document.createElement('button');
newBookButton.innerHTML = 'Add book';

function.addEventListener('submit', function(event) {
	var newBook = new Book(nameInput.value, authorInput.value, pagesInput.value);
	renderBook(newBook);
	book.push(newBook);
	event.preventDefault();
	
});
	

formBook.appendChild(newBookButton);

document.body.appendChild(formBook);























