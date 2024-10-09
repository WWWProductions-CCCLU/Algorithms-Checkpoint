// ------------------------- 1st Try
// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     // Pick the element to be inserted
//     let current = arr[i];
//     let j = i - 1;

//     // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = current;
//   }
//   return arr;
// }

// Example usage:
// let array = [5, 3, 6, 1, 4];
// console.log(insertionSort(array)); // Output: [1, 3, 4, 5, 6]

//------------------------- 2nd Try
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function sortArray() {
  let input = document.getElementById("arrayInput").value;
  let array = input.split(",").map(Number);
  let sortedArray = insertionSort(array);
  document.getElementById("sortedArray").innerText = sortedArray.join(", ");
}
