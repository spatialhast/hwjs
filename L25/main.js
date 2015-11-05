/*systemJS.define('timer', function () {
	console.log('init timer module');
	return {

	};
});*/

systemJS.define('timer', function () {
	var timer = systemJS.requirer('timer');

	function _render() {

					document.getElementById("timer").innerHTML = timer.now();
	}
	return {
		init: function () {
			setInterval(_render, 1000);
		}
	};
});