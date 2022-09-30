class LinearSearch {
  constructor() {
    this.arr = [3, 2, 8, 5, 1, 2, 7];
  }
  search(value) {
    const foundIndexes = [];
    this.arr.forEach((element, index) => {
      if (element == value) {
        foundIndexes.push(index);
      }
    });
    return foundIndexes;
  }
  make(arr) {
    if (Array.isArray(arr)) {
      this.arr = arr;
      return;
    }
    return "please provide array as a parameter";
  }
}

var linearSearch = new LinearSearch();
