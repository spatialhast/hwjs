function foo(x) {
  y++;
  z = x * y;
}

var y = 5, z;

foo(20);
z;          //120

foo(25);
z;          //175

//--------------------------------------

function bar(x,y) {

	var z;

	foo(x);
	return [y,z];

	function foo(x) {
	  y++;
	  z = x * y;
	};

};

bar(20,5);
bar(25,6);


//--------------------------------------

function foo(x,y) { 
	return function() {
		return x+y;
	}
};

var x = foo(3, 4);

x(); // 7
x(); // 7

//--------------------------------------


function mult () {

  var args = [].slice.call(arguments);

  if (args.length <= 2) {
    return args[0] * args[1];
  }
  return (args[0] * mult.apply(null, args.slice(1)) );
};


mult(3, 4, 5); // 60

mult(3, 4, 5, 6); // Oops

//--------------------------------------

function fooOne () {
	return Math.random();
};

function fooTwo () {
	return Math.random();
};









