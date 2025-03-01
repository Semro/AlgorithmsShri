// https://sortvisualizer.com/insertionsort/
// https://en.wikipedia.org/wiki/Insertion_sort

// function swap(arr, i, k) {
//   let temp = arr[i];
//   arr[i] = arr[k];
//   arr[k] = temp;
// }

function swap(arr, i, k) {
  [arr[i], arr[k]] = [arr[k], arr[i]];
}

export function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let k = i;

    while (k >= 0 && arr[k] > arr[k + 1]) {
      swap(arr, k, k + 1);
      k--;
    }
  }

  return arr;
}
