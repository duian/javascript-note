/**
 * 从第一个字符开始， 逐个判断是不是回文，如果不是，则继续添加，如果是，则记录当前的子串长度。
 */
var isPlaindrome = function(str) {
  let middle = Math.floor(str.length / 2);
  var arr = str.split('');
  for (let i = 0; i <= middle; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

var longestPalindrome = function(e) {
  let left = 0;
  let maxStr = '';
  let result = '';
  if (e.length < 2) return e;
  for (let i = 0; i <= e.length; i++) {
    for (let j = i + 1; j <= e.length; j++) {
      if (isPlaindrome(e.slice(i, j))) {
        console.log('xr', result);
        result = e.slice(i, j);
        maxStr = result.length > maxStr.length ? result : maxStr;
      }
    }
  }

  console.log('eee', maxStr);
  return maxStr;
}


// longestPalindrome('babad');
longestPalindrome('bb');

var r = isPlaindrome('bb');
console.log('r', r);
