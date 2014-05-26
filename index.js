var SnowShoeStamp = require('./lib/SnowShoeStamp'),
	options = {
		API_KEY: 'f44441934d35bf14890e',
		APP_SECRET: '95575808210e67584a79b434979a4fe1003f0f6d',
		debug: true
	};

var shoe = SnowShoeStamp(options);

shoe.stamp({
	user: 12345
}, function (err, res, body) {
	if (err) {
		console.log(err);
	} else {
		console.log(body);
	}
});

console.log(shoe);
