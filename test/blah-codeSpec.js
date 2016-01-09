var assert = require('assert');

var blahCode = require('../blah-code');

describe('blah-code', function () {

  var myinstance = new blahCode();

  it('should have someProperty', function () {
    assert.equal(myinstance.someProperty, 'value');
  });

  it('should run someMethod', function () {
    assert.equal(myinstance.someMethod('hello '), 'hello value');
  });

});

