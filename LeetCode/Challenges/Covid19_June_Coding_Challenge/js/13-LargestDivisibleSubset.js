/*
Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

Si % Sj = 0 or Sj % Si = 0.

If there are multiple solutions, return any subset is fine.

Example 1:

Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)
Example 2:

Input: [1,2,4,8]
Output: [1,2,4,8]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    if (nums.length < 2) {
        return nums;
    }
    nums.sort((o1, o2) => o1 - o2);
    let arr = Array(nums.length);
    arr[arr.length - 1] = [nums[nums.length - 1]];
    let max = [];
    for (let i = arr.length - 2; i >= 0; i--) {
        let c = [nums[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (nums[j] % nums[i] == 0 && 1 + arr[j].length > c.length) {
                c = [nums[i]].concat(arr[j]);
            }
        }
        arr[i] = c;
        if (max.length < c.length) {
            max = c;
        }
    }
    return max;
};