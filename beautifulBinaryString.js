const beautifulBinaryString = b => {
    /**
     * * Problem: Alice has a binary string. She thinks a binary string is beautiful if and only if it doesn't contain the substring '010'. In one step, Alice can change a '0' to a '1' or vice versa. 
     * TODO: Count and print the minimum number of steps needed to make Alice see the string as beautiful.
     * Example: b = '010' -> Flip any bit to satisfy the condition. Print 1
     */
    
    let count = 0;
    let i = 0;
    let bArr = b.split("");
    while(i < bArr.length) {
        if(bArr[i] === '0' && bArr[i + 1] === '1' && bArr[i + 2] === '0') {
            count++;
            i += 3;
            // bArr.slice(i, i + 3);
        } else {
            i++;
        }
    }
    return count;
}

console.log(beautifulBinaryString('0100101010')); // Expected output: 3