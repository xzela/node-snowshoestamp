(function () {
	'stict mode';

	var requests = require('request'),
		events = require('events'),
		util = require('util'),
		SNOW_BASE_URL = 'https://beta.snowshoestamp.com',
		SNOW_API_URL = SNOW_BASE_URL + '/api/v2';

	function SnowShoeStamp(options) {
		var publicAPI,
			local = options || {};
		//applying the Emitter
		events.EventEmitter.call(this);

		if (options.API_KEY === undefined) {
			throw new Error('No API key was supplied');
		}
		if (options.APP_SECRET === undefined) {
			throw new Error('No App Secret was supplied');
		}
		local.apiUrl  = options.apiUrl || SNOW_API_URL;
		local.stampUrl = SNOW_BASE_URL + '/applications/client/' + options.API_KEY;

		function stamp(params, cb) {
			var opts = {
				url: local.stampUrl,
				qs: params
			};
			requests.get(opts, function (err, res, body) {
				if (err) {
					cb(err);
				} else {
					cb(null, res, body);
				}
			});
		}

		function callback(data, cb) {
			var opts = {
				oauth: {
					callback: SNOW_API_URL,
					consumer_key: options.API_KEY,
					consumer_secret: options.APP_SECRET
				},
				url: SNOW_API_URL
			};
			requests.post(opts, function (err, res, body) {
				if (err) {
					cb(err);
				} else {
					cb(null, res, body);
				}
			});
		}

		publicAPI = {
			apiUrl: local.apiUrl,
			stampUrl: local.stampUrl,
			callbackUrl: SNOW_BASE_URL + '/applications/client/' + options.API_KEY + '/callback',
			callback: callback,
			stamp: stamp
		};

		return publicAPI;
	}
	// Enable Event Emitting
	util.inherits(SnowShoeStamp, events.EventEmitter);
	module.exports = SnowShoeStamp;
})();
