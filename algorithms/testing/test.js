const containsDuplicates = (arr) => {
    let numTracker = {};
    for (let i = 0; i < arr.length; i++) {
        if (numTracker[arr[i]] === undefined) {
            numTracker[arr[i]] = 1;
        }
        numTracker[arr[i]]++;
    }
    for (let key in numTracker) {
        if (numTracker[key] > 1) {
            return true;
        }
        return false;
    }
}

containsDuplicates([1, 2, 3, 2]);
containsDuplicates([1, 3, 2, 4]);
