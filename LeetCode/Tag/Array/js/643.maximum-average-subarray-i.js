/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const len = nums.length;
    let sum=0;
    for(let i=0;i<k;i++){
        sum+=nums[i];
    }
    let maxSum = sum;
    for(let i=1;i<=len-k;i++){
        const newValue = nums[i+k-1] || 0;
        sum -= nums[i-1];
        sum += newValue;

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum/k;
};
