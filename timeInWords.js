function timeInWords(h, m) {
    // Write your code here
    let minsInHr = 60;
    let hWords = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve' 
    };
    let mWords = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'quarter',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        21: 'twenty one',
        22: 'twenty two',
        23: 'twenty three',
        24: 'twenty four',
        25: 'twenty five',
        26: 'twenty six',
        27: 'twenty seven',
        28: 'twenty eight',
        29: 'twenty nine',
        30: 'half',
        45: 'quarter'
        // 31: 'sever',
        // 32: 'eight',
        // 33: 'nine',
        // 34: 'ten',
        // 35: 'eleven',
        // 36: 'twelve',
        // 37: 'one',
        // 38: 'two',
        // 39: 'three',
        // 40: 'four',
        // 41: 'five',
        // 42: 'six',
        // 43: 'sever',
        // 44: 'eight',
        // 45: 'quarter',
        // 46: 'ten',
        // 47: 'eleven',
        // 48: 'twelve',
        // 49: 'two',
        // 50: 'three',
        // 51: 'four',
        // 52: 'five',
        // 53: 'six',
        // 54: 'sever',
        // 55: 'eight',
        // 56: 'nine',
        // 57: 'ten',
        // 58: 'eleven',
        // 59: 'twelve',
    }
    if(m === 00) {
        return `${hWords[h]} o' clock`
    }
    if(m < 30 && m !== 15) {
        return `${mWords[m]} ${m === 1 ? 'minute' : 'minutes'} past ${hWords[h]}`
    }
    if(m === 15 || m === 30) {
        return `${mWords[m]} past ${hWords[h]}`
    }
    if(m === 45) {
        return `${mWords[45]} to ${hWords[h + 1]}`
    }
    let minDiff = minsInHr - m;
    return `${mWords[minDiff]} ${minDiff === 1 ? 'minute' : 'minutes'} to ${hWords[h + 1]}`
}

console.log(timeInWords(5, 59));