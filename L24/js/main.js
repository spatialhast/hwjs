require.config({
	baseUrl: 'js/',
	paths:{
		jquery: 'jquery-2.1.1.min'
	}
});

require(['jquery', function() {
	$('body').css({background: "red"})
	console.log('test');
}]);


define('jq', ['jquery'], function(){ // 
	alert('Hello');
})


require(['jq'], function(jq){ // вызывает исполнение
	jq('body').append('<h1>Hello</h1>')
});














