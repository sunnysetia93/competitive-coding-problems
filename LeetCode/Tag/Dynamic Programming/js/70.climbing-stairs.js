/**
 * Link: https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const arr = [1,2];

    const totalWays = countWays(n,arr);
    return totalWays;
};

const countWays = (target,arr,memo={})=>{
    if(target in memo) return memo[target];
    if(target === 0) return 1;
    if(target < 0) return null;

    let totalCount = 0;
    for(let num of arr){
        const rem = target - num;
        const response = countWays(rem,arr,memo);
        if(response!==null){
            totalCount += response;
            memo[target] = totalCount;
        }
    }

    memo[target] = totalCount;
    return totalCount;
}