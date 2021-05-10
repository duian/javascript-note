/**
 * 冒泡排序，每一次遍历，都会把最大或者最小的元素放到末尾或者头部
 * 稳定排序
 * 原地排序
 * O(n ^ n)
 */
export const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) break;
  }
  console.log('arr', arr);
  return arr;
}

var x = [4,3,2,1];

bubbleSort(x);
