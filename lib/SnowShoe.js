var requests = require('request');

function SnowShoe(key, secret, options) {
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
		this.rootUrl = 'https://beta.snowshoestamp.com/api/v2';
	} else {
		this.rootUrl = options.rootUrl || 'https://beta.snowshoestamp.com/api/v2';
	}
}

module.exports = SnowShoe;
