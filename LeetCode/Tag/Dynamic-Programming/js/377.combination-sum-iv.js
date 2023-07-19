/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = new Array(target+1).fill(0);
    dp[0] = 1;

    for(let total = 1; total <= target; total++){
        dp[total] = 0;
        for(let n of nums){
            dp[total] += dp[total - n] ? dp[total - n] : 0;
        }
    }

    return dp[target];
};
