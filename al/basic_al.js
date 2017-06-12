// 通过Math.max()获取一个数组中的最大值
// 原理: 将[1, 2, 3]通过apply的调用变成Math.max(1, 2, 3)

// method 1
function getMaxFromArray(arr) {
  return Math.max.apply(null, arr);
}

// method 2
// 通过ES6的特性，直接讲数组转换为方法参数
Math.max(...[1, 2, 3]);




