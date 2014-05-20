var requests = require('requests');

function SnowShoe(key, secret, options) {
	this.key = key;
	this.secret = secret;
	// check options
	if (options === undefined) {
		this.rootUrl = 'https://beta.snowshoestamp.com/api/v2';
	} else {
		this.rootUrl = options.url || 'https://beta.snowshoestamp.com/api/v2';
	}

}

module.exports = SnowShoe;
