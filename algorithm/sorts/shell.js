const util = require('./util');
const insertion = require('./insertion');

let arr = util.createRandomArray(10);
console.log('origin array is: ', arr);
function shellSort(arr) {
  let len = arr.length;
  let gapSize = Math.floor(len / 2);
  while(gapSize > 0) {
    for(var i = gapSize; i < len; i++) {

        var temp = arr[i];
        var j = i;

        while(j >= gapSize && arr[j - gapSize] > temp) {
            arr[j] = arr[j - gapSize];
            j -= gapSize;
        }
        arr[j] = temp;
    }
    gapSize = Math.floor(gapSize / 2);
  }
  return arr;
}

module.exports = shellSort;
console.log('sorted array is: ', shellSort(arr));
