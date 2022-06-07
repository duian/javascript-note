const Node = require('../node');

class CircleQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const flag = this.head === this.tail;
      this.tail.next = new Node(value);
      this.tail.next.next = this.head;
      this.tail = this.tail.next;
      if (flag) {
        this.head.next = this.tail;
      }
    }
  }

  dequeue() {
    if (this.head)
  }

  display() {

  }
}
