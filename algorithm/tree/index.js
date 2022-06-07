class BinaryNode {
  constructor(el, left, right) {
    this.el = el;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(node) {
    this.root = node;
  }

  contains(el, node) {
    if (!node) return false;

    if (el > node.el) {
      return this.contains(el, node.right);
    } else if (el < node.el) {
      return this.contains(el, node.left);
    } else {
      return true;
    }
  }

  find() {}

  findMin(node) {
    if (!node) {
      return null;
    } else if (node.left === undefined) {
      return node;
    } else {
      return this.findMin(node.left);
    }
    // while (node.left) {
    //   return this.findMin(node.left);
    // }
    // return node;
  }

  findMax(node) {
    if (!node) return null;
    let res = null;
    while (node.right) {
      res = node.right;
      node = node.right;
    }
    return res;
  }

  insert() {}

  empty() {}
}

var node1 = new BinaryNode(8);
var node2 = new BinaryNode(12, node1);
var node5 = new BinaryNode(15);
var node4 = new BinaryNode(14, node2, node5);

var tree1 = new BinarySearchTree(node4);

const min = tree1.findMin(tree1.root);
const max = tree1.findMax(tree1.root);
const cont = tree1.contains(16, tree1.root);
console.log('t',tree1.root.el, min, max, cont);
