/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0, j = 1, count = 1, arrLen = nums.length;
    for (; j < arrLen; j++) {
        if (nums[i] === nums[j]) {
            if (count < 2) {
                i++;
                nums[i] = nums[j];
            }
            count++;
        } else {
            i++;
            nums[i] = nums[j];
            count = 1;
        }
    }
    return i + 1;
};