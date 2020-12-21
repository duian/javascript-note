/**
 * 1. 定义节点， 需要 value 和 next
 */
class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

/**
 * 2.定义链表的类
 *  查找
 *  插入
 *  删除
 *  反转
 */

 class SingleLinked {
  constructor(el) {
    this.head = new Node('head');
  }

  /**
   *
  */
 insert(newEl, el) {
   const currentNode = this.findByValue(el);
   if (currentNode === -1) {
     console.log('未找到插入位置');
     return null;
   }
   const newNode = new Node(newEl);
   newNode.next = currentNode.next;
   currentNode.next = newNode;
 }
  /**
   * 找到最后一个节点， 最后一个节点的 next 指向新增的节点
   */
  append(el) {
    let currentNode = this.head;
    const newNode = new Node(el);
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  /**
   * 获取有意义的第一个节点
   * 如果不等，则切换到下一个
   */
  findByValue(el) {
    const currentNode = this.head.next;

    while (currentNode !== null && currentNode.el !== el) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }

  /**
   *
   *  比对 el 变成比对 el，其他同上
   */
  findByIndex(index) {
    const currentNode = this.head.next;

    let pos = 0;
    while(currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos ++;
    }

    currentNode === null ? -1 : index;
  }

  /**
   *  先 find 到目标节点
   * 然后插入节点
   */
  insert(newEl, el) {
    const currentNode = this.findByValue(el);
    if (currentNode === -1) {
      console.log('未找到 插入位置')
      return null;
    }

    const newNode = new Node(newEl);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  findPrev(el) {
    const currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.el !== el) {
      currentNode = currentNode.next;
    }
    currentNode === null ? -1 : currentNode;
  }
  /**
   * 头， 不做操作
   * 中, 把 el 上一个节点的指向，指向到 el 下一个节点
   * 尾,  移出上一个节点的指向
   */
  remove(el) {
    const prevNode = this.findPrev(el);
    if (prevNode) {
      console.log('未找到目标元素');
      return null;
    }

    prevNode.next = prevNode.next.next;
  }

  getLastNode() {
    const currentNode = this.head.next;
    while (currentNode !== null && currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode === null ? -1 : currentNode;
  }

  /**
   * current 节点的 next 赋给 next 节点
   * next 节点等于 current 节点
   * 上面两步实现节点的逐步移动
   * 设置一个 root 节点，用于反转链表
   * 把 root 节点的 next 指向 current 节点的 next，实现 链表指向反转
   * 再把 root 节点的 next 指向 current 节点，进行下一个循环
   *
   */
  reverse() {
    let currentNode = this.head.next;
    const root = new Node('head');
    while (currentNode !== null) {
      const next = currentNode.next;
      currentNode.next = root.next;
      root.next = currentNode;
      currentNode = next;
    }
    this.head = root;
  }
  /**
   *  p p->next
   *  p-next p
   * 最后一个节点指向倒数第二个节点
   */
  reverse2() {
    const lastNode = this.getLastNode();
    const newLinkedList = this
    let currentNode = lastNode;
    if (lastNode === -1) {
      console.log('长度不足');
      return -1;
    }
    do {
      const prevNode = this.findPrev(lastNode.el);
      currentNode.next = prevNode;
      currentNode = prewNode;
    } while (prevNode !== this.head)
  }

  /**
   * 显示所有节点
   */
  display() {
    let currentNode = this.head.next;
    while(currentNode !== null) {
      console.log(currentNode.el);
      currentNode = currentNode.next;
    }
  }
 }

module.exports = SingleLinked;
