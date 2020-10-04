/*
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

 * Note that after backspacing an empty text, the text will continue empty.

 * Example 1:
    Input: S = "ab#c", T = "ad#c"
    Output: true
    Explanation: Both S and T become "ac".

 * Example 2:
    Input: S = "ab##", T = "c#d#"
    Output: true
    Explanation: Both S and T become "".

 * Example 3:
    Input: S = "a##c", T = "#a#c"
    Output: true
    Explanation: Both S and T become "c".

 * Example 4:
    Input: S = "a#c", T = "b"
    Output: false
    Explanation: S becomes "c" while T becomes "b".

 * Note:

    1 <= S.length <= 200
    1 <= T.length <= 200
    S and T only contain lowercase letters and '#' characters.

 * Follow up:
    Can you solve it in O(N) time and O(1) space?
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = (S, T) => evaluateString(S) === evaluateString(T);

/**
 * @param {string} str
 * @return {string} modified_str
 */
const evaluateString = (str) => {
    const arr = str.split("");
    const len = arr.length;
    let i=len-1;
    let hashes = 0;

    for(;i>=0;i--){
        const ch = arr[i];
        if(ch === '#'){
            arr[i] = "";
            hashes++;
        }
        else{
            if(hashes > 0){
                arr[i] = "";
                hashes--;
            }
        }
    }
    return arr.join("");
}