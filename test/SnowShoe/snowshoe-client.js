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

		it('should thrown an error if no API secret is supplied', function (done) {
			(function () {
				var options = {
					API_KEY: 'FAKE_KEY'
				};
				var shoe = new SnowShoe(options);
			}).should.throw();
			done();
		});

		it('should have the default base URL if no options are supplied', function (done) {
			var options = {
				API_KEY: 'FAKE_KEY',
				API_SECRET: 'FAKE_SECRET'
			};
			var shoe = new SnowShoe(options);
			shoe.url.should.equal('https://beta.snowshoestamp.com/api/v2');
			done();
		});

		it('should respect a custom base user if supplied', function (done) {
			var options = {
				API_KEY: 'FAKE_KEY',
				API_SECRET: 'FAKE_SECRET',
				url: 'http://www.google.com'
			};
			var shoe = new SnowShoe(options);
			shoe.url.should.equal(options.url);
			done();
		});

	});
});
