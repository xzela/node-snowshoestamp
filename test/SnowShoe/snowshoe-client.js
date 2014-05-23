var should = require('should'),
	assert = require('assert'),
	SnowShoeStamp = require('../../lib/SnowShoeStamp');

describe('SnowShoe Client Unit Tests ', function () {
	describe('Initialize the SnowShoe Client library ', function () {
		it('The tests should should not explode!', function (done) {
			done();
		});

		it('should thrown an error if no API key is supplied', function (done) {
			(function () {
				var shoe = SnowShoeStamp();
			}).should.throw();
			done();
		});

		it('should thrown an error if no APP_SECRET option is supplied', function (done) {
			(function () {
				var options = {
					API_KEY: 'FAKE_KEY'
				};
				var shoe = SnowShoeStamp(options);
			}).should.throw();
			done();
		});

		it('should have the default base URL if no url options is supplied', function (done) {
			var options = {
				API_KEY: 'FAKE_KEY',
				APP_SECRET: 'FAKE_SECRET'
			};
			var shoe = SnowShoeStamp(options);
			shoe.apiUrl.should.equal('https://beta.snowshoestamp.com/api/v2');
			done();
		});

		it('should respect a custom apiUrl if supplied', function (done) {
			var url = 'http://www.google.com',
				options = {
				API_KEY: 'FAKE_KEY',
				APP_SECRET: 'FAKE_SECRET',
				apiUrl: url
			};
			var shoe = SnowShoeStamp(options);
			shoe.apiUrl.should.equal(url);
			done();
		});

		it('the debug callback url should be available if debugging is enabled', function (done) {
			var options = {
				API_KEY: 'FAKE_KEY',
				APP_SECRET: 'FAKE_SECRET',
				debug: true
			};
			var shoe = SnowShoeStamp(options);
			shoe.should.have.property('debugUrl');
			done();
		});

		it('the debug callback url should NOT be available if debugging is disabled', function (done) {
			var options = {
				API_KEY: 'FAKE_KEY',
				APP_SECRET: 'FAKE_SECRET'
			};
			var shoe = SnowShoeStamp(options);
			shoe.should.not.have.property('debugUrl');
			done();
		});

	});
});
