/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let beg = 0, end = nums.length - 1;

    while(beg <= end){
        let mid = Math.floor((beg + end)/2);

        if(nums[mid] === target){
            return mid;
        }

        // left side
        if(nums[beg] <= nums[mid]){
            if(target <= nums[mid] && target >= nums[beg]){
                end = mid - 1;
            }
            else {
                beg = mid + 1;
            }
        }
        else{
            if(target >= nums[mid] && target <= nums[end]){
                beg = mid + 1;
            }
            else{
                end = mid - 1;
            }
        }
    }

    return -1;
};

/*
	// second option

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
*/
