/*
* Given an integer array nums, find the contiguous subarray (containing at least one number)
* which has the largest sum and return its sum.

* Example:
    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
* Follow up:
    If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
* */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let i = 0, max = Number.MIN_SAFE_INTEGER, prevVal = 0;
    const len = nums.length;
    for (; i < len; i++) {
        prevVal = Math.max(nums[i] + prevVal, nums[i]);
        max = Math.max(prevVal, max);
    }
    return max;
};

/*
 prevValue => for tracking last subarray having max sum and compares with new value, to check for max between the two.
 (
     if it accepts new subarray element - includes it by adding the new value
     or
     if it rejects it then starts a new subarray with new previous value
 )

 max => tracks overall max found till now.
* */

/*
* DRY RUN for above example:

initial prevVal 0
initial max -9007199254740991
-----------------
comparsion for (prev val + new value) or just new value => -2 + 0 = -2 or -2
new prevVal -2
new max -2
-
comparsion for (prev val + new value) or just new value => 1 + -2 = -1 or 1
new prevVal 1
new max 1
-
comparsion for (prev val + new value) or just new value => -3 + 1 = -2 or -3
new prevVal -2
new max 1
-
comparsion for (prev val + new value) or just new value => 4 + -2 = 2 or 4
new prevVal 4
new max 4
-
comparsion for (prev val + new value) or just new value => -1 + 4 = 3 or -1
new prevVal 3
new max 4
-
comparsion for (prev val + new value) or just new value => 2 + 3 = 5 or 2
new prevVal 5
new max 5
-
comparsion for (prev val + new value) or just new value => 1 + 5 = 6 or 1
new prevVal 6
new max 6
-
comparsion for (prev val + new value) or just new value => -5 + 6 = 1 or -5
new prevVal 1
new max 6
-
comparsion for (prev val + new value) or just new value => 4 + 1 = 5 or 4
new prevVal 5
new max 6
-
* FINAL MAX => 6
* */