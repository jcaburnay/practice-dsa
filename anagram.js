const anagram = s => {
    if(!Number.isInteger(s.length / 2)) {
        return -1;
    }
    let mid = s.length / 2;
    let s1 = s.slice(0, mid).split("").sort().join("");
    let s2 = s.slice(mid).split("").sort().join("");
    let s2Obj = {};
    for(let c of s2) {
        if(s2Obj[c]) {
            s2Obj[c] += 1;
        } else {
            s2Obj[c] = 1;
        }
    }
    for(let c of s1) {
        if(s2Obj[c]) {
            s2Obj[c] -= 1;
        }
    }
    return Object.values(s2Obj).reduce((acc, curr) => acc + curr, 0);
}

console.log(anagram('hhpddlnnsjfoyxpciioigvjqzfbpllssuj')); // Expected output: 10