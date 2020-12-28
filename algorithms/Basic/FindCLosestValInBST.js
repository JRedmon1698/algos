// Write a function that takes in a binary search tree and a target 
// value and returns the closest value to that target in the BST.

function findCLosestValInBST(tree, target) {

  const traverse = (tree, target, closest) => {
    if (tree === null) {
      return closest;
    }
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value;
    } 
    if (target < closest) {
      traverse(tree.left, target, closest);
    } else if (target > closest) {
      traverse(tree.right, target, closest);
    } else {
      return closest;
    }
  }

  return traverse(tree, target, tree.value);
}



class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
