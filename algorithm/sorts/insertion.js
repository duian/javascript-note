const util = require('./util');

// console.time('insertion');
// let arr = util.createRandomArray(100000);
// insertionSort(arr);
// console.timeEnd('insertion');

// console.log('origin arr is: ', arr);
function insertionSort(arr) {
  let len = arr.length;
  for (i = 1; i < len; i++) {
    let X = arr[i];
    let j = i - 1;

    for (; j >= 0 && X < arr[j]; j--) {
      arr[j + 1 ] = arr[j];
    }
    arr[j + 1] = X;
  }

  return arr;
}

module.exports = insertionSort;

// console.log('sorted arr is: ', insertionSort(arr));
