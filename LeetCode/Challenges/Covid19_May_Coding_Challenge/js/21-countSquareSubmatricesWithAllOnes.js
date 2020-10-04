/*
    Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

    Example 1:
        Input: matrix =
        [
          [0,1,1,1],
          [1,1,1,1],
          [0,1,1,1]
        ]
        Output: 15
        Explanation:
        There are 10 squares of side 1.
        There are 4 squares of side 2.
        There is  1 square of side 3.
        Total number of squares = 10 + 4 + 1 = 15.

    Example 2:
        Input: matrix =
        [
          [1,0,1],
          [1,1,0],
          [1,1,0]
        ]
        Output: 7
        Explanation:
        There are 6 squares of side 1.
        There is 1 square of side 2.
        Total number of squares = 6 + 1 = 7.

    Constraints:
        1 <= arr.length <= 300
        1 <= arr[0].length <= 300
        0 <= arr[i][j] <= 1
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
let countSquares = (A) => {
    let rows = A.length
        ,cols = A[0].length
        ,cnt = 0;
    let dp = [...Array(rows + 1)].map(row => Array(cols + 1).fill(0));
    for (let i = 1; i <= rows; ++i)
        for (let j = 1; j <= cols; ++j)
            if (A[i - 1][j - 1]===1)
                cnt += dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
    return cnt;
};