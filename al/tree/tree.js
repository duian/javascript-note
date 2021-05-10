class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class SearchTree {
  constructor() {
    this.root = null;
  }

  find(num) {
    if (this.root === null) {
      this.root = node;
      return null;
    }

    return this.getPrev(num, true);
  }
}
