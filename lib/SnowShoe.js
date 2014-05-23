(function () {
	'stict mode';

	var requests = require('request'),
		events = require('events'),
		util = require('util'),
		SNOW_URL = 'https://beta.snowshoestamp.com/api/v2';

	function SnowShoe(options) {
		var publicAPI,
			url;
		options = options || {};
		//applying the Emitter
		events.EventEmitter.call(this);

		if (options.API_KEY === undefined) {
			throw new Error('No API key was supplied');
		}
		if (options.APP_SECRET === undefined) {
			throw new Error('No API Secret was supplied');
		}
		options.url  = options.url || SNOW_URL;

		function _execute(options) {
			requests.get(options, function (error, request, body) {

			});
		}

		this.on("execute", _execute);

		publicAPI = {
			url: options.url
		};

		return publicAPI;
	}
	// Enable Event Emitting
	util.inherits(SnowShoe, events.EventEmitter);
	module.exports = SnowShoe;
})();
