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
				var shoe = new SnowShoe('FakeKey');
			}).should.throw();
			done();
		});

		it('should have the default base URL if no options are supplied', function (done) {
			var shoe = new SnowShoe('FakeKey', 'FakeSecret');
			shoe.url.should.equal('https://beta.snowshoestamp.com/api/v2');
			done();
		});

		it('should respect a custom base user if supplied', function (done) {
			var url = 'http://www.google.com';
			var shoe = new SnowShoe('FakeKey', 'FakeSecret', {url: url});
			shoe.url.should.equal(url);
			done();
		});

	});
});
