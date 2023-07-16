/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, i = 0, j = 0, memo = {}) {
    let key = `${i}_${j}`;
    if(key in memo){
        return memo[key];
    }
    if(i === m - 1 && j == n - 1){
        return 1;
    }

    if(i >= m || j >= n) {
        return 0;
    }

    memo[key] = uniquePaths(m,n,i+1,j,memo) + uniquePaths(m,n,i,j+1,memo)
    return memo[key];
};
