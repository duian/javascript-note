function deepTree(root) {
  if (root === null) return 0;

  const deepLeft = deepTree(root.left);
  const deepRight = deepTree(root.right);
  return Math.max(deepLeft, deepRight) + 1;
}


1 / 4

const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};

var isBalance = function(root) {
  return height(root) >= 0;
}
function height(root) {
  if (root === null) return false;

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
