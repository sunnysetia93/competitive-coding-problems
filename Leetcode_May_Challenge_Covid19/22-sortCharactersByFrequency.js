/*
    Given a string, sort it in decreasing order based on the frequency of characters.

    Example 1:
        Input:
            "tree"
        Output:
            "eert"
        Explanation:
            'e' appears twice while 'r' and 't' both appear once.
            So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

    Example 2:
        Input:
            "cccaaa"

        Output:
            "cccaaa"
        Explanation:
            Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
            Note that "cacaca" is incorrect, as the same characters must be together.

    Example 3:
        Input:
            "Aabb"
        Output:
            "bbAa"
        Explanation:
            "bbaA" is also a valid answer, but "Aabb" is incorrect.
            Note that 'A' and 'a' are treated as two different characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const obj = {};
    for(let ch of s){
        if(obj[ch])
            obj[ch]+=1;
        else
            obj[ch]=1;
    }
    const inOrder = {};
    const entries = Object.entries(obj);
    for(const [key,value] of entries){
        if(inOrder[value]){
            inOrder[value]+=key;
        }
        else
            inOrder[value]=key;
    }
    const orderedKeys = Object.keys(inOrder).sort((a,b)=>{
        return Number(b) - Number(a);
    });
    let output = '';
    for(const i of orderedKeys){
        for(let k of inOrder[i]){
            for(let j=1;j<=i;j++){
                output+=k;
            }
        }
    }
    return output;
};