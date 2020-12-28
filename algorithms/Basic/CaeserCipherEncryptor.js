// Given a non-empty strign of lowercase letters and a non-negative integer representing a key, write a function
// that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, 
// where k is the key. 

// Note: "z" should wrap to "a"

function caesarCipherEncryptor(string, key) {
  let resultString = '';
  key = key % 26;
  for (let i = 0; i < string.length; i += 1) {
    let uniCode = string.charCodeAt(i);
    let newUniCode = uniCode + key;
    if (newUniCode > 122) {
      newUniCode -= 26;
    }
    resultString += String.fromCharCode(newUniCode);
  }
  return resultString;
};
