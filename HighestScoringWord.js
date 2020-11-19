// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


const highest = (str) => {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  let letterObj = {};
  let letterPoints = 1;
  let totalPoints = 0;
  let highestScoringWord = {};

  for (let i = 0; i < alph.length; i += 1) {
    letterObj[alph[i]] = letterPoints;
    letterPoints += 1;
  }
  
  let splitString = str.split(' ');

  for (let i = 0; i < splitString.length; i += 1) {
    for (let k = 0; k < splitString[i].length; k += 1) {
      totalPoints += letterObj[splitString[i][k]];
      highestScoringWord[splitString[i]] = totalPoints;
      }
      totalPoints = 0;
    
  }
  
  let mostPoints = 0;
  let result = '';
  for (const word in highestScoringWord) {
    if (highestScoringWord[word] > mostPoints) {
      mostPoints = highestScoringWord[word];
      result = word;
    }
  }
  return result;
};