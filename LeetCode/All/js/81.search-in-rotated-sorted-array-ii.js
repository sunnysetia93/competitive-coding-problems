/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let beg = 0, end = nums.length - 1;

    while(beg <= end){
        let mid = Math.floor((beg+end)/2);

        if(nums[mid] === target){
            return true;
        } // duplicates
        else if(nums[beg] === nums[mid] && nums[end] === nums[mid]){
            beg++;
            end--;
        }
        else if(nums[beg] <= nums[mid]) { // first half is ordered - result will be here
            if(target >= nums[beg] && target < nums[mid]){
                end = mid - 1;
            }
            else {
                beg = mid + 1;
            }
        }
        else { // second half is ordered - result will be here
            if(target > nums[mid] && target <= nums[end]){
                beg = mid + 1;
            }
            else{
                end = mid - 1;
            }
        }
    }
    return false;
};
