const hackerrankInString = (s) => {
    let hackerrank = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k'];
    // let sArr = s.split("");
    // console.log(sArr);
    for (let i = s.length; i >= 0; i--) {
        if(hackerrank[hackerrank.length - 1] === (s[i])) {
            hackerrank.pop();
        }
    }
    console.log(hackerrank);
    if(!hackerrank.length) {
        return "YES"
    }
    return "NO"
}

console.log(hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt')); // Expected output: NO