const start = performance.now();
function partitionHoare(arr, low, high) {
  /* const pivot = arr[Math.floor((low + high) / 2)]; */

  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let i = low - 1;
  let j = high + 1;

  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i >= j) {
      return j;
    }

    // Intercambia los elementos en las posiciones i y j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function quickSort(arr, low, high) {
  if (low < high) {
    const pivotIndex = partitionHoare(arr, low, high);

    quickSort(arr, low, pivotIndex);
    quickSort(arr, pivotIndex + 1, high);
  }
}

// Ejemplo de uso
const arr = [10, 30, 1, 25, 2, 12, 33, 50, 55, 3];

quickSort(arr, 0, arr.length - 1);
console.log("Arreglo ordenado:", arr);
console.log(`This took ${performance.now() - start} milliseconds to run`);
