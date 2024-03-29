
// write a function that takes in a non-empty array of integers that are sorted in ascending order
// and returns a new array of the same length with the squares of the original integers also sorted
// in ascending order

const sortedSquaredArray = (array) => {
    return array.map(num => num**2).sort((a, b) => a - b);
};
