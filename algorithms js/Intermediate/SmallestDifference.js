// Write a function that takes in two non-empty arrrays of integers, finds the pair of numbers 
// (one from each array) whose absolute difference is closest to zero, and returns an array
// containing these two numbers, with the number from the first array in the first postion. 

// Note, the absolute difference of -5 and 5 is 10. The absolute difference of -5 and -4 is 1.

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let indexOne = 0;
    let indexTwo = 0;
    let smallestSUm = Infinity;
    let currSmallestSUm = Infinity;
    let smallestPair = [];

    while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
        let firstNum = arrayOne[indexOne];
        let secondNum = arrayTwo[indexTwo];

        if (firstNum < secondNum) {
            currSmallestSum = secondNum - firstNum;
            indexOne += 1;
        } else if (firstNum > secondNUm) {
            currSmallestNum = firstNum - secondNum;
            indexTwo += 1;
        } else {
            return [firstNum, secondNum];
        }
        if (currSmallestSum < smallestSum) {
            smallestSum = currSmallestSum;
            smallestPair = [firstNum, secondNum];
        }
    }
    return smallestPair; 
};
