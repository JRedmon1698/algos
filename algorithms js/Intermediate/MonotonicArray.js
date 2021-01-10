// Write a function that takes in an array of integers and returns a boolean representing whether 
// the array is monotonic.

// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing 
// or entirely non-decreasing. 

// Non-increasing and non-decreaisng elements aren't necessarily exclusively decreasing and increasing, respectively. 

// Note that empty arrays and arrays of one element are monotonic. 

function isMonotonic(array) {
  if (array.lenght < 2) {
    return true;
  }

  let direction = array[1] - array[0];

  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
    }
    if (breaksDirection(direcction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
};


const breaksDirection = (direction, prevInt, currInt) => {
  const diff = currInt - prevInt;
  if (direction > 0) {
    return diff < 0;
  }
  return diff > 0;
};
