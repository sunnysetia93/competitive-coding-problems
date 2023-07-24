/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0, sum = 0, minSum = 0;

    while(right < nums.length){
        sum += nums[right];

        while(sum >= target){ // as soon as sum becomes greater than equal to target - start decreasing the window from left
            let len = right - left + 1;
            if(minSum === 0 || len < minSum) {
                minSum = len;
            }
            sum -= nums[left];
            left++;
        }
        right++;
    }

    return minSum;
};
