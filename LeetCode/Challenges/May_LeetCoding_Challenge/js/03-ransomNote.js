/**
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines ;
 * otherwise, it will return false.
 * Each letter in the magazine string can only be used once in your ransom note.
 *
 * Note:
    You may assume that both strings contain only lowercase letters.

     canConstruct("a", "b") -> false
     canConstruct("aa", "ab") -> false
     canConstruct("aa", "aab") -> true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomObj = {};
    ransomNote.split("").map((ch)=>{
        if(ransomObj[ch]==null)
            ransomObj[ch]=1;
        else
            ransomObj[ch]+=1;
    });

    magazine.split("").map((ch)=>{
        if(ransomObj[ch])
            ransomObj[ch]-=1;
    });

    for(const val of Object.values(ransomObj)){
        if(val!==0)
            return false;
    }
    return true;
};