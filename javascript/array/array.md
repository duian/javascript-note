```
// Array reference object 引用对象
// 可用于数组迭代

arr.reduce: (callback[, initialValue]);
callback
  previousValue

  currentValue

  currentIndex

  array

initialValue (optional)

[1, 2].map(x => x * x).reduce((prev, cur) => prev + cur);
```

```
arr.forEach: (callback[, thisArg]);

callback
  currentValue

  index

  array

forEach不会返回新的数组
```

```
arr.concat: (val1[, val2[, ...[, valN]]]);

return a new Array instance
并不会修改数组本身，返回新的数组
```

```
arr.indexOf: searchElement[, fromIndex]
```

```
arr.slice: [begin, [, end]]

begin:
1.Begin is undefined, slice begins from index 0
2.Zero-base index at whitch to begin extraction
3.As a negative, begin indecates an offset from the end of the sequence

end:
1.zero-base index at whitch to begin extraction. slice extracts up to but not including end
2. if end is omitted, slice extracts through the end of the sequence(arr.length).

Desc: For references(and not the actual object), slice copies object references into the new array. Both the origin and new array refer to the some object, if the reference object changes, the changes are visible to both the new and origin arrays.


Array-like objects
[].slice.call(objects);
Array.prototype.slice.call(objects);


arr.splice: (start[, deleteCount, item1, item2, ...])
Desc: if you specify a different number of elements to insert than the number you're removing, the array will have a different length at the end of the call.
```

```
arr.copyWithin
```


```
arr.entries
Desc: returns a new Array Iterator object
```

```
arr.filter: (callback[, thisArg])
arr.find: (callback[, thisArg])
arr.findIndex: (callback[, thisArg])
arr.map: (callback[, thisArg])
arr.every: (callback[, thisArg])
Desc: test whether all elements in the array implemented by the provided function. 回调函数一旦返回为false，则立即中断，返回一个false。
arr.some: (callback[, thisArg])

callback
  elelemnt

  index

  array

Tips:
['1', '2', '3'].map(parseInt);
// While one could expect [1, 2, 3]
// The actual result is [1, NaN, NaN]
// resolve:  returnInt = (el) => parseInt(el, 10); ['1', '2', '3'].map(returnInt);
```

```
arr.includes: (searchElement[, fromIndex])
searchElement: the element to search for
```

```
Array.from: (arrayLike[, mapFn[, thisArg]])
arrayLike: An array-like or iterator object to convert an array.
mapFn: Map function to call on every element of the array.
Desc: creates a new Array instance from an array-like or iterable object.

Array.isArray: element
```

```
arr.join: (separator)

arr.join的执行效率远低于字符串拼接
```

```
arr.of: (el0[, el1[, ...[, elN]]])
```

```
arr.pop()
Desc: the pop method remove the last element from an array and returns that value to the caller.
arr.push: ([el0[, el1[, ...[, elN]]]])
Desc: the push method appends value to the array and return that length to the caller.
arr.shift()
Desc: the shift method remove the first element from an array and returns that value to the caller.
arr.unshift()
Desc: the unshift method inserts the given values to the begining of an array-like.
arr.splice(start[, deleteCount, item1, item2])

以上四个方法都是操作数组本身
```

```
arr.reverse
Desc: the reverse method transposes the elements of the calling array object in place, mutating the aray, and returning a reference to the array.

```

```
arr.sort: compareFn

arr.sort((a, b) => a - b);
```

写代码中最频繁需用使用的方法(属性):map, filter, find, reduce, slice, join, forEach, findIndex, length

操作数组本身的方法: pop, push, shift, unshift, splice, reverse, sort, fill

操作数组与数组关联的方法: concat

数组对象的utils方法: Array.from, Array.of

过滤或者某些条件: fileter, find, findIndex, every, some, includes, indexOf, lastIndexOf

数组iterator方法: entries, keys, values

---------------
数组的下标的值必须在0~Math.pow(2, 32) - 1(4292967295) 之间的整数
数组长度被重新设置，如果大于原来的长度的元素被undefined填充，如果小于原来长度数组会被裁减。
