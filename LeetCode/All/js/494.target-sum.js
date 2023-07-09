/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var findTargetSumWays = function(nums, target) {
//     let count = 0;
//     const ways = (sum, index) => {
//         if(target === sum && index === nums.length){
//             count++;
//             return;
//         }
//         if(target !== sum && index === nums.length){
//             return;
//         }

//         ways(sum + nums[index], index + 1);
//         ways(sum - nums[index], index + 1);
//     }

//     ways(0,0);
//     return count;
// };


// dp - optimized using memo
var findTargetSumWays = function(nums, target) {
    const memo = new Map();
    function dfs(i, sum) {
        const key = `${i},${sum}`;
        if (memo.has(key)) return memo.get(key);
        if (i === nums.length) return sum === target ? 1 : 0;
        const add = dfs(i + 1, sum + nums[i]);
        const sub = dfs(i + 1, sum - nums[i]);
        const count = add + sub;
        memo.set(key, count);
        return count;
    }
    return dfs(0, 0);
};
