/*
    Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
    (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

    You are given a target value to search. If found in the array return its index, otherwise return -1.
    You may assume no duplicate exists in the array.
    Your algorithm's runtime complexity must be in the order of O(log n).

    Example 1:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4

    Example 2:
    Input: nums = [4,5,6,7,0,1,2], target = 3
    Output: -1

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // find rotation point
    const rotationIndex = findRotationPoint(nums,0,nums.length-1);
    if(rotationIndex === -1)
        return binarySearch(nums,target,0,nums.length-1);
    else if(nums[rotationIndex]===target)
        return rotationIndex;
    else if(nums[0] <= target)
        return binarySearch(nums,target,0,rotationIndex-1);
    else
        return binarySearch(nums,target,rotationIndex+1,nums.length-1);
};

const findRotationPoint = (nums,beg,end)=>{
    if(beg > end)
        return -1;
    if(beg === end)
        return beg;

    mid = parseInt((beg+end)/2);
    if(mid < end && nums[mid] > nums[mid+1])
        return mid;
    if(mid > beg && nums[mid] < nums[mid-1])
        return mid-1;
    if(nums[mid] <= nums[beg])
        return findRotationPoint(nums,beg,mid-1);
    return findRotationPoint(nums,mid+1,end);
}

const binarySearch = (nums,target,beg,end)=>{
    if(beg > end)
        return -1;
    mid = Math.floor((beg+end)/2);
    if(nums[mid]===target)
        return mid;
    else if(target > nums[mid])
        return binarySearch(nums,target,mid+1,end);
    else
        return binarySearch(nums,target,beg,mid-1);
}