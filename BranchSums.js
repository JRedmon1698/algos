// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered 
// from leftmost branch sum to rightmost branch sum.Binary

// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a 
// path of nodes in a tree that starts at the root node and ends at any leaf node. 


// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	const sumsArray = [];

	const branchSum = (node, sum, sumsArray) => {
		if (node === null) {
			return sumsArray;
		}
		let runningSum = sum + node.value;
		if (node.left === null && node.right === null) {
			sumsArray.push(runningSum);
			return;
		}
		branchSum(node.left, runningSum, sumsArray);
		branchSum(node.right, runningSum, sumsArray);
	};
	branchSum(root, 0, sumsArray);	
	return sumsArray;
}
