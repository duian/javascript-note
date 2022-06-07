var addTwoNumbers = function(l1, l2) {
  var l = new ListNode(0);
  var r = l;
  var carry = 0;

  while (l1 || l2 || carry) {
    var sum = 0;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += carry;

    l.next = new ListNode(sum%10);
    carry = parseInt(sum/10);

    l = l.next;
  }
  return r.next;
}
