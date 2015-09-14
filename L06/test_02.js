// http://pastie.org/10379815#1,3
//4. Сделать так, что бы цвет у них был одинаковым и брался из прототипа

var prototypeShape = {
    color: 'blue'
};

var circle = Object.create(prototypeShape);
circle.top = 0;
circle.left = 0;
circle.diameter = 100;
  
var rectangle = Object.create(prototypeShape);
rectangle.top = 0;
rectangle.left = 150;
rectangle.width = 100;
rectangle.height = 100;

circle.render = function render () {
  var element = document.createElement('div');

  element.style.height = this.diameter + 'px';
  element.style.width = this.diameter + 'px';
  element.style.borderRadius = Math.floor(this.diameter/2) + 'px';

  element.style.background = this.color;
  
  element.style.position = 'absolute';
  element.style.top = this.top + 'px';
  element.style.left = this.left + 'px';
  
  document.body.appendChild(element);
  // тут сохраняем element в свойство объекта
  this.element = element;
};

rectangle.render = function render () {
  var element = document.createElement('div');
  
  element.style.height = this.height + 'px';
  element.style.width = this.width + 'px';

  element.style.background = this.color;
  
  element.style.position = 'absolute';
  element.style.top = this.top + 'px';
  element.style.left = this.left + 'px';
  
  document.body.appendChild(element);
  // тут сохраняем element в свойство объекта
  this.element = element;
};


// исправляем
circle.move = rectangle.move = function move(where) {
  switch(where) {
    case 'up':
      this.element.style.top = (parseInt(this.element.style.top, 10) - parseInt(this.element.style.height, 10)) + 'px'; // столкнулся с проблемой, что положение не меняется
      // this.element.style.top = '150px' - '100px'; => NaN
    break;
    case 'down':
      this.element.style.top = (parseInt(this.element.style.top, 10) + parseInt(this.element.style.height, 10)) + 'px';
    break;
    case 'left':
      this.element.style.left = (parseInt(this.element.style.left, 10) - parseInt(this.element.style.width, 10)) + 'px';
    break;
    default:
      this.element.style.left = (parseInt(this.element.style.left, 10) + parseInt(this.element.style.width, 10)) + 'px';
  }
};