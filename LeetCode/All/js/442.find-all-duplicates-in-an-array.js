/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // assign negative values to positions
var findDuplicates = function(nums) {
    if(nums.length <= 1) return [];
    const result = new Set();
    for(let n of nums){
        const index = Math.abs(n);
        if (nums[index] < 0){
            result.add(index);
        }
        nums[index] = nums[index] ? -nums[index] : -Infinity;

    }
    return Array.from(result);
};
