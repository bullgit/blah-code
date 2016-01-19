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
	 * Chars which are encoded. Others will be simply ignored ᕕ( ᐛ )ᕗ
	 * @type {Array}
	 * @private
	 */
	var chars = [
		' ',
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
		'ä',
		'ü',
		'ö',
		'!',
		'?',
		'.',
		'-',
		'@',
		'ë',
		'ï',
		'é',
		'à',
		'ç'
	];

	/**
	 * Repeats strings.
	 *
	 * @param       {String} string The string to repeat
	 * @param       {Number} count how many times to repeat
	 * @return      {String} Repeated Strings in one string
	 * @private
	 */
	var repeat = function (string, count) {
		var result = '';

		if (count < 1) {
			return '';
		}

		while (count > 1) {
			if (count & 1) {
				result += string;
			}
			count >>= 1;
			string += string;
		}
		return result + string;
	};

	/**
	 * Encodes normal text to blah code.
	 *
	 * @param       {String} text Normal text.
	 * @return      {String} Blah code
	 * @public
	 */
	var encode = function (text) {
		var blah = [];

		text.toLowerCase().split('').forEach(function (element) {
			var position = chars.indexOf(element);

			if (position !== -1) {
				blah.push(repeat('blah ', position + 1).trim());
			}
		});

		return blah.join(', ');
	};

	/**
	 * Decodes blah code to normal text.
	 *
	 * @param       {String} code Blah code.
	 * @return      {String} Normal text
	 * @public
	 */
	var decode = function (code) {
		var text = [];

		code.split(',').forEach(function (element) {
			text.push(chars[element.trim().split(' ').length - 1]);
		});

		return text.join('');
	};

	/**
	 *creates Ooks out of a numerical value
	 *
	 * @param {Number} The value to ookify
	 * @return {String} an Ook-representation of the value
	 * @private
	 */
	var ookify = function (value) {
		var ooks = '';
		var leftValue = Math.floor(value / 3);
		if (leftValue > 0) {
			ooks = ookify(leftValue) + ' ';
		}

		var rightValue = value % 3;

		if (rightValue === 0) {
			ooks += 'Ook.';
		} else if (rightValue === 1) {
			ooks += 'Ook?';
		} else if (rightValue === 2) {
			ooks += 'Ook!';
		} else {
			ooks += rightValue + ' said Monkey!';
		}
		return ooks;
	};

	/**
	 *creates a numerical value out of a set of ooks
	 *
	 * @param {String} an Ook-representation of the value
	 * @return {Number} the numerical value
	 * @private
	 */
	var unookify = function (charTribbles) {
		var idx = 0;
		var tribblePattern = /Ook(.)/gi;
		var match = null;
		while ((match = tribblePattern.exec(charTribbles)) !== null) {
			idx *= 3;
			if (match[1] === '.') {
				idx += 0;
			} else if (match[1] === '?') {
				idx += 1;
			} else if (match[1] === '!') {
				idx += 2;
			} else {
				console.log('Got Invalid value "' + match[0] + '"');
			}
		}
		return idx;
	};

	/**
	 * Encodes human readable text to ape readable code.
	 * Be aware of the monkeys!
	 *
	 * @param       {String} text Normal text.
	 * @return      {String} ape code
	 * @public
	 */
	var encodeApe = function (text) {
		var blah = [];

		text.toLowerCase().split('').forEach(function (element) {
			var position = chars.indexOf(element);

			if (position !== -1) {
				blah.push(ookify(position).trim());
			}
		});

		return blah.join(', ');
	};

	/**
	 * Decodes ape readable code to human readable text.
	 *
	 * @param       {String} code ape code.
	 * @return      {String} Human text
	 * @public
	 */
	var decodeApe = function (code) {
		var charPattern = /(\s*Ook[!?.]\s*)+,?/gi;

		var result = '';

		var characters = null;
		while ((characters = charPattern.exec(code)) !== null) {
			var idx = unookify(characters[0]);
			result += chars[idx];
		}
		return result;
	};

	return {
		encode: encode,
		encodeApe: encodeApe,
		decode: decode,
		decodeApe: decodeApe
	};
});
