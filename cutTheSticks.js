const cutTheSticks = (arr) => {
    // Each iteration, we deduct the value of the lowest/shortest stick to each element of the 
    // array. For example:
    // arr = [5, 4, 4, 2, 2, 8]
    // First iteration, we have 2 as the shortest value,
    // so we have 6 elements and after deducting the value 2 to the array, we have
    // [3, 2, 2, 0, 0, 6] so we disregard zeroes, and we only consider non-zero values, so in the
    // second iteration, we have 4 elements and after determining the shortest stick in the array
    // [3, 2, 2, 6] which is 2, we deduct the value 2 to each element of the array
    // [1, 0, 0, 4] disregarding zero values again, we have 2 element in the third iteration
    // [1, 4] and shortest ---> 1 
    // [0, 3] and 1 element in the 4th iteration
    // [3] shortest ---> 3 so in the last iteration we have 3 - 3
    let answer = [];
    while(arr.length > 0) {
        let shortest = Math.min(...arr);
        answer.push(arr.length);
        let newArray = [];
        for(let i = 0; i < arr.length; i++) {
            newArray.push(arr[i] - shortest);
        }
        let filteredArr = newArray.filter(elem => elem > 0);
        arr = filteredArr;
    }
    return answer;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8])); // Expected output: [6, 4, 2, 1]