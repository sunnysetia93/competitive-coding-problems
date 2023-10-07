/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a,b)=>a+b,0);
    if(sum%2 !== 0) // if odd sum then cannot be split into two equal sets
        return false; 
    const target = sum/2; // each set will have sum/2 

    const dfs = (sum = 0, index = 0, memo = {}) => {
        let key = `${index}_${sum}`;
        if(index > nums.length){
            return false;
        }
        if(sum === target)
            return true;
        if(sum > target){
            return false;
        }
        if(key in memo){
            return memo[sum];
        }
        memo[key] = dfs(sum + nums[index],index + 1, memo) || dfs(sum, index + 1, memo);
        return memo[key];
    }

    return dfs();

};
