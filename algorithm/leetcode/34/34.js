const searchRange = (nums, target) => {
  if (nums.length < 2) return [-1, -1];

    let start = 0;
    let end = nums.length - 1;
    let leftIndex = -1;
    let rightIndex = -1;

    while (start <= end) {
      var middle = Math.floor(start + ((end - start) / 2));

      if (nums[middle] === target) {
        leftIndex = middle;
        end = middle - 1;
      } else if (nums[middle] > target) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    start = 0;
    end = nums.length - 1;

    while (start <= end) {
      var middle = Math.floor(start + ((end - start) / 2));

      if (nums[middle] === target) {
        rightIndex = middle;
        start = middle + 1;
      } else if (nums[middle] > target) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return [leftIndex, rightIndex];
}

var r = searchRange( [5,7,7,8,8,10], 8);
console.log('r', r);
