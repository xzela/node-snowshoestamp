(function () {
	'stict mode';

	var http = require('http'),
		events = require('events'),
		util = require('util'),
		SNOW_BASE_URL = 'https://beta.snowshoestamp.com',
		SNOW_API_URL = SNOW_BASE_URL + '/api/v2';

	function SnowShoeStamp(options) {
		var publicAPI;
		options = options || {};
		//applying the Emitter
		events.EventEmitter.call(this);

		if (options.API_KEY === undefined) {
			throw new Error('No API key was supplied');
		}
		if (options.APP_SECRET === undefined) {
			throw new Error('No API Secret was supplied');
		}
		options.apiUrl  = options.apiUrl || SNOW_API_URL;
		options.stampUrl = SNOW_BASE_URL + '/applications/client/' + options.API_KEY;

		function _execute(options) {
			requests.get(options, function (error, request, body) {

			});
		}

		publicAPI = {
			apiUrl: options.apiUrl,
			stampUrl: options.stampUrl
		};

		if (options.debug !== undefined && options.debug === true) {
			publicAPI['debugUrl'] = SNOW_BASE_URL + '/applications/client/' + options.API_KEY + '/callback';
		}

		return publicAPI;
	}
	// Enable Event Emitting
	util.inherits(SnowShoeStamp, events.EventEmitter);
	module.exports = SnowShoeStamp;
})();
