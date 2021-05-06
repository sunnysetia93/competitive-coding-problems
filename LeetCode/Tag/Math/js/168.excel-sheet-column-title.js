/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const divisor = 26;
    let dividend = columnNumber;
    let finalStr = '';
    while (dividend > 0) {

        let q = Math.floor(dividend / divisor);
        let rem = dividend % divisor;

        if (rem === 0) {
            rem = 26;
            q = q - 1;
        }
        finalStr = alphabet[rem - 1] + finalStr;
        dividend = q;
    }

    return finalStr;

};
