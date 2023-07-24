/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let left = 0;
    let right = 0;
    let max = 0;
    let vowels = new Set(['a','e','i','o','u']);
    while(right < k){
        if(vowels.has(s[right])){
            max++;
        }
        right++;
    }
    left=1;
    let count = max;
    while(right < s.length){
        if(vowels.has(s[right])){
            count++;
        }
        if(vowels.has(s[left-1])){
            count--;
        }
        max = Math.max(count,max);
        if (max == k) return max;
        right++;
        left++;
        
    }

    return max;
};
