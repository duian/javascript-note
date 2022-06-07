var maxArea = function(height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {
    let minHeight = height[i] > height[j] ? height[j--]: height[i++];
    max = Math.max(max, (j - i + 1) * minHeight);
  }
  return max;
}

var r = maxArea([1,8,6,2,5,4,8,3,7]);
console.log('r', r);
