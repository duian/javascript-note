var swap = function(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j]  = tmp;
}

const dfs = (result, nums, start) => {
  if (start === nums.length) {
    result.push([...nums]);
  }

  for (let i = start; i < nums.length, i++) {
    swap(nums, start, i);
    dfs(result, nums, start + 1);
    swap(nums, start, i);
  }

}
var permute = (nums) => {
  let result = [];
  dfs(result, nums, 0);
  return result;
}

// var permute = function(choices, temp = [], permutations = []) {
//   // Base case
//   if(choices.length === 0){
//     permutations.push([...temp]);
//   }

//   for(let i = 0; i < choices.length; i++){
//       // Create new array without current letter
//       let newChoices = choices.filter((choice, index) => index !== i)
//       // Add current to the temp array which is our current permutation
//       temp.push(choices[i])
//       permute(newChoices, temp, permutations)
//       // Once we have explored options remove the current letter from our current permuataion
//       temp.pop()
//   }

//   return permutations
// };
