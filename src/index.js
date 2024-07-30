module.exports = function toReadable (number) {
    const ones = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    const tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }; 
    const stringNumber = String(number);

    let firstSign = stringNumber[0];
    let middleSign = stringNumber[1];
    let lastSign = stringNumber.charAt(stringNumber.length - 1);
    let lastSigns = stringNumber.slice(1);

    let hundreds = `${ones[firstSign]} ${'hundred'}`
    let dozens = lastSigns % 10 === 0 ? `${tens[middleSign]}` : `${tens[middleSign]} ${ones[lastSign]}`;
    let oneToNineteen = middleSign === '0' ? ones[lastSign] : ones[lastSigns];

    if (number < 20) {
        return ones[number];
    } else if (number < 100 && number % 10 === 0) {
        return tens[firstSign];
    } else if (number < 100 && number % 10 !== 0) {
        return `${tens[firstSign]} ${ones[lastSign]}`;
    } else if (number < 1000 && number % 100 === 0) {
        return hundreds;
    } else if (number < 1000 && number % 100 !== 0) {
        return `${hundreds} ${oneToNineteen || dozens}`;
    }
}
