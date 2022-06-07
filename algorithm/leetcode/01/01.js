// 线性遍历
var twoSum = (nums, target) => {
    var length = nums.length;
    if (length === 0) return [];
    for (var i = 0; i < length; i++) {
      for (var j = i + 1; j < length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
}

// 通过对象存储
var twoSums = (nums, target) => {
  var hash = {};

  for (var i = 0; i < nums.length; i++) {
    var key = target - nums[i];
    if ('key' in hash) {
      return [hash[key], i];
    // if (hash[key] !== null && hash[key] !== undefined) {
    } else {
      hash[nums[i]] = i;
    }
  }
  return [];
};

twoSums([2,7,11,15], 9);
