(function (root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], function () {
			return (root.blahCode = factory());
		});
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like enviroments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals
		root.blahCode = factory();
	}
})(this, function () {
	// UMD Definition above, do not remove this line

	// To get to know more about the Universal Module Definition
	// visit: https://github.com/umdjs/umd

	'use strict';

	/**
	 * Languages object
	 * @type {Object}
	 * @property {Array} languages.bleh - Strings of blah which are used to represent a number.
	 * @private
	 */
	var languages = {
		blah: [
			'bleh',
			'blah',
			'bluh',
			'blaah',
			'bleeh',
			'bluuh',
			'blehh',
			'blaa',
			'blahh',
			'blee'
		],
		ooks: [
			'Ook',
			'Ook?',
			'Ook!',
			'Ook?!',
			'Ook!?',
			'Oook',
			'Oook?',
			'Oook!',
			'Oook?!',
			'Oook!?'
		]
	};

	/**
	 * Encodes normal text.
	 *
	 * @param       {String} text Normal text.
	 * @param 			{String} [language='blah'] -	Optional. Defaults to blah. Could be 'ooks' otherwise.
	 * @return      {String} Encoded text
	 * @public
	 */
	var encode = function (text, language) {
		var output = [];
		language = language === undefined ? 'blah' : language;

		for (var letter in text) {
			if (text.hasOwnProperty(letter)) {
				var encoded = [];
				var temporary = text[letter].charCodeAt(0).toString().split('');
				for (var code in temporary) {
					if (temporary.hasOwnProperty(code)) {
						encoded.push(languages[language][temporary[code]]);
					}
				}
				output.push(encoded.join(' '));
			}
		}
		return output.join('. ');
	};

	/**
	 * Decodes to normal text.
	 *
	 * @param       {String} text Encoded text.
	 * @param 			{String} [language='blah'] -	Optional. Defaults to blah. Could be 'ooks' otherwise.
	 * @return      {String} Decoded text
	 * @public
	 */
	var decode = function (text, language) {
		var output = [];
		language = language === undefined ? 'blah' : language;
		var encoded = text.split('. ');
		for (var char in encoded) {
			if (encoded.hasOwnProperty(char)) {
				var codes = encoded[char].split(' ');
				var character = [];
				for (var i in codes) {
					if (codes.hasOwnProperty(i)) {
						character.push(languages[language].indexOf(codes[i]));
					}
				}
				output.push(String.fromCharCode(character.join('')));
			}
		}
		return output.join('');
	};

	return {
		encode: encode,
		decode: decode
	};
});
