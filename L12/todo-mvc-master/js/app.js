// var consoleClick = function(event) {
// 	console.log(event);
// };
// $on( qs('#clear-complited'), 'click', consoleClick);

// var b = document.createElement('button');
// $on( b, 'click', consoleClick);
// b.innerHtml = 'new';

// qs('#listTodo').appendChild(b);

// $delegate( qs('#listTodo'), '.cl', 'click', consoleClick);

// function consoleValue(event) {
// 	console.log( event.target.value);
// }
// var $body = qs('body');
// $delegate( $body, 'input[type=text]', 'focus', consoleValue);
// $delegate( $body, 'input[type=text]', 'blur', consoleValue);


var todos = [];
var $newTodoText = qs('#newTodoText');
var $todosList = qs('#todosList');
//функция keyupHandler
var keyupHandler = function keyupHandler(event) {
	
	//проверки что это ENTER
	if ( event.keyCode === 13 ) {

		//сохранение элемента в массиве
		todos.push({
			complited: false,
			text: event.target.value
		});

		//создание li
		var li = document.createElement('li');
		
		//создание checkbox
		var checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		
		checkbox.setAttribute('id', 'chb');
		
		//создание label
		var label = document.createElement('label');
		label.innerHTML = event.target.value;


		li.appendChild( checkbox );
		li.appendChild( label );

		//добавить li в ul
		$todosList.appendChild(li);
	
		// clear input
		$newTodoText.value = '';
	
	
		console.log(todos);

		
		
		reload();
		
		
		
	}
};
//событие keyup
$on($newTodoText, 'keyup', keyupHandler);




/*
var $checkAll = qs('#checkAll');


$on($checkAll, 'toggleAll', checkHandler);

var checkHandler = function checkHandler(event) { 

	console.log('sds');
event.preventDefault();


};
*/

/*
 function consoleValue(event) {
 	console.log('ds');
 }
var $body = qs('#checkAll'); 
$delegate( $body, 'checkbox', 'keyup', consoleValue);
*/



	// add event for Make all as complited checkbox
	$('#makeAllCompl').change(function() {

	  $('li input').prop('checked', this.checked); // make checked/unchecked all task
	// add line-through text decoration for checked tasks
	  if ( $('li input').prop('checked') ) {

	    $('li label').addClass('done');

		
		for(var i=0; i<todos.length; i++) {
			todos[i].complited = true;
		};
		//console.log( todos );
		
		
	  } else {

	    $('li label').removeClass('done');
		
		for(var i=0; i<todos.length; i++) {
			todos[i].complited = false;
		};
		//console.log( todos );		
	  }
	  
	});





function reload() {

	//console.log( qs('#todosList') );
	
	
	
	
	
	// check only task
	$('#chb').on('change', function(event){

	
	//console.log( todos );
	//console.log( event );
	console.log( $('#chb') );

	
	
	//event.preventDefault();
	
	/*
	
	    if ( $('#chb').prop('checked') ) {

	      $('li label').addClass('done');

	    } else {

	      $('li label').removeClass('done');
	    }

		*/
		
		
	});


};






