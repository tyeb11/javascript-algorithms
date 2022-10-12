// function merge_Arrays(left_sub_array, right_sub_array) {
//   console.log("merge----", left_sub_array, right_sub_array);
//   let array = [];
//   while (left_sub_array.length && right_sub_array.length) {
//     if (left_sub_array[0] < right_sub_array[0]) {
//       array.push(left_sub_array.shift());
//     } else {
//       array.push(right_sub_array.shift());
//     }
//   }
//   return [...array, ...left_sub_array, ...right_sub_array];
// }
// function merge_sort(unsorted_Array) {
//   const middle_index = unsorted_Array.length / 2;
//   if (unsorted_Array.length < 2) {
//     return unsorted_Array;
//   }
//   const left_sub_array = unsorted_Array.splice(0, middle_index);
//   console.log("left", left_sub_array);
//   console.log("right", unsorted_Array);
//   return merge_Arrays(merge_sort(left_sub_array), merge_sort(unsorted_Array));
// }
// unsorted_Array = [39, 28, 44, 4, 10, 83, 11];
// console.log("The sorted array will be: ", merge_sort(unsorted_Array));

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
