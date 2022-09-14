const functionName = (params) => {
    let sArr = params.split("");
    let i = 0;
    while(sArr.length > i) {
        if(sArr[i] === sArr[i+1]) {
            sArr.splice(i, 2);
            i = 0;
            continue;
        }
        i++;
    }
    if(!sArr.length) {
        return "Empty String"
    }
    return sArr.join("");
}

console.log(functionName('aba')); // Expected output: 'Empty String'