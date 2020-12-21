const util = require('./util');

// console.time('bubble');
// let arr = util.createRandomArray(100000);
// bubbleSort(arr);

// console.timeEnd('bubble');
// console.log('origin arr is: ', arr);

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        util.swap(arr, i, j);
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;

// console.log('sorted arr is: ', bubbleSort(arr));
