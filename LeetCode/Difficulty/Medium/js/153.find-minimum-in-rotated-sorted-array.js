/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let beg = 0, end = nums.length - 1;
    while(beg < end){
        let mid = Math.floor((beg+end)/2);
        if(nums[mid] > nums[end]){ 
            beg = mid + 1; //right side has smaller elements
        }
        else{ //nums[mid] <= nums[end] 
            end = mid;
        }
    }
    return nums[beg];
};

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/158940/beat-100-very-simple-python-very-detailed-explanation/
