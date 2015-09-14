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

    this.elemetnt = element; // сохранение element в свойства объекта
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

  this.elemetnt = element; // сохранение element в свойства объекта
};



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


circle.render();


























