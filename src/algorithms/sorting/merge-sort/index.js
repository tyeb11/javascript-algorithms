function merge(left_array, right_array) {
  let tmp = [];
  while (left_array.length && right_array.length) {
    if (left_array[0] >= right_array[0]) {
      tmp.push(right_array.shift());
    } else {
      tmp.push(left_array.shift());
    }
  }
  return [...tmp, ...left_array, ...right_array];
}

function sort(array) {
  let mid = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  let left_array = array.splice(0, mid);
  return merge(sort(left_array), sort(array));
}

let arr = [5, 1, 9, 8, 2];
console.log("unsorted---", arr);
console.log("sorted---", sort(arr));
