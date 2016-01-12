// ESLint config //
/* eslint-env browser */
/* global blahCode */

document.addEventListener('DOMContentLoaded', function () {
	'use strict';
	var form = document.querySelectorAll('form')[0];
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		if (document.querySelectorAll('#mode')[0].value === 'encode') {
			document.querySelectorAll('#output')[0].value = blahCode.encode(document.querySelectorAll('#input')[0].value);
		} else {
			document.querySelectorAll('#output')[0].value = blahCode.decode(document.querySelectorAll('#input')[0].value);
		}
	});
});
