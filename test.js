var expect = require('chai').expect;
var blahCode = require('./');

describe('blah-code', function () {
	it('should encode normal text to blah-code', function () {
		expect(blahCode.encode('Hi there! What’s up?')).to.equal('blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah, blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah, blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah');
	});

	it('should decode blah-code to normal text', function () {
		expect(blahCode.decode('blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah, blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah, blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah')).to.equal('hi there! whats up?');
	});

	it('should encode an email adress to blah-code', function () {
		expect(blahCode.encode('mail@michael-kuehnel.de')).to.equal('blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah, blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah, blah blah blah blah, blah blah blah blah blah blah blah blah blah, blah blah, blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah, blah blah blah blah blah blah');
	});

	it('should decode an email adress from blah-code', function () {
		expect(blahCode.decode('blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah, blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah, blah blah blah blah, blah blah blah blah blah blah blah blah blah, blah blah, blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah, blah blah blah blah blah blah')).to.equal('mail@michael-kuehnel.de');
	});
});

describe('ape-code', function () {
	it('should encode text to ape code', function () {
		expect(blahCode.encodeApe('Hi there!')).to.equal('Ook! Ook!, Ook? Ook. Ook., Ook., Ook! Ook. Ook!, Ook! Ook!, Ook? Ook!, Ook! Ook. Ook., Ook? Ook!, Ook? Ook. Ook? Ook.');
	});

	it('should decode ape code to text', function () {
		expect(blahCode.decodeApe('Ook! Ook!, Ook? Ook. Ook., Ook., Ook! Ook. Ook!, Ook! Ook!, Ook? Ook!, Ook! Ook. Ook., Ook? Ook!, Ook? Ook. Ook? Ook.')).to.equal('hi there!');
	});

	it('should encode email to ape code', function () {
		expect(blahCode.encodeApe('spamalot@hardcoded.de')).to.equal('Ook! Ook. Ook?, Ook? Ook! Ook?, Ook?, Ook? Ook? Ook?, Ook?, Ook? Ook? Ook., Ook? Ook! Ook., Ook! Ook. Ook!, Ook? Ook. Ook! Ook?, Ook! Ook!, Ook?, Ook! Ook. Ook., Ook? Ook?, Ook? Ook., Ook? Ook! Ook., Ook? Ook?, Ook? Ook!, Ook? Ook?, Ook? Ook. Ook? Ook!, Ook? Ook?, Ook? Ook!');
	});

	it('should decode ape code to email', function () {
		expect(blahCode.decodeApe('Ook! Ook. Ook?, Ook? Ook! Ook?, Ook?, Ook? Ook? Ook?, Ook?, Ook? Ook? Ook., Ook? Ook! Ook., Ook! Ook. Ook!, Ook? Ook. Ook! Ook?, Ook! Ook!, Ook?, Ook! Ook. Ook., Ook? Ook?, Ook? Ook., Ook? Ook! Ook., Ook? Ook?, Ook? Ook!, Ook? Ook?, Ook? Ook. Ook? Ook!, Ook? Ook?, Ook? Ook!')).to.equal('spamalot@hardcoded.de');
	});
});
