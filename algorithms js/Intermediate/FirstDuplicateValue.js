// Given an array of integers between 1 and navigator, inclusive, where n
// is the legnth of the array, write a function that returns the first
// integer that appears more than once (when the array is read from left 
// to right).

// In other words, out of all the integers that might occur more than once in the
// input array, your function should return the one whose first duplicate value
// has the minimum index.

// If no integer appears more than oncuechange, your function should return -1.

// Note that you are allowed to mutate the input array.

const firstDuplicateValue = (array) => {
    const valMap = {};
	
	if (array.length < 2) {
        return -1;
    }

  for (let i = 0; i < array.length; i++) {
    if (valMap[array[i]] === undefined) {
      valMap[array[i]] = 0;
    } else {
      valMap[array[i]]++;
    }

    for (val in valMap) {
      if (valMap[val] > 0) {
        return parseInt(val);
      }
    }
  }
	for (val in valMap) {
    if (valMap[val] < 1) {
      return -1;
    }
  }
};
