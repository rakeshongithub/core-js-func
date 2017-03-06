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

// ### MODEL FUNCTION ###

// 1. __.chunk: Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
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

// 2. __.compact: Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
__.compact = function(array) {
    // check for Array length
    __.isArrayLength(array);
    return array.filter(function(item){
        if(item){
            return item;
        }
    });
}

// 3. __.compactDeep: Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
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

}(window, document, undefined));