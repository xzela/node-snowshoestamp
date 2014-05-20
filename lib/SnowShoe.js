(function () {
	'stict mode';

	var requests = require('request'),
		events = require('events'),
		util = require('util'),
		SNOW_URL = 'https://beta.snowshoestamp.com/api/v2';

	function SnowShoe(key, secret, options) {
		var self = this;
		//applying the Emitter
		events.EventEmitter.call(this);

		if (key === undefined) {
			throw new Error('No API key was supplied');
		}
		this.key = key;
		if (secret === undefined) {
			throw new Error('No API Secret was supplied');
		}
		this.secret = secret;

		// check options
		if (options === undefined) {
			this.rootUrl = SNOW_URL;
		} else {
			this.rootUrl = options.rootUrl || SNOW_URL;
		}

		function _execute(options) {
			requests.get(options, function (error, request, body) {

			});
		}

		this.on("execute", _execute);
	}
	// Enable Event Emitting
	util.inherits(SnowShoe, events.EventEmitter);
	module.exports = SnowShoe;
}).call(this);
