class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.bottom) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      this.bottom = newNode;
      this.top = newNode;
    }
    this.size++;
    return this;
  }
  pop() {
    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.size--;
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
