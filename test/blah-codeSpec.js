var assert = require('assert');
var BlahCode = require('../blah-code');

describe('blah-code', function () {
	var myinstance = new BlahCode();

	it('should have someProperty', function () {
		assert.equal(myinstance.someProperty, 'value');
	});

	it('should run someMethod', function () {
		assert.equal(myinstance.someMethod('hello '), 'hello value');
	});
});
