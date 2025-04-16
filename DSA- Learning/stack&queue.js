class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var currentFirst = this.first;

      this.first = newNode;
      newNode.next = currentFirst;
    }

    return ++this.size;
  }
}

let list = new Stack();
console.log(list.push(100));
console.log(list.push(200));
console.log(list.push(300));
