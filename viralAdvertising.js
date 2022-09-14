const viralAdvertising = (n) => {
    let cumulativeLikes = 2;
    let totalShared = 5;
    let likes = 2;
    for(let i = 2; i <= n; i++) {
        totalShared = likes * 3;
        cumulativeLikes = cumulativeLikes + Math.floor(totalShared / 2);
        likes = Math.floor(totalShared / 2)
    }
    return cumulativeLikes;
}

console.log(viralAdvertising(3)); // Expected output: 9
