const closestNumbers = (arr) => {
    // Sort the array by value in ascending order
    arr.sort((a, b) => a - b);
    let diffs = [];
    for(let i = 0; i < arr.length; i++) {
        if(i === arr.length - 1) {
            break;
        }
        diffs.push(arr[i + 1] - arr[i]);
    }
    let minDiff = Math.min(...diffs);
    let allPairs = [];
    for(let j = 0; j < arr.length; j++) {
        if((arr[j + 1] - arr[j]) === minDiff) {
            allPairs.push(arr[j], arr[j + 1])
        }
    }
    return allPairs;
}

console.log(closestNumbers([5, 4, 3, 2, 1])); // Expected output: [1, 2, 2, 3, 3, 4, 4, 5]