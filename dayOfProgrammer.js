const dayOfProgrammer = year => {
    let days = [31, 28, 31, 30, 31, 30, 31, 31];
    let dayOfTheProgrammer = 256;
    if(year === 1918) {
        dayOfTheProgrammer += 13;
        let sumDays = days.reduce((acc, curr) => acc + curr, 0);
        let diffDays = dayOfTheProgrammer - sumDays;
        return `${diffDays}.09.${year}`;
    }
    let isDivisibleBy400 = year % 400 === 0;
    let isDivisibleBy4ButNot100 = year % 4 === 0 && year % 100 !== 0;
    if((year < 1918 && year % 4 === 0) || (isDivisibleBy400 || isDivisibleBy4ButNot100)) {
        days[1] = 29;
        let sumDays = days.reduce((acc, curr) => acc + curr, 0);
        let diffDays = dayOfTheProgrammer - sumDays;
        return `${diffDays}.09.${year}`;
    }
    let sumDays = days.reduce((acc, curr) => acc + curr, 0);
    let diffDays = dayOfTheProgrammer - sumDays;
    return `${diffDays}.09.${year}`;
}

console.log(dayOfProgrammer(1918)); // 12.09.1800
