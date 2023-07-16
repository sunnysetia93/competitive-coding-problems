/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if(nums.length === 1){
        return nums[0];
    }

    var helpRob = function(arr, index = 0, memo = {}) {
        if(memo[index] != null){
            return memo[index];
        }
        if(arr.length <= index){
            return 0;
        };

        const sumIfSkipped = helpRob(arr, index+1,memo);
        const sumIfRobbed = arr[index] + helpRob(arr, index+2,memo);

        memo[index] = Math.max(sumIfSkipped, sumIfRobbed);
        return memo[index];
    };

    let skippedFirstIndex = nums.slice(1);
    let skippedLastIndex = nums.slice(0,nums.length - 1);

    return Math.max(helpRob(skippedFirstIndex), helpRob(skippedLastIndex));

};
