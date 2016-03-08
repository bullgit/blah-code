// ESLint config //
/* eslint-env browser */
/* global blahCode */

document.addEventListener('DOMContentLoaded', function () {
	'use strict';
	var form = document.querySelectorAll('form')[0];
	var radios = document.querySelectorAll('input[name="language"]');
	for (var i = radios.length; i--;) {
		radios[i].addEventListener('change', function (e) {
			document.querySelectorAll('button')[0].innerHTML = document.querySelector('input[name="language"]:checked').value + ' …';
		});
	}
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		if (document.querySelectorAll('#mode')[0].value === 'encode') {
			document.querySelectorAll('#output')[0].value = blahCode.encode(document.querySelectorAll('#input')[0].value, document.querySelector('input[name="language"]:checked').value);
		} else {
			document.querySelectorAll('#output')[0].value = blahCode.decode(document.querySelectorAll('#input')[0].value, document.querySelector('input[name="language"]:checked').value);
		}
	});
});
