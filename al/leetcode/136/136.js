var singleNumber = function(nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  var result = Object.keys(map).find(key => map[key] === 1);
  console.log('result', result);
  return result
}

var a = [2,1,2];
singleNumber(a);
