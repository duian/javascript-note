function throttle(fn, wait) {
  let timer;

  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(null, args)
      }, wait);
    }
  }
}


function debounce(fn, wait) {
  let timer;
  return (args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(null, args);
    }, wait);
  }
}
