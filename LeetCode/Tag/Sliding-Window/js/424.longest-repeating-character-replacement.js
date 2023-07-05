/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let res = 0;
    let map = {};
    let l=0, r = 0; // left and right of a window
    for(;r<s.length;r++){
        const ch = s[r];
        if(map[ch] != null){
            map[ch]++;
        }
        else{
            map[ch] = 1;
        }
        
        const maxFreq = Math.max(...Object.values(map));

        while((r - l + 1 - maxFreq) > k){ // cases where more characters are to be swapped between the current window(l to r) -> shorten the window from left and decrement the characters count - do it until you find another good window.
            map[s[l]]--;
            l++;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};
