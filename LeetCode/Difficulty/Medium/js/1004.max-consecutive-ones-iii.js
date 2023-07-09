/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0, right = 0;

    while(right < nums.length){
        if(nums[right] === 0){
            k--;
        }
        
        // all k replacements done
        if(k < 0){
            if(nums[left] === 0) 
                k++; // since left part is 0 and we will be move doing left++, so there have one more replacement(k) with us now which we can use later.
            left++;
        }

        right++;
    }

    return right - left;
};i
