const functionName = (prices, k) => {
    prices.sort((a, b) => a - b);
    let sum = 0;
    let counter = 0;
    let i = 0;
    while(sum <= k) {
        sum += prices[i];
        if(sum > k) {
            sum -= prices[i];
            break;
        }
        i++;
        counter++;
    }
    return counter;
}

console.log(functionName([1, 2, 3, 4], 7)); // Expected output: 3