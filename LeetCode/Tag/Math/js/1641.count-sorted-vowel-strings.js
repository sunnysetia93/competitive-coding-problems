/**
 * @param {number} n
 * @return {number}
 *
 * Approach 1 - DP
 */
var countVowelStrings = function(n) {
    const words = ['a','e','i','o','u'];
    return countVowelsPossibleStrings();

    function countVowelsPossibleStrings(currWord='',memo={}){

        if(currWord.length === n) return 1;
        if(currWord in memo) return memo[currWord];

        let totalCount = 0;
        for(const ch of words){
            const lastChar = currWord.length === 0 ? 0 : currWord.charCodeAt(currWord.length - 1);
            const chValue = ch.charCodeAt(0);

            if(lastChar <= chValue){
                const newWord = currWord + ch;
                const numWays = countVowelsPossibleStrings(newWord,memo);
                totalCount += numWays;
            }
        }
        memo[currWord] = totalCount;
        return totalCount;

    }
};


/**
 * Approach 2 - using Maths - combinations
 * explanation - https://leetcode.com/problems/count-sorted-vowel-strings/discuss/918498/JavaC%2B%2BPython-DP-O(1)-Time-and-Space
 * */
var countVowelStrings = (n) => (((n+1) * (n+2) * (n+3) * (n+4))/24);
