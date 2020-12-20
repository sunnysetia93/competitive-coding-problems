/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => nums.map(x => Math.pow(x, 2)).sort((a, b) => a - b);