const drawingBook = (n, p) => {
    let totalTurnFromFront = Math.floor(n / 2);
    let targetPageCountFromFront = Math.floor(p / 2);
    let targetPageCountFromBack = totalTurnFromFront - targetPageCountFromFront;
    return Math.min(targetPageCountFromFront, targetPageCountFromBack);
}

console.log(drawingBook(6, 2)); // 1
