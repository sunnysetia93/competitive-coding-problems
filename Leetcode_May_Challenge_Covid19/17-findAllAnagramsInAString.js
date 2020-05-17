/*
    Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
    Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
    The order of output does not matter.

    Example 1:
        Input:
            s: "cbaebabacd" p: "abc"

        Output:
            [0, 6]

        Explanation:
            The substring with start index = 0 is "cba", which is an anagram of "abc".
            The substring with start index = 6 is "bac", which is an anagram of "abc".

    Example 2:
        Input:
            s: "abab" p: "ab"

        Output:
            [0, 1, 2]

        Explanation:
            The substring with start index = 0 is "ab", which is an anagram of "ab".
            The substring with start index = 1 is "ba", which is an anagram of "ab".
            The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const primes = [7, 67, 97, 19, 2, 83, 31, 59, 11, 53, 37, 23, 41, 3, 13, 73, 101, 17, 29, 5, 43, 47, 61, 79, 89, 71];
const start = 97;

var findAnagrams = function(s, p) {
    let prod=0;
    const output = [];
    p.split("").forEach((el,index)=>{
        let val = primes[p.charCodeAt(index)-start];
        prod+=val;
    });
    let i=0,len=s.length;
    let winStart = 0
        ,winEnd = p.length-1;
    let prevProd = 0;
    while(winEnd<len){
        let winProd = 0;
        if(winStart === 0){
            for(let j=0;j<=winEnd;j++){
                winProd += getPrimeVal(j);
            }
        }
        else{
            winProd = -(getPrimeVal(winStart-1))  + prevProd + getPrimeVal(winEnd);
        }
        if(winProd === prod)
            output.push(winStart);

        prevProd = winProd;
        winStart++;
        winEnd++;
    }
    return output;

    function getPrimeVal(ind){
        return primes[s.charCodeAt(ind)-start];
    }
};