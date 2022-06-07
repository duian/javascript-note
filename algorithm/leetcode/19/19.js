var removeNthFromEnd = (head, n) => {
  if (head === null) return [];
  var node = new ListNode(0);
  node.next = head;
  var fast = head;
  var slow = node;

  while(n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  if (slow.next === null) {
    slow.next = null;
  } else {
    slow.next = slow.next.next;
  }

  return node.next;
}
