/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length <= 1){
        return 0;
    }
    let n = nums.length;
    if(nums[0] > nums[1]) return 0;
    if(nums[n-1] > nums[n-2]) return n-1;

    let beg = 0, end = nums.length - 1;

    while(beg <= end){
        let mid = Math.floor((beg+end)/2);

        if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]){
            return mid;
        }
        else if(nums[mid - 1] > nums[mid]){
            end = mid - 1;
        }
        else{
            beg = mid + 1;
        }
    }
};

// https://leetcode.com/problems/find-peak-element/solutions/1290642/intuition-behind-conditions-complete-explanation-diagram-binary-search/
