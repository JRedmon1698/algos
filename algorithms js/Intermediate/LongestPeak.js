// Write a function that takes in an array of integers and returns the length of
// the longest peak in the array.


// A peak is defined as adjacent integers in the array that are strictly increasing
// until they reach a tip (the highest value in the peak), at which point they 
// become strictly decreasing. At least three integers are required to
// form a peak.

// For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, ,0, 10
// don't and neither do the integers 1, 2, 2, 0. Similarly, the integers 1, 2, 3
// don't form a peak because there aren't any strictly decreasing integers after
// the 3.

const longestPeak = (array) => {
    const peaks = {};

    for (let i = 0; i < array.length; i++) {
      if (array[i - 1] < array[i] && array[i + 1] < array[i]) {
        peaks[i] = 1;
      }
    }
  
      for (peak in peaks) {
        let peakIndex = parseInt(peak);

        for (let k = 0; k < array.length; k++) {
          let counter = 1;
          let current = array[peakIndex];

          if (array[peakIndex + counter] < current) {
            peaks[peak] += 1;
            current = array[peakIndex += counter];
          }
        }
      }
  
      for (peak in peaks) {
        let peakIndex = peak;

         for (let j = 0; j < array.length; j++) {
          let counter = 1;
          let current = array[peakIndex];

          if (array[peakIndex - counter] < current) {
            peaks[peak] += 1;
            current = array[peakIndex -= counter];
          }
        }
      }

    let longest = 0;
    for (peak in peaks) {
      if (peaks[peak] > longest) {
        longest = peaks[peak];
      }
    }
    return longest;
};
