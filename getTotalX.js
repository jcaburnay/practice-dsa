const getTotalX = (a, b) => {
    let maxElemA = Math.max(...a);
    let maxElemB = Math.max(...b);
    let valid = 0;
    for(let i = maxElemA; i <= maxElemB; i++) {
        if(b.every(elem => elem % i === 0) && a.every(elem => i % elem === 0)) {
            valid++;
        }
    }
    return valid;
}

// console.log(getTotalX([2, 6], [24, 36])); // 2
console.log(getTotalX([3, 9, 6], [36, 72])); // 2
// console.log(getTotalX([1], [100])); // 3
