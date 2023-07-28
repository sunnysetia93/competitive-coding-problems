/**
 * @param {number[]} nums
 * @return {number}
 */
 // sol 1: sort and find the smallest positive starting from 1 - O(nlogn)
 // sol 2: insert in hashmap and check from 1 to len(nums) - return if no in hashmap - space issues O(n)

// sol 3: use existing array as memory
var firstMissingPositive = function(nums) {
    //make negative values to zero
    for(let i=0;i<nums.length;i++){
        if(nums[i] < 0){
            nums[i] = 0;
        }
    }

    for(let i=0; i< nums.length;i++){
        let value = Math.abs(nums[i]);
        if(value >= 1 && value <= nums.length){
            if(nums[value - 1] > 0){
                nums[value - 1] *= -1;
            }
            else if(nums[value - 1] === 0){
                nums[value - 1] = -1 * (nums.length + 1)
            }
        }
    }
    for(let i=1; i <= nums.length; i++){
        if(nums[i-1] >= 0){
            return i;
        }
    }

    return nums.length + 1;

};
