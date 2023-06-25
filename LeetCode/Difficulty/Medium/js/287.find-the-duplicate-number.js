/**
 * @param {number[]} nums
 * @return {number}
 */

// using -  negative values as numbers range from 1 -> n
var findDuplicate = function(nums) {
    for(let n of nums){
        const index = Math.abs(n);
        if(nums[index] < 0) { // detected
            return index;
        }
        nums[index] = -nums[index]; // make ever element at the position to be negative
    }
    return nums.length;
};

// using fast and slow pointer - treat array as linked list
var findDuplicateSlowFast = function(nums) {
    let slow = 0, fast = 0;
    do {
        slow = nums[slow]; // one step forward just like in LL
        fast = nums[nums[fast]]; // 2 step forward
    } while(slow != fast);

    console.log(nums[slow], nums[fast]);

    let temp = 0;
    while(slow != temp){
        slow = nums[slow];
        temp = nums[temp];
    }
    return temp;
};
