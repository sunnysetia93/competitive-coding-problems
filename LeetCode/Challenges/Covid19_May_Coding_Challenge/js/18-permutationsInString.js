/*
    Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1.
    In other words, one of the first string's permutations is the substring of the second string.

    Example 1:
        Input: s1 = "ab" s2 = "eidbaooo"
        Output: True
        Explanation: s2 contains one permutation of s1 ("ba").

    Example 2:
        Input:s1= "ab" s2 = "eidboaoo"
        Output: False

    Note:

        The input strings only contain lower case letters.
        The length of both given strings is in range [1, 10,000].
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const primes = {a:2,b:3,c:5,d:7,e:11,f:13,g:17,h:19,i:23,j:29,
    k:31,l:37,m:41,n:43,o:47,p:53,q:59,r:61,s:67,t:71,u:73,v:79,
    w:83,x:89,y:97,z:101};

var checkInclusion = function(s1, s2) {
    let sum1=0;
    s1.split("").forEach(ch=>{
        sum1+=primes[ch]*primes[ch]
    });
    let i=0;len=s2.length;
    let size = s1.length;
    let prevSum=0;
    for(;i<=len-size;i++){
        let sum2=0;
        if(i===0){
            for(let j=i;j<size;j++){
                sum2+=primes[s2.charAt(j)]*primes[s2.charAt(j)];
            }
        }
        else{
            sum2 = prevSum - primes[s2.charAt(i-1)]*primes[s2.charAt(i-1)] + primes[s2.charAt(i+size-1)]*primes[s2.charAt(i+size-1)]
        }
        prevSum = sum2;
        if(sum1===sum2)
            return true;
    }
    return false;
};