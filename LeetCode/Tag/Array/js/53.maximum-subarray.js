/**
 * @param {number[]} nums
 * @return {number}
 */
 // kind of sliding window approach
var maxSubArray = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let currSum = 0;

    for(let n of nums){
        if(currSum < 0){ // basically discard the previous sum as it becomes negative
            currSum = 0;
        }
        currSum += n;
        max = Math.max(max, currSum);
    }
    return max;
};
