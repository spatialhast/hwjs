function Some (a) {
  this.name = a;
  return a;
};



function Some (a) {
  var this = {};
  this.name = a;
  return a;
};



var withNew = new Some('Hero');
var withOutNew = Some('not Hero');





// замыкание 

function Some (a) {
  this.name = a;
  var _private = a + ' - hi!';

  this.sayHi = function sayHi () {
    return _private;
  };

  return a;
};



var withNew = new Some('Hero');
var withOutNew = Some('not Hero');















