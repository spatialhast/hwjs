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























