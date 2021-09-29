class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
        if (value < this.value) {
           if (!this.left) {
               this.left = new BST(value);
           } else {
               this.left.insert(value);
           }
        }

        if (value >= this.value) {
            if (!this.right) {
                this.right = new BST(value);;
            } else {
                this.right.insert(value);
            }
        }

      return this;
    }
  
    contains(value) {
        if (this.value === value) return true;

        if (this.value < value) {
            if (this.right) {
                return contains(this.right);
            }
        }

        if (this.value > value) {
            if (this.left) {
                return this.contains(this.left);
            }
        }

        return false;
    }
  
    remove(value) {

      return this;
    }
  }

  const tree = new BST(5);
  console.log(tree);
  console.log(tree.contains(5));
  console.log(tree.insert(3));
  console.log(tree.insert(6));
  console.log(tree.insert(5));
//   console.log(tree.remove());
//   console.log(tree);