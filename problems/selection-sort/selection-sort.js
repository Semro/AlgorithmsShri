// https://sortvisualizer.com/selectionsort/
// https://en.wikipedia.org/wiki/Selection_sort

function swap(arr, i, k) {
  [arr[i], arr[k]] = [arr[k], arr[i]];
}

export function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex;
    let k = i + 1;
    for (; k < arr.length; k++) {
      if (arr[k] < min) {
        minIndex = k;
        min = arr[k];
      }
    }
    if (minIndex !== undefined) swap(arr, i, minIndex);
  }

  return arr;
}
