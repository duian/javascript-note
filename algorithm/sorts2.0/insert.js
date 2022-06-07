/**
 * 插入排序， 分为已排序和未排序两部分， 在未排序部分依次取数，插入到已排序的部分之中
 * 稳定排序
 * 原地排序
 * 时间复杂度 O(n ^ n)
 */

 export const insert = (arr) => {
   if (arr.length <= 1) return null;
   for (let i = 1; i < arr.length; i++) {
     // 未排序的第一个元素
      const temp = arr[i];

      // 已排序的最大值所在位置
      let j = i - 1;
      // 已排序的部分
      for (; j >= 0; j--) {
        if (arr[j] > temp) {
          arr[j + 1] = arr[j];
        } else {
          break;
        }
      }
      arr[j + 1] = temp;
   }
  console.log('arr', arr);
  return arr;
 }

 var x = [4, 2, 3, 1];
 insert(x);
