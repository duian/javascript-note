class Node {
  consturctor(el) {
    this.el = el;
    this.next = null;
  }
}

class SingleLinkedList {
  constructors() {
    this.head = new Node();
    this.next = undefined;
  }
  findByValue() {}
  findByindex() {}
  insert() {}
  findPrev() {}
  add(el) {
    while (this.head.next) {
      this.head = this.head.next;
    }
    this.head.next = el;
  }

  remove(el) {
    while (this.head.next) {
      if (this.head === el) {
        this.head.next = this.head.next.next;
        return true;
      }
    }
    return false;
  }

  hasNext() {

  }

  next() {

  }
}
