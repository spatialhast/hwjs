// нужно скрыть
/*
var systemJS = { 
	_moduleList:
	require:
	define:
};
*/

//инкапсуляция
var systemJS = (function () {

	var _moduleList = {};

	return { 

		require: function( name ){
			if (!_moduleList[ name ]) {
				console.error('no module: ', name);
				return;
			}
			if (_moduleList[ name ].fabric && _moduleList[ name ].link ) {
				_addScript(_moduleList[ name ].link);
			}
			return _moduleList
		},

		define: function( name, createModule ){
			var moduleFabric,
				moduleLink;

				if (typeof createModule === 'string') {
					moduleLink = createModule;
				} else if (typeof === 'function') {
					moduleFabric = createModule;
				} else {
					console.error('Second parameter should be string or function');
					return;
				}
			_moduleList[ name ] = createModule;
		}

	}
})();


