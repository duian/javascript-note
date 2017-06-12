function debounce(func, wait, immediate) {
  // 'private' variable for instance
  // The returned function will be able to reference this due to closure.
  // Each call to the returned function will share this common timer.
  var timeout;

  return function() {
    var context = this; args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }

    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(func.apply(context, args), wait);
    if (callNow) func.apply(context, args);
  }
}

function throttle(func, wait, options) {
  var previous = 0;
  var timeout = null;
  if (!options) options = {};
  var later = function() {
    previous = (options.leading === false ? 0 : +new Date());
    timeout = null;
    if (!timeout) context = args = null;
  }

  return function() {
    var now = +new Date();
    var context = this;
    var args = arguments;


  }
}