/*
    Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

    Example 1:

    Input:nums = [1,1,1], k = 2
    Output: 2


    Constraints:

    The length of the array is in range [1, 20,000].
    The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = {};
    map[0]=1;
    let count = 0;
    let i=0;j=0,sum=0,sumLeft = 0;
    for(;i<nums.length;i++){
        sum+=nums[i];
        if(map[sum-k]!=null){
            count += map[sum-k];
        }
        map[sum] = map[sum]!=null ? map[sum]+1 : 1;
    }
    return count;
};