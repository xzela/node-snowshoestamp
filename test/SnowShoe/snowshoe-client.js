var should = require('should'),
	assert = require('assert'),
	SnowShoe = require('../../lib/SnowShoe');

describe('SnowShoe Client Unit Tests ', function () {
	describe('Initialize the SnowShoe Client library ', function () {
		it('The tests should should not explode!', function (done) {
			done();
		});

		it('should thrown an error if no API key is supplied', function (done) {
			(function () {
				var shoe = new SnowShoe();
			}).should.throw();
			done();
		});

		it('should thrown an error if no APP_SECRET option is supplied', function (done) {
			(function () {
				var options = {
					API_KEY: 'FAKE_KEY'
				};
				var shoe = new SnowShoe(options);
			}).should.throw();
			done();
		});

		it('should have the default base URL if no url options is supplied', function (done) {
			var options = {
				API_KEY: 'FAKE_KEY',
				APP_SECRET: 'FAKE_SECRET'
			};
			var shoe = new SnowShoe(options);
			shoe.url.should.equal('https://beta.snowshoestamp.com/api/v2');
			done();
		});

		it('should respect a custom url if supplied', function (done) {
			var url = 'http://www.google.com',
				options = {
				API_KEY: 'FAKE_KEY',
				APP_SECRET: 'FAKE_SECRET',
				url: url
			};
			var shoe = new SnowShoe(options);
			shoe.url.should.equal(url);
			done();
		});

	});
});
