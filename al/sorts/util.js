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

function createRandomArray(len) {
  let arr = [];
  arr.length = len;
  for (let i = 0; i < len; i++) {
    arr[i] = createRandomNumber();
  }
  return arr;
}

function createRandomNumber() {
  return Math.ceil(Math.random() * 300);
}

function log(name, fn) {
  console.time(name);
  fn;
  console.timeEnd(name);
}
