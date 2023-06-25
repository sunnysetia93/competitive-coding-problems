/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const ways = findWays(s);

    function findWays(s, memo={}){
        if(memo[s]!=null){
            return memo[s];
        } 
        if(s.length === 0)
            return 1;
        if(s[0]==='0')
            return 0;

        // split between first and rest
        const afterSplit = findWays(s.substring(1),memo)
        // split between first two chars and rest if first two chars are in range
        const withoutSplit = ( ((s[0] + s[1]) >= 1) && ((s[0] + s[1]) <= 26)) ? findWays(s.substring(2),memo) : 0;

        memo[s] = afterSplit + withoutSplit;
        return memo[s];
    }

    return ways;
};
