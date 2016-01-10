var expect = require('chai').expect;
var BlahCode = require('./blah-code');

describe('blah-code', function () {
	var myinstance = new BlahCode();

	it('should have someProperty', function () {
		expect(myinstance.someProperty).to.equal('value');
	});

	it('should run someMethod', function () {
		expect(myinstance.someMethod('hello ')).to.equal('hello value');
	});
});
