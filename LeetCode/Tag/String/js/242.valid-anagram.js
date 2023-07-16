/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sCount = {};
    for(let ch of s){
        sCount[ch] = sCount[ch] != null ? sCount[ch]+1 : 1;
    }
    for(let ch of t){
        if(sCount[ch] == null){
            return false;
        }
        else {
            let count = sCount[ch];
            if(--count < 0){
                return false;
            }
            sCount[ch] = count;
        }
    }

    for(let value of Object.values(sCount)){
        if(value > 0){
            return false;
        }
    }

    return true;

};
