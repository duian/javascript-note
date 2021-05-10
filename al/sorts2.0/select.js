/**
 * 选择排序，每一次遍历, 寻找最小的元素下标，然后与对应的位置进行交换
 * 原地排序
 * 不稳定排序
 * 时间复杂度 O(n ^ n)
 */

export const select = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log('arr', arr);
  return arr;
}

const x = [4,3,1,2];

select(x);
