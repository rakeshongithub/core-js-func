"use strict";

(function (window, document) {
	// namespacing alies
	var __ = window.__ = {};
	__.VERSION = "1.0.0";


	// *****************************************************
	// Array FUNCTION
	// *****************************************************

	// 1. __.chunk(array, [size]): Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
	__.chunk = function (array, size) {
		// check for Array length
		if(__.isValidArray(array) || !size){
			return [];
		}
		var chunkedArr = [];
		for (var i = 0; i < (array.length / size); i++) {
			var from = i < 1 ? i : i * size,
				to = size + from,
				slicedArr = __.baseSlice(array, from, to);
			chunkedArr.push(slicedArr);
		}
		return chunkedArr;
	};

	// 2. __.compact(array): Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
	__.compact = function (array) {
		// check for Array length
		if(__.isValidArray(array)){
			return [];
		}
		return array.filter(function (item) {
			if (item) {
				return item;
			}
		});
	};

	// 3. __.compactDeep(array): Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
	__.compactDeep = function (array) {
		// check for Array length
		if(__.isValidArray(array)){
			return [];
		}
		var compactArr = [];
		array.filter(function (item, i) {
			if (item) {
				(item instanceof Array) ? compactArr.push(__.compactDeep(item)) : compactArr.push(item);
			}
		});
		return compactArr;
	};

	// 4. __.concat(array, [values]): Creates a new array concatenating array with any additional arrays and/or values.
	__.concat = function () {
		return [].concat.apply([], arguments);
	};

	// 4. __.difference(array, [values]): Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
	__.difference = function () {
		var uniqueArr, array, remainArguments;
		// check arguments length
		if(__.isArgumentsLength(arguments)){
			return [];
		}
		uniqueArr = [];
		array = arguments[0];
		remainArguments = [].concat.apply([], arguments).slice(array.length);
		array.filter(function (item) {
			if (remainArguments.indexOf(item) === -1) {
				uniqueArr.push(item);
			}
		});
		return uniqueArr;
	};

	// 5. __.drop(array, [n=1]): Creates a slice of array with n elements dropped from the beginning.
	__.drop = function (array, size) {
		// check arguments length
		if(__.isValidArray(array)){
			return [];
		}
		return __.baseSlice(array, (size === undefined) ? 1 : size, undefined);
	};

	// 6. __.dropRight(array, [n=1]): Creates a slice of array with n elements dropped from the beginning.
	__.dropRight = function (array, size) {
		// check arguments length
		if(__.isValidArray(array)){
			return [];
		}
		var end;
		if (size === undefined) {
			end = -1;
		} else if (size > 0) {
			end = -size
		}
		return __.baseSlice(array, 0, end);
	};

	// 7. __.dropRightWhile(array, [predicate=_.identity]): Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
	__.dropRightWhile = function (array, predicate) {
		// check arguments length
		if(__.isValidArray(array)){
			return [];
		}
		return array.filter(function (value, index) {
			if (typeof predicate === 'function') {
				if (!predicate(value, index, array)) {
					return __.baseSlice(array, 0, -1);
				}
			}
			if (!__.isMatch(value, predicate)) {
				return __.baseSlice(array, 0, -1);
			}
		});
	};

	// *****************************************************
	// LANG FUNCTION
	// *****************************************************

	__.isMatch = function (object, source) {
		var values = Object.keys(source).map(function (item) {
			if (object.hasOwnProperty(item)) {
				return object[item] === source[item];
			}
		});
		return values.every(function (item) {
			return item === true;
		});
	};

	// *****************************************************
	// UTILS FUNCTION
	// *****************************************************
	__.isValidArray = function (array) {
		var length = array == null ? 0 : array.length;
		console.log(!length,'----');
		return !length
	};

	__.isArgumentsLength = function (obj) {
		return !(obj.length)
	};

	__.baseSlice = function (array, start, end) {
		return array.slice(start, end);
	}

}(window, document, undefined));