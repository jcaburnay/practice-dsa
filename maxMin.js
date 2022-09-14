const maxMin = (k, arr) => {
    let minDiff = Math.abs(arr[0] - arr[1]);
    let elements = [];
    for(let i = 1; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length - i; j++) {
            let currentDiff = Math.abs(arr[i] - arr[j]);
            if(currentDiff < minDiff) {
                minDiff = currentDiff;
                elements = [arr[i], arr[j]]
            }
        }
    }
    return elements;
}

console.log(maxMin(2, [1, 4, 7, 2])); // Expected output: [1, 2]