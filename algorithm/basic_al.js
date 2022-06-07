// 通过Math.max()获取一个数组中的最大值
// 原理: 将[1, 2, 3]通过apply的调用变成Math.max(1, 2, 3)

// method 1
function getMaxFromArray(arr) {
  return Math.max.apply(null, arr);
}

// method 2
// 通过ES6的特性，直接讲数组转换为方法参数
Math.max(...[1, 2, 3]);

/**
 * 给任意数据 A[0, n], 将其前后颠倒
 */
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function reverseArr(arr, lo, hi) {
  if (lo < hi) {
    swap(arr, lo, hi);
    reverseArr(arr, lo + 1, hi - 1);
  }
}

function reverse(arr) {
  reverseArr(arr, 0, arr.length - 1);
  return arr;
}

// var arr1 = [10, 9, 8, 7, 1, 2, 3];
// var result1 = reverse(arr1);
// console.log('result', result1);

const map = {};

function fib(n) {
  if (n < 2) return 1;
  if (map[n]) {
    return map[n];
  } else {
    map[n] = fib(n - 1) + fib(n - 2)
  }
  return map[n];
}

function fib2(n) {
  let f = 0;
  let g = 1;

  while (0 < n--) {
    g = g + f;
    f = g - f;
  }
  return g;
}

/**
 * @param {String} s1
 * @param {String} s2
 *  如果 s1[s1.length - 1] === s2[s2.length - 1]，则 s1, s2 从尾部缩1，再进行比对
 */

var m = new Map();
function longestCommonSubsequence(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return '';
  console.log(s1, 's1', s2, 's2');
  if (s1.substring(s1.length - 1) === s2.substring(s2.length - 1)) {
    return longestCommonSubsequence(s1.substring(0, s1.length - 1), s2.substring(0, s2.length - 1)) + s1.substring(s1.length - 1);
  } else {
    return longestCommonSubsequence(s1.substring(0, s1.length - 1), s2) + longestCommonSubsequence(s1, s2.substring(0, s2.length - 1));
  }
}

module.exports = {
  fib,
  fib2,
  longestCommonSubsequence,
};
