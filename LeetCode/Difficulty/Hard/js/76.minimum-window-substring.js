/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length === 0)
        return "";
    if(s===t){
        return s;
    }
    let l = 0;
    let r = 0;
    let map = {};
    let window = {};
    let need = t.length;
    let have = 0;
    
    for(let ch of t){
        if(ch in map){
            map[ch]++;
        }
        else{
            map[ch] = 1;
        }
    }

    let max = Infinity;
    let res = [-1, -1];
    while(r < s.length){
        let ch = s[r];
        if(ch in window){
            window[ch]++
        }
        else {
            window[ch] = 1;
        }
        
        if(ch in map && window[ch] <= map[ch]){
            have++;
        }
        // console.log(map,window, have, need);
        while(have === need){
            // console.log({have,need});
            if(r - l + 1 < max){
                max = r - l + 1;
                res = [l,r];
            }
            
            let leftCh = s[l];
            window[leftCh]--;
            if(leftCh in map && window[leftCh] < map[leftCh]){
                have--;
            }
            l++;
        }
        r++;
    }
    return (max === Infinity) ? "" : s.slice(res[0],res[1] + 1);
};
