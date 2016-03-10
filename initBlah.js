
/* eslint-env browser */
/* global blahCode */

// add param function to the location
// useful to work smoothly with querystrings
// hash is used instead of search to prevent reloads
// yes, I took this from StackOverflow --Haroen
// http://stackoverflow.com/a/28132596/3185307
location.params = function(params) {
  var obj = {}, i, parts, len, key, value;

  if (typeof params === 'string') {
    value = location.hash.match(new RegExp('[?&]' + params + '=?([^&]*)[&#$]?'));
    return value ? value[1] : undefined;
  }

  var _params = location.hash.substr(1).split('&');

  for (i = 0, len = _params.length; i < len; i++) {
    parts = _params[i].split('=');
    if (! parts[0]) {continue;}
    obj[parts[0]] = parts[1] || true;
  }

  if (typeof params !== 'object') {return obj;}

  for (key in params) {
    value = params[key];
    if (typeof value === 'undefined') {
      delete obj[key];
    } else {
      obj[key] = value;
    }
  }

  parts = [];
  for (key in obj) {
    parts.push(key + (obj[key] === true ? '' : '=' + obj[key]));
  }

  location.hash = parts.join('&');
};

document.addEventListener('DOMContentLoaded', function () {
	'use strict';

	var translate = function() {
		if (document.getElementById('mode').value === 'encode') {
			document.getElementById('output').value = blahCode.encode(document.getElementById('input').value, document.querySelector('input[name="language"]:checked').value);
		} else {
			document.getElementById('output').value = blahCode.decode(document.getElementById('input').value, document.querySelector('input[name="language"]:checked').value);
		}
		window.location.params({lang: document.querySelector('input[name="language"]:checked').value, to: document.getElementById('mode').value, q: document.getElementById('input').value});
	};

	// variables
	var radios = document.querySelectorAll('input[name="language"]');

	// get from 'query'
	// input
	if (location.params('q')) {
		document.getElementById('input').value = location.params('q');
	}

	// language
	var language;
	if (location.params().lang) {
		language = location.params().lang;
	} else {
		language = 'blah';
	}

	for (var i = radios.length; i--;) {
		if (radios[i].value === language) {
			radios[i].checked = true;
		} else {
			radios[i].removeAttribute('checked');
		}
	}

	// mode
	if (location.params('to')) {
		document.getElementById('mode').value = location.params('to');
	}

	// push mode to url if it changes
	document.getElementById('mode').addEventListener('change',function(){
		location.params({'to':document.getElementById('mode').value});
	});

	// translate on load
	if(location.params('q')) {
		translate();
	}

	// translate on change of language
	for (var i = radios.length; i--;) {
		radios[i].addEventListener('change', function (e) {
			translate();
		});
	}

	// translate on input
	document.getElementById('input').addEventListener('input', function(e){
		e.preventDefault();
		translate();
	});
});
