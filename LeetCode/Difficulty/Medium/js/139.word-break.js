/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, memo={}) {
    if(memo[s] != null) return memo[s];
    if(s.length <= 0){
        return true;
    }
    for(let i=0;i<wordDict.length;i++){
        if(s.indexOf(wordDict[i]) === 0){
            let updatedString = s.replace(wordDict[i],'');
            if(updatedString === s) 
                continue;
            let checkResult = wordBreak(updatedString,wordDict, memo);
            if(checkResult === true){
                memo[s] = true;
                return true;
            }
        }
    }
    memo[s] = false;
    return false;
};
