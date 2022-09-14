const flippingBits = n => {
    let bitStr = n.toString(2);
    let zeroes = '0'.repeat(32 - bitStr.length);
    bitStr = `${zeroes}${bitStr}`;
    let flippedBitStr = ''
    for(let char of bitStr) {
        if(char === '0') {
            flippedBitStr += '1';
        } else {
            flippedBitStr += '0';
        }
    }
    return parseInt(flippedBitStr, 2);
}

console.log(flippingBits(9)); // Expected output: 