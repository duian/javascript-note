const canJump = (nums) => {
  let n = nums.length;
  let reach = 0;
  for (let i = 0; i < n; i++) {
    if (i > reach || reach >= n - 1) {
      break;
    }
    console.log('rea', reach);
    reach = Math.max(reach, i + nums[i]);
  }

  return reach >= n - 1;
}

var r = canJump([2,3,1,1,4]);
console.log('r', r);
