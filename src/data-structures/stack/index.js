class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.top) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      this.top = newNode;
    }
    this.size++;
    return this;
  }
  pop() {
    if (this.top === null) {
      return this;
    }
    this.top = this.top.next;
    this.size--;
    return this;
  }
  reverce() {
    let tmp = this.top;
    let nextNode = null;
    let prvNode = null;
    for (let i = 0; i < this.size; i++) {
      nextNode = tmp.next;
      tmp.next = prvNode;
      prvNode = tmp;
      tmp = nextNode;
    }
    this.top = prvNode;
    return this;
  }
  display() {
    let tmp = this.top;
    while (tmp) {
      console.log(tmp.value);
      tmp = tmp.next;
    }
  }
}

let stack = new Stack();
