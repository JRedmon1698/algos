// The distance between a node in a Binary Tree and the tree's root is called the node's depth.

// Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

function nodeDepths(root) {
    let totalSum = 0;

    const traverse = (node, runningSum) => {
        let sum = totalSum + runningSum;

        if (!node.left && !node.right) {
            return runningSum;
        }
        if (node.left) {
            sum += 1;
            traverse(node.left, sum);
        }
        if (node.right) {
            traverse(node.right, sum);
            sum += 1;
        } 
        return sum;
    };

    return traverse(root, totalSum);
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }