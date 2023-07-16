/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const dp = new Array(s.length).fill(null).map(x => {return new Array(s.length).fill(false)});
    let count = 0;
    // gap => diagonal gap
    for(let gap = 0; gap < s.length; gap++){
        let i = 0; // every upper diagonal starts from first row 0
        let j = gap; 

        while(j < dp.length) { // till last column (diagonally)
            if(gap === 0){
                dp[i][j] = true;
            }
            else if(gap === 1){
                
                dp[i][j] = (s[i] === s[j]); // only two length string - so just check both if equal therefore palindrome
            }
            else {
                if(s[i] === s[j] && dp[i+1][j-1] === true) { // bccb => s[i] = s[j] = b and for remaining middle string (cc) check dp[i+1][j-1]
                    dp[i][j] = true;
                }
                else {
                    dp[i][j] = false;
                }
            }

            if(dp[i][j]){
                count++;
            }
            i++; 
            j++;
        }
    }

    return count;
};
