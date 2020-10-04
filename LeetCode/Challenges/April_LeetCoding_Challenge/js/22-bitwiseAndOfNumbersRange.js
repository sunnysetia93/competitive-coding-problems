/*
    Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

    Example 1:
        Input: [5,7]
        Output: 4

    Example 2:
        Input: [0,1]
        Output: 0
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (x, y) {
    let res = 0;

    while (x > 0 && y > 0) {

        let msb_p1 = msbPos(x);
        let msb_p2 = msbPos(y);

        if (msb_p1 != msb_p2)
            break;

        let msb_val = (1 << msb_p1);
        res = res + msb_val;

        x = x - msb_val;
        y = y - msb_val;
    }
    return res;
};

function msbPos(n) {

    let msb_p = -1;
    while (n > 0) {
        n = n >> 1;
        msb_p++;
    }

    return msb_p;
}