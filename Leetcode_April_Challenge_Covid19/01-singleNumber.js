/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
eg:
Input: [2,2,1]
Output: 1
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = (nums) => nums.reduce((a,b)=>a^b);