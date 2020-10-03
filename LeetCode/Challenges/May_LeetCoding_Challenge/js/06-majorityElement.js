/*
    Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
    You may assume that the array is non-empty and the majority element always exist in the array.

    Example 1:
        Input: [3,2,3]
        Output: 3

    Example 2:
        Input: [2,2,1,1,1,2,2]
        Output: 2
* */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = (nums) => {
    let i=0;
    const arrLen = nums.length;
    const majoritySize = arrLen/2;
    const hashObj = {};
    while(i<arrLen){
        const ele = nums[i];
        hashObj[ele] = hashObj[ele]==null ? 1 : (hashObj[ele] + 1);
        i++;
    }
    const hashArray = Object.entries(hashObj);
    for(const [key,value] of hashArray){
        if(value > majoritySize)
            return key;
    }
};