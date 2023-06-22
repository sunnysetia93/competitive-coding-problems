/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prod = 1, result = [];
    
    // product from left
    for(let i=0;i<nums.length;i++){
        result[i] = prod;
        prod *= nums[i];
    }

    prod = 1;
    // product from right - multiple
    for(let i=nums.length-1;i>=0;i--){
        result[i] *=prod;
        prod *= nums[i];
    }

    return result;
};
