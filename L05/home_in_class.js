var x = ['h','e','l','o'], y = ['_','_','_','_'];

function guessLetter(letter) {
	var len = x.length; // для производительности лучше
	var count = 0;
	for (var i = 0; i < len; i++){

		if(x[i] === letter) {

			y[i] = letter;
			console.log('You are right!');
			console.log(y.join(''));




		} else {


			if(y[i] === '_'){
				count++;

			}				

			console.log('Fail!');
			console.log(y.join(''));			
		}


	};


}





Про this


function man() {
	return this;
}


-----------------------

function man(x,y) {
	this.x = x;
	this.y = y;
	return x
}


man(2,3); // 2
new man(2,3); // man {x: 2, y: 3}

-----------------------

function man(x,y) {
	this.x = x;
	this.y = y;
	console.log(this);
}


man(2,3); // Window {top: Window, location: Location, document: document, window: Window, external: Object…}
new man(2,3); // man {x: 2, y: 3}


-----------------------

function man(x,y) {
	this.x = x;
	this.y = y;
	console.log(this);
}


man(2,3); // Window {top: Window, location: Location, document: document, window: Window, external: Object…}
new man(2,3); // man {x: 2, y: 3}



Если не используем new то this будет объектом, в котором создавалась функция




Создаем объект через литерал

var point = {
	x: '1',
	y: '2'
};




---------------------------------------

var me = {
			name: 'Rus',
			color: 'green',
			goHome: function() { console.log('Go Home') }

		};



---------------------------------------

// объявление функции
function iAm(name) {
	this.name = name;
	this.birthday = '18/06/1988';
	this.profession = 'GIS Analyst';
	return name;

};

var meWithNew = new iAm('Alexander');
var meWithoutNew = iAm('Alexander'); 

console.log(meWithNew); // iAm {name: "Alexander", birthday: "18/06/1988", profession: "GIS Analyst"}
console.log(meWithNew.constructor); 
console.log(typeof meWithNew);

console.log(meWithoutNew); // Alexander
console.log(meWithoutNew.constructor); 
console.log(typeof meWithoutNew);



---------------------------------------
// просмотр наследования
http://www.objectplayground.com/

// объявление функции
function iAm(name) {
	this.name = name;
	this.birthday = '18/06/1988';
	this.profession = 'GIS Analyst';
	return name;

};

this.me = new iAm('Alexander');







---------------------------------------

http://www.objectplayground.com/


// объявление
function Person(name, age) {
    this.gender = 'man';
    this.name = name;
	this.age = age;
	this.sayGoodBay = function sayGoodBay() {
		console.log('Whait! I don\'t want!');
	}
}
// добавление метода в prototype
Person.prototype.sayHello = function() {
	console.log('Hi there! My name is ' + this.name);
}

this.person = new Person("Alexander", 4);




// Домашнее задание
// Измените ваш объект из домашнего задания. Реализуйте его через конструтор с прототипом.



// https://developer.mozilla.org/ru/




function None() {}

function None() {  this.name = 'none' }

var x = new None();

var y = Object.create(x);

y.__proto__ // None {name: "none"}
y // Object {}
x.name = 'Sam' // "Sam"
y.name // "Sam"



---------------------------------------

// функция конструктор пишется с большой буквы
// функция не конструктор пишется с маленькой буквы



function Magic() {
	this.stick = 'wood'; // создание значения
	this.person = {      // создание с Potterвойства объект
		name: 'Harry Potter'
	} 
};


// передача дефолтов
function Magic(stick, name) {
	this.stick = stick || 'wood'; // создание значения
	this.person = {      // создание с Potterвойства объект
		name: name || 'Harry Potter'
	}
};

---------------------------------------

// Variant 1
function Magic(stick, name) {
	this.stick = stick || 'wood'; // создание значения
	this.person = {      // создание с Potterвойства объект
		name: name || 'Harry Potter'
	};
	this.getStick = function() {
		return this.stick;
	}
	this.getName = function() {
		return this.person.name;		
	};	
};


var harry = new Magic();
var manInBlack = new Magic('Desert Eagle', 'Sam');


harry // Magic {stick: "wood", person: Object}getName: ()getStick: ()person: Objectstick: "wood"__proto__: Magic
manInBlack // Magic {stick: "Desert Eagle", person: Object}
harry.getName() // "Harry Potter"
harry.getStick() // "wood"


harry.__proto__.getName = function() {

};




var parent = {
	stick: 'wood',
	person: {
		name: 'Harry Potter'
	},
	isSleep: true,
	toogleSleep: function() {
		this.isSleep = this.isSleep;
	},
	getStick: function() {
		return this.stick;
	},
	getName: function() {
		return this.person.name;
	}	
};

var harry = Object.create(parent);
var manInBlack = Object.create(parent);

manInBlack.stick = 'Desert Eagle';
manInBlack.person.name = 'Sam';








http://www.objectplayground.com/

var ololo = {
 stick: 'wood',
 person: {
  name: 'Ace' 
 },
 getStick: function () {
  return this.stick;
 },
 getName: function() {
  return this.person.name;
 },

}


this.lol2 = Object.create(ololo);
this.lol3 = Object.create(ololo);
this.lol3.stick = 'steel';
this.lol3.person = {};
this.lol3.person.name = 'Sam';
