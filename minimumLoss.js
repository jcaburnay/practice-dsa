const minimumLoss = (price) => {
    // let minimums = [];
    // for(let i = 0; i < price.length; i++) {
    //     for(let j = i + 1; j <= price.length - i; j++) {
    //         let diff = price[i] - price[j];
    //         if(diff > 0) {
    //             minimums.push(diff);
    //         }
    //     }
    // }
    // return Math.min(...minimums);
    let minimumArr = [];
    price.map((elem, idx, arr) => {
        minimumArr.push(elem - arr[idx + 1]);
        return elem;
    })
    
}

// console.log(minimumLoss([5, 10, 3])); // Expected output: 2 -> 5 - 3
console.log(minimumLoss([20, 7, 8, 2, 5])); // Expected output: 2 -> 7 - 5