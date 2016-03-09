
/* eslint-env browser */
/* global blahCode */

document.addEventListener('DOMContentLoaded', function () {
	'use strict';
	var form = document.getElementsByTagName('form')[0];
	var radios = document.querySelectorAll('input[name="language"]');
	for (var i = radios.length; i--;) {
		radios[i].addEventListener('change', function (e) {
			translate();
		});
	}
	var translate = function() {
		if (document.getElementById('mode').value === 'encode') {
			document.getElementById('output').value = blahCode.encode(document.getElementById('input').value, document.querySelector('input[name="language"]:checked').value);
		} else {
			document.getElementById('output').value = blahCode.decode(document.getElementById('input').value, document.querySelector('input[name="language"]:checked').value);
		}
	}
	document.getElementById('input').addEventListener('input', function(e){
		e.preventDefault();
		translate();
	});
});
