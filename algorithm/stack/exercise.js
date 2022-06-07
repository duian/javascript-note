function operation(str) {
  if (!str) return '';
  var arr = str.split('');
  var stack = [];
  var numRe = /[0-9]/;
  var optRe = /[\+\-\*\/]/
  for(let i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (numRe.test(item)) {
      stack.push(item);
    }
    if (optRe.test(item)) {
      var x = parseInt(stack.pop(), 10);
      var y = parseInt(stack.pop(), 10);

      switch (item) {
        case '*':
          stack.push(x * y);
          break;
        case '+':
          stack.push(x + y);
          break;
        case '/':
          stack.push(x / y);
          break;
        case '-':
          stack.push(x - y);
      }
    }
  }

  console.log('stack', stack);
}

operation('65+23+8');
