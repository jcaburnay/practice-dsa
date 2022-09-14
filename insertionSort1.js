const functionName = (n, arr) => {
    for(let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
    
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            console.log(arr.join(" "));
        }
        arr[j + 1] = key;
    }
    console.log(arr.join(" "))
}

functionName(5, [1, 2, 4, 5, 3]); // Expected output: 
// [1, 2, 4, 5, 5]
// [1, 2, 4, 4, 5]
// [1, 2, 3, 4, 5]