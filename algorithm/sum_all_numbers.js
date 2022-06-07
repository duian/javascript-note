function sumAll(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);

  var numbers = [];
  for (var i = min; i <= max; i ++) {
    numbers.push(i);
  }
  return numbers.reduce(function(prev, next) {
    return prev + next;
  }, 0);
}

sumAll([1, 4]);