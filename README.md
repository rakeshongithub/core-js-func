# Functions Programing
JavaScript functional programing.

# “Array” Methods

#### `__.chunk(array, [size])`
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

##### Example
```
__.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
__.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

#### `__.compact(array)`
Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

##### Example
```
__.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

#### `__.compactDeep(array)`
Same as `__.compact` but remove the flasey values recursively.

##### Example
```
__.compactDeep([0, 1, false, 2, '', 3, [false, 22, '', 33], 4, false, 7]);
// => [1, 2, 3, [22, 33], 4, 7]
```

#### `__.concat(array, [values])`
Creates a new array concatenating array with any additional arrays and/or values.

##### Example
```
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```

#### `__.difference(array, [values])`
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

##### Example
```
_.difference([2, 1], [2, 3]);
// => [1]
```