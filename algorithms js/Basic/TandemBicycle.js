
// A tandem bicycle is a bicycle that's operated by two people: person A and
// person B. Both people pedal the bicycle, but the person that pedals faster
// dictates the speed of the bicycle. So if person A pedals at a speed of 5
// and person B pedals at a speed of 4, the bicycle moves at a speed of 5.

// You're given two lists of positive integers: one that contains the speeds of
// riders wearing red shirts and one that contains the speeds of riders wearing
// blue shirts. Each rider is represented by a single positive integer, which is
// the speed that they pedal a tandem bicycle at. Both lists have the same
// length, meaning that there are as many red-shirt riders as there are
// blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a
// rider wearing a blue shirt to operate a tandem bicycle.

// Write a function that returns the maximum possible total speed or the minimum
// possible total speed of all of the tandem bicycles being ridden based on an
// input parameter, fastest. If fastest is true your
// function should return the maximum possible total speed; otherwise it should
// return the minimum total speed where "Total speed" is defined as the sum of 
// the speeds of all the tandem bicycles being ridden.

const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
    redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b);
  
    let totalSpeed = 0;
    while (redShirtSpeeds.length) {
      if (fastest) {
        totalSpeed += Math.max(redShirtSpeeds[redShirtSpeeds.length - 1], blueShirtSpeeds[0]);
        redShirtSpeeds.pop();
      } else {
        totalSpeed += Math.max(redShirtSpeeds[0], blueShirtSpeeds[0]);
        redShirtSpeeds.shift();
      }
        blueShirtSpeeds.shift();
    }
    
    return totalSpeed;
  };
