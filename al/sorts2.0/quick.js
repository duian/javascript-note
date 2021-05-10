/**
 * 对 arr 进行大小排序， 比 pivot 小的在左边， 大的在右边
 * 遍历数组，每次遇到比 arr[pivot] 小的数， startIndex 就 +1，最后 startIndex 和 pivot 元素互换，并且返回 startIndex
 */
const partition = (arr, pivot) => {
  const item = arr[pivot];
  let startIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < item) {
      swap(arr, i , startIndex);
      startIndex++
    }
  }
  swap(arr, pivot, startIndex);
};

/**
 * 快速排序， 找一个元素 A， 比 A 大的放到右边，比 A 小的放到左边， 返回元素 A 新的索引 m
 * 对（L, R) 数组分为 （L, m - 1) (m + 1, R) 两部分，重新进行上面的操作
 */
const quick = (arr) => {
  const pivot = arr.length - 1;
  const partitionIndex = partition(arr, pivot);

}
