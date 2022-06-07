var relativeSortArray = function(arr1, arr2) {
  var arr = [];
  /**
   * 获取共同的元素的排序
   */
  for (var i = 0; i < arr2.length; i++) {
    var target = arr2[i];
    for (var j = 0; j < arr1.length; j++) {
      if (arr1[j] === target) {
        arr.push(arr1[j]);
      }
    }
  }

  var x = [];
  for (var k = 0; k < arr1.length; k++) {
    if (arr.indexOf(arr1[k]) === -1) {
      x.push(arr1[k]);
    }
  }
  x = x.sort((a, b) => a - b > 0);
  arr = arr.concat(x);
  console.log('arr', arr);
  return arr;
}



var arr1 = [28,6,22,8,44,17];
var arr2 = [22,28,8,6];
relativeSortArray(arr1, arr2);
