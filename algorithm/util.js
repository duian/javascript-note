module.exports = {
  swap(arr, i, j) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return arr;
  },
  createRandomArray,
  log,
}

export const createRandomArray = (len) => {
  let arr = [];
  arr.length = len;
  for (let i = 0; i < len; i++) {
    arr[i] = createRandomNumber();
  }
  return arr;
}

export const createRandomNumber = () => {
  return Math.ceil(Math.random() * 300);
}

export const logTime = (name, fn) => {
  console.time.call(console, name);
  fn;
  console.timeEnd.call(console, name);
}

export const log = (...value) => {
  console.log.apply(console, value);
}

export const assert = (condition,  desc) => {
  if (typeof condition === 'function') {
    if (condition()) {
      log(desc);
    }
  } else {
    if (condition) {
      log(desc);
    }
  }
}
