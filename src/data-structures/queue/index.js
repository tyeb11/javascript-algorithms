class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.front.next = newNode;
      this.front = newNode;
    } else {
      this.front = newNode;
      this.back = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.back = this.back.next;
    }
    this.size--;
    return this;
  }
  display() {
    let tmp = this.back;
    while (tmp) {
      console.log(tmp.value);
      tmp = tmp.next;
    }
  }
  reverse() {
    let tmp = this.back;
    this.back = this.front;
    this.front = tmp;
    let nextNode = null;
    let prvNode = null;
    for (let i = 0; i < this.size; i++) {
      nextNode = tmp.next;
      tmp.next = prvNode;
      prvNode = tmp;
      tmp = nextNode;
    }
    return this;
  }
}

let queue = new Queue();
