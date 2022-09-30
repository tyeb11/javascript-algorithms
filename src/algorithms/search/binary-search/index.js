class BinarySearch {
  constructor() {
    this.arr = [1, 2, 3, 4, 5];
  }
  search(value) {
    let startIndex = 0;
    let endIndex = this.arr.length - 1;
    while (startIndex <= endIndex) {
      const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
      if (value == this.arr[middleIndex]) {
        return middleIndex;
      }
      if (value < this.arr[middleIndex]) {
        endIndex = middleIndex - 1;
      } else {
        startIndex = middleIndex + 1;
      }
    }
    return "no element found";
  }
  make(arr) {
    if (Array.isArray(arr)) {
      this.arr = arr;
      return;
    }
    return "please provide array as a parameter";
  }
}

let binarySearch = new BinarySearch();
