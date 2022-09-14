function toys(w) {
  // Write your code here
  w.sort((a, b) => a - b);
  let countContainer = 1;
  let currentPointer = w[0]
  for (let i = 1; i < w.length; i++) {
    let diff = Math.abs(currentPointer - w[i]);
    if(diff > 4) {
        countContainer++;
        currentPointer = w[i];
    }
  }
  return countContainer;
}

console.log(toys([1, 2, 3, 21, 7, 12, 14, 21])); // Expected output: 4
