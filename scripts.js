;(function(window, document){
// namespacing alies
var __ = window.__ = {};
__.VERSION = "1.0.0";

__.isArrayLength = function(array){
    var length = array == null ? 0 : array.length;
    if (!length) {
        return [];
    }
}

__.isArgumentsLength = function(){
    var length = arguments.length;
    if (!length) {
        return [];
    }
}

// ### MODEL FUNCTION ###

// 1. __.chunk(array, [size]): Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
__.chunk = function(array, size) {
    // check for Array length
    __.isArrayLength(array);
    var chunkedArr = [];
    for(var i = 0; i < (array.length/size); i++){
        var from = i < 1 ? i : i * size,
            to = size + from,
            slicedArr = array.slice(from, to);
        chunkedArr.push(slicedArr);
    }
    return chunkedArr;
}

// 2. __.compact(array): Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
__.compact = function(array) {
    // check for Array length
    __.isArrayLength(array);
    return array.filter(function(item){
        if(item){
            return item;
        }
    });
}

// 3. __.compactDeep(array): Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
__.compactDeep = function(array) {
    // check for Array length
    __.isArrayLength(array);
    var compactArr = [];
    array.filter(function(item, i) {
        if(item) {
            (item instanceof Array) ? compactArr.push(__.compactDeep(item)) : compactArr.push(item);
        }
    });
    return compactArr;
}

// 4. __.concat(array, [values]): Creates a new array concatenating array with any additional arrays and/or values.
__.concat = function() {
    // check arguments length
    __.isArgumentsLength();
    for(var i = 0; i < arguments.length; i++) {
        return [].concat.apply([], arguments);
    }
}

// 4. __.difference(array, [values]): Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
__.difference = function() {
    // check arguments length
    __.isArgumentsLength();
    var uniqueArr = [];
    var array = arguments[0];
    var remainArguments = [].concat.apply([], arguments).slice(array.length)
    array.filter(function(item, pos){
        if(remainArguments.indexOf(item) === -1){
        uniqueArr.push(item);
        }
    });
    return uniqueArr;
}

}(window, document, undefined));