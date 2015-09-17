function Shape(options) {
  var _default = {
     top: '0px',
     left: '0px',
     width: '0px',
     height: '0px',
     color: ''
  };
  this.element = document.createElement('div'); // создаем div
  this.element.style.position = 'absolute'; // меняем position
  this.element.style.top = options.top || _default.top; // если есть options.top то оно занесется, иначе _default.top
  this.element.style.left = options.left || _default.left;
  this.element.style.width = options.width || _default.width;
  this.element.style.height = options.height || _default.height;
  this.element.style.background = options.color || _default.color;
}
Shape.prototype.render = function render() {
  if (document.body !== this.element.parentNode) { // проверяем, добавлен ли в DOM элемент
      document.body.appendChild(this.element);
  }
};
Shape.prototype.calculateDistance = function calculateDistance(where, distance) {
  if (where === 'up' || where === 'down') {
    distance = distance || this.element.style.width;
  } else {
    distance = distance || this.element.style.width;
  }
  return distance;
};
Shape.prototype.changePosition = function changePosition(where, distance) {
  var style = this.element.style,
    keyPos = 'top';
  distance = parseInt(distance, 10);
  if (where !== 'up' && where !== 'down') {
    keyPos = 'left';
  }
  if (where === 'up' || where === 'left') {
    distance = 0 - distance;
  }
  style[ keyPos ] = (parseInt(style[ keyPos ], 10) + distance) + 'px';
};

Shape.prototype.move = function (where, pixels) {
  var style = this.element.style,
    distance = this.calculateDistance(where, pixels);
    this.changePosition(where, distance);
};

function Circle(options) {
  var _default = {
     diameter: '0px'
  };
  options.diameter = options.diameter || _default.diameter;
  options.width = options.height = options.diameter;

  Shape.call(this, options); // call - передаем объект и атрибут

  this.element.style.borderRadius = Math.floor( parseInt(options.diameter, 10)/2 ) + 'px';
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


function Treangle(options) {
  var _default = {
     side: '0px'
  };
  this.side = options.side = options.side || _default.side;
  options.width = options.height = '0px';

  Shape.call(this, options); 
  this.element.style.background =  '';

  var side = parseInt(this.side, 10),
    half = side/2,
    height =  Math.floor( Math.sqrt(side*side - half*half) ) + 'px';

  this.element.style.borderLeft =  height + ' solid transparent';
  this.element.style.borderRight =  height + ' solid transparent';
  this.element.style.borderBottom =  options.side + ' solid ' + options.color;
}
Treangle.prototype = Object.create(Shape.prototype);
Treangle.prototype.constructor = Treangle;

Treangle.prototype.calculateDistance = function calculateDistance(where, distance) {
  distance = distance || this.side;
  return distance;
};

var rectangleTwo = new Shape({   // передача объекта с шир высотой цветом
  width: '100px',
  height: '50px',
  color: 'blue'
});
var circleOne = new Circle({
  diameter: '50px',
  color: 'blue'
});
var treangle = new Treangle({
  side: '75px',
  color: 'blue'
});

treangle.render();
treangle.move('', '400px');
treangle.move('down', '10px');

rectangleTwo.render();
rectangleTwo.move('down', '95px');
rectangleTwo.move('', '400px');

circleOne.render();
circleOne.move('', '400px');
circleOne.move('down', '150px');