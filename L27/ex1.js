function foo() {
  return 1;
};


function bar() {
  return 2;
};

//--------------------------------


function add(a,b) {
  return a+b;
};


//--------------------------------


add(foo(), bar());


function add2 (fn1,fn2) {
	return add(fn1(), fn2());
}



add(2,2);
add2(foo,bar);


//--------------------------------

function bax (x) {
	return function() {
		return x;
	}
};


baz(1); // function
baz(2)(); // 2

//--------------------------------


function addn (arr) {
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
			add2(arr[0], arr[0]);

	}
}

//--------------------------------

function addnReduce (arr) {
	return arr.reduce(function (total, element) {
		return add2(baz(total), element)
	}, 0);
}

//--------------------------------


var arr = [0,1,2,3,4,5,62,54,62,1];

arr.reduce(function (newArray, element) {
	if (newArray.indexOf(element) < 0) {
		newArray.push(element);
	};

return newArray;
}, [])

































