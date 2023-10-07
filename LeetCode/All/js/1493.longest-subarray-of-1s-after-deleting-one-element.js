/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0, right = 0;
    let zeroCount = 0;
    let max = 0;
    while(right < nums.length){
        if(nums[right] === 0){
            zeroCount++;
        }
        while(zeroCount > 1){ // move from left until you find another good window
            if(nums[left] === 0){
                zeroCount--;
            }
            left++;
        }
        max = Math.max(max, right - left);
        right++;
    }

    return max;
};
