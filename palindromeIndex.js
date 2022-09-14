const palindromeIndex = (s) => {
    // let idx = 0;
    // for(let i = 0; i < s.length; i++) {
    //     let sArr = s.split("");
    //     sArr.splice(i, 1);
    //     let modifiedS = sArr.join("");
    //     let reverseModifiedS = modifiedS.split("").reverse().join("");
    //     let isPalindrome = modifiedS === reverseModifiedS;
    //     if(isPalindrome) {
    //         idx = i;
    //         return idx;
    //     }
    // }
    // let idx = 0;
    /**
        ** Important info is highlighhted
        *! Deprecated method 

     */
    let sArr = s.split("");
    for(let i = 0; i < s.length / 2; i++) {
        let frontChar = sArr.shift();
        let backChar = sArr.pop();
        if(frontChar !== backChar) {
            return i;
        }
    }
    return -1;
}

console.log(palindromeIndex('aaab')); // Expected output: 3