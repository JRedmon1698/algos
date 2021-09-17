//   Write a function that takes in a non-empty array of integers and returns an
//   array of the same length, where each element in the output array is equal to
//   the product of every other number in the input array.

//   In other words, the value at output[i] is equal to the product of every number
//   in the input array other than input[i].

//   Note that you're expected to solve this problem without using division. 

const arrayOfProducts = (array) => {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        let total = 1;
        for (let k = 0; k < array.length; k++) {
            if (i !== k) {
                total *= array[k];
            }
        }
        output.push(total);
    }

    return output;
};
