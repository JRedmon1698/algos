// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered 
// from leftmost branch sum to rightmost branch sum. 

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


// could not get this soln to work

// function nodeDepths(root) {
//     let totalSum = 0;

//     const traverse = (node, sum) => {
//         let runningSum = totalSum + runningSum;

//         if (!node.left && !node.right) {
//             return runningSum;
//         }
//         if (node.left) {
//             runningSum += 1;
//         }
//         if (node.right) {
//             runningSum += 1;
//         } 
// 				traverse(node.left, runningSum);
// 				traverse(node.right, runningSum);
//     };

//     return traverse(root, 0);
//   }

  function nodeDepths(root, depth = 0) {
	if (root === null) {
		return 0;
	}
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}
