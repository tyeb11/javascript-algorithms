class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  shift() {
    this.head = this.head.next;
    return this;
  }
  prepend(value) {
    let newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    return this;
  }
  deleteTail() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return this;
    }
    let tmp = this.head;
    let prvNode = null;
    while (tmp.next) {
      prvNode = tmp;
      tmp = tmp.next;
    }
    prvNode.next = null;
    this.tail = prvNode;
    return this;
  }
  insert(value, index) {
    if (index == 0) {
      this.prepend(value);
      return this;
    } else {
      let;
    }
  }
  reverse() {
    let tmp = this.head;
    this.head = this.tail;
    this.tail = tmp;
    let nextNode = null;
    let prvNode = null;
    while (tmp) {
      nextNode = tmp.next;
      tmp.next = prvNode;
      prvNode = tmp;
      tmp = nextNode;
    }
  }
  display() {
    let tmp = this.head;
    while (tmp) {
      console.log(tmp.value);
      tmp = tmp.next;
    }
  }
}

let linkedList = new LinkedList();
