function isValidSubsequence(array, sequence) {
    let arrayObj = {};
    for (let i = 0; i < array.length; i += 1) {
        if (arrayObj[array[i]] === undefined) {
            arrayObj[array[i]] = array[i];
        }
    }
    for (let k = 0; k < sequence.length; k += 1) {
        console.log(sequence[k]);
        if (arrayObj[sequence[k]] === undefined) {
            return false;
        }
    }
    // elem in subseq must be in same order 
    // as they appear in orig array
    return true;
}

const testArray = [5, 1, 22, 25, 6, -1, 8, 10];
const testSequennce = [1, 6, -1, 10];

isValidSubsequence(testArray, testSequennce);
