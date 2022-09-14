const getMoneySpent = (keyboards, drives, b) => {
    let prices = [-1];
    for(let keyboardPrice of keyboards) {
        for(let drivePrice of drives) {
            let totalPrice = keyboardPrice + drivePrice;
            if(totalPrice <= b) {
                prices.push(totalPrice);
            }
        }
    }
    return Math.max(...prices);
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // 9
