// http://pastie.org/10379746#8
//1. Создать объекты в JS, которы описывают прямоугольник и круг (высота, ширина, диаметр, цвет и месторасположение)
var circle = {
  top: 0,
  left: 0,
  diameter: 100,
  color: 'red'
};

var rectangle = {
  top: 0,
  left: 150,
  width: 100,
  height: 100,
  color: 'green'
};

//2. Добавить метод render, который будет создавать div добавлять ему нужные стили и прикреплять его к DOM (то есть в body)
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
};