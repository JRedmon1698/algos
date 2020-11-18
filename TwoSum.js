// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // initialize curr num variable to compare to ea. elem in arr
  // iterate through original array
  // if curr elem plus curr num var equals target
  // return index of curr num var and curr elem

  for (let i = 0; i < nums.length; i += 1) {
    for (let k = 1; k < nums.length; k += 1) {
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
     }
  }
};