// Write a function that takes in a non-empty array of distinct integers and an integer 
// target sum. The function should find all triplets in the array that sum up to the 
// target sum and return a two-dimensional array of all the triplets. The numbers in each 
// triplet should be ordered in ascending order, and the triplets themselves should be 
// ordered in ascending order with respect to the numbers they hold. 

// input ==> [12, 3, 1, 2, -6, 5, -8, 6], 0
// output ==> [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

function threeNumberSum(array, targetSum) {
    // sort input array smallest to largest 
    array = array.sort((a, b) => {
        return a - b;
        });
        return array;
    
    
};
