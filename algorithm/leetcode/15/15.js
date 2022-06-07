var threeSum = function(nums) {
  if (nums.length < 3) return [];

  nums = nums.sort((a, b) => a - b);
  var result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return result;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    var left = i + 1;
    var right = nums.length - 1;

    while (left < right) {
      var sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while(left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while(left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result
}

console.log('sum', threeSum([1,-1,-1,0]));
