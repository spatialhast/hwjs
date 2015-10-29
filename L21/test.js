var object1 = {
	y: 2
};
var object2 = Object.create(object1);
var object3 = {
	y: 2
};
var object4 = {
	y: 3
};
var object5 = {
	y: 2,
	x: 4
};


function compare(obj1, obj2) {
	for (var key in obj1) {
		if (obj1.hasOwnProperty(key)) {
			if (!obj2.hasOwnProperty(key)) return false;
			if (obj1[key] != obj2[key]) return false;
		}
	}
	for (var key in obj2) {
		if (obj2.hasOwnProperty(key)) {
			if (!obj1.hasOwnProperty(key)) return false;
			if (obj1[key] != obj2[key]) return false;
		}
	}
	return true;
};



compare(object1, object2); // false
compare(object1, object3); // true
compare(object1, object4); // false
compare(object1, object5); // false






function testFuncName1 (compare) {
	var obj1 = {
		x: 1,
		y: 2
	},
	obj2 = {
		x: 1,
		y: 2
	};
	var result = compare(obj1, obj2);
	console.assert(result, 'simple objets not equally')
	console.log(result);
}





















