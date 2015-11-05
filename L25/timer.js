var timer = (function () {
	return {
		now: function() {
			var dateNow = new Date(),
				hours= dateNow.getHours(),
				minutes = dateNow.getMinutes(),
				seconds = dateNow.getSeconds(),
				timestamp = dateNow.getTime();
				console.log(timestamp);



				return hours + ':' + minutes + ':' + seconds;

				

		}
	}
})();