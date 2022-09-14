const caeserCipher = (s, k) => {
    let cipherText = '';
    for(let char of s) {
        let asciiCode = char.charCodeAt(0);
        if(asciiCode >= 65 && asciiCode <= 90) {
            let codePlusRotation = asciiCode + k;
            if(codePlusRotation > 90) {
                codePlusRotation = asciiCode - (26 - k);
                cipherText += String.fromCharCode(codePlusRotation)
            } else {
                cipherText += String.fromCharCode(codePlusRotation)
            }
        } else if(asciiCode >= 97 && asciiCode <= 122) {
            let codePlusRotation = asciiCode + k;
            if(codePlusRotation > 122) {
                codePlusRotation = asciiCode - (26 - k);
                cipherText += String.fromCharCode(codePlusRotation)
            } else {
                cipherText += String.fromCharCode(codePlusRotation)
            }
        } else {
            cipherText += char
        }
    }
    return cipherText;
}

console.log(caeserCipher('www.abc.xy', 87)); 
// Expected output: cdefghijklmnopqrstuvwxyzab