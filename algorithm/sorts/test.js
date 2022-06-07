const util = require('./util');
const bubbleSort = require('./bubble');
// const insertionSort = require('./insertion');
// const selectionSort = require('./selection');
// const shellSort = require('./shell');
// const util = require('./util');

let arr = util.createRandomArray(10000);
// let arr1 = util.createRandomArray(10000);
// let arr2 = util.createRandomArray(10000);
// let arr3 = util.createRandomArray(10000);

// console.time('bubble o');
// bubbleSort(arr);
// console.timeEnd('bubble o');

util.log('bubbo', bubbleSort(arr));
// console.time('insertion');
// insertionSort(arr1);
// console.timeEnd('insertion');

// console.time('selectionSort');
// selectionSort(arr2);
// console.timeEnd('selectionSort');

// console.time('shellSort');
// shellSort(arr3);
// console.timeEnd('shellSort');

const sorts = require('./sorts');

// const arr = util.createRandomArray(10000);

util.log('bubble', sorts.bubble(arr));
