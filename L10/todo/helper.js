/*global NodeList */
(function (global) {
	'use strict';

	// Get element(s) by CSS selector:
	global.qs = function (selector, scope) {
		return (scope || document).querySelector(selector);
	};

	global.qsa = function (selector, scope) {
		return (scope || document).querySelectorAll(selector);
	};

	// addEventListener wrapper:
	global.$on = function (target, type, callback, useCapture) {
		target.addEventListener(type, callback, !!useCapture);
	};

	// Attach a handler to event for all elements that match the selector,
	// now or in the future, based on a root element
	global.$delegate = function (target, selector, type, handler) {
		function dispatchEvent(event) {
			var targetElement = event.target;
			var potentialElements = global.qsa(selector, target);
			var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

			if (hasMatch) {
				handler.call(targetElement, event);
			}
		}

		// https://developer.mozilla.org/en-US/docs/Web/Events/blur
		var useCapture = type === 'blur' || type === 'focus';

		global.$on(target, type, dispatchEvent, useCapture);
	};

	// Find the element's parent with the given tag name:
	// $parent(qs('a'), 'div');
	global.$parent = function (element, tagName) {
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return global.$parent(element.parentNode, tagName);
	};

	// Allow for looping on nodes by chaining:
	// qsa('.foo').forEach(function () {})
	NodeList.prototype.forEach = Array.prototype.forEach;
})(window);

// qsa('li').forEach(function(element){
//    element.style.display = 'none';
// });

// qsa('li').forEach(function(element){
//    element.style.display = 'inherit';
// });

/*
var target = qs('#button'),
	type = 'click',
	callback = function (event) {
		console.log(event);
		console.warn('Click CloCk!!');
	};

$on(target, type, callback);

type = 'keyup';
callback = function (event) {
	if (event.keyCode === 13) {
		console.warn('enter!!');
		console.log(event.target.value);
	};
};

$on(qs('#todoText'), type, callback);
$on(qs('#todoText2'), type, callback);
*/
