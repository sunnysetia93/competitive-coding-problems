/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let freq = {};
    let letter = '';
    let max = 0;

    for(let ch of s){
        if(ch in freq){
            freq[ch]++;
        }
        else{
            freq[ch] = 1;
        }

        if(freq[ch] > max){
            letter = ch;
            max = freq[ch];
        }
    }


    if(max > (s.length + 1)/2)
        return "";
    
    // max occuring character to be added at even positions
    let index = 0;
    let result = new Array(s.length);
    while(index < result.length && freq[letter] > 0){
        result[index] = letter;
        freq[letter]--;
        index+=2;
    }

    const entries = Object.entries(freq);
    for(let i=0;i<entries.length;i++){
        let [ch,count] = entries[i];
        while(count > 0){
            if(index >= result.length){
                index = 1;
            }
            result[index] = ch;
            count--;
            index+=2;
        }
    }
    return result.join('');
};
