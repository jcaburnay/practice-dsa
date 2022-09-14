const chocolateFeast = (n, c , m) => {
    let initialChocolates = n / c;
    let totalChocolates = initialChocolates;
    while(initialChocolates >= m) {
        let numberOfWrappers = initialChocolates;
        let additionalChocolates = Math.floor(numberOfWrappers / m);
        let remainingWrappers = initialChocolates % m;
        totalChocolates += additionalChocolates;
        initialChocolates = additionalChocolates + remainingWrappers;
    }
    return Math.floor(totalChocolates);
}

console.log(chocolateFeast(10, 2, 5)); // Expected output: 9

// Example:
// n = 10, c = 2, m = 5
// totalChoco = n / c = 10 / 2 = 5
// # of wrappers = 5 
// additional chocolates = # of wrappers / m = 5 / 5 = 1
// # of wrapper = 1
// Since # of wrappers is less than m (the number of wrappers that is equivalent to a single chocolate), then stop the process
// We have total # of chocolates = 5 + 1 = 6