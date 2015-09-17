$on( qs('#clear-completed', 'click', fname))

$('#listDo').on('click', 'button');

target - родитель на котором хотим отслеживать событие\
selector - элемент
type 
handler

//----------------------------------------------------------------


function consoleValue(event) {
	console.log(event.target.value);
};

$delegate( qs('body'), 'input[type=text]', 'focus', consoleValue);
$delegate( qs('body'), 'input[type=text]', 'blur', consoleValue);
$delegate( qs('body'), 'input[type=text]', 'click', consoleValue);


//console.log( qs('input[type=text]') );

//----------------------------------------------------------------
// code for https://github.com/Javascripticus/todo-mvc

var todos;
var $newTodoText = qs('#newTodoText');
var keyupHaandler = function keyupHandler (event) {
	console.log(event);
	if ( event.keyCode == 13 ) {
		//event.preventDefault();
		todos.push({
			completed: false,
			text: event.target.value
		});

	// добавить идентификатор id к списку 
var fragment = document.createDocumentFragment();
fragment.innerHTML = '<li>' + event.target.value + '</li>';
$todosList.appendChild('<li>2</li>');

	}


};
$on.($newTodoText, 'keyup', keyupHandler);





















