/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProd = nums[0];
    let curMax = nums[0], curMin = nums[0];

    for(let i=1;i<nums.length;i++){
        let n = nums[i];

        let tempNewMax = curMax * n; // storing this for curMin, as we are recalculating curMax which can create problems for curMin
        curMax = Math.max(curMax * n, curMin * n, n);
        curMin = Math.min(tempNewMax, curMin * n, n);
        maxProd = Math.max(curMax, maxProd);
    }
    return maxProd;
};
