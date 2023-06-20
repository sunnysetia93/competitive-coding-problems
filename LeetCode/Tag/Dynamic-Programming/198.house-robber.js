/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, index = 0, memo = {}) {
    if(memo[index] != null){
        return memo[index];
    }
    if(nums.length <= index){
        return 0;
    };

    const sumIfSkipped = rob(nums, index+1,memo);
    const sumIfRobbed = nums[index] + rob(nums, index+2,memo);

    memo[index] = Math.max(sumIfSkipped, sumIfRobbed);
    return memo[index];
};


// https://leetcode.com/problems/house-robber/solutions/1491888/javascript-from-noob-to-pro/
// // O(n) time | O(n) space
// var rob = function(nums) {
//     const table = new Array(nums.length + 2);
    
//     table[nums.length + 0] = 0;
//     table[nums.length + 1] = 0;
    
//     for (let i = nums.length - 1; i >= 0; i--) {
//         const sumIfSkipped = table[i + 1];
//         const sumIfRobbed = nums[i] + table[i + 2];
        
//         table[i] = Math.max(sumIfSkipped, sumIfRobbed);
//     }
    
//     return table[0];
// }
