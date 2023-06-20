/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let beg = 0, end = nums.length-1;
  let mid;
  while(beg <= end){
    mid = Math.floor((end+beg)/2);
    if(nums[mid] === target)
      return mid;
    else if(nums[mid] > target){
      end = mid-1;
    }
    else{
      beg = mid+1;
    }
  }
  return -1;
};
