/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const dp = new Array(s.length).fill(null).map(x => new Array(s.length).fill(false));
    let answer = '';
    for(let gap=0; gap < s.length; gap++){
        let i = 0;
        let j = gap;
        for(; j < dp.length; j++, i++){
            if(gap === 0){
                dp[i][j] = true;
            }
            else if(gap === 1){
                if(s[i] === s[j]){
                    dp[i][j] = true
                }
                else {
                    dp[i][j] = false;
                }
            }
            else {
                if(s[i] === s[j] && dp[i+1][j-1]){
                    dp[i][j] = true;
                }
                else {
                    dp[i][j] = false;
                }
            }

            if(dp[i][j]){
                answer = s.slice(i,j+1);
            }
        }
    }
    return answer;
};
