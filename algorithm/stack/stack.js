class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  /**
   *  如果栈为空，则直接添加
   *  如果栈不为空，
   *  1.先添加指向， node.next = this.top
   *  2.更新 this.top
   **/
  push(value) {
    const node = new Node(value);
    if(this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  /**
   * 如果栈不为空
   * 1. top 往下一个节点移动一位 this.top = this.top.next;
   */
  pop() {
    if (this.top === null) {
      return -1;
    }
    const value = this.top.el;
    this.top = this.top.next;
    return value;
  }

  clear() {
    this.top = null;
  }

  display() {
    if (this.top !== null) {
      let temp = this.top;
      while (temp !== null) {
        console.log(temp.el);
        temp = temp.next;
      }
    }
  }
}

module.exports = Stack;
