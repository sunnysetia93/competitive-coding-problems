/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let dp = {};
    let lenLIS = 0, countLIS = 0;

    for(let i=nums.length - 1; i >=0;i--){
        let maxLen = 1, maxCount = 1;
        
        for(j=i+1;j<nums.length;j++){
            if(nums[j] > nums[i]){
                let [length, count] = dp[j];
                if((length + 1) > maxLen){
                    maxLen = length + 1;
                    maxCount = count;
                }
                else if(length + 1 === maxLen) {
                    maxCount += count; 
                }
            }
        }
        dp[i] = [maxLen, maxCount];
        // global length and count
        if((maxLen) > lenLIS){
            lenLIS = maxLen;
            countLIS = maxCount;
        }
        else if(maxLen === lenLIS) {
            countLIS += maxCount; 
        }

    }

    return countLIS;
};
