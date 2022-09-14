const jumpingOnClouds = c => {
    let i = 0;
    let len = c.length;
    let jumps = 0;
    while(i <= len) {
        if(c[i + 2] === 1) {
            i++;
            jumps++;
        } else {
            i += 2;
            jumps++;
        }
    }
    return jumps;

}

console.log(jumpingOnClouds([0, 0, 0, 1, 0])); // Expected output: 3