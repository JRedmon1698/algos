// Write a function that takes in a string of lowercase letters and returns
// the index of the string's first non-repeating character. 

// If the input string does not have any non-repeating characters the function
// should return -1.

const firstNonRepeatingCharacter = (string) => {
    let charMap = {};

    [...string].forEach((char, i) => {
      if (charMap[char] === undefined) {
        charMap[char] = [0, i];
      } else {
        charMap[char][0] += 1;
      }
    });

    for (char in charMap) {
      if (charMap[char][0] === 0) {
        return charMap[char][1];
      }
    }
      
    return -1;
};
