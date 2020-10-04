/*
    You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.
    Example 1:
        Input: amount = 5, coins = [1, 2, 5]
        Output: 4
        Explanation: there are four ways to make up the amount:
        5=5
        5=2+2+1
        5=2+1+1+1
        5=1+1+1+1+1

    Example 2:
        Input: amount = 3, coins = [2]
        Output: 0
        Explanation: the amount of 3 cannot be made up just with coins of 2.

    Example 3:
        Input: amount = 10, coins = [10]
        Output: 1

    Note:
        You can assume that
        0 <= amount <= 5000
        1 <= coin <= 5000
        the number of coins is less than 500
        the answer is guaranteed to fit into signed 32-bit integer
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const dp = new Array(coins.length + 1).fill(new Array(amount + 1).fill(0));
    let i,j;
    dp[0][0] = 1;
    for(i=1;i<(coins.length+1);i++){
        for(j=0;j<(amount+1);j++){
            let col = j-coins[i-1] >= 0 ? dp[i][j-coins[i-1]] : 0;
            dp[i][j] = dp[i-1][j] + col;
        }
    }
    return dp[coins.length][amount];
};