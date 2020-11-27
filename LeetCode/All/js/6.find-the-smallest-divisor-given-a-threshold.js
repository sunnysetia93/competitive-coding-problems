/**
 * URL: https://leetcode.com/explore/featured/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3521/
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let l = 1, r = nums[nums.length-1],m;

    function getSum(divisor){
        let sum = 0;
        nums.forEach((val)=>{
            sum += Math.ceil(val/divisor);
        },0);
        return sum<=threshold;
    }

    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (getSum(m)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
};

