/**
 * Hint: 11111 = 1111 * 10 + 1 We only need to store remainders modulo K.
 */
class Solution {
public:
    int smallestRepunitDivByK(int K) {
        if (K % 2 == 0) return -1;  // even K can't divide 111...1

        vector<bool> visitedRemainders (K, false);
        int len = 0, r = 0;
        while (!visitedRemainders[r]) {
            visitedRemainders[r] = true;
            r = (10*r + 1) % K;
            ++len;
        }
        return r == 0 ? len : -1;   // non-zero remainder visited again indicates a cycle
                                    // zero remainder indicates the desired multiple of K is found
    }
};