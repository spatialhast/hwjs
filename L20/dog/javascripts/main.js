// $ document ready
$(function () {

	// находим форму
	var $searhForm = $('#searh-form');
	// находим input
	var $query = $('#query');

	var $result = $('#result');

	var successLocations;
	successLocations = localStorage.getItem('successLocations');
	successLocations = JSON.parse(successLocations);

	if ( !successLocations ) {
		successLocations = [];
	}

	var showSuccessLocations = function showSuccessLocations () {
		
		var htmlTemplate = $('#success-locations').html();
		var newHtmlTemplate = _.template(htmlTemplate)({
			locations: successLocations
		});

		$result.html( newHtmlTemplate );
	};

	var queryText = (function() {
		var _value = '';
		
		return {
			get: function() {
				// возвращение переменной _value
				return _value;
			},
			set: function(val) {
				// изменение переменной _value
				_value = val;
				// вызов события 'querytext:change'
				$query.trigger('querytext:change', val);

				$query.val(val);
			}
		};
	})();

	// создаем функцию коллбек для submit формы	
	var onSubmitHandler = function (event) {
		queryText.set( $query.val() );
		event.preventDefault();
	};

	var showBuildingsList = function(response){
		console.info('showBuildingsList', response);
		
		var $listingsList = $('#listings-list');

		var htmlList = $listingsList.html();

		var listingTemplate = _.template( htmlList );

		var newHtml = listingTemplate({
			items: response.listings
		});

		$result.html( newHtml );
	};
	var showLocationsList = function(response){
		// response.locations
		// $result
		console.info('showLocationsList', response.locations);

		var htmlTemplate = $('#locations-list').html();
		var funcTemplate = _.template(htmlTemplate);
		

		var newHtmlTemplate = funcTemplate({
			locations: response.locations,
			first: '<li>1</li>'
		});

		$result.html( newHtmlTemplate );
	};
	var showErrorList = function(){
		console.error('showErrorList');
	};

	var onChangeQueryText = function (event, text) {
		console.log('onChangeQueryText');
		var callbackSuccess = function(data) {
			console.info('callbackSuccess');
			switch (data.response.application_response_code) {
				case '100':
				case '101':
				case '110':
					showBuildingsList(data.response);

					if ( successLocations.indexOf( text ) < 0 ) {
						successLocations.push(text);
						localStorage.setItem('successLocations', JSON.stringify(successLocations));
					}
				
				break;
				case '200':
				case '202':
					showLocationsList(data.response);
				break;
				default:
					showErrorList(data.response);
			}
		};
		var callbackError = function(data) {
			console.error(data);
			//showErrorList(false, data);
		};
		nestoriaApi.getLocations(text, callbackSuccess, callbackError);
	};

	var onClickLocation = function(event) {
		// this - ссылка на кликнутый target (ссылку)
		var placeName = this.getAttribute('data-place-name');
		queryText.set(placeName);
	};

	showSuccessLocations();

	$searhForm.on('submit', onSubmitHandler);
	$query.on('querytext:change', onChangeQueryText);

	$result.on('click', '.location', onClickLocation);
	
});