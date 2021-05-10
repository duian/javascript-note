var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  var length = intervals.length;
  var res = [];
  for (var i = 0; i < length; i++) {
    var pre = res[res.length - 1];
    console.log('pre', pre);
    if (i === 0 || intervals[i][0] > pre[1]) {
      res.push([intervals[i][0], intervals[i][1]]);
    } else {
      pre[0] = Math.min(pre[0], intervals[i][0]);
      pre[1] = Math.max(pre[1], intervals[i][1]);
    }
  }
  console.log('res', res);
  return res;
}

var intervals = [[1,3],[2,6],[8,10],[15,18]];
// var intervals = [[1, 4], [0, 0]]

merge(intervals);
