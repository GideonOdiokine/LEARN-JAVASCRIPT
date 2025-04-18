class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}



// Pain in the ass way of creating a tree manually
// var tree = new BinarySearchTree();
// tree.root = new Node(10)
// tree.root.left = new Node(7);
// tree.root.right = new Node(15)
// tree.root.left.right = new Node(9)
