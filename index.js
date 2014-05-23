var SnowShoe = require('./lib/SnowShoe'),
	options = {
		API_KEY: 'FAKE_API_KEY',
		APP_SECRET: 'FAKE_APP_SECRET',
		debug: true
	};

var shoe = SnowShoe(options);

console.log(shoe);
