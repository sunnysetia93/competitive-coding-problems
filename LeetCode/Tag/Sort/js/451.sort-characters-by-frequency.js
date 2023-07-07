/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freq = {};
    const bucket = new Array(s.length + 1);
    const result = []
    for(let ch of s){
        if(ch in freq){
            freq[ch]++;
        }
        else{
            freq[ch] = 1;
        }
    }
    const entries = Object.entries(freq);
    for(let [key,freq] of entries){
        if(bucket[freq] == null){
            bucket[freq] = [key];
        }
        else {
            bucket[freq].push(key)
        }
    }

    for(let i=bucket.length - 1; i>=0;i--){
        const obj = bucket[i];

        if(Array.isArray(obj)){
            while(obj.length){
                const ch = obj.pop();
                for(let rep = 0;rep<i;rep++)
                    result.push(ch);
            }
        }

    }

    return result.join('');
};
