# Functions Programing
JavaScript functional programing.

# “Array” Methods

[__.chunk](#__chunkarray-size)<br/>
[__.compact](#__compactarray)<br/>
[__.compactDeep](#__compactdeeparray)<br/>
[__.concat](#__concatarray-values)<br/>
[__.difference](#__differencearray-values)<br/>
[__.drop](#__droparray-n1)<br/>
[__.dropRight](#__droprightarray-n1)<br/>
[__.dropRightWhile](#__droprightwhilearray-predicate)<br/>


#### `__.chunk(array, [size])`
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

##### Example
```javascript
__.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
__.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```


#### `__.compact(array)`
Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

##### Example
```javascript
__.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```


#### `__.compactDeep(array)`
Same as `__.compact` but remove the flasey values recursively.

##### Example
```javascript
__.compactDeep([0, 1, false, 2, '', 3, [false, 22, '', 33], 4, false, 7]);
// => [1, 2, 3, [22, 33], 4, 7]
```


#### `__.concat(array, [values])`
Creates a new array concatenating array with any additional arrays and/or values.

##### Example
```javascript
var array = [1];
var other = __.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```


#### `__.difference(array, [values])`
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

##### Example
```javascript
__.difference([2, 1], [2, 3]);
// => [1]
```


#### `__.drop(array, [n=1])`
Creates a slice of array with n elements dropped from the beginning.

##### Example
```javascript
__.drop([1, 2, 3]);
// => [2, 3]
 
__.drop([1, 2, 3], 2);
// => [3]
 
__.drop([1, 2, 3], 5);
// => []
 
__.drop([1, 2, 3], 0);
// => [1, 2, 3]
```


#### `__.dropRight(array, [n=1])`
Creates a slice of array with n elements dropped from the end.

##### Example
```javascript
__.dropRight([1, 2, 3]);
// => [1, 2]
 
__.dropRight([1, 2, 3], 2);
// => [1]
 
__.dropRight([1, 2, 3], 5);
// => []
 
__.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```

#### `__.dropRightWhile(array, [predicate])`
Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

##### Example
```javascript
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
__.dropRightWhile(users, function(o) { return !o.active; });
// => objects for ['barney']
 
// The `_.matches` iteratee shorthand.
__.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['barney', 'fred']
```