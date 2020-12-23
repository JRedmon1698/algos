// Write a function that takes in a "special" array and returns its product sum.

// A "special" array is a non-empty array that contains either integers or other "special" arrays. The product
// sum of a "special" array is the sum of its elements, where "special" arrays inside it are summed
// themselves and then multiuplied by their level of depth.

// The depth of a "special" array is how far nested it is. For instance, the depth of [] is 1. The depth of
// the inner array in [[]] is 2. Etc. 

// Therefore, the product sum of [x, y] is x + y. The product sum of [x, [y, z]] is
// x + 2 * (y + z). The product sum of [x, [y, [z]]] is x + 2 * (y + 3z).

const sampleInput = [5, 2, [7, -1], 3, [, [-13, 8], 4]];
// calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4) ==> 12

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
  // Write your code here.
};
