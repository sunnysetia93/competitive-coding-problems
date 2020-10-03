/*
    Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
    You have the following 3 operations permitted on a word:

    Insert a character
    Delete a character
    Replace a character

    Example 1:
        Input: word1 = "horse", word2 = "ros"
        Output: 3
        Explanation:
        horse -> rorse (replace 'h' with 'r')
        rorse -> rose (remove 'r')
        rose -> ros (remove 'e')

    Example 2:
        Input: word1 = "intention", word2 = "execution"
        Output: 5
        Explanation:
        intention -> inention (remove 't')
        inention -> enention (replace 'i' with 'e')
        enention -> exention (replace 'n' with 'x')
        exention -> exection (replace 'n' with 'c')
        exection -> execution (insert 'u')
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function(word1, word2) {
    let dp = Array(word1.length+1).fill(null).map(()=>(Array(word2.length+1).fill(0)));

    for (let i=0;i<dp.length;i++) {
        dp[i][0] = i
    }

    for (let i=0;i<dp[0].length;i++) {
        dp[0][i] = i
    }

    for (let i = 1;i<dp.length;i++) {
        for (let j=1;j<dp[0].length;j++) {
            dp[i][j] = Math.min(
                dp[i-1][j]+1, // left
                dp[i][j-1]+1, // right
                dp[i-1][j-1] + (word1[i-1]!=word2[j-1]?1:0) // diagonal
            );
        }
    }
    return dp[dp.length-1][dp[0].length-1];
};