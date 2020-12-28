// Write a function that takes in a binary search tree and a target integer 
// value and returns the closest value to that target valaue contained in the BST.

function findClosestValueInBst(tree, target) {

  const traverse = (tree, target, closest) => {
		if (tree === null) {
			return closest;
		}
		if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
			closest = tree.value;
		}
		if (target < tree.value) {
			return traverse(tree.left, target, closest);
		} else if (target > tree.value) {
			return traverse(tree.right, target, closest);
		} else {
			return closest;
		}
	}
	return traverse(tree, target, tree.value);
}
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }