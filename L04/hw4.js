







// home work 4
// http://bi0morph.github.io/teaching-materials/lesson-4/slides/#/6

// 01 Подумайте, как бы вы скопировали объект 

// answer
function copy(o) {
  var objPrototype = Object.getPrototypeOf(o) .. получаем прототип
  var copy = Object.create(objPrototype); // Object.create - статический метод - создаем новый объект
  // { __proto: objPrototype }
  var propNames = Object.getOwnPropertyNames(o); // получение всех персональных имен - возвращает массив ['a','b']

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(o, name); // у объекта по имени в первой итерации получаем все параметры описания свойства
    Object.defineProperty(copy, name, desc); // создаем свойства у другого объекта
  });

  return copy;
}

var o1 = { a: 1, b: 2 };
var o2 = copy(o1); // теперь o2 выглядит также, как и o1

// my solution

//  v1
function copy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
 
    var temp = obj.constructor(); 
    for (var key in obj) {
        temp[key] = copy(obj[key]);
    }
 
    return temp;
};



// v2
function copy(obj) {
        return obj;
};




// v3
function copy(obj) {
	var newObj = {};
	for(var i in obj){
		newObj[i] = obj[i];
	}
	return newObj;
};

var objectOne = { a: 1, b: 2 };
var objectTwo = copy(objectOne);
console.log(objectOne);
console.log(objectTwo);







// разбор в класе

for (name in obj) { // проходит по всем свойствам, родителям, прототипам - нужно условие
  if (obj.hasOwnProperty(name)) {
    copy[name] = obj[name];
  };
};






function copy(o) {
  var copy = Object.create(Object.getPrototypeOf(o));
  var propNames = Object.getOwnPropertyNames(o);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}


var o1 = { a: 1, b: 2 };
var o2 = { a: 4, b: 7 };

var o3 = copy(o1);
var o4 = o2;

o3.a = 99;
o4.a = 77;

console.log(o1);
//VM355:2 Object {a: 1, b: 2}
console.log(o2);
//VM356:2 Object {a: 77, b: 7}





var dog = {
  name: "Sobak"
};
var cat = {
  name: "Kotik"
};

var newCat = dog;
var newDog = copy(cat);

newCat.name2 = newDog['name4'] = 'var';

console.log(dog);
console.log(cat);




// конструктор - метод, который вызывается в момент создания объекта
// объект - экземпляр класса


// create namespace

var app = function app(argument) {
  return document.querySelectorAll(argument);
};

console.log(app('#circle'););
console.log(app('.rectangle'););










































