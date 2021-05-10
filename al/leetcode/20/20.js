var isValid = (s) => {
  var arr = s.split('');

  var stack = [];
  var obj = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (var i = 0; i < arr.length; i++) {

    if (['(', '[', '{'].indexOf(arr[i]) !== -1) {
      stack.push(arr[i]);
    }

    if ([')', ']', '}'].indexOf(arr[i]) !== -1) {
      if (stack.length === 0) return false;
      var last = stack[stack.length - 1];
      if (obj[arr[i]] === last) {
        stack = stack.slice(0, stack.length -1);
      } else {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
}

isValid("([)]");
