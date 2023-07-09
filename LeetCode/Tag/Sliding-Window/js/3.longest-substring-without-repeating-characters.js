/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let l = 0, r=0;
    let set = new Set();
    for(;r < s.length; r++){
        const ch = s[r];
        while(set.has(ch)){
            set.delete(s[l]);
            l++;
        }
        set.add(ch);
        res = Math.max(res, r - l + 1);
    }
    return res;
};
