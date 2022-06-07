const util = require('../util');

export const bubbleSort = (arr) => {
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
