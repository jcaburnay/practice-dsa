const beautifulTriplets = (d, arr) => {
    let allTriplets = [];
    for(let digit of arr) {
        let validTriplets = [];
        for(let num of arr) {
            let i = digit;
            let j = digit + d;
            let k = digit + 2 * d;
            if(j === num) {
                validTriplets.push(i, j);
            }
            if(k === num) {
                validTriplets.push(k)
            }
        }
        if(validTriplets.length !== 3) {
            continue;
        }
        allTriplets.push(validTriplets);
    }
    return allTriplets.length;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10])); // Expected output: 3