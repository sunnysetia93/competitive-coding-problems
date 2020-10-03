/*
    Given a m x n grid filled with non-negative numbers,
    find a path from top left to bottom right which minimizes the sum of all numbers along its path.

    Note: You can only move either down or right at any point in time.

    Example:
        Input:
        [
          [1,3,1],
          [1,5,1],
          [4,2,1]
        ]
        Output: 7

    Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const maxVal = Number.MAX_SAFE_INTEGER;
    const dp = [];
    let rows = grid.length;
    let cols = grid[0].length;
    let i=0,j=0;
    for(;i<rows;i++){
        dp.push([]);
    }
    for(i=0;i<rows;i++){
        for(j=0;j<cols;j++){
            if(i===0 && j===0)
                dp[i][j]=grid[i][j];
            else
                dp[i][j] = grid[i][j] + Math.min((i===0?maxVal:dp[i-1][j]),(j===0?maxVal:dp[i][j-1]))
        }
    }
    return dp[rows-1][cols-1];
};