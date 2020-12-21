const util = require('./util');
// console.time('selection');
// let arr = util.createRandomArray(100000);
// selectionSort(arr);
// console.timeEnd('selection');

// console.log('origin arr is: ', arr);
function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i != min) {
      util.swap(arr, i, min);
    }
  }
  return arr;
}

module.exports = selectionSort;
// console.log('sorted arr is: ', selectionSort(arr));
