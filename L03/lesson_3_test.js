var a = 5, b = 7;
var nameOne = 'Node', nameTwo = 'js';

function sumD(a, b) {
	return a+b;
};

function sumS(nameOne, nameTwo) {
	return nameOne + '.' + nameTwo;
};

for(var i = 0; i<nameOne.length; i++) {
	console.log(nameOne[i]);
}

console.log(sumD(a, b));
console.log(sumS(nameOne, nameTwo));



var foo = 'hi';

function bar() {
	var foo = 'than';
}


-------------------------





// string
var string = function(x) {
	return x;
};
string('Hello!'); // Hello!

// number
var sum = function(x,y) {
	return x + y;
};
sum(6,4); // 10

// boolean
var compare = function(x,y) {
	return x > y;
};
compare(1,4); // false

// undefined
var z;
var unknown = function() {
	return z;
};
unknown();

// null
var z = null;
var unknownNull = function() {
	return z;
};
unknownNull();







