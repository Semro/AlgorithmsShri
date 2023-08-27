// https://ru.wikipedia.org/wiki/Сортировка_слиянием

const merge = (a, b) => {
  const c = [];

  while (a.length > 0 && b.length > 0) {
    if (a[0] <= b[0]) {
      c.push(a.shift());
    } else {
      c.push(b.shift());
    }
  }

  while (a.length > 0) {
    c.push(a.shift());
  }

  while (b.length > 0) {
    c.push(b.shift());
  }

  return c;
};

export function mergeSort(arr) {
  const n = Math.floor(arr.length / 2);

  if (arr.length === 1) return arr;

  const a = mergeSort(arr.slice(0, n));
  const b = mergeSort(arr.slice(n, arr.length));

  return merge(a, b);
}
