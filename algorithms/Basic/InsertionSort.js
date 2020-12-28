function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let start = i - 1;
    while (start >= 0 && array[start] > key) {
      array[start + 1] = array[start];
      start = start - 1;
    }
    array[start + 1] = key;
  }
  return array;
}
