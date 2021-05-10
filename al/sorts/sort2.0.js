/**
 *  2021/03/01 复习
 */
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      let temp;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
}

function insertSort(arr) {
  const len = arr.length;
  // 默认第一个已排序
  for (i = 1; i < len; i++) {
    const value = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
        console.log('arr is:', arr);
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
  return arr;
}

function is(arr) {
  const len = arr.length;
  let j = i - 1;
  for (let i = 1; i < len; i++) {
    let j = i - 1;
    const value = arr[i];

    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    a[j + 1] = value;
  }
  console.log('arr: ', arr);
}

function ss(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
  let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

}


function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log('arr', arr);
  return arr;
}

function mergeArr(left, right) {
  let temp = [];
  let leftIndex = 0
  let rightIndex = 0;

  /**
   * 两个数组， 取左边第一个和右边第一个
   * 如果左边小，则加左边，左边序列加1
   * 如果右边小， 则 push 右边元素，右边序列加1
   */
  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] <= right[rightIndex]) {
      temp.push(left[leftIndex]);
      leftIndex++;
    } else {
      temp.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return temp.concat(left.slice(leftIndex))
             .concat(right.slice(rightIndex))
}

function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;
  let middle = Math.floor(len / 2); // 找到中间值
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return mergeArr(mergeSort(left), mergeSort(right));
}


const swap = (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 快速排序
 */
const partition = (arr, pivot, left, right) {
  const pivotVal = arr[pivot];
  let startIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      swap(arr, i, startIndex);
      startIndex++
    }
  }
  swap(arr, startIndex, pivot);
  return startIndex;
}

const quickSort = (arr, left, right) {
  if (left < right) {
    let pivot = right;
    let partitionIndex = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex -1);
    quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right);
  }
}


/**
 * 计数排序
*/
const countingSort = arr => {
  if (arr.length <= 1) return null;

  const max = findMaxValue(arr);
  const counts = new Array(max + 1);
  array.forEach((el) => {
    if (!counts[el]) {
      counts[el] = 0;
    }
    counts[el] += 1;
  });

  let sortedIndex = 0;

  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex] = i;
      sortedIndex++;
      count--;
    }
  });
}

const findMaxValue = (arr) => {
  let max = arr[0];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
