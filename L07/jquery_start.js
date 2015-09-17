// The `_` object constructor
function simpleJSLibrary(id){
   return this;
}
 
// our dot-operator methods
simpleJSLibrary.prototype = {
   show: function () {
      // implementation
      return this;
   }
};

var sLib = simpleJSLibrary;




//
jQuery();
$();




//
simpleJSLibrary('#box');  // поиск box
simpleJSLibrary('#box').css({width: 50px;});  // изменение стиля из объекта
simpleJSLibrary('#box').css("width", "50px");  // изменение стиля из строки



// 1
(function (global) { // объявление анонимной функции
})(window)



//2 
(function (global) {
	function simpleJSLibrary(id){
	   return this;
	}
	 

	simpleJSLibrary.prototype = {
	   show: function () {

	      return this;
	   }
	};

	var sLib = simpleJSLibrary;

	global.simpleJSLibrary = global.slib = slib;
	// window.simpleJSLibrary = window.slib = slib;
})(window)






сравнение объектов
{a: 3} == {a: 3} // сравнивается ссылка //false
{a: 3} === {a: 3} // сравнивается ссылка + сравнивается тип ссылки //false





//4

(function(global){

	// The `_` object constructor
	function simpleJSLibrary(id){

		var about = {
	      version: 0.1,
	      author: "Agatha Christie",
	      created: "September 2015",
	      updated: null
	   	};

	  /*TODO: 1. Добавить проверку параметра id.
			это можеть быть
				или '#main' - id
					в этом случае ничего не меняется
				или '.red' - class
					в этом случае вместо querySelector используем querySelectorAll
				или 'div' - tagName
					в этом случае вместо querySelector используем querySelectorAll
	  */
   	if (id) {
   		if (global === this) {
	      return new simpleJSLibrary(id);
	    }
		  
		  // Мы в верном контексте объекта(scope):
      // Сохранить найденный элемент в свойство
		  this.e = document.querySelector(id); // ищем первый попавшийся элемент
	    return this;
   	} else {
   		// Не указан параметр id - вернуть объект about
   		return about;
   	}		
	}
	
	function showError (text) {
  	console.error(text);
	}
	function showNodeElementError () {
		showError('Can\'t find element node');
	}
	// our dot-operator methods
	simpleJSLibrary.prototype = { // прототип имеет два метода show и hide
		/*TODO: 2. Улучшить show/hide
			когда будет сделана задача №1
			в this.e возможно будет хранится массив или nodeList
			Нужно что бы для массива работали методы show/hide
			Для этого нужно будет по массиву или nodeList пройтись циклом 
			и для каждого элемента выполнять изменения стиля
	  */
		show: function () { // метод показать	
		  // implementation
		  if (this.e) {
		  	this.e.style.display = 'inherit';
		  } else {
		  	showNodeElementError();
		  }
		  return this;
		},
		hide: function () { // метод скрыть
		  // implementation
		  if (this.e) {
		  	this.e.style.display = 'none';
		  } else {
		  	showNodeElementError();
		  }
		  return this;
		}
		/*TODO: 3. Реализовать метод toggle()
			который будет вызывать то show(), то hide()
			в зависимости от стиля элемента
	  */
	  
	  /*TODO: 4. Реализовать метод size()
			который будет принимать два параметра
			первый паарамер 'height', второй - 'width'
			
			Если параметры не указаны, то возвращать текущие значения высоты и ширины объекта
			Если параметры указаны, то меняем высоту и ширину элемента и возвращаем this
		*/

	  /*TODO: 5. Реализовать метод val()
			который будет принимать два параметра
			первый паарамер 'height', второй - 'width'
	  */

	  /*TODO: 6. Реализовать метод val()
	  Который возвращает значение 'this.e.value' или меняет его в зависимости от того есть парамет или нет
	  */
	};

	var sLib = simpleJSLibrary;
	
	global['simpleJSLibrary'] = global['sLib'] = sLib;	
})(window);






















