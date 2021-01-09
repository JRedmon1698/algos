const binarySearch = (array, target) => {
  let max = array[array.length - 1];
  let min = array[0];
  let mid = Math.floor((min + max) / 2);

  while (mid !== target && min < max) {
    if (target < mid) {
      max = mid -1;
    } else if (target > mid) {
      min = mid + 1;
    }
    mid = Math.floor((min + max) / 2);
  }
  return mid === target ? array.indexOf(mid) : -1;
};
