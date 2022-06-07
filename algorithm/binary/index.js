const biaryFind = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1;

  let low = 0;
  let high = sortedArr.length -1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);

    if (sortedArr[mid] === target) {
      return mid;
    } else if (sortedArr[mid] > target) {
      high = mid + 1;
    } else {
      low = mid - 1;
    }
  }

  return -1;
}

const binaryFind = (sortedArr, low, high, target) => {
  if (low > high) return -1;

  let mid = low + ((high - low) >> 1);
  if (sortedArr[mid] === target) {
    return mid;
  } else if (sortedArr[mid] > target) {
    return binaryFind(sortedArr, low, mid - 1, target);
  } else {
    return binaryFind(sortedArr, mid + 1, high, target);
  }
}

const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(biaryFind(arr, 44))
console.log(binaryFind(arr, 0, 14, 11))


/**
 * 查找第一个值等于给定值的元素
 */
const bsearch = (arr, n, value) => {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = low ((high - low) >> 1);

    if (arr[mid] > value) {
      high = mid - 1;
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] !== value) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
}

