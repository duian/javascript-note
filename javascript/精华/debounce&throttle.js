/**
 * 如果在时间内，有触发，则更新时间戳
 */
function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  }
}

function throttle(fn, wait) {
  let previous = new Date().getTime();
  let timeout;
  return (...args) => {
    let now = new Date().getTime();
    if (now - timeout > wait) {
      timeout = setTimeout(() => fn.apply(this, args), wait);
      previous = now;
    }
  }
}
