const makingAnagrams = (s1, s2) => {
    // let sortedS1 = s1.split("").sort().join("");
    // let sortedS2 = s2.split("").sort().join("");
    // console.log(sortedS1)
    // console.log(sortedS2)
    // let s1Length = s1.length;
    // let s2Length = s2.length;
    // let shorterString;
    // let longerString;
    // if(s1Length < s2Length) {
    //     shorterString = s1;
    //     longerString = s2;
    // } else {
    //     shorterString = s2
    //     longerString = s1
    // }
    // let counter = 0;
    // for(let i = 0; i < shorterString.length; i++) {
    //     if(longerString.includes(shorterString[i])) {
    //         validChar += shorterString[i];
    //     }
    // }
    // return (s1.length - validChar.length) + (s2.length - validChar.length)
    let s1Map = {};
    let s2Map = {};
    for(let char of s1) {
        if(s1Map[char]) {
            s1Map[char] += 1;
        } else {
            s1Map[char] = 1;
        }
    }
    for(let char of s2) {
        if(s2Map[char]) {
            s2Map[char] += 1;
        } else {
            s2Map[char] = 1;
        }
    }
    console.table([s1Map, s2Map]);
    let counter = 0;
    for (const key in s1Map) {
        if(s2Map[key]) {
            let diff = Math.abs(s1Map[key] - s2Map[key]);
            counter += diff;
        }
        if(!s2Map[key]) {
            counter += s1Map[key]
        }
    }
    for (const key in s2Map) {
        if(!s1Map[key]) {
            counter += s2Map[key]
        }
    }
    return counter;
}

console.log(makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa')); // Expected output: 19


// aaaaaaabddddeffhhjjjkkklnsssuuvv
// aaaaaaaaabdddddfffffhhhhijjkkkllllssssuvw
/*
┌─────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
│ (index) │ a │ b │ s │ d │ j │ k │ v │ u │ h │ e │ f │ n │ l │ i │ w │
├─────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
│    0    │ 7 │ 1 │ 3 │ 4 │ 3 │ 3 │ 2 │ 2 │ 2 │ 1 │ 2 │ 1 │ 1 │   │   │
│    1    │ 9 │ 1 │ 4 │ 5 │ 2 │ 3 │ 1 │ 1 │ 4 │   │ 5 │   │ 4 │ 1 │ 1 │
└─────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
            2       1   1   1       1   1   2   1   3   1   3   1   1
*/