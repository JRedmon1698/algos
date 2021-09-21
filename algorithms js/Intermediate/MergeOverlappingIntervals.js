
// Write a function that takes in a non-empty array of arbitrary intervals,
// merges any overlapping intervals, and returns the new intervals in no
// particular order.

// Each interval is an array of 2 integers with interval[0] as the start of
// the interval and interval[1] as the end of the interval.

// Note that back-to-back intervals aren't considered to be overlapping. For
// example, [1, 5] and [6, 7] aren't overlapping but [1, 6] and [6, 7] are
// overlapping.

// Also note that the start of any particular interval will always be less
// than or equal to the end of that interval.

const mergeOverlappingIntervals = (array) => {
    array.sort((a, b) => a[0] - b[0]);

    const finalMerged = [];

    let currTuple = array[0];
    finalMerged.push(currTuple);

    for (const nextTuple of array) {
        const [currTupleMin, currTupleMax] = currTuple;
        const [nextTupleMin, nextTupleMax] = nextTuple;

        if (currTupleMax >= nextTupleMin) {
            currTuple[1] = Math.max(currTupleMax, nextTupleMax);
        } else {
            currTuple = nextTuple;
            finalMerged.push(currTuple);
        }
    }
    return finalMerged;
};
