function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = arr[min];
      arr[min] = arr[i];
      arr[i] = tmp;
    }
  }
}

let arr = [4, 8, 7, 1, 3];
sort(arr);
console.log(arr);
