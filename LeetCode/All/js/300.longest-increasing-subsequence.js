/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(0);
    let overallMax = 0;
    for(let i=0; i<dp.length; i++){
        let max = 0;
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                max = Math.max(dp[j], max);
            }
        }
        dp[i] = max + 1;

        overallMax = Math.max(overallMax, dp[i]);
    }

    return overallMax; // or Math.max(...dp)
};
