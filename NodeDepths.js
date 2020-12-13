// The distance between a node in a Binary Tree and the tree's root is called the node's depth.

// Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

function nodeDepths(root) {

    const traverse = (node, runningSum) => {
        if (!node.left && !node.right) {
            return runningSum;
        }
        
        return runningSum;
    };

    return traverse(root, 0);
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }