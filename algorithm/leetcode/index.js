// #88

var merge = (nums1, m, nums2, n) => {
  var p = m - 1;
  var q = n - 1;
  var tail = m + n - 1;

  while (p >= 0 || q >= 0) {
    console.log('p', p, 'q', q);
    if (p === -1) {
      nums1[tail] = nums2[q];
      q--;
    } else if (q === -1) {
      nums1[tail] = nums1[p];
      p--;
    } else if (nums1[p] >= nums2[q]) {
      nums1[tail] = nums1[p];
      p--;
    } else {
      nums1[tail] = nums2[q];
      q--;
    }
    tail--;
  }
  return nums1;
}

// 3

// 翻转链表

var prev = null;
while (node !== null) {
  var temp = node;
  node = node.next;
  temp.next = prev;
}
