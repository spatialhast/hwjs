function Shape(options) {
  var _default = {
     top: '0px',
     left: '0px',
     width: '0px',
     height: '0px',
     color: ''
  };
  var element = document.createElement('div');
  element.style.position = 'absolute';
  element.style.top = options.top || _default.top;
  element.style.left = options.left || _default.left;
  element.style.width = options.width || _default.width;
  element.style.height = options.height || _default.height;
  element.style.background = options.color || _default.color;
  this.getElement = function() {
    return element;
  }
}
Shape.prototype.render = function render() {
  var element = this.getElement();
  if (document.body !== element.parentNode) {
      document.body.appendChild(element);
  }
};
Shape.prototype.calculateDistance = function calculateDistance(where, distance) {
  var element = this.getElement();
  if (where === 'up' || where === 'down') {
    distance = distance || element.style.width;
  } else {
    distance = distance || element.style.width;
  }
  return distance;
};
Shape.prototype.changePosition = function changePosition(where, distance) {
  var style = this.getElement().style,
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
  var style = this.getElement().style,
    distance = this.calculateDistance(where, pixels);
    this.changePosition(where, distance);
};

function Circle(options) {
  var _default = {
     diameter: '0px'
  };
  options.diameter = options.diameter || _default.diameter;
  options.width = options.height = options.diameter;

  Shape.call(this, options);

  this.getElement().style.borderRadius = Math.floor( parseInt(options.diameter, 10)/2 ) + 'px';
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


function Treangle(options) {
  var _default = {
     side: '0px'
  };
  var side = options.side = options.side || _default.side;
  this.getSide = function getSide() {
    return side;
  };

  options.width = options.height = '0px';

  Shape.call(this, options);

  var element = this.getElement();
  element.style.background =  '';

  function calculateBorders(side) {
    side = parseInt(side, 10);
    var half = side/2,
      height =  Math.floor( Math.sqrt(side*side - half*half) ) + 'px';
      return {
        borderLeft: height + ' solid transparent',
        borderRight: height + ' solid transparent',
        borderBottom: options.side + ' solid ' + options.color
      }
  }
  var borderStyles = calculateBorders(side);
  element.style.borderLeft = borderStyles.borderLeft;
  element.style.borderRight = borderStyles.borderRight;
  element.style.borderBottom = borderStyles.borderBottom;
}
Treangle.prototype = Object.create(Shape.prototype);
Treangle.prototype.constructor = Treangle;

Treangle.prototype.calculateDistance = function calculateDistance(where, distance) {
  distance = distance || this.side;
  return distance;
};

var rectangleTwo = new Shape({
  width: '100px',
  height: '50px',
  color: 'pink'
});
var circleOne = new Circle({
  diameter: '50px',
  color: 'pink'
});
var treangle = new Treangle({
  side: '75px',
  color: 'pink'
});

treangle.render();
treangle.move('', '700px');
treangle.move('down', '10px');

rectangleTwo.render();
rectangleTwo.move('down', '95px');
rectangleTwo.move('', '700px');

circleOne.render();
circleOne.move('', '700px');
circleOne.move('down', '150px');