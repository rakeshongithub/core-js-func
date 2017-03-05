;(function(window, document){
// namespacing alies
var __ = window.__ = {};

// ### MODEL FUNCTION ###

// 1. __.Chunk: Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
__.chunk = function(array, size) {
    for(var i = 0; i < size; i++){
        
    }
}

function display(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

display('Function Programing', function(){
    display('_.chunk(array, [size=1])', function(){
        __.chunk(products, 0)
    })    
})



}(window, document, undefined));