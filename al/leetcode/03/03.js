/**
 *   思路是使用滑动窗口 + 动态规划的方式求解，
 */
var lengthOfLongestSubstring = function(str) {
  if (str.length < 2) return str.length;
  var maxLength = 1;
  var tempStr = '';
  var left = 0;

  for (let i = 0; i < str.length; i++) {
    if (tempStr.indexOf(str[i]) === -1) {
      tempStr = str.slice(left, i + 1);
    } else {
      left += (str.slice(left, i).indexOf(str[i]) + 1);
    }

    maxLength = Math.max(maxLength, tempStr.length);
  }

  return maxLength;
}
