// Write a function tha takes in an array of at least three integers and, without sorting the input array, 
// returns a sorted array of the three largest numbers in the input array. 

// The function should return duplicate integers if necessary; for example, it should return 
// [10, 10, 12] for an inout array of [10, 5, 9, 10, 12].

function findThreeLargestNumbers(array) {
  let resultArray = [];

  while (resultArray.length < 3) {
    let largest = -Infinity;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
    let largestIndex = array.indexOf(largest);
    resultArray.push(array.splice(largestIndex, 1)[0]);
  }
  return resultArray.sort((a, b) => a - b);
};
