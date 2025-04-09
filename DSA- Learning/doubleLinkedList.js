// Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const currentHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.head = currentHead.next;
    this.head.prev = null;
    currentHead.next = null;
    this.length--;
    return currentHead;
  }
}

let list = new DoublyLinkedList();

list.push(99);
list.push(100);
list.push(200);

console.log(list);
console.log(list.pop());
console.log(list.shift());
