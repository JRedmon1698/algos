
// Given an array of coins, return the smallest amount of change you cannot make. 

const nonConstructibleChange = (coins) => {
    coins.sort((a, b) => a - b);
    
    let smallestChange = 0;
  
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] > smallestChange + 1) {
        return smallestChange + 1;
      }
      smallestChange += coins[i];
    }
    return smallestChange;
  };
  