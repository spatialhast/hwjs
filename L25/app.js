systemJS.define('timer', 'timer.js');
systemJS.define('main', 'main.js');


var main = systemJS.require('main');
main.init();