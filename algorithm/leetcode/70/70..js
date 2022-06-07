// 粗暴递归
var climbStairs = function(n) {
  if (n <= 0) return 0;
  if (n <= 2) {
    return n;
  } else {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
}


// 基于递归优化， 可以从底相上，这样能够缓存对应的值，避免计算
var climbStairs = function(n, hash = { 1: 1, 2: 2 }) {
  if (!hash[n]) {
    hash[n] = climbStairs(n - 1, hash) + climbStairs(n - 2, hash);
  }
  return hash[n];
}
