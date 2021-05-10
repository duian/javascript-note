/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    var newNums = [];
    for (var i = 0; i < nums.length; i++) {
      var s = 0;
      for (var j = i; j < nums.length; j++) {
        s += nums[j];
        newNums.push(s);
      }
      console.log('s', newNums);
    }


    newNums.sort((a, b) => a - b);
    var sum = 0;
    for (var i = left - 1; i < right; i++) {
        sum += newNums[i];
    }
    return sum % 1000000007;
  };

rangeSum([1, 2, 3, 4]);
