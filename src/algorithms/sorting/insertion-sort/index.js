function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let k = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > k) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = k;
  }
}

let arr = [4, 8, 7, 1, 3];
sort(arr);
console.log(arr);
