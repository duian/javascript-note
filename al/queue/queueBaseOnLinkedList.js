class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class QueueBaseOnLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.head === null) {
      return -1;
    }
    const value = this.head.el;
    this.head = this.head.next;
    return value;
  }

  display() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log('el is: ', currentNode.el);
      currentNode = currentNode.next;
    }
  }
}

module.exports = QueueBaseOnLinkedList;
