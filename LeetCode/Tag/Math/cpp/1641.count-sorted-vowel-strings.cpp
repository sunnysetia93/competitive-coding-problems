/**
 * Explanation:
 * Our target is to insert 4 $'s in the string such that its length becomes n+4.
 * place a's before the 1st $
 * place e's before the 2nd $
 * place i's before the 3rd $
 * place o's before the 4th $
 * place u's before the 5th $
 * 
 * consider the problem of find the number of permutations of n+4 characters
 * in which n are of type A and 4 are of type B.
 * Ans = (n+4)! / (n! * 4!)
 */

class Solution {
public:
    int countVowelStrings(int n) {
        return (n+1) * (n+2) * (n+3) * (n+4) / (4*3*2*1);   //  (n + 4)! / (n! * 4!)
    }
};