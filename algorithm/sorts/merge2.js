/**
 * 归并算法
 */
function mergeSort(result, left, right) {
  if (left < right) {

  }
}
function merge(arr) {
  var result = [];
  var length = arr.length;
  var center = Math.floor(length / 2);
  mergeSort(arr, 0, center);
  mergeSort(arr, center, length - 1);
}


