var SnowShoeStamp = require('./lib/SnowShoeStamp'),
	options = {
		API_KEY: 'FAKE_API_KEY',
		APP_SECRET: 'FAKE_APP_SECRET',
		debug: true
	};

var shoe = SnowShoeStamp(options);

console.log(shoe);
