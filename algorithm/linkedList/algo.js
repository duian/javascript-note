/**
 * 1） 单链表反转
 */
class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  findByValue(item) {
    let currentNode = this.head.next;
    while (currentNode !== null && currentNode.el !== item) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }

  findByindex(index) {
    let currentNode = this.head.next;
    let pos = 0;
    while (currentNode !== null & pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode === null ? -1 : currentNode;
  }

  append(newEl) {
    let currentNode = this.head;
    const newNode = new Node(newEl);
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  insert(newEl, el) {
    const currentNode = this.findByValue(el);
    if (currentNode === -1) {
      console.log('未找到插入位置');
      return null;
    }
    const newNode = new Node(newEl);
    newNode.next = currentNode.next
    currentNode.next = newNode;
  }

  findPrev(item) {
    let currentNode = this.head;
    whild(currentNode.next !== null && currentNode.next.el !== item) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      return -1;
    }
    return currentNode;
  }

  remove(item) {
    const prevNode = this.finePrev(item);
    if (prevNode === -1) {
      console.log('未找到元素');
      return null;
    }
    prevNode.next = prevNode.next.next;
  }

  display() {
    let currentNode = this.head;
    while(currentNode !== null) {
      console.log(currentNode.el);
      currentNode = currentNode.next;
    }
  }

  reverseList() {
    const root = new Node('head');
    let currentNode = this.head.next;
    whilie(currentNode !== null) {
      const next = currentNode.next;
      currentNode.next = root.next;
      root.next = currentNode;
      currentNode = next;
    }
    this.head = root;
  }

  reverseList1() {
    let currentNode = this.head.next;
  }
}
