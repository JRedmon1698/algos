function bubbleSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let k = 0; k < array.length; k += 1) {
      if (array[k] > array[k + 1]) {
        let compared = array[k];
        array[k] = array[k + 1];
        array[k + 1] = compared;
      }
    }
  }
  return array;
}