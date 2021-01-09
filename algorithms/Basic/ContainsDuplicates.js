// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {

  let numTracker = {};
  let container = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (numTracker[nums[i]] === undefined) {
      numTracker[nums[i]] = 1;
    } else {
      numTracker[nums[i]] += 1;
    }
  }
  for (let nums in numTracker) {
    if (numTracker[nums] > 1) {
      container.push(nums);
    }
  }
  if (container.length > 0) {
    return true;
  }
  return false;
};


const containsDuplicates = (nums) => {
  let numTracker = {};

  for (let i = 0; i < nums.length; i++) {
    if (numTracker[nums[i]] === undefined) {
      numTracker[nums[i]] = 1;
    } else {
      numTracker[nums[i]]++;
    }
  }
  for (let num in numTracker) {
    if (numTracker[num] > 1) {
      return true;
    } else {
      return false;
    }
  }
};
