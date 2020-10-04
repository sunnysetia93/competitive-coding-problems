/**
 * Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
 * Example 1:
     Input: 5
     Output: 2
     Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
 */
/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
    const mask = Math.pow(2, num.toString(2).length) - 1;
    return ~num & mask;
}